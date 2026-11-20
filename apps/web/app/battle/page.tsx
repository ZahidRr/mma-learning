"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./battle.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Heart,
  Sparkles,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import {
  DEFAULT_REGION,
  getBattleBackground,
  getRegion,
  type SubjectKey,
} from "../lib/regions";
import {
  type AppLocale,
  getStoredLocale,
  UI_TEXT,
} from "../lib/i18n";

interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

interface Question {
  id: string;
  prompt: string;
  options: Option[];
}

interface SessionStats {
  id: string;
  userId: string;
  answeredQuestions: number;
  targetQuestions: number;
}

function BattlePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject") || "math";
  const subjectKey: SubjectKey = subject === "english" ? "english" : "math";

  const rawLessonId = searchParams.get("lessonId");
  const gradeParam = searchParams.get("grade");
  const parsedGradeParam = gradeParam ? Number(gradeParam) : NaN;
  const lessonGradeMatch = rawLessonId?.match(/^lesson_g(\d+)_/);
  const resolvedGrade = !Number.isNaN(parsedGradeParam)
    ? parsedGradeParam
    : lessonGradeMatch
      ? Number(lessonGradeMatch[1])
      : 1;
  const gradeLevel = Math.min(Math.max(resolvedGrade, 1), 6);

  const defaultLessonId =
    subjectKey === "english"
      ? `lesson_g${gradeLevel}_eng_01`
      : `lesson_g${gradeLevel}_math_01`;
  const lessonId = rawLessonId || defaultLessonId;

  const regionId = searchParams.get("regionId") || DEFAULT_REGION[subjectKey];
  const region = getRegion(regionId, gradeLevel);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const [locale] = useState<AppLocale>(() => getStoredLocale());
  const t = UI_TEXT[locale];

  const [userId] = useState<string | null>(() =>
    typeof window !== "undefined" ? window.localStorage.getItem("userId") : null,
  );
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [fetchingNext, setFetchingNext] = useState(false);

  const [sessionData, setSessionData] = useState<SessionStats | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const [currentDeliveryId, setCurrentDeliveryId] = useState<string | null>(null);
  const [correctOptionId, setCorrectOptionId] = useState<string | null>(null);

  const [regionName, setRegionName] = useState(region?.name ?? "Loading Adventure...");

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [lives, setLives] = useState(5);
  const [completed, setCompleted] = useState(false);
  const [totalXp, setTotalXp] = useState(0);

  const backgroundImage = getBattleBackground(regionId, subject);

  const playClickSound = () => {
    try {
      const audio = new Audio("/assets/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch {}
  };

  const playCorrectSound = () => {
    try {
      const audio = new Audio("/assets/sounds/correct.mp3");
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch {}
  };

  const playAbsoluteSound = () => {
    try {
      const audio = new Audio("/assets/sounds/absolute.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {});
    } catch {}
  };

  async function fetchNextQuestion(sessionId: string, activeLocale: AppLocale) {
    setFetchingNext(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/questions/lessons/${lessonId}/next?sessionId=${sessionId}&lang=${activeLocale}`,
      );
      if (!res.ok) throw new Error("Gagal menarik soal");

      const questionData = await res.json();
      const fetchedQuestion = questionData.question || questionData;

      let deliveryId = null;
      if (questionData.deliveryId) deliveryId = questionData.deliveryId;
      else if (questionData.id && questionData.question) deliveryId = questionData.id;
      else if (questionData.delivery?.id) deliveryId = questionData.delivery.id;

      setCurrentQuestion(fetchedQuestion);
      setCurrentDeliveryId(deliveryId);

      let correctId = null;
      if (fetchedQuestion.options) {
        const correctOpt = fetchedQuestion.options.find((o: Option) => o.isCorrect === true);
        if (correctOpt) {
          correctId = correctOpt.id;
        }
      }
      setCorrectOptionId(correctId);

      setSelected(null);
      setFeedback(null);
    } catch (error) {
      console.error("Error fetching next question:", error);
    } finally {
      setFetchingNext(false);
      setLoadingInitial(false);
    }
  }

  useEffect(() => {
    if (!userId) {
      router.replace("/login");
      return;
    }

    let cancelled = false;

    async function startSession() {
      try {
        const res = await fetch(`${API_BASE_URL}/lesson-sessions/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, lessonId }),
        });

        if (!res.ok) throw new Error("Gagal memulai sesi");

        const data = await res.json();
        if (cancelled) return;

        setSessionData(data.session);

        if (locale !== "en" && data.lesson?.title) {
          setRegionName(data.lesson.title);
        } else if (region) {
          setRegionName(region.name);
        } else if (data.lesson) {
          setRegionName(data.lesson.title || "Unknown Region");
        }

        await fetchNextQuestion(data.session.id, locale);
      } catch (error) {
        console.error("Error starting session:", error);
        if (!cancelled) setLoadingInitial(false);
      }
    }

    startSession();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, userId, subject, regionId, gradeLevel, API_BASE_URL, locale]);

  const handleCheck = async () => {
    playClickSound();
    if (!selected || feedback || !currentQuestion || !sessionData) return;

    let isCorrect = false;

    try {
      let res = await fetch(`${API_BASE_URL}/attempts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deliveryId: currentDeliveryId,
          answer: selected,
          timeSpent: 10,
        }),
      });

      if (res.status === 404) {
        res = await fetch(`${API_BASE_URL}/attempts/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            deliveryId: currentDeliveryId,
            answer: selected,
            timeSpent: 10,
          }),
        });
      }

      if (!res.ok) throw new Error("Backend API gagal memvalidasi");

      const attemptResult = await res.json();
      isCorrect = attemptResult.correct === true;

      setSessionData((prev) =>
        prev
          ? {
              ...prev,
              answeredQuestions:
                attemptResult.session?.answeredQuestions ?? prev.answeredQuestions + 1,
            }
          : null,
      );

      if (attemptResult.lessonCompleted) {
        setTotalXp(attemptResult.session?.earnedXp || 50);
      }
    } catch (error) {
      console.warn("API validasi bermasalah:", error);
      setSessionData((prev) =>
        prev ? { ...prev, answeredQuestions: prev.answeredQuestions + 1 } : null,
      );
    }

    if (isCorrect) playCorrectSound();
    setFeedback(isCorrect ? "correct" : "incorrect");
    if (!isCorrect) setLives((prev) => Math.max(0, prev - 1));
  };

  const handleContinue = () => {
    playClickSound();
    if (!sessionData) return;

    const currentAnswered = sessionData.answeredQuestions;
    if (currentAnswered >= sessionData.targetQuestions) {
      setCompleted(true);
      playAbsoluteSound();
    } else {
      fetchNextQuestion(sessionData.id, locale);
    }
  };

  if (loadingInitial) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-[#e4f8ff] font-bold text-[#0c347a] text-xl">
        <Sparkles className="mr-2 animate-pulse" /> {t.battle.loadingAdventure}
      </div>
    );
  }

  const answered = sessionData?.answeredQuestions || 0;
  const target = sessionData?.targetQuestions || 12;
  const progressPercentage = ((answered + 1) / target) * 100;

  const isLongPrompt = currentQuestion ? currentQuestion.prompt.length > 30 : false;

  return (
    <main className="battle-screen" style={{ backgroundImage }}>
      <div className="battle-container">
        <header className="battle-header-split">
          <button
            onClick={() => {
              playClickSound();
              router.push("/dashboard");
            }}
            className="header-close-btn"
          >
            <X size={22} strokeWidth={3.5} />
          </button>

          <div className="header-center-pill">
            <div className="pill-top-row">
              <div className="pill-title">
                <Leaf size={14} className="text-[#35bf79]" />
                <span>{regionName}</span>
              </div>
              <span className="pill-counter">
                {Math.min(answered + 1, target)} / {target}
              </span>
            </div>

            <div className="progress-track">
              <motion.div
                className="progress-fill"
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="header-lives-badge">
            <Heart size={21} fill="#ff5368" color="#ff5368" />
            <span>{lives}</span>
          </div>
        </header>

        <section className="battle-content">
          <div className="region-badge">
            <Sparkles size={15} />
            <span>{t.battle.lockIn}</span>
          </div>

          {fetchingNext ? (
            <div className="question-area flex justify-center items-center h-[200px]">
              <span className="text-[#0c347a] font-bold animate-pulse">{t.battle.loadingNext}</span>
            </div>
          ) : currentQuestion ? (
            <>
              <div className="question-area">
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`question-card ${isLongPrompt ? "py-4 md:py-6" : ""}`}
                >
                  <div className="question-counter">
                    {t.battle.questionLabel} {Math.min(answered + 1, target)}
                  </div>

                  <h1 className={`${isLongPrompt ? "!text-xl md:!text-2xl" : ""} font-black text-[#0c347a]`}>
                    {currentQuestion.prompt}
                  </h1>

                  <p>{t.battle.chooseAnswer}</p>
                </motion.div>
                <Star className="floating-star star-left" fill="#ffc83d" />
                <Sparkles className="floating-star star-right" />
              </div>

              <div className="answer-grid">
                {(currentQuestion.options || []).map((option, index) => {
                  const isSelected = selected === option.id;

                  let stateClass = "";
                  if (feedback === "correct" && isSelected) {
                    stateClass = "answer-correct";
                  } else if (feedback === "incorrect" && isSelected) {
                    stateClass = "answer-incorrect";
                  } else if (feedback === "incorrect" && option.id === correctOptionId) {
                    stateClass = "answer-correct";
                  } else if (isSelected) {
                    stateClass = "answer-selected";
                  }

                  return (
                    <motion.button
                      key={option.id}
                      disabled={!!feedback}
                      onClick={() => {
                        playClickSound();
                        setSelected(option.id);
                      }}
                      whileTap={!feedback ? { y: 4, scale: 0.98 } : {}}
                      className={`answer-button ${stateClass}`}
                    >
                      <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                      <span className={`answer-text ${isLongPrompt ? "text-lg md:text-xl font-bold" : ""}`}>
                        {option.text}
                      </span>
                      {feedback && stateClass === "answer-correct" && <CheckCircle2 size={25} />}
                    </motion.button>
                  );
                })}
              </div>
            </>
          ) : null}

          <div className="game-hint">
            <Sparkles size={15} />
            <span>{t.battle.takeYourTime}</span>
          </div>
        </section>

        <footer className="battle-footer">
          <button
            disabled={!selected || !!feedback || fetchingNext}
            onClick={handleCheck}
            className="check-button"
          >
            {t.battle.checkAnswer}
            <ArrowRight size={21} strokeWidth={3} />
          </button>
        </footer>

        <AnimatePresence>
          {feedback && currentQuestion && (
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`feedback-sheet ${feedback === "correct" ? "feedback-success" : "feedback-error"}`}
            >
              <div className="feedback-inner">
                <div className="feedback-icon">
                  {feedback === "correct" ? <Sparkles size={30} /> : <Heart size={30} />}
                </div>
                <div className="feedback-copy">
                  <h2>{feedback === "correct" ? t.battle.awesome : t.battle.notQuiteRight}</h2>
                  <p>
                    {feedback === "correct"
                      ? t.battle.correctDesc
                      : t.battle.incorrectDesc}
                  </p>
                </div>
                <button onClick={handleContinue} className="feedback-button">
                  {feedback === "correct" ? t.battle.continueBtn : t.battle.gotItBtn}
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {completed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="completion-overlay">
              <div className="completion-card">
                <div className="completion-star">🏆</div>
                <h2>{t.battle.legendTitle}</h2>
                <p>{t.battle.legendDesc}</p>
                {totalXp > 0 && (
                  <motion.p className="text-[#259b60] text-xl font-bold mb-4">
                    +{totalXp} {t.battle.xpEarned}
                  </motion.p>
                )}
                <button
                  onClick={() => {
                    playClickSound();
                    router.push("/dashboard");
                  }}
                  className="check-button"
                >
                  {t.battle.backToDashboard}
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default function BattlePage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[100dvh] items-center justify-center bg-[#e4f8ff] font-bold text-[#0c347a] text-xl">
          Loading your adventure...
        </div>
      }
    >
      <BattlePageContent />
    </Suspense>
  );
}
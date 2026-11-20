'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header';
import { UI_TEXT, useAppLocale } from '../lib/i18n';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// =========================================================
// TYPES
// =========================================================
type MeResponse = {
  id: string;
  email: string;
  role: string;
  learnerProfile: {
    id: string;
    displayName: string;
    gradeLevel: number;
    avatarKey: string | null;
  } | null;
};

type MasteryItem = {
  skillId: string;
  skillName: string;
  masteryScore: number;
  totalAttempts: number;
  correctAttempts: number;
  subject: {
    id: string;
    name: string;
    slug: string;
  };
};

type LessonProgressItem = {
  sessionId: string;
  lesson: {
    id: string;
    title: string;
    slug: string;
    xpReward: number;
  };
  skill: {
    id: string;
    name: string;
  };
  subject: {
    id: string;
    name: string;
    slug: string;
  };
  status: 'IN_PROGRESS' | 'COMPLETED' | 'ABANDONED';
  targetQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  earnedXp: number;
  startedAt: string;
  completedAt: string | null;
};

type ProgressResponse = {
  profile: {
    displayName: string;
    gradeLevel: number;
    totalXp: number;
  };
  summary: {
    totalXp: number;
    totalAttempts: number;
    totalCorrectAttempts: number;
    completedLessons: number;
    masteredSkills: number;
  };
  masteries: MasteryItem[];
  lessonProgress: LessonProgressItem[];
};

// =========================================================
// PAGE COMPONENT
// =========================================================
export default function ProgressPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [locale] = useAppLocale();
  const t = UI_TEXT[locale];

  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  const [user, setUser] = useState<MeResponse | null>(null);
  const [progress, setProgress] = useState<ProgressResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      const token = window.localStorage.getItem('accessToken');
      if (!token) {
        router.replace('/login');
        return;
      }

      try {
        setLoading(true);

        const meResponse = await fetch(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!meResponse.ok) {
          window.localStorage.removeItem('accessToken');
          window.localStorage.removeItem('userId');
          router.replace('/login');
          return;
        }

        const meData: MeResponse = await meResponse.json();
        setUser(meData);

        const progressResponse = await fetch(
          `${API_BASE_URL}/progress/users/${meData.id}`,
        );

        if (progressResponse.ok) {
          const progressData: ProgressResponse = await progressResponse.json();
          setProgress(progressData);
        }
      } catch (err) {
        console.error('Failed to load progress', err);
      } finally {
        setLoading(false);
      }
    }

    void loadProgress();
  }, [router]);

  const displayName =
    progress?.profile?.displayName ?? user?.learnerProfile?.displayName ?? 'Explorer';
  const gradeLevel =
    progress?.profile?.gradeLevel ?? user?.learnerProfile?.gradeLevel ?? 1;

  const totalXp = progress?.summary?.totalXp ?? progress?.profile?.totalXp ?? 0;
  const streakDays = 7;

  const mathSession = useMemo(() => {
    const list = (progress?.lessonProgress ?? []).filter(
      (s) => s.subject.slug === 'mathematics',
    );
    return list.find((s) => s.status === 'IN_PROGRESS') ?? list[0] ?? null;
  }, [progress]);

  const englishSession = useMemo(() => {
    const list = (progress?.lessonProgress ?? []).filter(
      (s) => s.subject.slug === 'english',
    );
    return list.find((s) => s.status === 'IN_PROGRESS') ?? list[0] ?? null;
  }, [progress]);

  const mathAnswered = mathSession?.answeredQuestions ?? 0;
  const mathTarget = mathSession?.targetQuestions ?? 12;
  const englishAnswered = englishSession?.answeredQuestions ?? 0;
  const englishTarget = englishSession?.targetQuestions ?? 12;

  const masteryCounts = useMemo(() => {
    const masteries = progress?.masteries ?? [];
    let mastered = 0;
    let learning = 0;
    let needsPractice = 0;

    for (const m of masteries) {
      if (m.masteryScore >= 0.8) mastered++;
      else if (m.masteryScore >= 0.4) learning++;
      else if (m.totalAttempts > 0) needsPractice++;
    }

    const totalGradeSkills = 18;
    const notStarted = Math.max(
      totalGradeSkills - (mastered + learning + needsPractice),
      0,
    );

    return { mastered, learning, needsPractice, notStarted };
  }, [progress]);

  const mathMasteredCount = useMemo(() => {
    return (progress?.masteries ?? []).filter(
      (m) => m.subject.slug === 'mathematics' && m.masteryScore >= 0.8,
    ).length;
  }, [progress]);

  const completedLessonsCount = progress?.summary?.completedLessons ?? 0;
  const totalCorrectCount = progress?.summary?.totalCorrectAttempts ?? 0;

  const achievements = [
    {
      id: 1,
      name: t.progress.achMathName,
      desc: t.progress.achMathDesc,
      icon: '/assets/badges/math-badge.png',
      progress: Math.min(mathMasteredCount, 5),
      target: 5,
      unlocked: mathMasteredCount >= 5,
      imgSize: 'h-[80px] w-[80px]',
    },
    {
      id: 2,
      name: t.progress.achBookName,
      desc: t.progress.achBookDesc,
      icon: '/assets/badges/bookworm-badge.png',
      progress: Math.min(completedLessonsCount, 10),
      target: 10,
      unlocked: completedLessonsCount >= 10,
      imgSize: 'h-[80px] w-[80px]',
    },
    {
      id: 3,
      name: t.progress.achStreakName,
      desc: t.progress.achStreakDesc,
      icon: '/assets/badges/alwayscheckin-badge.png',
      progress: Math.min(streakDays, 7),
      target: 7,
      unlocked: streakDays >= 7,
      imgSize: 'h-[80px] w-[80px]',
    },
    {
      id: 4,
      name: t.progress.achWordName,
      desc: t.progress.achWordDesc,
      icon: '/assets/badges/knowledge-champion.png',
      progress: Math.min(totalCorrectCount, 50),
      target: 50,
      unlocked: totalCorrectCount >= 50,
      imgSize: 'h-[62px] w-[62px]',
    },
  ];

  const recentLessons = useMemo(() => {
    return (progress?.lessonProgress ?? []).slice(0, 4);
  }, [progress]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#dff4ff]">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-white border-t-[#2788ed]" />
          <p className="mt-4 text-sm font-bold text-[#5879a3]">{t.progress.loading}</p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/assets/dashboard/dashboard-bg.png')" }}
    >
      <Header
        totalXp={totalXp}
        streakDays={streakDays}
        displayName={displayName}
        gradeLevel={gradeLevel}
      />

      <div className="relative z-10 flex h-[calc(100dvh-72px)] min-h-0 gap-[14px] pl-0 pr-[22px] pt-[12px] pb-[22px]">
        {/* SIDEBAR */}
        <aside className="relative -mt-[4px] hidden h-full w-[198px] shrink-0 overflow-visible lg:block">
          <svg
            viewBox="0 0 110 85"
            aria-hidden="true"
            className="pointer-events-none absolute left-0 -top-[10px] z-40 h-[72px] w-[94px] overflow-visible"
          >
            <path d="M0 0 H68 C52 22 34 38 0 58 Z" fill="#0a2e6e" opacity="0.28" />
            <path d="M0 0 H58 C48 16 28 24 0 26 Z" fill="#256f3a" />
            <path d="M18 4 C36 2 54 10 62 22 C42 26 26 18 18 4 Z" fill="#58b947" />
            <path d="M0 10 C20 8 38 18 44 32 C24 34 8 26 0 10 Z" fill="#3fa142" />
            <path d="M22 22 C36 22 50 30 54 42 C38 44 26 34 22 22 Z" fill="#74cf56" />
            <path d="M0 26 C16 28 28 38 30 52 C14 48 4 38 0 26 Z" fill="#52b548" />
            <path d="M0 42 C10 44 18 54 18 66 C6 62 0 52 0 42 Z" fill="#38943c" />
          </svg>

          <svg
            viewBox="0 0 198 540"
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-[530px] w-[198px] overflow-visible drop-shadow-[4px_8px_18px_rgba(12,62,138,0.18)]"
          >
            <defs>
              <linearGradient id="sidebarMainGradient" x1="0.15" y1="0" x2="0.85" y2="1">
                <stop offset="0%" stopColor="#124ca1" />
                <stop offset="55%" stopColor="#1863c6" />
                <stop offset="82%" stopColor="#2680e2" />
                <stop offset="94%" stopColor="#5aa9f6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#9bd6ff" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="sidebarSoftGlow" cx="85%" cy="42%" r="55%">
                <stop offset="0%" stopColor="#85d5ff" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#85d5ff" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="sidebarBorderGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9ce0ff" stopOpacity="0.85" />
                <stop offset="68%" stopColor="#7ad0ff" stopOpacity="0.65" />
                <stop offset="88%" stopColor="#58b8ff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#58b8ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 0 0 H 154 C 180 0, 196 18, 196 44 V 368 C 196 404, 174 420, 134 428 C 90 437, 68 462, 62 498 C 58 520, 32 536, 0 540 Z"
              fill="url(#sidebarMainGradient)"
            />

            <path
              d="M 0 0 H 154 C 180 0, 196 18, 196 44 V 368 C 196 404, 174 420, 134 428 C 90 437, 68 462, 62 498 C 58 520, 32 536, 0 540 Z"
              fill="url(#sidebarSoftGlow)"
            />

            <path
              d="M 12 1.5 H 154 C 179 1.5, 194.5 19, 194.5 44 V 368 C 194.5 403, 173 418.5, 134 426.5 C 92 435, 70 458, 63 492"
              fill="none"
              stroke="url(#sidebarBorderGlow)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>

          <nav className="relative z-30 flex flex-col gap-[3px] px-[12px] pt-[24px]">
            <SidebarItem icon="/assets/sidebar/home.png" label={t.nav.home} href="/dashboard" active={pathname === '/dashboard'} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/learn.png" label={t.nav.learn} href="/learn" active={pathname?.startsWith('/learn')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/journey.png" label={t.nav.journey} href="/journey" active={pathname?.startsWith('/journey')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/progress.png" label={t.nav.progress} href="/progress" active={pathname?.startsWith('/progress')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/rewards.png" label={t.nav.rewards} href="/rewards" active={pathname?.startsWith('/rewards')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/profile.png" label={t.nav.profile} href="/profile" active={pathname?.startsWith('/profile')} playClick={playClick} />
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <section className="min-w-0 flex-1 flex flex-col pl-[6px] gap-[14px]">
          {/* TITLE BUBBLE */}
          <div className="shrink-0 inline-flex flex-col justify-center rounded-[24px] bg-white/90 backdrop-blur-md px-[24px] py-[12px] shadow-sm w-fit border border-white">
            <div className="flex items-center gap-[10px]">
              <span className="text-[22px]">📊</span>
              <h1 className="text-[24px] font-black leading-none text-[#0c347a] flex items-center gap-2">
                {t.progress.title} <span className="text-[18px] text-[#ffca3a]">✨</span>
              </h1>
            </div>
            <p className="mt-[4px] pl-[32px] text-[12px] font-bold text-[#144799]">
              {t.progress.subtitle}
            </p>
          </div>

          {/* CONTAINER UTAMA */}
          <div className="flex-1 min-h-0 flex flex-col gap-[14px] overflow-hidden">
            {/* ROW 1: MATH, ENGLISH, SKILL MASTERY */}
            <div className="shrink-0 grid grid-cols-[1fr_1fr_1.5fr] gap-[14px] h-[36%] min-h-[140px]">
              {/* Mathematics Card */}
              <div className="flex flex-col justify-between rounded-[24px] bg-white p-[20px] shadow-sm border border-[#eef3f9]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#4ccf86_0%,#21b96c_100%)] shadow-sm">
                      <CalculatorIcon className="h-[28px] w-[28px]" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-black leading-tight text-[#0c347a]">{t.progress.mathTitle}</h3>
                      <p className="mt-[2px] text-[11px] font-bold text-[#6782a2]">{t.progress.mathDesc}</p>
                    </div>
                  </div>
                  <div className="flex h-[48px] min-w-[62px] shrink-0 flex-col items-center justify-center rounded-[12px] bg-[#e1f8eb] px-[8px] text-center">
                    <p className="text-[14px] font-black leading-none text-[#238a53]">
                      {mathAnswered} / {mathTarget}
                    </p>
                    <p className="mt-[3px] text-[9.5px] font-bold text-[#5c7a97]">{t.progress.done}</p>
                  </div>
                </div>

                <div className="mt-[8px]">
                  <div className="mb-[8px] h-[6px] w-full overflow-hidden rounded-full bg-[#dff3e6]">
                    <div
                      className="h-full rounded-full bg-[#3ec073]"
                      style={{ width: `${Math.min((mathAnswered / Math.max(mathTarget, 1)) * 100, 100)}%` }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      playClick();
                      router.push('/journey?subject=math');
                    }}
                    className="flex h-[40px] w-full items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#25cf7a_0%,#16b86b_100%)] text-[14px] font-extrabold text-white shadow-[0_4px_10px_rgba(28,184,107,0.22)] transition hover:brightness-105"
                  >
                    {t.progress.continueLearning}
                  </button>
                </div>
              </div>

              {/* English Card */}
              <div className="flex flex-col justify-between rounded-[24px] bg-white p-[20px] shadow-sm border border-[#eef3f9]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#ffc638_0%,#f5a500_100%)] shadow-sm">
                      <BookIcon className="h-[28px] w-[28px]" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-black leading-tight text-[#0c347a]">{t.progress.englishTitle}</h3>
                      <p className="mt-[2px] text-[11px] font-bold text-[#6782a2]">{t.progress.englishDesc}</p>
                    </div>
                  </div>
                  <div className="flex h-[48px] min-w-[62px] shrink-0 flex-col items-center justify-center rounded-[12px] bg-[#fff2d5] px-[8px] text-center">
                    <p className="text-[14px] font-black leading-none text-[#d98500]">
                      {englishAnswered} / {englishTarget}
                    </p>
                    <p className="mt-[3px] text-[9.5px] font-bold text-[#5c7a97]">{t.progress.done}</p>
                  </div>
                </div>

                <div className="mt-[8px]">
                  <div className="mb-[8px] h-[6px] w-full overflow-hidden rounded-full bg-[#fae8c6]">
                    <div
                      className="h-full rounded-full bg-[#f4a61d]"
                      style={{ width: `${Math.min((englishAnswered / Math.max(englishTarget, 1)) * 100, 100)}%` }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      playClick();
                      router.push('/journey?subject=english');
                    }}
                    className="flex h-[40px] w-full items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#ffc233_0%,#f2a20a_100%)] text-[14px] font-extrabold text-white shadow-[0_4px_10px_rgba(242,162,10,0.22)] transition hover:brightness-105"
                  >
                    {t.progress.exploreLessons}
                  </button>
                </div>
              </div>

              {/* Skill Mastery Card */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-sm flex flex-col justify-between border border-[#eef3f9]">
                <div className="flex items-center justify-between mb-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[20px]">🏆</span>
                    <h2 className="text-[16px] font-black text-[#0c347a]">{t.progress.skillMastery}</h2>
                  </div>
                  <button
                    onClick={() => {
                      playClick();
                      router.push('/journey?subject=math');
                    }}
                    className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[10px] py-[4px] text-[11px] font-black text-[#2a80f0] transition hover:bg-[#e4f1ff]"
                  >
                    {t.progress.viewDetails}
                  </button>
                </div>

                <div className="flex items-center justify-between px-[10px] mb-[12px]">
                  <div className="flex items-center gap-[6px]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#3ec073]" />
                    <span className="text-[10.5px] font-bold text-[#627b9c]">{t.progress.mastered}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#ffca3a]" />
                    <span className="text-[10.5px] font-bold text-[#627b9c]">{t.progress.learning}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#f4a61d]" />
                    <span className="text-[10.5px] font-bold text-[#627b9c]">{t.progress.needsPractice}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#e2eaf4]" />
                    <span className="text-[10.5px] font-bold text-[#627b9c]">{t.progress.notStarted}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 divide-x divide-[#f0f4f8] mt-auto">
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] font-black leading-none text-[#0c347a]">{masteryCounts.mastered}</p>
                    <p className="text-[11px] font-bold text-[#879ab3] mt-[2px]">{t.progress.skillsUnit}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] font-black leading-none text-[#0c347a]">{masteryCounts.learning}</p>
                    <p className="text-[11px] font-bold text-[#879ab3] mt-[2px]">{t.progress.skillsUnit}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] font-black leading-none text-[#0c347a]">{masteryCounts.needsPractice}</p>
                    <p className="text-[11px] font-bold text-[#879ab3] mt-[2px]">{t.progress.skillsUnit}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[32px] font-black leading-none text-[#0c347a]">{masteryCounts.notStarted}</p>
                    <p className="text-[11px] font-bold text-[#879ab3] mt-[2px]">{t.progress.skillsUnit}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: CALENDAR, ACHIEVEMENTS, RECENT ACTIVITY */}
            <div className="flex-1 min-h-0 grid grid-cols-[1fr_1.5fr_1.2fr] gap-[14px]">
              {/* Learning Calendar */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-sm flex flex-col justify-between border border-[#eef3f9]">
                <div>
                  <div className="flex items-center gap-[8px] mb-[16px]">
                    <span className="text-[20px] text-[#2b9aff]">📅</span>
                    <h2 className="text-[16px] font-black tracking-tight text-[#0c347a]">{t.progress.learningCalendar}</h2>
                  </div>

                  <div className="mb-[12px] flex items-center justify-between px-[10px]">
                    <button onClick={() => playClick()} className="text-[#0c347a] hover:text-[#2b9aff] font-black text-[14px]">❮</button>
                    <span className="text-[14px] font-black text-[#0c347a]">May 2025</span>
                    <button onClick={() => playClick()} className="text-[#0c347a] hover:text-[#2b9aff] font-black text-[14px]">❯</button>
                  </div>

                  <div className="grid grid-cols-7 gap-y-[10px] text-center text-[12px] font-bold text-[#879ab3]">
                    {t.progress.daysShort.map((d) => (
                      <div key={d} className="text-[10px] mb-[2px]">{d}</div>
                    ))}

                    <div className="text-[#dce7f2]">28</div><div className="text-[#dce7f2]">29</div><div className="text-[#dce7f2]">30</div>
                    <div className="text-[#143975]">1</div><div className="text-[#143975]">2</div>
                    <div className="relative mx-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#3ec073] text-white shadow-sm">
                      3
                    </div>
                    <div className="text-[#143975]">4</div>

                    <div className="text-[#143975]">5</div><div className="text-[#143975]">6</div><div className="text-[#143975]">7</div>
                    <div className="relative mx-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#3ec073] text-white shadow-sm">
                      8
                      <span className="absolute -right-[4px] -top-[4px] text-[10px]">⭐</span>
                    </div>
                    <div className="text-[#143975]">9</div><div className="text-[#143975]">10</div><div className="text-[#143975]">11</div>

                    <div className="text-[#143975]">12</div><div className="text-[#143975]">13</div><div className="text-[#143975]">14</div><div className="text-[#143975]">15</div><div className="text-[#143975]">16</div>
                    <div className="mx-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#3ec073] text-white shadow-sm">17</div>
                    <div className="text-[#143975]">18</div>

                    <div className="text-[#143975]">19</div><div className="text-[#143975]">20</div><div className="text-[#143975]">21</div><div className="text-[#143975]">22</div><div className="text-[#143975]">23</div>
                    <div className="relative mx-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#3ec073] text-white shadow-sm">
                      24
                      <span className="absolute -right-[4px] -top-[4px] text-[10px]">⭐</span>
                    </div>
                    <div className="text-[#143975]">25</div>

                    <div className="text-[#143975]">26</div><div className="text-[#143975]">27</div>
                    <div className="mx-auto flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#2b9aff] text-white shadow-sm">28</div>
                    <div className="text-[#143975]">29</div><div className="text-[#143975]">30</div><div className="text-[#143975]">31</div>
                    <div className="text-[#dce7f2]">1</div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between px-[10px] text-[10px] font-bold text-[#879ab3]">
                  <div className="flex items-center gap-[4px]"><span className="h-[10px] w-[10px] rounded-full bg-[#3ec073]" /> {t.progress.learned}</div>
                  <div className="flex items-center gap-[4px]"><span className="text-[12px]">⭐</span> {t.progress.earnedXp}</div>
                  <div className="flex items-center gap-[4px]"><span className="h-[10px] w-[10px] rounded-full bg-[#e2eaf4]" /> {t.progress.noActivity}</div>
                </div>
              </div>

              {/* Achievements & Milestones */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-sm flex flex-col justify-between border border-[#eef3f9]">
                <div className="mb-[16px] flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[20px]">🏆</span>
                    <h2 className="text-[16px] font-black text-[#0c347a]">{t.progress.achievementsTitle}</h2>
                  </div>
                  <button
                    onClick={() => {
                      playClick();
                      router.push('/rewards');
                    }}
                    className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[10px] py-[4px] text-[11px] font-black text-[#2a80f0] transition hover:bg-[#e4f1ff]"
                  >
                    {t.progress.viewAll}
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-[8px] h-full">
                  {achievements.map((ach) => (
                    <div key={ach.id} className="flex flex-col items-center justify-between rounded-[20px] border border-[#f0f4f8] p-[12px] pb-[16px]">
                      <div className="flex flex-col items-center w-full">
                        <div className="mb-[8px] flex h-[74px] w-[74px] items-center justify-center rounded-[18px] bg-[#f4f7fb] p-[2px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]">
                          <img src={ach.icon} alt={ach.name} className={`${ach.imgSize} object-contain drop-shadow-sm`} />
                        </div>
                        <h4 className="text-center text-[11.5px] font-black leading-tight text-[#0c347a] h-[26px] w-full flex items-center justify-center">{ach.name}</h4>
                        <p className="mt-[2px] text-center text-[9px] font-bold leading-tight text-[#879ab3] h-[26px]">{ach.desc}</p>
                      </div>

                      {ach.unlocked ? (
                        <div className="mt-[8px] w-[90%] text-center text-[10.5px] font-black text-[#238a53] bg-[#e7f8ed] py-[6px] rounded-full">
                          ✓ {ach.progress}/{ach.target}
                        </div>
                      ) : (
                        <div className="mt-[8px] w-[90%] text-center text-[11px] font-black text-[#143975] bg-[#f4f7fb] py-[6px] rounded-full border border-[#e2eaf4]">
                          {ach.progress}/{ach.target}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Learning Activity */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-sm flex flex-col border border-[#eef3f9]">
                <div className="flex items-center justify-between shrink-0 mb-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[20px] text-[#2b9aff]">🕒</span>
                    <h2 className="text-[16px] font-black tracking-tight text-[#0c347a]">{t.progress.recentActivity}</h2>
                  </div>
                  <button
                    onClick={() => {
                      playClick();
                      router.push('/journey?subject=math');
                    }}
                    className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[10px] py-[4px] text-[11px] font-black text-[#2a80f0] transition hover:bg-[#e4f1ff]"
                  >
                    {t.progress.viewAll}
                  </button>
                </div>

                {recentLessons.length > 0 ? (
                  <div className="flex-1 flex flex-col justify-center gap-[8px] overflow-y-auto">
                    {recentLessons.map((item) => {
                      const isMath = item.subject.slug === 'mathematics';
                      const isDone = item.status === 'COMPLETED';
                      return (
                        <div
                          key={item.sessionId}
                          className="flex items-center justify-between rounded-[14px] border border-[#eef3f9] bg-[#f9fbff] px-[12px] py-[9px]"
                        >
                          <div className="min-w-0 pr-[8px]">
                            <p className="truncate text-[12.5px] font-black text-[#0c347a]">
                              {item.skill?.name || item.lesson.title}
                            </p>
                            <p className="text-[10.5px] font-bold text-[#7c92b0]">
                              {isMath ? t.progress.mathTitle : t.progress.englishTitle} • {item.answeredQuestions}/{item.targetQuestions}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 rounded-full px-[9px] py-[3px] text-[10px] font-black ${
                              isDone
                                ? 'bg-[#e7f8ed] text-[#238a53]'
                                : 'bg-[#e4f1ff] text-[#1e6fd9]'
                            }`}
                          >
                            {isDone ? t.progress.completedStatus : t.progress.inProgressStatus}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center pt-[10px]">
                    <div className="relative flex justify-center items-center mb-[16px]">
                      <svg width="100" height="85" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 85 C20 85, 10 75, 10 65 C10 50, 30 50, 30 40 C30 30, 15 20, 35 15 C55 10, 60 25, 75 20 C90 15, 100 30, 95 45 C90 60, 110 70, 90 80 C70 90, 60 85, 40 85 Z" fill="#f4f7fb" />
                        <rect x="40" y="20" width="40" height="56" rx="8" fill="#2b9aff" />
                        <rect x="46" y="26" width="28" height="44" rx="4" fill="#ffffff" />
                        <rect x="48" y="14" width="24" height="12" rx="4" fill="#69a9ff" />
                        <path d="M52 48 L58 54 L68 38" stroke="#3ec073" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="20" cy="30" r="3" fill="#ffca3a" />
                        <circle cx="95" cy="25" r="4" fill="#a3d4ff" />
                        <circle cx="100" cy="65" r="3" fill="#a3d4ff" />
                        <circle cx="25" cy="70" r="4" fill="#ffca3a" />
                      </svg>
                    </div>

                    <h3 className="text-[16px] font-black text-[#0c347a] mb-[4px]">{t.progress.noRecentTitle}</h3>
                    <p className="text-[12px] font-bold text-[#879ab3] text-center max-w-[200px] mb-[20px] leading-snug">{t.progress.noRecentSub}</p>

                    <button
                      onClick={() => {
                        playClick();
                        router.push('/learn');
                      }}
                      className="flex items-center gap-[8px] rounded-full bg-[#2b9aff] px-[20px] py-[10px] text-[13px] font-black text-white shadow-[0_4px_12px_rgba(43,154,255,0.3)] transition hover:bg-[#1a85e6]"
                    >
                      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      {t.progress.startLearning}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// =========================================================
// SIDEBAR ITEM
// =========================================================
function SidebarItem({ icon, label, href, active = false, playClick }: { icon: string; label: string; href: string; active?: boolean; playClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={() => playClick && playClick()}
      className={`group flex h-[52px] w-full items-center gap-[13px] rounded-full px-[16px] text-left transition-all duration-200 ${
        active
          ? 'bg-[linear-gradient(180deg,#d8f2ff_0%,#bce6ff_100%)] text-[#0d3b82] shadow-[inset_0_2px_1px_rgba(255,255,255,0.95),0_5px_12px_rgba(8,49,112,0.18)]'
          : 'text-white hover:bg-white/10'
      }`}
    >
      <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center">
        <img src={icon} alt="" className="h-[31px] w-[31px] object-contain transition-transform duration-200 group-hover:scale-[1.05]" />
      </div>
      <span className={`whitespace-nowrap text-[15px] font-extrabold tracking-[-0.01em] ${active ? 'text-[#0d3b82]' : 'text-white'}`}>
        {label}
      </span>
    </Link>
  );
}

// =========================================================
// ICONS
// =========================================================
function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="8" y="4.5" width="24" height="31" rx="4.5" fill="white" />
      <rect x="11.5" y="8" width="17" height="7" rx="2" fill="#ddf7e8" stroke="#168653" strokeWidth="1.6" />
      <rect x="11.5" y="19" width="4.5" height="4.5" rx="1.2" fill="#168653" />
      <rect x="17.75" y="19" width="4.5" height="4.5" rx="1.2" fill="#168653" />
      <rect x="24" y="19" width="4.5" height="4.5" rx="1.2" fill="#168653" />
      <rect x="11.5" y="26" width="4.5" height="4.5" rx="1.2" fill="#168653" />
      <rect x="17.75" y="26" width="4.5" height="4.5" rx="1.2" fill="#168653" />
      <rect x="24" y="26" width="4.5" height="4.5" rx="1.2" fill="#168653" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 42 42" fill="none" className={className}>
      <path d="M5.5 9.5C10 7.2 15 7.4 20 10.5V33C15.5 30.2 10.7 29.7 5.5 31.5V9.5Z" fill="white" stroke="#d98500" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M36.5 9.5C32 7.2 27 7.4 22 10.5V33C26.5 30.2 31.3 29.7 36.5 31.5V9.5Z" fill="white" stroke="#d98500" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M21 11V33" stroke="#d98500" strokeWidth="1.6" />
      <path d="M9 14.5C12 13.7 14.6 14 17.5 15.3" stroke="#ffc34e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 19C12 18.2 14.6 18.5 17.5 19.8" stroke="#ffc34e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M33 14.5C30 13.7 27.4 14 24.5 15.3" stroke="#ffc34e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M33 19C30 18.2 27.4 18.5 24.5 19.8" stroke="#ffc34e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
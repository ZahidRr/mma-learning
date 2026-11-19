"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    nickname: "",
    skillLevel: "beginner",
    learningGoal: "school",
  });

  const [loading, setLoading] = useState(false);

  // Efek suara klik
  const [playClick] = useSound("/assets/sounds/click.mp3", { volume: 0.5 });

  const handleSelect = (field: string, value: string) => {
    playClick();
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    playClick();
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      setLoading(true);
      try {
        // AMBIL ID DARI LOCALSTORAGE, JIKA KOSONG GUNAKAN ID HARDCODED UNTUK TESTING
        const userId = localStorage.getItem("userId") || "cmum9b2hn0001g077m2imgoa8";
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

        // Tembak API NestJS
        await fetch(`${API_BASE_URL}/users/${userId}/onboarding`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        // Lanjut ke Dashboard dengan mulus
        router.push("/dashboard");
      } catch (error) {
        console.error("Gagal menyimpan data onboarding:", error);
        router.push("/dashboard");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    playClick();
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-[#dff2ff]">
      {/* BACKGROUND ASSET */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/auth/onboardingbg.png')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" />

      {/* DESKTOP (Digeser ke kanan) */}
      <div className="relative z-10 hidden h-full lg:block">
        <div className="absolute left-[68%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <OnboardingCard
            step={step}
            totalSteps={totalSteps}
            progressPercentage={progressPercentage}
            formData={formData}
            setFormData={setFormData}
            handleSelect={handleSelect}
            handleNext={handleNext}
            handleBack={handleBack}
            loading={loading}
          />
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 py-4 lg:hidden">
        <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        <div className="relative z-10 w-full max-w-[440px]">
          <OnboardingCard
            step={step}
            totalSteps={totalSteps}
            progressPercentage={progressPercentage}
            formData={formData}
            setFormData={setFormData}
            handleSelect={handleSelect}
            handleNext={handleNext}
            handleBack={handleBack}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   TYPES
========================================================= */

type OnboardingCardProps = {
  step: number;
  totalSteps: number;
  progressPercentage: number;
  formData: {
    nickname: string;
    skillLevel: string;
    learningGoal: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    nickname: string;
    skillLevel: string;
    learningGoal: string;
  }>>;
  handleSelect: (field: string, value: string) => void;
  handleNext: () => void;
  handleBack: () => void;
  loading: boolean;
};

/* =========================================================
   ONBOARDING CARD
========================================================= */

function OnboardingCard({
  step,
  totalSteps,
  progressPercentage,
  formData,
  setFormData,
  handleSelect,
  handleNext,
  handleBack,
  loading,
}: OnboardingCardProps) {
  return (
    <section className="relative w-[440px] max-w-[calc(100vw-32px)] rounded-[30px] border border-[#dce5f2] bg-[#fffefa]/95 p-[5px] shadow-[0_24px_65px_rgba(39,77,120,0.16)] backdrop-blur-[5px]">
      <div className="flex flex-col rounded-[26px] border border-[#edf2f7] bg-white/78 px-[28px] pb-[28px] pt-[20px] sm:px-[30px]">
        
        {/* TOP BAR: BACK BUTTON & PROGRESS BAR */}
        <div className="mb-4 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#dbe3ef] bg-white text-[#173b86] shadow-sm transition hover:bg-[#f2f6fb]"
              aria-label="Back"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
          ) : (
            <div className="w-9" />
          )}

          <div className="flex flex-1 items-center gap-3">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#edf2f7]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#38a3f5] to-[#2178ed] rounded-full"
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="whitespace-nowrap text-[12px] font-extrabold text-[#7d8bac]">
              Step {step}/{totalSteps}
            </span>
          </div>
        </div>

        {/* AVATAR */}
        <div className="flex w-full justify-center">
          <img
            src="/assets/auth/mimo-avatar.png"
            alt="Mimo"
            className="h-[80px] w-[100px] object-contain sm:h-[90px] sm:w-[110px]"
          />
        </div>

        {/* DYNAMIC STEP CONTENT */}
        <div className="min-h-[250px] w-full pt-2">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Nickname */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }} className="space-y-4 text-center">
                <div>
                  <h1 className="text-[25px] font-extrabold leading-tight tracking-[-0.025em] text-[#173b86]">
                    What should we call you? <span className="text-[#f7bd2e]">✦</span>
                  </h1>
                  <p className="mt-1 text-[13px] font-semibold text-[#7d8bac]">Choose a cool nickname for your profile.</p>
                </div>
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="e.g. MathWizard99"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    className="flex h-[50px] w-full items-center rounded-[14px] border border-[#dbe3ef] bg-white px-[16px] text-[15px] font-semibold text-[#263f70] outline-none transition placeholder:font-medium placeholder:text-[#9ca9c2] focus-within:border-[#7caef4] focus-within:ring-[3px] focus-within:ring-[#dcecff]"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2: General Skill Level */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }} className="space-y-3">
                <div className="text-center">
                  <h1 className="text-[23px] font-extrabold leading-tight tracking-[-0.025em] text-[#173b86]">How is your learning level?</h1>
                  <p className="mt-1 text-[13px] font-semibold text-[#7d8bac]">Helps us set the right starting challenge.</p>
                </div>
                <div className="space-y-2 pt-1">
                  {[
                    { id: "beginner", title: "🌱 Just Starting Out", desc: "Start from basics & build a habit" },
                    { id: "intermediate", title: "⭐ A Bit of Practice", desc: "I know the basics, ready to grow" },
                    { id: "advanced", title: "🚀 Super Advanced", desc: "Give me the toughest challenges!" },
                  ].map((item) => {
                    const isSelected = formData.skillLevel === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelect("skillLevel", item.id)}
                        className={`cursor-pointer rounded-[14px] border px-4 py-2.5 transition-all flex items-center justify-between ${
                          isSelected ? "border-[#2477ea] bg-[#f0f6ff] shadow-sm" : "border-[#dbe3ef] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        <div>
                          <h4 className="font-extrabold text-[#173b86] text-[13px]">{item.title}</h4>
                          <p className="text-[11px] font-semibold text-[#7d8bac]">{item.desc}</p>
                        </div>
                        {isSelected && <CheckCircle2 className="text-[#2477ea]" size={18} />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Learning Goal */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }} className="space-y-3">
                <div className="text-center">
                  <h1 className="text-[23px] font-extrabold leading-tight tracking-[-0.025em] text-[#173b86]">What's your main goal?</h1>
                  <p className="mt-1 text-[13px] font-semibold text-[#7d8bac]">We will keep you motivated to achieve it!</p>
                </div>
                <div className="space-y-2 pt-1">
                  {[
                    { id: "school", title: "🏆 Ace School Grades", desc: "Practice regularly for top marks" },
                    { id: "brain", title: "🧠 Brain Training", desc: "Keep my mind sharp daily" },
                    { id: "fun", title: "🎮 Just For Fun", desc: "Earn XP, collect rewards & enjoy" },
                  ].map((item) => {
                    const isSelected = formData.learningGoal === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelect("learningGoal", item.id)}
                        className={`cursor-pointer rounded-[14px] border px-4 py-2.5 transition-all flex items-center justify-between ${
                          isSelected ? "border-[#2477ea] bg-[#f0f6ff] shadow-sm" : "border-[#dbe3ef] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        <div>
                          <h4 className="font-extrabold text-[#173b86] text-[13px]">{item.title}</h4>
                          <p className="text-[11px] font-semibold text-[#7d8bac]">{item.desc}</p>
                        </div>
                        {isSelected && <CheckCircle2 className="text-[#2477ea]" size={18} />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="mt-6 w-full">
          <button
            type="button"
            onClick={handleNext}
            disabled={loading || (step === 1 && !formData.nickname.trim())}
            className="flex h-[52px] w-full items-center justify-center rounded-[15px] bg-[linear-gradient(180deg,#38a3f5_0%,#2178ed_100%)] px-5 text-[17px] font-black tracking-[-0.015em] text-white shadow-[0_8px_20px_rgba(37,124,237,0.24)] transition duration-200 hover:-translate-y-[1px] hover:shadow-[0_11px_24px_rgba(37,124,237,0.29)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{loading ? "Saving..." : step === totalSteps ? "Start Learning!" : "Continue"}</span>
            <span className="ml-[10px] text-[20px] font-bold leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
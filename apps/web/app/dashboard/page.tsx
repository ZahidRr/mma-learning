'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header';

// =========================================================
// TYPES
// =========================================================

type LearnerProfile = {
  id: string;
  displayName: string;
  gradeLevel: number;
  avatarKey: string | null;
};

type MeResponse = {
  id: string;
  email: string;
  role: string;
  learnerProfile: LearnerProfile | null;
};

type ProgressProfile = {
  userId: string;
  learnerProfileId: string;
  email: string;
  displayName: string;
  gradeLevel: number;
  avatarKey: string | null;
  totalXp: number;
};

type ProgressSummary = {
  totalXp: number;
  totalAttempts: number;
  totalCorrectAttempts: number;
  overallAccuracy: number;
  completedLessons: number;
  inProgressLessons: number;
  masteredSkills: number;
};

type MasteryItem = {
  skillId: string;
  skillName: string;
  skillSlug: string;
  topic: {
    id: string;
    name: string;
    gradeLevel: number;
  };
  subject: {
    id: string;
    name: string;
    slug: string;
  };
  masteryScore: number;
  totalAttempts: number;
  correctAttempts: number;
  updatedAt: string;
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
  topic: {
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
  remainingQuestions: number;
  accuracy: number;
  earnedXp: number;
  startedAt: string;
  completedAt: string | null;
};

type ProgressResponse = {
  profile: ProgressProfile;
  summary: ProgressSummary;
  masteries: MasteryItem[];
  lessonProgress: LessonProgressItem[];
};

// =========================================================
// PAGE
// =========================================================

export default function DashboardPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<MeResponse | null>(null);
  const [progress, setProgress] = useState<ProgressResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Inisialisasi hook audio
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  // =======================================================
  // LOAD DATA
  // =======================================================

  useEffect(() => {
    async function loadDashboard() {
      const token = localStorage.getItem('accessToken');
      const storedUserId = localStorage.getItem('userId');

      if (!token || !storedUserId) {
        console.warn("Token atau UserId tidak ditemukan. Mengarahkan ke login...");
        router.replace('/login');
        return;
      }

      try {
        setLoading(true);
        setError('');

        const meResponse = await fetch('http://localhost:3001/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!meResponse.ok) {
          console.warn("Gagal validasi token di auth/me. Menghapus sesi.");
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');
          router.replace('/login');
          return;
        }

        const meData: MeResponse = await meResponse.json();
        setUser(meData);

        const progressResponse = await fetch(
          `http://localhost:3001/progress/users/${meData.id}`,
        );

        if (!progressResponse.ok) {
          if (progressResponse.status === 404) {
            console.log("Progres belum ada untuk user ini. Menampilkan dashboard kosong.");
            setProgress(null);
          } else {
            throw new Error('Failed to load learning progress.');
          }
        } else {
          const progressData: ProgressResponse = await progressResponse.json();
          setProgress(progressData);
        }
      } catch (err) {
        console.error("Dashboard Load Error:", err);
        setError(
          err instanceof Error ? err.message : 'Something went wrong.',
        );
      } finally {
        setLoading(false);
      }
    }

    void loadDashboard();
  }, [router]);

  // =======================================================
  // HANDLERS UNTUK MENGARAHKAN KE JOURNEY MAP
  // =======================================================

  const handleStartSubject = (subject: 'math' | 'english') => {
    playClick();
    router.push(`/journey?subject=${subject}`);
  };

  // =======================================================
  // DERIVED DATA
  // =======================================================

  const activeSession = useMemo(() => {
    return (
      progress?.lessonProgress.find(
        (session) => session.status === 'IN_PROGRESS',
      ) ?? null
    );
  }, [progress]);

  const activeSubjectKey: 'math' | 'english' =
    activeSession?.subject.slug === 'english' ? 'english' : 'math';

  const mathSession = useMemo(() => {
    return (
      progress?.lessonProgress.find(
        (session) => session.subject.slug === 'mathematics',
      ) ?? null
    );
  }, [progress]);

  const englishSession = useMemo(() => {
    return (
      progress?.lessonProgress.find(
        (session) => session.subject.slug === 'english',
      ) ?? null
    );
  }, [progress]);

  const displayName =
    progress?.profile.displayName ??
    user?.learnerProfile?.displayName ??
    'Explorer';

  const gradeLevel =
    progress?.profile.gradeLevel ?? user?.learnerProfile?.gradeLevel ?? 1;

  const rawXp = progress?.summary.totalXp ?? 0;
  const totalXp = rawXp > 0 ? rawXp : 2692; // default fallback
  const streakDays = 7;

  const dailyGoal = Math.min(
    progress?.summary.completedLessons !== undefined &&
      progress.summary.completedLessons > 0
      ? progress.summary.completedLessons
      : 2,
    3,
  );

  // =======================================================
  // LOADING
  // =======================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#dff4ff]">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-white border-t-[#2788ed]" />
          <p className="mt-4 text-sm font-bold text-[#5879a3]">
            Preparing your adventure...
          </p>
        </div>
      </main>
    );
  }

  // =======================================================
  // DASHBOARD
  // =======================================================

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{
        backgroundImage: "url('/assets/dashboard/dashboard-bg.png')",
      }}
    >
      {/* =================================================
          HEADER COMPONENT
      ================================================== */}
      <Header
        totalXp={totalXp}
        streakDays={streakDays}
        displayName={displayName}
        gradeLevel={gradeLevel}
      />

      {/* =================================================
          BODY
      ================================================== */}
      <div className="relative z-10 flex h-[calc(100dvh-72px)] gap-[14px] pl-0 pr-[22px] pt-[12px] pb-[34px]">

        {/* ===============================================
            SIDEBAR (S-Curve Presisi & Gradasi Menyatu ke Awan)
        ================================================ */}
        <aside className="relative hidden h-full w-[198px] shrink-0 overflow-visible lg:block -mt-[4px]">
          {/* FOLIAGE OVERLAY KIRI ATAS */}
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

          {/* BLUE SIDEBAR S-CURVE SVG */}
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

              <filter id="cloudMistBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            <path
              d="
                M 0 0
                H 154
                C 180 0, 196 18, 196 44
                V 368
                C 196 404, 174 420, 134 428
                C 90 437, 68 462, 62 498
                C 58 520, 32 536, 0 540
                Z
              "
              fill="url(#sidebarMainGradient)"
            />

            <path
              d="
                M 0 0
                H 154
                C 180 0, 196 18, 196 44
                V 368
                C 196 404, 174 420, 134 428
                C 90 437, 68 462, 62 498
                C 58 520, 32 536, 0 540
                Z
              "
              fill="url(#sidebarSoftGlow)"
            />

            <path
              d="
                M 12 1.5
                H 154
                C 179 1.5, 194.5 19, 194.5 44
                V 368
                C 194.5 403, 173 418.5, 134 426.5
                C 92 435, 70 458, 63 492
              "
              fill="none"
              stroke="url(#sidebarBorderGlow)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* KABUT AWAN PUTIH DI BAWAH SIDEBAR */}
            <ellipse cx="38" cy="468" rx="52" ry="22" fill="#eef9ff" opacity="0.85" filter="url(#cloudMistBlur)" />
            <ellipse cx="22" cy="482" rx="40" ry="18" fill="#ffffff" opacity="0.9" filter="url(#cloudMistBlur)" />
          </svg>

          {/* SIDEBAR MENU ITEMS */}
          <nav className="relative z-30 flex flex-col gap-[3px] px-[12px] pt-[24px]">
            <SidebarItem
              icon="/assets/sidebar/home.png"
              label="Home"
              href="/dashboard"
              active={pathname === '/dashboard'}
              playClick={playClick}
            />
            <SidebarItem
              icon="/assets/sidebar/learn.png"
              label="Learn"
              href="/learn"
              active={pathname?.startsWith('/learn')}
              playClick={playClick}
            />
            <SidebarItem
              icon="/assets/sidebar/journey.png"
              label="Journey"
              href="/journey"
              active={pathname?.startsWith('/journey')}
              playClick={playClick}
            />
            <SidebarItem
              icon="/assets/sidebar/progress.png"
              label="Progress"
              href="/progress"
              active={pathname?.startsWith('/progress')}
              playClick={playClick}
            />
            <SidebarItem
              icon="/assets/sidebar/rewards.png"
              label="Rewards"
              href="/rewards"
              active={pathname?.startsWith('/rewards')}
              playClick={playClick}
            />
            <SidebarItem
              icon="/assets/sidebar/profile.png"
              label="Profile"
              href="/profile"
              active={pathname?.startsWith('/profile')}
              playClick={playClick}
            />
          </nav>
        </aside>

        {/* ===============================================
            MAIN CONTENT SHELL
        ================================================ */}
        <section className="min-w-0 flex-1">
          <div className="mx-auto grid h-full min-h-0 w-full max-w-[1380px] grid-rows-[46%_54%]">
            {/* ===========================================
                TOP WHITE SHELL (WELCOME HERO)
            ============================================ */}
            <div className="min-h-0 rounded-t-[30px] bg-white/95 px-[8px] pt-[8px] pb-[5px] shadow-[0_4px_20px_rgba(21,71,138,0.06)]">
              <section className="relative h-full min-h-0 overflow-hidden rounded-[22px]">
                <img
                  src="/assets/dashboard/welcome-hero-bg.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
                />

                {/* Dekorasi Daun Melayang */}
                <svg
                  viewBox="0 0 36 24"
                  className="pointer-events-none absolute left-[13.5%] top-[5%] z-10 h-[20px] w-[30px] -rotate-12"
                  fill="none"
                >
                  <path d="M2 20C8 6 22 2 34 4C28 16 16 22 2 20Z" fill="#47b849" />
                  <path d="M4 19C14 13 22 9 32 5" stroke="#8be37b" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {/* WELCOME TITLE */}
                <div className="absolute left-[4%] top-[12%] z-10">
                  <h1 className="flex items-center gap-[10px] text-[42px] font-black leading-[0.95] tracking-[-0.04em] text-[#0c347a]">
                    <span>Welcome back!</span>
                    <svg viewBox="0 0 36 36" className="h-[32px] w-[32px] shrink-0" fill="none">
                      <path d="M18 2L22.2 13.8L34 18L22.2 22.2L18 34L13.8 22.2L2 18L13.8 13.8L18 2Z" fill="#ffc229" />
                    </svg>
                  </h1>

                  <p className="mt-[5px] text-[17px] font-bold leading-[1.15] tracking-[-0.01em] text-[#5e789c]">
                    Ready for another adventure today?
                  </p>
                </div>

                {/* =======================================
                    ACTIVE / NEXT LEARNING CARD
                ======================================== */}
                <div className="absolute bottom-[30px] left-[4%] z-10 h-[114px] w-[54%] max-w-[710px] min-w-[560px] overflow-hidden rounded-[20px] border border-white bg-white/95 shadow-[0_12px_28px_rgba(29,82,150,0.14)] backdrop-blur-sm">
                  <div className="grid h-full grid-cols-[64px_minmax(0,1fr)_215px] grid-rows-[1fr_34px] items-center px-[18px] py-[12px]">
                    <div className="row-span-2 flex h-[54px] w-[54px] items-center justify-center rounded-[15px] bg-[linear-gradient(180deg,#4fd185_0%,#34ad67_100%)] shadow-[0_6px_12px_rgba(52,173,103,0.25)]">
                      <CalculatorIcon className="h-[32px] w-[32px]" />
                    </div>

                    <div className="min-w-0 self-end pb-[2px] pl-[4px]">
                      <p className="text-[12px] font-extrabold leading-none text-[#1c498c]">
                        {activeSession?.subject.name ?? 'Mathematics'}
                      </p>

                      <h2 className="mt-[5px] flex items-center truncate text-[22px] font-black leading-none tracking-[-0.025em] text-[#0c347a]">
                        <span>
                          {activeSession?.skill.name ?? 'Addition Within 10'}
                        </span>
                        <span className="ml-[8px] text-[24px] leading-none text-[#123e87]">
                          ›
                        </span>
                      </h2>
                    </div>

                    <div className="row-span-2 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => handleStartSubject(activeSubjectKey)}
                        className="flex h-[50px] w-[202px] items-center justify-center gap-[10px] rounded-[15px] bg-[linear-gradient(180deg,#2b9aff_0%,#116bf2_100%)] text-[14px] font-extrabold text-white shadow-[0_8px_18px_rgba(17,107,242,0.32)] transition-transform duration-200 hover:-translate-y-[1px]"
                      >
                        <span>Continue Learning</span>
                        <span className="text-[17px] leading-none">→</span>
                      </button>
                    </div>

                    <div className="flex min-w-0 items-center gap-[16px] self-start pl-[4px] pt-[5px]">
                      <span className="shrink-0 text-[12px] font-bold text-[#627b9c]">
                        {activeSession?.answeredQuestions ?? 4} /{' '}
                        {activeSession?.targetQuestions ?? 10} questions
                      </span>

                      <div className="max-w-[220px] flex-1">
                        <ProgressBar
                          value={activeSession?.answeredQuestions ?? 4}
                          max={activeSession?.targetQuestions ?? 10}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* =======================================
                    CAT MASCOT SILHOUETTE IN PORTAL
                ======================================== */}
                <div className="pointer-events-none absolute right-[13.2%] top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center lg:flex">
                  <svg viewBox="0 0 160 190" className="h-[178px] w-[148px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="
                        M 40 58
                        L 26 22
                        L 62 36
                        C 74 33, 86 33, 98 36
                        L 134 22
                        L 120 58
                        C 136 72, 138 98, 120 114
                        C 110 122, 106 128, 110 144
                        C 114 160, 106 176, 92 180
                        H 68
                        C 54 176, 46 160, 50 144
                        C 54 128, 50 122, 40 114
                        C 22 98, 24 72, 40 58
                        Z
                      "
                      stroke="#8abce0"
                      strokeWidth="2.2"
                      strokeDasharray="5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="#ffffff"
                      fillOpacity="0.1"
                    />
                    <path d="M80 86V104M71 95H89" stroke="#8abce0" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>
              </section>
            </div>

            {/* ===========================================
                LOWER SHELL (SUBJECTS + DAILY GOAL)
            ============================================ */}
            <div className="grid min-h-0 grid-cols-[minmax(0,1.96fr)_minmax(340px,1fr)]">
              {/* LEFT WHITE SHELL (CHOOSE A SUBJECT) */}
              <div className="min-h-0 rounded-b-[30px] bg-white/95 pl-[8px] pr-[4px] pt-[4px] pb-[8px] shadow-[0_10px_24px_rgba(21,71,138,0.08)]">
                <section className="grid h-full min-h-0 grid-rows-[40px_minmax(0,1fr)] rounded-[22px] border border-[#dfeaf5] bg-[#fcfdff] px-[16px] pb-[12px] pt-[6px]">
                  {/* SUBJECT HEADER */}
                  <div className="flex min-w-0 items-center justify-between gap-[14px]">
                    <div className="flex shrink-0 items-center gap-[9px]">
                      <img
                        src="/assets/sidebar/learn.png"
                        alt=""
                        className="h-[30px] w-[30px] object-contain"
                      />
                      <h2 className="whitespace-nowrap text-[20px] font-black tracking-[-0.02em] text-[#0c347a]">
                        Choose a Subject
                      </h2>
                    </div>

                    <p className="truncate text-[12px] font-bold text-[#677f9e]">
                      Pick a subject and continue your learning adventure!
                    </p>
                  </div>

                  {/* SUBJECT CARDS */}
                  <div className="grid min-h-0 grid-cols-2 gap-[12px]">
                    <SubjectCard
                      type="math"
                      title="Mathematics"
                      description="Build, solve, and grow your number skills!"
                      session={mathSession}
                      onStart={() => handleStartSubject('math')}
                    />

                    <SubjectCard
                      type="english"
                      title="English"
                      description="Read, write, and discover amazing stories!"
                      session={englishSession}
                      onStart={() => handleStartSubject('english')}
                    />
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN (DAILY GOAL + WOODEN SIGN CUTOUT AREA) */}
              <div className="flex min-h-0 flex-col">
                {/* DAILY GOAL SHELL */}
                <div className="h-[58%] min-h-[188px] rounded-br-[30px] bg-white/95 pl-[4px] pr-[8px] pt-[4px] pb-[8px] shadow-[0_10px_24px_rgba(21,71,138,0.08)]">
                  <aside className="flex h-full flex-col justify-between rounded-[22px] border border-[#dfeaf5] bg-[#fcfdff] px-[18px] py-[12px]">
                    <div>
                      <div className="flex items-center justify-between gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                          <img
                            src="/assets/sidebar/goal.png"
                            alt=""
                            className="h-[30px] w-[30px] shrink-0 object-contain"
                          />
                          <h3 className="text-[19px] font-black tracking-[-0.02em] text-[#0c347a]">
                            Daily Goal
                          </h3>
                        </div>

                        <div className="rounded-full bg-[#e3f2ff] px-[11px] py-[4px] text-[11px] font-extrabold text-[#1e6fd9]">
                          {dailyGoal} / 3 activities
                        </div>
                      </div>

                      <p className="mt-[4px] text-[11.5px] font-bold text-[#6980a0]">
                        Keep going! You&apos;re doing great!
                      </p>
                    </div>

                    {/* GOAL STEPS & SEAMLESS CONNECTORS */}
                    <div className="my-auto flex items-start justify-between px-[4px] pt-[4px]">
                      <GoalStep complete={dailyGoal >= 1} label="Learn something new" />
                      <GoalConnector status={dailyGoal >= 2 ? 'full' : dailyGoal === 1 ? 'half' : 'empty'} />
                      <GoalStep complete={dailyGoal >= 2} label="Complete an activity" />
                      <GoalConnector status={dailyGoal >= 3 ? 'full' : dailyGoal === 2 ? 'half' : 'empty'} />
                      <GoalStep complete={dailyGoal >= 3} label="Earn rewards" />
                    </div>
                  </aside>
                </div>

                {/* TRANSPARENT CUTOUT AREA FOR WOODEN SIGN */}
                <div className="relative min-h-0 flex-1 bg-transparent">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-[28px] w-[28px]"
                    style={{ background: 'radial-gradient(circle at 100% 100%, transparent 0 27px, rgba(255,255,255,0.95) 28px)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =================================================
          ERROR TOAST
      ================================================== */}
      {error && (
        <div className="fixed bottom-4 right-4 z-[100] rounded-[14px] bg-[#fff1f1] px-4 py-3 text-xs font-bold text-[#bd4d4d] shadow-xl">
          {error}
        </div>
      )}
    </main>
  );
}

// =========================================================
// SIDEBAR ITEM
// =========================================================
function SidebarItem({
  icon,
  label,
  href,
  active = false,
  playClick,
}: {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  playClick?: () => void;
}) {
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
// SUBJECT CARD
// =========================================================
function SubjectCard({ type, title, description, session, onStart }: { type: 'math' | 'english'; title: string; description: string; session: LessonProgressItem | null, onStart: () => void }) {
  const isMath = type === 'math';
  const progressValue = session?.answeredQuestions ?? (isMath ? 4 : 2);
  const progressMax = session?.targetQuestions ?? (isMath ? 10 : 8);
  const imageSrc = isMath ? '/assets/dashboard/math.png' : '/assets/dashboard/eng.png';

  return (
    <div className="group grid h-full min-h-0 min-w-0 grid-rows-[minmax(0,1fr)_96px] overflow-hidden rounded-[18px] border border-[#dce7f2] bg-white text-left shadow-[0_4px_14px_rgba(25,73,133,0.05)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_22px_rgba(25,73,133,0.12)]">
      <div className="relative min-h-0 overflow-hidden">
        <img src={imageSrc} alt={`${title} learning world`} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="grid min-h-0 grid-cols-[minmax(0,1fr)_142px] items-center gap-[10px] bg-white px-[12px] py-[8px]">
        <div className="flex min-w-0 items-center gap-[10px]">
          <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] shadow-sm ${isMath ? 'bg-[linear-gradient(180deg,#4fd185_0%,#35af68_100%)]' : 'bg-[linear-gradient(180deg,#ffca3a_0%,#f5a510_100%)]'}`}>
            {isMath ? <CalculatorIcon className="h-[29px] w-[29px]" /> : <BookIcon className="h-[30px] w-[30px]" />}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[17px] font-black leading-tight text-[#0c347a]">{title}</h3>
            <p className="mt-[2px] line-clamp-2 text-[10.5px] font-semibold leading-[13px] text-[#647d9d]">{description}</p>
          </div>
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-[6px]">
          <div className={`rounded-[11px] px-[9px] py-[5px] ${isMath ? 'bg-[#e7f8ed]' : 'bg-[#fff5de]'}`}>
            <div className="flex items-baseline justify-center gap-[4px]">
              <span className={`whitespace-nowrap text-[11.5px] font-black ${isMath ? 'text-[#228b53]' : 'text-[#d98600]'}`}>
                {progressValue} / {progressMax}
              </span>
              <span className="text-[10.5px] font-bold text-[#697f9c]">done</span>
            </div>
            <div className="mt-[4px]">
              <ProgressBar value={progressValue} max={progressMax} green={isMath} orange={!isMath} />
            </div>
          </div>
          <button
            type="button"
            onClick={onStart}
            className={`flex h-[33px] items-center justify-center gap-[6px] rounded-[11px] text-[12.5px] font-extrabold text-white shadow-[0_5px_12px_rgba(38,84,125,0.14)] transition hover:brightness-105 ${isMath ? 'bg-[linear-gradient(180deg,#4cc97f_0%,#2fa862_100%)]' : 'bg-[linear-gradient(180deg,#ffbe2e_0%,#f29f05_100%)]'}`}
          >
            <span>{isMath ? 'Continue' : 'Explore'}</span>
            <span className="text-[14px] leading-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// GOAL STEP
// =========================================================
function GoalStep({ complete, label }: { complete: boolean; label: string }) {
  return (
    <div className="relative z-10 flex w-[76px] shrink-0 flex-col items-center text-center">
      <div className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border-[3px] text-[18px] font-black shadow-sm transition-colors ${complete ? 'border-[#cbf5da] bg-[linear-gradient(180deg,#4fd185_0%,#32ad66_100%)] text-white' : 'border-[#e6eef6] bg-[#edf3f9] text-[#b4c2d4]'}`}>
        {complete ? '✓' : '★'}
      </div>
      <p className="mt-[6px] text-[10.5px] font-bold leading-[12.5px] text-[#597393]">{label}</p>
    </div>
  );
}

// =========================================================
// GOAL CONNECTOR
// =========================================================
function GoalConnector({ status }: { status: 'full' | 'half' | 'empty' }) {
  return (
    <div className="-mx-[18px] mt-[19px] h-[6px] flex-1 overflow-hidden rounded-full bg-[#dfe8f2]">
      {status === 'full' && <div className="h-full w-full bg-[#3ec073]" />}
      {status === 'half' && <div className="h-full w-[55%] rounded-r-full bg-[#3ec073]" />}
    </div>
  );
}

// =========================================================
// PROGRESS BAR
// =========================================================
function ProgressBar({ value, max, green = false, orange = false }: { value: number; max: number; green?: boolean; orange?: boolean }) {
  const safeMax = max > 0 ? max : 1;
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100);

  return (
    <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#e1eaf3]">
      <div className={`h-full rounded-full transition-all duration-300 ${orange ? 'bg-[#f4a61d]' : green ? 'bg-[#38b66c]' : 'bg-[#2285f0]'}`} style={{ width: `${percentage}%` }} />
    </div>
  );
}

// =========================================================
// REUSABLE ICONS
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
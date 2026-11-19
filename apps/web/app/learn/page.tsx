'use client';
import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header'; // <-- Import komponen Header

// =========================================================
// TYPES
// =========================================================
type ProgressSession = {
  subjectSlug: 'mathematics' | 'english';
  skillName: string;
  answeredQuestions: number;
  targetQuestions: number;
  status: 'IN_PROGRESS' | 'COMPLETED';
};

// =========================================================
// MOCK DATA
// =========================================================
const mockProgress = {
  totalXp: 2692,
  streakDays: 7,
  badges: 12,
  sessions: [
    {
      subjectSlug: 'mathematics',
      skillName: 'Addition Within 10',
      answeredQuestions: 4,
      targetQuestions: 10,
      status: 'IN_PROGRESS',
    },
    {
      subjectSlug: 'english',
      skillName: 'Vocabulary',
      answeredQuestions: 2,
      targetQuestions: 8,
      status: 'IN_PROGRESS',
    },
  ] as ProgressSession[],
};

// =========================================================
// PAGE COMPONENT
// =========================================================
export default function LearnPage() {
  const pathname = usePathname();
  const router = useRouter();

  // Inisialisasi Hook Suara
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  const displayName = 'Explorer';
  const gradeLevel = 1;
  const totalXp = mockProgress.totalXp;
  const streakDays = mockProgress.streakDays;
  const badges = mockProgress.badges;

  const mathSession = useMemo(
    () => mockProgress.sessions.find((s) => s.subjectSlug === 'mathematics') ?? null,
    []
  );
  const englishSession = useMemo(
    () => mockProgress.sessions.find((s) => s.subjectSlug === 'english') ?? null,
    []
  );

  const mathAnswered = mathSession?.answeredQuestions ?? 4;
  const mathTarget = mathSession?.targetQuestions ?? 10;
  const englishAnswered = englishSession?.answeredQuestions ?? 2;
  const englishTarget = englishSession?.targetQuestions ?? 8;

  const handleOpenJourney = (subject: 'math' | 'english') => {
    playClick();
    router.push(`/journey?subject=${subject}`);
  };

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/assets/dashboard/dashboard-bg.png')" }}
    >
      {/* =================================================
          HEADER
      ================================================== */}
      <Header
        totalXp={totalXp}
        streakDays={streakDays}
        displayName={displayName}
        gradeLevel={gradeLevel}
      />

      {/* =================================================
          BODY (SIDEBAR + LEARN CONTENT)
      ================================================== */}
      <div className="relative z-10 flex h-[calc(100dvh-72px)] min-h-0 gap-[14px] pl-0 pr-[22px] pt-[12px] pb-[34px]">
        {/* ===============================================
            SIDEBAR
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
            MAIN CONTENT AREA
        ================================================ */}
        <section className="min-h-0 min-w-0 flex-1 overflow-hidden pt-[max(0px,calc(4.3dvh_-_12px))] pb-[max(0px,calc(7.4dvh_-_34px))]">
          <div className="mx-auto flex h-full w-full max-w-[1428px] min-h-0 flex-col justify-between">
            {/* 1. TOP SECTION: CHOOSE A SUBJECT */}
            <div className="relative -top-[20px] flex h-[min(58.5dvh,527px)] min-h-0 flex-col pt-[11px]">
              {/* TITLE BUBBLE */}
              <div className="mb-[12px] flex h-[104px] shrink-0 items-center">
                <div className="inline-flex h-[96px] items-center gap-[14px] rounded-[34px] border border-white/70 bg-white/75 px-[18px] py-[12px] shadow-[0_5px_18px_rgba(32,91,155,0.08)] backdrop-blur-md">
                  <img
                    src="/assets/sidebar/learn.png"
                    alt=""
                    className="h-[60px] w-[60px] shrink-0 object-contain"
                  />
                  <div>
                    <h1 className="text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-[#0c347a]">
                      Choose a Subject
                    </h1>
                    <p className="mt-[6px] text-[17px] font-bold leading-tight text-[#627b9c]">
                      Pick a subject and start your learning adventure!
                    </p>
                  </div>
                </div>
              </div>

              {/* SUBJECT + MASCOT CARDS */}
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.06fr_0.77fr] gap-[16px]">

                {/* MATHEMATICS CARD */}
                <div className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[32px] border-[5px] border-white/95 bg-white shadow-[0_5px_18px_rgba(35,138,83,0.10)] transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-[52%] w-full shrink-0 overflow-hidden bg-[#eff8f2]">
                    <img
                      src="/assets/dashboard/math.png"
                      alt="Mathematics learning"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col justify-between px-[18px] pb-[12px] pt-[10px]">
                    <div className="flex min-h-[68px] items-center justify-between gap-[10px]">
                      <div className="flex min-w-0 items-center gap-[12px]">
                        <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#4ccf86_0%,#21b96c_100%)] shadow-[0_4px_9px_rgba(35,168,98,0.18)]">
                          <CalculatorIcon className="h-[38px] w-[38px]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[21px] font-black leading-tight tracking-[-0.02em] text-[#0c347a]">
                            Mathematics
                          </h3>
                          <p className="mt-[4px] text-[13px] font-bold leading-[1.25] text-[#6782a2]">
                            Build, solve, and grow your number skills!
                          </p>
                        </div>
                      </div>
                      <div className="flex h-[68px] min-w-[72px] shrink-0 flex-col items-center justify-center rounded-[16px] bg-[#e1f8eb] px-[10px] text-center">
                        <p className="text-[17px] font-black leading-none text-[#238a53]">
                          {mathAnswered} / {mathTarget}
                        </p>
                        <p className="mt-[5px] text-[11px] font-bold text-[#5c7a97]">done</p>
                      </div>
                    </div>
                    <div className="mt-[8px] shrink-0">
                      <div className="mb-[9px] h-[6px] w-full overflow-hidden rounded-full bg-[#dff3e6]">
                        <div
                          className="h-full rounded-full bg-[#3ec073]"
                          style={{ width: `${(mathAnswered / mathTarget) * 100}%` }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenJourney('math')}
                        className="flex h-[48px] w-full items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#25cf7a_0%,#16b86b_100%)] text-[16px] font-extrabold text-white shadow-[0_6px_14px_rgba(28,184,107,0.22)] transition hover:brightness-105"
                      >
                        Continue Learning →
                      </button>
                    </div>
                  </div>
                </div>

                {/* ENGLISH CARD */}
                <div className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[32px] border-[5px] border-white/95 bg-white shadow-[0_5px_18px_rgba(217,133,0,0.10)] transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-[52%] w-full shrink-0 overflow-hidden bg-[#fffaf0]">
                    <img
                      src="/assets/dashboard/eng.png"
                      alt="English learning"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col justify-between px-[18px] pb-[12px] pt-[10px]">
                    <div className="flex min-h-[68px] items-center justify-between gap-[10px]">
                      <div className="flex min-w-0 items-center gap-[12px]">
                        <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#ffc638_0%,#f5a500_100%)] shadow-[0_4px_9px_rgba(235,157,0,0.18)]">
                          <BookIcon className="h-[40px] w-[40px]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[21px] font-black leading-tight tracking-[-0.02em] text-[#0c347a]">
                            English
                          </h3>
                          <p className="mt-[4px] text-[13px] font-bold leading-[1.25] text-[#6782a2]">
                            Read, write, and discover amazing stories!
                          </p>
                        </div>
                      </div>
                      <div className="flex h-[68px] min-w-[72px] shrink-0 flex-col items-center justify-center rounded-[16px] bg-[#fff2d5] px-[10px] text-center">
                        <p className="text-[17px] font-black leading-none text-[#d98500]">
                          {englishAnswered} / {englishTarget}
                        </p>
                        <p className="mt-[5px] text-[11px] font-bold text-[#5c7a97]">done</p>
                      </div>
                    </div>
                    <div className="mt-[8px] shrink-0">
                      <div className="mb-[9px] h-[6px] w-full overflow-hidden rounded-full bg-[#fae8c6]">
                        <div
                          className="h-full rounded-full bg-[#f4a61d]"
                          style={{ width: `${(englishAnswered / englishTarget) * 100}%` }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenJourney('english')}
                        className="flex h-[48px] w-full items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#ffc233_0%,#f2a20a_100%)] text-[16px] font-extrabold text-white shadow-[0_6px_14px_rgba(242,162,10,0.22)] transition hover:brightness-105"
                      >
                        Explore Lessons →
                      </button>
                    </div>
                  </div>
                </div>

                {/* KEEP GOING MASCOT CARD (DENGAN BACKGROUND CARDMIMO, FRAME DECORATIVE, & MIMO PROPORSIONAL) */}
                <div className="relative h-full min-h-0 overflow-visible text-center">
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px] border-[5px] border-white/95 bg-[linear-gradient(180deg,#f4faff_0%,#dcedff_100%)] shadow-[0_5px_18px_rgba(35,91,155,0.10)]">
                    <img
                      src="/assets/mimo/cardmimo.png"
                      alt="Card Background"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  {/* MASCOT MIMO */}
                  <img
                    src="/assets/mimo/mimo.png"
                    alt="Mascot Mimo"
                    className="pointer-events-none absolute -top-[30px] left-1/2 z-10 w-[112%] max-w-[280px] -translate-x-1/2 scale-110 object-contain drop-shadow-[0_10px_15px_rgba(18,72,143,0.15)]"
                  />

                  {/* TEXT PANEL - DECORATIVE LAYERED DESIGN */}
                  <div className="absolute bottom-[16px] left-[16px] right-[16px] z-20 flex min-h-[96px] flex-col items-center justify-center">
                    {/* Lapisan Blur Putih Belakang */}
                    <div className="absolute inset-0 rounded-[20px] bg-white/40 backdrop-blur-md" />
                    {/* Lapisan Warna Kuning Atas dengan Bintang */}
                    <div className="absolute inset-[3px] rounded-[17px] bg-[#fff1d2] shadow-[0_4px_12px_rgba(153,111,39,0.08)] border border-[#ffe9bc] flex items-center justify-between px-[14px]">

                      {/* Bintang Kiri */}
                      <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#ffc229] drop-shadow-sm" fill="currentColor">
                        <path d="M12 2L14.4 9.6H22.4L15.9 14.3L18.4 22L12 17.3L5.6 22L8.1 14.3L1.6 9.6H9.6L12 2Z" />
                      </svg>

                      {/* Teks Tengah */}
                      <div className="flex flex-col items-center flex-1 px-[8px]">
                        <h3 className="text-[19px] font-black leading-tight tracking-[-0.01em] text-[#0c347a]">
                          Keep Going!
                        </h3>
                        <p className="mt-[2px] text-[12.5px] font-bold leading-[1.35] text-[#183f7b]">
                          You&apos;re doing great<br /> on your learning journey!
                        </p>
                      </div>

                      {/* Bintang Kanan */}
                      <svg viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#ffc229] drop-shadow-sm" fill="currentColor">
                        <path d="M12 2L14.4 9.6H22.4L15.9 14.3L18.4 22L12 17.3L5.6 22L8.1 14.3L1.6 9.6H9.6L12 2Z" />
                      </svg>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. BOTTOM SECTION: LEARNING JOURNEY + STATS */}
            <div className="grid h-[min(21.8dvh,196px)] min-h-[158px] grid-cols-[1fr_0.38fr] gap-[14px]">
              {/* LEARNING JOURNEY TIMELINE */}
              <section className="flex h-full min-h-0 flex-col rounded-[28px] border border-white/80 bg-white/95 px-[24px] pb-[12px] pt-[16px] shadow-[0_8px_30px_rgba(23,68,130,0.06)]">
                <div className="flex h-[42px] shrink-0 items-center justify-between">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#fff4db]">
                      <TrophyIcon className="h-[22px] w-[22px] text-[#f2a20a]" />
                    </div>
                    <h2 className="text-[22px] font-black tracking-[-0.02em] text-[#0c347a]">
                      My Learning Journey
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenJourney('math')}
                    className="text-[14px] font-extrabold text-[#2a80f0] transition hover:text-[#115cc2]"
                  >
                    View All →
                  </button>
                </div>
                <div className="mt-[8px] flex min-h-0 flex-1 items-start justify-between px-[4px]">
                  <JourneyNode label="Numbers" subLabel="Mathematics" status="completed" />
                  <JourneyConnector status="completed" />
                  <JourneyNode label="Addition" subLabel="Mathematics" status="active" />
                  <JourneyConnector status="locked" />
                  <JourneyNode label="Subtraction" subLabel="Mathematics" status="locked" />
                  <JourneyConnector status="locked" />
                  <JourneyNode label="Multiplication" subLabel="Mathematics" status="locked" />
                  <JourneyConnector status="locked" />
                  <JourneyNode label="Division" subLabel="Mathematics" status="locked" />
                </div>
              </section>
              {/* STATS CARD */}
              <section className="flex h-full min-h-0 flex-col rounded-[28px] border border-white/80 bg-white/95 px-[20px] pb-[12px] pt-[16px] shadow-[0_8px_30px_rgba(23,68,130,0.06)]">
                <div className="flex h-[42px] shrink-0 items-center gap-[10px]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#fff4db]">
                    <svg viewBox="0 0 100 100" className="h-[22px] w-[22px] text-[#f2a20a]" fill="currentColor">
                      <path d="M50 0L62 38L100 50L62 62L50 100L38 62L0 50L38 38L50 0Z" />
                    </svg>
                  </div>
                  <h2 className="text-[22px] font-black tracking-[-0.02em] text-[#0c347a]">
                    My Stats
                  </h2>
                </div>
                <div className="mt-[8px] grid min-h-0 flex-1 grid-cols-3 items-center divide-x divide-[#e2eaf4]">
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <img src="/assets/sidebar/xp.png" className="h-[34px] w-[34px] object-contain" alt="XP" />
                    <div className="text-center">
                      <p className="text-[17px] font-black leading-tight text-[#143975]">
                        {totalXp.toLocaleString()}
                      </p>
                      <p className="text-[11px] font-bold text-[#6d84a3]">Total XP</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <img src="/assets/sidebar/streak.png" className="h-[34px] w-[34px] object-contain" alt="Streak" />
                    <div className="text-center">
                      <p className="text-[17px] font-black leading-tight text-[#143975]">{streakDays}</p>
                      <p className="text-[11px] font-bold text-[#6d84a3]">Day Streak</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <div className="flex h-[34px] w-[34px] items-center justify-center">
                      <svg viewBox="0 0 40 40" className="h-[34px] w-[34px]" fill="none">
                        <path d="M20 2L34 7V18C34 27 28 33 20 37C12 33 6 27 6 18V7L20 2Z" fill="#f5a623" stroke="#d98200" strokeWidth="1.5" />
                        <path d="M20 7L29 10V18C29 24 25 28 20 31C15 28 11 24 11 18V10L20 7Z" fill="#2c7be5" />
                        <path d="M20 11L22.5 16.2L28 17L24 21L25 26.5L20 23.8L15 26.5L16 21L12 17L17.5 16.2L20 11Z" fill="#fff2a8" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-[17px] font-black leading-tight text-[#143975]">{badges}</p>
                      <p className="text-[11px] font-bold text-[#6d84a3]">Badges</p>
                    </div>
                  </div>
                </div>
              </section>
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
        <img
          src={icon}
          alt=""
          className="h-[31px] w-[31px] object-contain transition-transform duration-200 group-hover:scale-[1.05]"
        />
      </div>
      <span className={`whitespace-nowrap text-[15px] font-extrabold tracking-[-0.01em] ${active ? 'text-[#0d3b82]' : 'text-white'}`}>
        {label}
      </span>
    </Link>
  );
}

// =========================================================
// JOURNEY COMPONENTS
// =========================================================
function JourneyNode({
  label,
  subLabel,
  status,
}: {
  label: string;
  subLabel: string;
  status: 'completed' | 'active' | 'locked';
}) {
  return (
    <div className="relative z-10 flex w-[100px] shrink-0 flex-col items-center text-center">
      <div
        className={`flex h-[50px] w-[50px] items-center justify-center rounded-full border-[3.5px] shadow-sm transition-all
          ${status === 'completed' ? 'border-[#b9f0cd] bg-[linear-gradient(180deg,#4cc97f_0%,#32ac65_100%)] text-white' : ''}
          ${status === 'active' ? 'border-[#bde3ff] bg-[linear-gradient(180deg,#2b9aff_0%,#116bf2_100%)] text-white ring-4 ring-[#e4f1ff]' : ''}
          ${status === 'locked' ? 'border-[#e1eaf5] bg-[#edf3f9] text-[#9eb1c7]' : ''}
        `}
      >
        {status === 'completed' && <span className="text-[22px] font-black">✓</span>}
        {status === 'active' && <BookIconOutline className="h-[24px] w-[24px]" />}
        {status === 'locked' && (
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
            <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        )}
      </div>
      <p className={`mt-[8px] whitespace-nowrap text-[13px] font-black leading-tight ${status === 'locked' ? 'text-[#879ab3]' : 'text-[#0c347a]'}`}>
        {label}
      </p>
      <p className="mt-[2px] whitespace-nowrap text-[10.5px] font-bold leading-tight text-[#627a99]">
        {subLabel}
      </p>
    </div>
  );
}
function JourneyConnector({ status }: { status: 'completed' | 'locked' }) {
  return (
    <div
      className={`relative z-0 -mx-[8px] mt-[22px] h-[6px] min-w-[12px] flex-1 rounded-full ${
        status === 'completed' ? 'bg-[#3ec073]' : 'bg-[#e2eaf5]'
      }`}
    />
  );
}

// =========================================================
// ICONS
// =========================================================
function BookIconOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 2H4v2h16V2zm1 3H3c-.6 0-1 .4-1 1v2c0 2.2 1.8 4 4 4h1.1c1.3 2.4 3.7 4 6.4 4s5.1-1.6 6.4-4H21c2.2 0 4-1.8 4-4V6c0-.6-.4-1-1-1zm-1 3v.1c0 1.1-.9 2-2 2h-1.6c-.3-1.4-.9-2.7-1.8-3.9H20v1.8zM4 8.1V6h3.4c-.9 1.2-1.5 2.5-1.8 3.9H4c-1.1 0-2-.9-2-2zM12 17c-2.8 0-5.2-1.8-6-4.5h12c-.8 2.7-3.2 4.5-6 4.5zM15 19v2h-6v-2H6v4h12v-4h-3z" />
    </svg>
  );
}
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
'use client';

import { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header';
import { regionLabel, nodeTitle } from '../lib/regions';
import { UI_TEXT, useAppLocale } from '../lib/i18n';

const DEBUG_CALIBRATION = false;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// =========================================================
// TYPES
// =========================================================

type NodeStatus = 'completed' | 'active' | 'locked';

interface Point {
  x: number;
  y: number;
}

interface RegionData {
  id: string;
  x: number;
  y: number;
}

interface JourneyNodeTemplate {
  id: string;
  order: number;
  regionId: string;
  title: string;
  x: number;
  y: number;
}

interface JourneyNodeData extends JourneyNodeTemplate {
  lessonId: string;
  status: NodeStatus;
}

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

type ProgressResponse = {
  profile: {
    displayName: string;
    gradeLevel: number;
    totalXp: number;
  };
  summary: {
    totalXp: number;
  };
  lessonProgress: {
    sessionId: string;
    lesson: {
      id: string;
      title: string;
      slug: string;
    };
    status: 'IN_PROGRESS' | 'COMPLETED' | 'ABANDONED';
  }[];
};

// =========================================================
// MATH WORLD
// =========================================================

const mathRegions: RegionData[] = [
  { id: 'mr1', x: 22, y: 92 },
  { id: 'mr2', x: 20, y: 66 },
  { id: 'mr3', x: 86, y: 50 },
  { id: 'mr4', x: 28, y: 30 },
  { id: 'mr5', x: 50, y: 7 },
];

const mathNodeTemplates: JourneyNodeTemplate[] = [
  { id: 'm1', order: 1, regionId: 'mr1', title: 'Counting & Numbers', x: 62, y: 93 },
  { id: 'm2', order: 2, regionId: 'mr1', title: 'Place Value', x: 47, y: 85 },
  { id: 'm3', order: 3, regionId: 'mr2', title: 'Addition', x: 55, y: 77 },
  { id: 'm4', order: 4, regionId: 'mr2', title: 'Subtraction', x: 38, y: 70 },
  { id: 'm5', order: 5, regionId: 'mr3', title: 'Fractions', x: 77, y: 58 },
  { id: 'm6', order: 6, regionId: 'mr3', title: 'Decimals', x: 60, y: 46 },
  { id: 'm7', order: 7, regionId: 'mr4', title: 'Percentages', x: 47, y: 38 },
  { id: 'm8', order: 8, regionId: 'mr4', title: 'Multiplication', x: 72, y: 32 },
  { id: 'm9', order: 9, regionId: 'mr5', title: 'Division', x: 64, y: 18 },
];

const mathPathPoints: Point[] = [
  { x: 66, y: 99 },
  { x: 62, y: 93 },
  { x: 54, y: 89 },
  { x: 47, y: 85 },
  { x: 54, y: 80 },
  { x: 55, y: 77 },
  { x: 46, y: 74 },
  { x: 38, y: 70 },
  { x: 44, y: 67 },
  { x: 52, y: 65 },
  { x: 61, y: 64 },
  { x: 70, y: 62 },
  { x: 77, y: 58 },
  { x: 74, y: 54 },
  { x: 66, y: 50 },
  { x: 62, y: 48 },
  { x: 60, y: 46 },
  { x: 58, y: 42 },
  { x: 52, y: 39 },
  { x: 47, y: 38 },
  { x: 52, y: 35 },
  { x: 60, y: 35 },
  { x: 68, y: 33 },
  { x: 72, y: 32 },
  { x: 72, y: 29 },
  { x: 70, y: 26 },
  { x: 66, y: 22 },
  { x: 64, y: 18 },
  { x: 70, y: 15 },
  { x: 73, y: 13 },
];

// =========================================================
// ENGLISH WORLD
// =========================================================

const englishRegions: RegionData[] = [
  { id: 'er1', x: 20, y: 70 },
  { id: 'er2', x: 85, y: 68 },
  { id: 'er3', x: 22, y: 40 },
  { id: 'er4', x: 80, y: 22 },
  { id: 'er5', x: 30, y: 8 },
];

const englishNodeTemplates: JourneyNodeTemplate[] = [
  { id: 'e1', order: 1, regionId: 'er1', title: 'Alphabet & Phonics', x: 55, y: 94 },
  { id: 'e2', order: 2, regionId: 'er1', title: 'Pronunciation', x: 45, y: 87 },
  { id: 'e3', order: 3, regionId: 'er2', title: 'Vocabulary', x: 71, y: 76 },
  { id: 'e4', order: 4, regionId: 'er2', title: 'Parts of Speech', x: 55, y: 67 },
  { id: 'e5', order: 5, regionId: 'er3', title: 'Synonyms', x: 40, y: 57 },
  { id: 'e6', order: 6, regionId: 'er3', title: 'Grammar & Tenses', x: 51, y: 48 },
  { id: 'e7', order: 7, regionId: 'er4', title: 'Conversations', x: 72, y: 43 },
  { id: 'e8', order: 8, regionId: 'er4', title: 'Listening', x: 68, y: 35 },
  { id: 'e9', order: 9, regionId: 'er5', title: 'Speaking', x: 41, y: 27 },
];

const englishPathPoints: Point[] = [
  { x: 55, y: 100 },
  { x: 55, y: 94 },
  { x: 52, y: 91 },
  { x: 46, y: 88 },
  { x: 45, y: 87 },
  { x: 42, y: 84 },
  { x: 44, y: 82 },
  { x: 53, y: 81 },
  { x: 65, y: 79 },
  { x: 71, y: 76 },
  { x: 67, y: 72 },
  { x: 60, y: 69 },
  { x: 55, y: 67 },
  { x: 51, y: 63 },
  { x: 48, y: 60 },
  { x: 43, y: 58 },
  { x: 40, y: 57 },
  { x: 39, y: 53 },
  { x: 43, y: 50 },
  { x: 51, y: 48 },
  { x: 61, y: 47 },
  { x: 70, y: 45 },
  { x: 72, y: 43 },
  { x: 70, y: 40 },
  { x: 63, y: 39 },
  { x: 59, y: 37 },
  { x: 68, y: 35 },
  { x: 65, y: 32 },
  { x: 58, y: 31 },
  { x: 51, y: 30 },
  { x: 45, y: 28 },
  { x: 41, y: 27 },
  { x: 36, y: 24 },
  { x: 33, y: 21 },
  { x: 27, y: 18.5 },
  { x: 26, y: 17.5 },
];

// =========================================================
// SMOOTH JOURNEY PATH
// =========================================================

function createJourneyPath(points: Point[]) {
  if (points.length < 2) return '';

  let d = `M ${points[0].x} ${points[0].y}`;
  const tension = 6;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const prev = points[i - 1] ?? p0;
    const next = points[i + 2] ?? p1;

    const cp1x = p0.x + (p1.x - prev.x) / tension;
    const cp1y = p0.y + (p1.y - prev.y) / tension;
    const cp2x = p1.x - (next.x - p0.x) / tension;
    const cp2y = p1.y - (next.y - p0.y) / tension;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }

  return d;
}

// =========================================================
// BUILD LIVE NODES FROM GRADE & PROGRESS
// =========================================================

function buildLiveNodes(
  templates: JourneyNodeTemplate[],
  subjectKey: 'math' | 'eng',
  gradeLevel: number,
  completedLessonIds: Set<string>,
): JourneyNodeData[] {
  const safeGrade = Math.min(Math.max(gradeLevel, 1), 6);
  let foundActive = false;

  return templates.map((tpl) => {
    const padOrder = String(tpl.order).padStart(2, '0');
    const lessonId = `lesson_g${safeGrade}_${subjectKey}_${padOrder}`;

    let status: NodeStatus;
    if (completedLessonIds.has(lessonId)) {
      status = 'completed';
    } else if (!foundActive) {
      status = 'active';
      foundActive = true;
    } else {
      status = 'locked';
    }

    return {
      ...tpl,
      title: nodeTitle(tpl.id, safeGrade),
      lessonId,
      status,
    };
  });
}

// =========================================================
// MAIN PAGE CONTENT
// =========================================================

function JourneyPageContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [locale] = useAppLocale();
  const t = UI_TEXT[locale];

  const subjectParam = searchParams.get('subject');
  const activeSubject: 'math' | 'english' =
    subjectParam === 'english' ? 'english' : 'math';

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState<MeResponse | null>(null);
  const [progress, setProgress] = useState<ProgressResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [playClick] = useSound('/assets/sounds/click.mp3', {
    volume: 0.5,
  });

  useEffect(() => {
    async function loadJourneyProgress() {
      const token = localStorage.getItem('accessToken');
      const storedUserId = localStorage.getItem('userId');

      if (!token || !storedUserId) {
        router.replace('/login');
        return;
      }

      try {
        setLoading(true);
        const meRes = await fetch(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!meRes.ok) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userId');
          router.replace('/login');
          return;
        }

        const meData: MeResponse = await meRes.json();
        setUser(meData);

        const progressRes = await fetch(`${API_BASE_URL}/progress/users/${meData.id}`);
        if (progressRes.ok) {
          const progressData: ProgressResponse = await progressRes.json();
          setProgress(progressData);
        } else {
          setProgress(null);
        }
      } catch (err) {
        console.error('Journey load error:', err);
      } finally {
        setLoading(false);
      }
    }

    void loadJourneyProgress();
  }, [router]);

  const handleSubjectChange = (subject: 'math' | 'english') => {
    playClick();
    router.replace(`/journey?subject=${subject}`, { scroll: false });
  };

  const displayName =
    progress?.profile.displayName ?? user?.learnerProfile?.displayName ?? 'Explorer';
  const gradeLevel =
    progress?.profile.gradeLevel ?? user?.learnerProfile?.gradeLevel ?? 1;
  const totalXp = progress?.summary.totalXp ?? 0;
  const streakDays = 7;

  const completedLessonIds = useMemo(() => {
    const ids = new Set<string>();
    for (const item of progress?.lessonProgress ?? []) {
      if (item.status === 'COMPLETED') {
        ids.add(item.lesson.id);
      }
    }
    return ids;
  }, [progress]);

  const nodes = useMemo(() => {
    if (activeSubject === 'math') {
      return buildLiveNodes(mathNodeTemplates, 'math', gradeLevel, completedLessonIds);
    }
    return buildLiveNodes(englishNodeTemplates, 'eng', gradeLevel, completedLessonIds);
  }, [activeSubject, gradeLevel, completedLessonIds]);

  const regions = activeSubject === 'math' ? mathRegions : englishRegions;
  const pathPoints = activeSubject === 'math' ? mathPathPoints : englishPathPoints;
  const routePath = createJourneyPath(pathPoints);

  useEffect(() => {
    if (loading || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const activeNode = nodes.find((n) => n.status === 'active');

    if (activeNode) {
      const targetScroll =
        (activeNode.y / 100) * container.scrollHeight - container.clientHeight / 2;
      container.scrollTop = Math.max(0, targetScroll);
    } else {
      container.scrollTop = 0;
    }
  }, [activeSubject, loading, nodes]);

  const handleNodeClick = (node: JourneyNodeData) => {
    playClick();
    if (node.status !== 'locked') {
      router.push(
        `/battle?subject=${activeSubject}&lessonId=${node.lessonId}&regionId=${node.regionId}&grade=${gradeLevel}`
      );
    }
  };

  const handleCanvasDebugClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!DEBUG_CALIBRATION) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    console.log(`{ x: ${x.toFixed(0)}, y: ${y.toFixed(0)} },`);
  };

  if (loading) {
    return (
      <main className="flex h-[100dvh] items-center justify-center bg-[#dff4ff]">
        <div className="text-center">
          <div className="mx-auto h-11 w-11 animate-spin rounded-full border-4 border-white border-t-[#2788ed]" />
          <p className="mt-4 text-sm font-bold text-[#5879a3]">
            {t.journey.loadingMap}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{
        backgroundImage: "url('/assets/dashboard/dashboard-bg.png')",
      }}
    >
      <Header
        totalXp={totalXp}
        streakDays={streakDays}
        displayName={displayName}
        gradeLevel={gradeLevel}
      />

      <div className="relative z-10 flex h-[calc(100dvh-72px)] min-h-0 gap-[14px] pl-0 pr-[22px] pt-[12px] pb-[34px]">
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
            <path d="M 0 0 H 154 C 180 0, 196 18, 196 44 V 368 C 196 404, 174 420, 134 428 C 90 437, 68 462, 62 498 C 58 520, 32 536, 0 540 Z" fill="url(#sidebarMainGradient)" />
            <path d="M 0 0 H 154 C 180 0, 196 18, 196 44 V 368 C 196 404, 174 420, 134 428 C 90 437, 68 462, 62 498 C 58 520, 32 536, 0 540 Z" fill="url(#sidebarSoftGlow)" />
            <path d="M 12 1.5 H 154 C 179 1.5, 194.5 19, 194.5 44 V 368 C 194.5 403, 173 418.5, 134 426.5 C 92 435, 70 458, 63 492" fill="none" stroke="url(#sidebarBorderGlow)" strokeWidth="2.2" strokeLinecap="round" />
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

        {/* MAIN CONTENT */}
        <section className="min-h-0 min-w-0 flex-1 overflow-hidden pt-[max(0px,calc(4.3dvh_-_12px))] pb-[max(0px,calc(4.3dvh_-_12px))]">
          <div className="relative mx-auto flex h-full w-full max-w-[1428px] min-h-0 flex-col gap-[14px]">
            {/* SUBJECT SELECTOR */}
            <div className="relative z-20 mb-[-40px] flex justify-center">
              <div className="flex items-center gap-[6px] rounded-full border border-white bg-white/90 p-[6px] shadow-[0_6px_18px_rgba(18,63,124,0.12)] backdrop-blur-sm">
                <button
                  onClick={() => handleSubjectChange('math')}
                  className={`flex h-[42px] min-w-[160px] items-center justify-center gap-[10px] rounded-full px-[20px] transition-all duration-300 ${
                    activeSubject === 'math'
                      ? 'bg-[linear-gradient(180deg,#4cc97f_0%,#32ac65_100%)] text-white shadow-[0_4px_12px_rgba(50,172,101,0.3)]'
                      : 'text-[#647d9d] hover:bg-[#f0f6fc]'
                  }`}
                >
                  <CalculatorIcon className={`h-[20px] w-[20px] ${activeSubject !== 'math' ? 'grayscale opacity-60' : ''}`} />
                  <span className="text-[15px] font-black tracking-[-0.01em]">
                    {t.journey.mathTab}
                  </span>
                </button>

                <button
                  onClick={() => handleSubjectChange('english')}
                  className={`flex h-[42px] min-w-[160px] items-center justify-center gap-[10px] rounded-full px-[20px] transition-all duration-300 ${
                    activeSubject === 'english'
                      ? 'bg-[linear-gradient(180deg,#ffca3a_0%,#f5a510_100%)] text-white shadow-[0_4px_12px_rgba(245,165,16,0.3)]'
                      : 'text-[#647d9d] hover:bg-[#f0f6fc]'
                  }`}
                >
                  <BookIcon className={`h-[22px] w-[22px] ${activeSubject !== 'english' ? 'grayscale opacity-60' : ''}`} />
                  <span className="text-[15px] font-black tracking-[-0.01em]">
                    {t.journey.englishTab}
                  </span>
                </button>
              </div>
            </div>

            {/* MAP SCROLL AREA */}
            <div
              ref={scrollContainerRef}
              className="relative z-10 min-h-0 flex-1 overflow-x-hidden overflow-y-auto rounded-[32px] border-[6px] border-white/95 bg-[#e0f4ff] shadow-[0_12px_36px_rgba(14,56,112,0.1)] overscroll-contain scroll-smooth transition-colors [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0c347a]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#0c347a]/40"
            >
              {/* MAP CANVAS */}
              <div
                className="relative isolate aspect-[2/3] w-full min-h-[1200px]"
                onClick={handleCanvasDebugClick}
              >
                {/* WORLD BACKGROUND */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 bg-center bg-no-repeat opacity-90 transition-all duration-500"
                  style={{
                    backgroundImage:
                      activeSubject === 'math'
                        ? "url('/assets/journey/mathmap.png')"
                        : "url('/assets/journey/engmap.png')",
                    backgroundSize: '100% 100%',
                  }}
                />

                {/* DASHED JOURNEY PATH */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
                >
                  <path
                    d={routePath}
                    fill="none"
                    stroke="#123f78"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2.4 1.6"
                    opacity="0.38"
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'd 0.5s ease-in-out' }}
                  />
                  <path
                    d={routePath}
                    fill="none"
                    stroke="#f7bd42"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2.4 1.6"
                    opacity="0.98"
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'd 0.5s ease-in-out' }}
                  />
                  <path
                    d={routePath}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2.4 1.6"
                    opacity="1"
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'd 0.5s ease-in-out' }}
                  />
                </svg>

                {DEBUG_CALIBRATION && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[7] h-full w-full"
                  >
                    {pathPoints.map((p, i) => (
                      <circle key={i} cx={p.x} cy={p.y} r="0.5" fill="red" />
                    ))}
                  </svg>
                )}

                {/* REGION LABELS */}
                <div className="pointer-events-none absolute inset-0 z-[6]">
                  {regions.map((region) => (
                    <div
                      key={region.id}
                      className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-500"
                      style={{
                        left: `${region.x}%`,
                        top: `${region.y}%`,
                      }}
                    >
                      <div className="flex items-center gap-[6px] rounded-full border border-white/80 bg-white/65 px-[11px] py-[5px] shadow-[0_3px_9px_rgba(12,48,102,0.10)] backdrop-blur-sm">
                        <span className="text-[11px] font-extrabold tracking-wide text-[#0f3470]">
                          {regionLabel(region.id, gradeLevel)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ADVENTURE NODES */}
                <div className="absolute inset-0 z-20">
                  {nodes.map((node) => {
                    const isActive = node.status === 'active';
                    const isCompleted = node.status === 'completed';

                    return (
                      <div
                        key={node.id}
                        className="absolute flex w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-500"
                        style={{
                          left: `${node.x}%`,
                          top: `${node.y}%`,
                        }}
                      >
                        {/* MIMO AVATAR */}
                        {isActive && (
                          <div className="absolute -top-[76px] z-30 flex justify-center pointer-events-none">
                            <img
                              src="/assets/mimo/mimo.png"
                              alt="Current Level"
                              className="h-[70px] object-contain drop-shadow-md animate-bounce-slow"
                            />
                          </div>
                        )}

                        {/* NODE BUTTON */}
                        <button
                          type="button"
                          disabled={node.status === 'locked'}
                          onClick={() => handleNodeClick(node)}
                          className={`relative z-20 flex h-[56px] w-[56px] items-center justify-center rounded-full border-[5px] shadow-[0_6px_14px_rgba(20,62,115,0.15)] transition-all hover:scale-110 active:scale-95
                            ${
                              isCompleted
                                ? 'border-[#b9f0cd] bg-[linear-gradient(180deg,#4cc97f_0%,#32ac65_100%)] text-white cursor-pointer'
                                : ''
                            }
                            ${
                              isActive
                                ? 'border-[#bde3ff] bg-[linear-gradient(180deg,#2b9aff_0%,#116bf2_100%)] text-white ring-[6px] ring-[#e4f1ff]/60 cursor-pointer'
                                : ''
                            }
                            ${
                              !isCompleted && !isActive
                                ? 'border-[#e1eaf5] bg-[#edf3f9] text-[#9eb1c7] opacity-95 cursor-not-allowed'
                                : ''
                            }
                          `}
                        >
                          {isCompleted && (
                            <span className="text-[28px] font-black">
                              ✓
                            </span>
                          )}

                          {isActive && (
                            <span className="text-[26px] font-black">
                              ★
                            </span>
                          )}

                          {!isCompleted && !isActive && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-[22px] w-[22px]"
                              fill="currentColor"
                            >
                              <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                          )}
                        </button>

                        {/* NODE LABEL */}
                        <div className="relative z-20 mt-[6px] flex max-w-[145px] flex-col items-center rounded-full border border-white/95 bg-white/90 px-[11px] py-[5px] shadow-[0_3px_9px_rgba(20,62,115,0.16)] backdrop-blur-sm">
                          <span className="text-center text-[10.5px] font-extrabold leading-tight text-[#0c347a]">
                            {node.title}
                          </span>

                          {isActive && (
                            <span className="mt-[3px] rounded-full bg-[#e4f1ff] px-[7px] py-[1px] text-[8px] font-extrabold uppercase tracking-wide text-[#2b9aff]">
                              {t.journey.currentBadge}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// =========================================================
// EXPORT WITH SUSPENSE BOUNDARY
// =========================================================

export default function JourneyPage() {
  return (
    <Suspense
      fallback={
        <main className="flex h-[100dvh] items-center justify-center bg-[#dff4ff]">
          <div className="text-sm font-bold text-[#5879a3]">Loading map...</div>
        </main>
      }
    >
      <JourneyPageContent />
    </Suspense>
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

      <span
        className={`whitespace-nowrap text-[15px] font-extrabold tracking-[-0.01em] ${
          active ? 'text-[#0d3b82]' : 'text-white'
        }`}
      >
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
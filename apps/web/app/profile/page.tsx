'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header';
import {
  type AppLocale,
  UI_TEXT,
  useAppLocale,
} from '../lib/i18n';

const defaultUserProfile = {
  name: 'Little Explorer',
  studentId: 'ML12345678',
  status: 'Active Learner',
  followers: 128,
  following: 96,
  totalXp: 2694,
  gradeLevel: 1,
  badges: 12,
  lessonsCompleted: 34,
  streak: 7,
  dailyGoalMin: 20,
};

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [locale, setLocale] = useAppLocale();
  const [languageNotice, setLanguageNotice] = useState<string | null>(null);
  const [userId] = useState<string | null>(() =>
    typeof window !== 'undefined' ? window.localStorage.getItem('userId') : null,
  );
  const [profile, setProfile] = useState(defaultUserProfile);

  const t = UI_TEXT[locale];

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (!token) return;

    let cancelled = false;

    fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return;
        const lp = data?.learnerProfile || data?.user?.learnerProfile;
        if (lp) {
          setProfile((prev) => ({
            ...prev,
            name: lp.displayName || prev.name,
            totalXp: typeof lp.totalXp === 'number' ? lp.totalXp : prev.totalXp,
            gradeLevel: typeof lp.gradeLevel === 'number' ? lp.gradeLevel : prev.gradeLevel,
          }));
          if (
            lp.preferredLanguage === 'id' ||
            lp.preferredLanguage === 'en' ||
            lp.preferredLanguage === 'zh'
          ) {
            setLocale(lp.preferredLanguage);
          }
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_BASE_URL]);

  async function handleLanguageChange(nextLocale: AppLocale) {
    playClick();
    setLocale(nextLocale);
    setLanguageNotice(UI_TEXT[nextLocale].profile.languageSaved);
    setTimeout(() => setLanguageNotice(null), 2500);

    if (userId) {
      try {
        await fetch(`${API_BASE_URL}/users/${userId}/language`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ language: nextLocale }),
        });
      } catch (err) {
        console.warn('Gagal menyinkronkan bahasa ke server:', err);
      }
    }
  }

  function handleLogout() {
    playClick();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    router.replace('/login');
  }

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/assets/dashboard/dashboard-bg.png')" }}
    >
      {/* HEADER COMPONENT */}
      <Header
        totalXp={profile.totalXp}
        streakDays={profile.streak}
        displayName={profile.name}
        gradeLevel={profile.gradeLevel}
      />

      {/* BODY (SIDEBAR + MAIN CONTENT) */}
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
        <section className="min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto rounded-[32px] border-[4px] border-white/50 bg-white/30 shadow-[0_12px_36px_rgba(14,56,112,0.1)] [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#0c347a]/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#0c347a]/40 transition-colors backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-[1428px] flex-col gap-[16px] p-[24px]">
            {/* 1. TOP HEADER SECTION */}
            <div className="relative mb-0 mt-[4px] pl-[6px]">
              <h1 className="text-[34px] font-black leading-none tracking-tight text-[#0c347a] flex items-center gap-2">
                {t.profile.title} <span className="text-[#ffca3a] text-[28px]">✨</span>
              </h1>
              <p className="mt-[4px] text-[15px] font-bold text-[#144799]">
                {t.profile.subtitle}
              </p>
            </div>

            {/* 2. TWO COLUMNS LAYOUT */}
            <div className="grid grid-cols-[400px_1fr] gap-[20px]">
              {/* LEFT COLUMN (CHARACTER & TIP) */}
              <div className="flex flex-col gap-[16px]">
                <div
                  className="relative flex flex-col items-center overflow-hidden rounded-[24px] border-[4px] border-white p-[20px] shadow-sm min-h-[480px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/assets/mimo/characterpodium.png')" }}
                >
                  <div className="absolute left-[16px] top-[16px] z-20 flex items-center gap-[6px] rounded-full bg-white/95 px-[14px] py-[6px] shadow-sm backdrop-blur-md">
                    <span className="text-[16px]">👕</span>
                    <span className="text-[14px] font-black text-[#0c347a]">{t.profile.myCharacter}</span>
                  </div>

                  <button
                    onClick={() => playClick()}
                    className="absolute right-[16px] top-[16px] z-20 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/95 text-[#2b9aff] shadow-sm backdrop-blur-md transition hover:bg-white hover:scale-105"
                    title="Edit Character"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                  </button>
                </div>

                {/* Mimo's Tip Box */}
                <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] border-[4px] border-white bg-gradient-to-br from-[#fff6dc] via-[#fff0c2] to-[#ffeaad] p-[22px] shadow-md">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30 blur-xl pointer-events-none" />

                  <div className="relative z-10 pr-[110px]">
                    <div className="flex items-center gap-[10px] mb-[10px]">
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-sm text-[22px]">
                        💡
                      </div>
                      <h4 className="text-[18px] font-black tracking-tight text-[#d98500]">{t.profile.mimoTipTitle}</h4>
                    </div>
                    <p className="text-[13px] font-bold leading-relaxed text-[#8a5f1a]">
                      {t.profile.mimoTipBody}
                    </p>
                  </div>

                  <div className="absolute -bottom-3 right-0 z-20 pointer-events-none">
                    <img
                      src="/assets/mimo/mimo.png"
                      alt="Mimo"
                      className="h-[140px] w-auto object-contain drop-shadow-[0_8px_16px_rgba(180,100,0,0.25)] animate-bounce-slow"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (INFO & SETTINGS) */}
              <div className="flex flex-col gap-[16px]">
                {/* 1. Profile Info Card */}
                <div className="flex items-center justify-between rounded-[20px] border-[4px] border-white bg-white p-[20px] shadow-sm">
                  <div className="flex items-center gap-[20px]">
                    <div className="relative flex h-[90px] w-[90px] items-center justify-center rounded-full border-[4px] border-[#97e0ff] bg-[#e4f1ff]">
                      <span className="text-[44px]">🧒</span>
                      <div className="absolute -top-[16px] text-[28px] drop-shadow-sm">👑</div>
                      <div className="absolute -bottom-[4px] -right-[4px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#ffca3a] border-[2px] border-white text-white">
                        <span className="text-[12px]">⭐</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-[10px]">
                        <h2 className="text-[22px] font-black text-[#0c347a]">{profile.name}</h2>
                        <span className="rounded-full bg-[#e6f7ee] px-[10px] py-[2px] text-[11px] font-extrabold text-[#1f9d63]">
                          {t.header.primary} {profile.gradeLevel}
                        </span>
                      </div>
                      <p className="mt-[2px] text-[12px] font-bold text-[#879ab3]">ID: {profile.studentId}</p>
                      <div className="mt-[8px] flex items-center gap-[14px] text-[12px] font-extrabold text-[#143975]">
                        <span>⭐ {profile.totalXp} XP</span>
                        <span>🔥 {profile.streak} {t.header.dayStreak}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Learning Preferences & Daily Goal */}
                <div className="grid grid-cols-2 gap-[16px]">
                  {/* Learning Preferences */}
                  <div className="rounded-[20px] border-[4px] border-white bg-white p-[20px] shadow-sm">
                    <div className="mb-[16px] flex items-center justify-between">
                      <div className="flex items-center gap-[10px]">
                        <span className="text-[20px]">🎛️</span>
                        <h2 className="text-[17px] font-black tracking-tight text-[#0c347a]">
                          {t.profile.learningPreferences}
                        </h2>
                      </div>
                      {languageNotice && (
                        <span className="rounded-full bg-[#e6f7ee] px-[10px] py-[3px] text-[11px] font-extrabold text-[#1f9d63]">
                          {languageNotice}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-[16px]">
                      {/* Language Select */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                          <span className="text-[18px]">🌎</span>
                          <span className="text-[14px] font-bold text-[#143975]">{t.profile.language}</span>
                        </div>
                        <div className="relative">
                          <select
                            value={locale}
                            onChange={(e) => handleLanguageChange(e.target.value as AppLocale)}
                            className="appearance-none rounded-full border-[2px] border-[#eef3f9] bg-[#f8fbff] px-[16px] py-[6px] pr-[32px] text-[13px] font-black text-[#0c347a] outline-none cursor-pointer focus:border-[#2b9aff]"
                          >
                            <option value="en">English (EN)</option>
                            <option value="id">Bahasa Indonesia (ID)</option>
                            <option value="zh" disabled>中文 Chinese (Coming Soon)</option>
                          </select>
                          <span className="absolute right-[12px] top-[10px] text-[#2b9aff] pointer-events-none">
                            <svg viewBox="0 0 20 20" className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 8L10 12L14 8" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Music & Sound Toggle */}
                      <div className="flex items-center justify-between mt-[4px]">
                        <div className="flex items-center gap-[10px]">
                          <span className="text-[18px]">🎵</span>
                          <span className="text-[14px] font-bold text-[#143975]">{t.profile.musicAndSound}</span>
                        </div>
                        <button
                          onClick={() => {
                            playClick();
                            setSoundEnabled(!soundEnabled);
                          }}
                          className={`relative flex h-[32px] w-[56px] items-center rounded-full p-[4px] transition-colors duration-300 ${soundEnabled ? 'bg-[#2b9aff]' : 'bg-[#dce7f2]'}`}
                        >
                          <div className={`h-[24px] w-[24px] rounded-full bg-white shadow-sm transition-transform duration-300 ${soundEnabled ? 'translate-x-[24px]' : 'translate-x-0'}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Daily Goal */}
                  <div className="relative rounded-[20px] border-[4px] border-white bg-white p-[20px] shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between mb-[6px]">
                      <div className="flex items-center gap-[10px]">
                        <span className="text-[22px]">🎯</span>
                        <h2 className="text-[17px] font-black tracking-tight text-[#0c347a]">{t.profile.dailyGoal}</h2>
                      </div>
                      <button
                        onClick={() => playClick()}
                        className="rounded-full border-[2px] border-[#eef3f9] bg-[#f8fbff] px-[12px] py-[4px] text-[12px] font-extrabold text-[#2a80f0] transition hover:bg-[#eef5fd]"
                      >
                        {t.profile.editGoal}
                      </button>
                    </div>

                    <p className="mb-[16px] text-[12px] font-bold text-[#879ab3]">{t.profile.dailyGoalSub}</p>

                    <div className="flex w-[180px] items-center gap-[16px] rounded-[16px] border-[2px] border-[#eef3f9] bg-[#fcfdff] p-[12px] relative z-10">
                      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#e4f1ff] text-[20px]">
                        📅
                      </div>
                      <div>
                        <p className="text-[18px] font-black leading-none text-[#143975]">{profile.dailyGoalMin} min</p>
                        <p className="mt-[2px] text-[11px] font-bold text-[#879ab3]">{t.profile.perDay}</p>
                      </div>
                    </div>

                    <img
                      src="/assets/mimo/mimo.png"
                      className="absolute -bottom-[10px] -right-[10px] h-[100px] w-auto object-contain drop-shadow-md"
                      alt="Mimo"
                    />
                  </div>
                </div>

                {/* 3. Account Settings (Bottom Row) */}
                <div className="rounded-[20px] border-[4px] border-white bg-white p-[20px] shadow-sm">
                  <div className="mb-[20px] flex items-center gap-[10px]">
                    <span className="text-[20px] text-[#2b9aff]">⚙️</span>
                    <h2 className="text-[17px] font-black tracking-tight text-[#0c347a]">{t.profile.accountSettings}</h2>
                  </div>

                  <div className="grid grid-cols-5 gap-[12px]">
                    <SettingButton icon="/assets/profile/changepassword.png" label={t.profile.changePassword} onClick={playClick} />
                    <SettingButton icon="/assets/profile/editprofile.png" label={t.profile.editProfile} onClick={playClick} />
                    <SettingButton icon="/assets/profile/privacysettings.png" label={t.profile.privacySettings} onClick={playClick} />
                    <SettingButton icon="/assets/profile/helpandsupport.png" label={t.profile.helpAndSupport} onClick={playClick} />
                    <SettingButton icon="/assets/profile/logout.png" label={t.profile.logOut} onClick={handleLogout} isDanger />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SettingButton({ icon, label, onClick, isDanger = false }: { icon: string; label: string; onClick?: () => void; isDanger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-[12px] rounded-[16px] border-[2px] border-[#eef3f9] bg-white p-[16px] text-center transition hover:border-[#dce7f2] hover:bg-[#fcfdff] ${isDanger ? 'hover:border-[#ffcdd2] hover:bg-[#fff5f5]' : ''}`}
    >
      <div className={`flex h-[72px] w-[72px] items-center justify-center rounded-[20px] ${isDanger ? 'bg-[#ffebee]' : 'bg-[#f0f6fc]'}`}>
        <img src={icon} alt={label} className="h-[56px] w-[56px] object-contain drop-shadow-sm" />
      </div>

      <span className={`text-[12px] font-black leading-tight ${isDanger ? 'text-[#e53935]' : 'text-[#143975]'}`}>
        {label}
      </span>
    </button>
  );
}

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
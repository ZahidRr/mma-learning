'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
import {
  type AppLocale,
  LANGUAGE_OPTIONS,
  UI_TEXT,
  useAppLocale,
} from '../lib/i18n';

// =========================================================
// TYPES
// =========================================================
type HeaderProps = {
  totalXp: number;
  streakDays: number;
  displayName: string;
  gradeLevel: number;
};

// =========================================================
// MAIN COMPONENT
// =========================================================
export default function Header({ totalXp, streakDays, displayName, gradeLevel }: HeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  const [locale, updateLocale] = useAppLocale();
  const t = UI_TEXT[locale];

  const langMenuRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function handleSelectLanguage(nextLocale: AppLocale) {
    playClick();
    updateLocale(nextLocale);
    setLangDropdownOpen(false);

    const userId = window.localStorage.getItem('userId');
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
    <header className="relative z-50 h-[72px] shrink-0 px-[18px] pt-[10px]">
      <div className="flex h-[58px] items-center justify-between rounded-[22px] border border-white/95 bg-white/95 px-[20px] shadow-[0_6px_18px_rgba(23,68,130,0.09)] backdrop-blur-md">
        
        {/* BRAND LOGO (Logo MindVerse 93px dengan efek pop-out) */}
        <div className="flex items-center -ml-[4px]">
          <img 
            src="/assets/opening/MMA MindVerse Playful Logo.png" 
            alt="MindVerse Logo" 
            className="relative z-10 h-[93px] w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* HEADER RIGHT */}
        <div className="flex items-center gap-[14px] sm:gap-[18px]">
          <HeaderStatus icon="/assets/sidebar/xp.png" value={`${totalXp.toLocaleString()} XP`} />
          <HeaderStatus icon="/assets/sidebar/streak.png" value={`${streakDays} ${t.header.dayStreak}`} hideMobile />
          
          <div className="hidden h-[28px] w-[1.5px] bg-[#e1eaf3] sm:block" />

          {/* LANGUAGE SWITCHER (Sebelah kiri ikon Notification) */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => {
                playClick();
                setLangDropdownOpen((prev) => !prev);
                setDropdownOpen(false);
              }}
              aria-label={t.header.selectLanguage}
              title={t.header.selectLanguage}
              className={`flex h-[38px] items-center gap-[6px] rounded-full border px-[11px] text-[#183b7a] transition ${
                langDropdownOpen
                  ? 'border-[#7ec8ff] bg-[#e8f6ff]'
                  : 'border-[#e3eef8] bg-[#f7fbff] hover:border-[#bde3ff] hover:bg-[#edf7ff]'
              }`}
            >
              {/* Globe / Language Icon */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[19px] w-[19px] text-[#1c6dd0]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              <span className="text-[12px] font-black tracking-wide text-[#123d7e]">
                {locale.toUpperCase()}
              </span>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={`h-[13px] w-[13px] text-[#4b72a8] transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 z-50 mt-[10px] w-[225px] rounded-[18px] border border-[#dce8f5] bg-white p-[8px] shadow-[0_12px_28px_rgba(20,62,120,0.16)]">
                <div className="border-b border-[#edf3f9] px-[10px] py-[6px]">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7c92b0]">
                    {t.header.selectLanguage}
                  </p>
                </div>

                <div className="mt-[6px] flex flex-col gap-[4px]">
                  {LANGUAGE_OPTIONS.map((opt) => {
                    const isActive = locale === opt.code;
                    return (
                      <button
                        key={opt.code}
                        type="button"
                        disabled={opt.disabled}
                        onClick={() => handleSelectLanguage(opt.code)}
                        className={`flex w-full items-center justify-between rounded-[12px] px-[10px] py-[8px] text-left transition ${
                          opt.disabled
                            ? 'cursor-not-allowed opacity-55'
                            : isActive
                              ? 'bg-[#e8f6ff] text-[#0d3b82]'
                              : 'text-[#173e78] hover:bg-[#f4f9ff]'
                        }`}
                      >
                        <div className="flex items-center gap-[9px] min-w-0">
                          <span
                            className={`inline-flex h-[24px] w-[30px] shrink-0 items-center justify-center rounded-[7px] text-[11px] font-black tracking-wide ${
                              isActive
                                ? 'bg-[#1c6dd0] text-white'
                                : 'bg-[#edf4fc] text-[#2c5c9e]'
                            }`}
                          >
                            {opt.shortCode}
                          </span>
                          <span className="truncate text-[13px] font-extrabold">
                            {opt.nativeName}
                          </span>
                        </div>

                        {isActive && (
                          <svg
                            viewBox="0 0 20 20"
                            className="h-[16px] w-[16px] shrink-0 text-[#1c6dd0]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 10.5L8.5 14L15 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* NOTIFICATION */}
          <button
            type="button"
            onClick={() => playClick()}
            aria-label="Notifications"
            className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full text-[#183b7a] transition hover:bg-[#edf7ff]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[24px] w-[24px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8.75C18 5.57 15.31 3 12 3S6 5.57 6 8.75v3.18c0 .89-.29 1.76-.83 2.48L4 16h16l-1.17-1.59A4.16 4.16 0 0 1 18 11.93V8.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.75 18.25a2.35 2.35 0 0 0 4.5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute right-[5px] top-[4px] h-[9px] w-[9px] rounded-full border-2 border-white bg-[#ff3b5c]" />
          </button>
          
          {/* PROFILE DROPDOWN */}
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => {
                playClick();
                setDropdownOpen((prev) => !prev);
                setLangDropdownOpen(false);
              }}
              className="group flex items-center gap-[8px] rounded-full py-[2px] pl-[2px] pr-[4px] transition hover:bg-[#f0f8ff]"
            >
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#bde3ff] bg-[#e4f3ff] shadow-sm">
                <img src="/assets/sidebar/profile.png" alt={displayName} className="h-[38px] w-[38px] object-contain" />
              </div>
              <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-[16px] w-[16px] text-[#173e78] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-50 mt-[10px] w-[190px] rounded-[18px] border border-[#dce8f5] bg-white p-[8px] shadow-[0_12px_28px_rgba(20,62,120,0.16)]">
                <div className="border-b border-[#edf3f9] px-[12px] py-[8px]">
                  <p className="truncate text-[13px] font-black text-[#123d7e]">{displayName}</p>
                  <p className="text-[11px] font-bold text-[#7c92b0]">{t.header.primary} {gradeLevel}</p>
                </div>
                <button type="button" onClick={handleLogout} className="mt-[4px] flex w-full items-center gap-[8px] rounded-[12px] px-[12px] py-[8px] text-left text-[12px] font-extrabold text-[#e03e52] transition hover:bg-[#fff2f4]">
                  <span>{t.header.logOut}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// =========================================================
// SUB-COMPONENT: HEADER STATUS
// =========================================================
function HeaderStatus({ icon, value, hideMobile = false }: { icon: string; value: string; hideMobile?: boolean }) {
  return (
    <div className={`items-center gap-[8px] ${hideMobile ? 'hidden sm:flex' : 'flex'}`}>
      <img src={icon} alt="" className="h-[30px] w-[30px] shrink-0 object-contain" />
      <span className="whitespace-nowrap text-[14px] font-black text-[#143a78]">{value}</span>
    </div>
  );
}
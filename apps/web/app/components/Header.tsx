'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';

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
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  function handleLogout() {
    playClick();
    localStorage.removeItem('accessToken');
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
        <div className="flex items-center gap-[18px]">
          <HeaderStatus icon="/assets/sidebar/xp.png" value={`${totalXp.toLocaleString()} XP`} />
          <HeaderStatus icon="/assets/sidebar/streak.png" value={`${streakDays} Day Streak`} hideMobile />
          
          <div className="hidden h-[28px] w-[1.5px] bg-[#e1eaf3] sm:block" />
          
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
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                playClick();
                setDropdownOpen((prev) => !prev);
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
                  <p className="text-[11px] font-bold text-[#7c92b0]">Primary {gradeLevel}</p>
                </div>
                <button type="button" onClick={handleLogout} className="mt-[4px] flex w-full items-center gap-[8px] rounded-[12px] px-[12px] py-[8px] text-left text-[12px] font-extrabold text-[#e03e52] transition hover:bg-[#fff2f4]">
                  <span>Log Out</span>
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
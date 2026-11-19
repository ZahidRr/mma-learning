'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useSound from 'use-sound';
import Header from '../components/Header'; // <-- Import komponen Header

// =========================================================
// MOCK DATA
// =========================================================
const userProfile = {
  name: 'Little Explorer',
  totalXp: 2692,
  streak: 7,
};

const myBadges = [
  { id: 1, name: 'Math Explorer', icon: '/assets/badges/math-badge.png', unlocked: true },
  { id: 2, name: 'Bookworm', icon: '/assets/badges/bookworm-badge.png', unlocked: true },
  { id: 3, name: 'Streak Master', icon: '/assets/badges/alwayscheckin-badge.png', unlocked: true },
  { id: 4, name: 'Word Wizard', icon: null, unlocked: false },
  { id: 5, name: 'Geometry Genius', icon: null, unlocked: false },
  { id: 6, name: 'Learning Star', icon: null, unlocked: false },
];

const storeItems = [
  { id: 1, name: 'Cute Cat Pet', price: 500, icon: '/assets/store/cat-pet.png' },
  { id: 2, name: 'Magic Wand', price: 750, icon: '/assets/store/magic-wand.png' },
  { id: 3, name: 'Explorer Backpack', price: 1000, icon: '/assets/store/backpack.png' },
  { id: 4, name: 'Royal Crown', price: 1500, icon: '/assets/store/crown.png' },
];

const recentRewards = [
  { id: 1, title: 'Earned a Badge: Bookworm', desc: 'Complete 10 lessons', time: '2 days ago', icon: '/assets/badges/bookworm-badge.png' },
  { id: 2, title: 'Unlocked Reward: Magic Wand', desc: 'From Reward Store', time: '3 days ago', icon: '/assets/store/magic-wand.png' },
  { id: 3, title: 'Earned 100 XP', desc: 'Complete a lesson', time: '3 days ago', icon: '/assets/badges/star-champion.png' },
];

// =========================================================
// PAGE COMPONENT
// =========================================================
export default function RewardsPage() {
  const pathname = usePathname();
  const [playClick] = useSound('/assets/sounds/click.mp3', { volume: 0.5 });

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-[#72c9fa] bg-[length:100%_100%] bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/assets/dashboard/dashboard-bg.png')" }}
    >
      {/* =================================================
          HEADER
      ================================================== */}
      <Header 
        totalXp={userProfile.totalXp} 
        streakDays={userProfile.streak} 
        displayName={userProfile.name} 
        gradeLevel={1} 
      />

      <div className="relative z-10 flex h-[calc(100dvh-72px)] min-h-0 gap-[14px] pl-0 pr-[22px] pt-[12px] pb-[22px]">
        
        {/* ===============================================
            SIDEBAR (SVG Asli Melengkung)
        ================================================ */}
        <aside className="relative -mt-[4px] hidden h-full w-[198px] shrink-0 overflow-visible lg:block">
          <svg viewBox="0 0 110 85" aria-hidden="true" className="pointer-events-none absolute left-0 -top-[10px] z-40 h-[72px] w-[94px] overflow-visible">
            <path d="M0 0 H68 C52 22 34 38 0 58 Z" fill="#0a2e6e" opacity="0.28" />
            <path d="M0 0 H58 C48 16 28 24 0 26 Z" fill="#256f3a" />
            <path d="M18 4 C36 2 54 10 62 22 C42 26 26 18 18 4 Z" fill="#58b947" />
            <path d="M0 10 C20 8 38 18 44 32 C24 34 8 26 0 10 Z" fill="#3fa142" />
            <path d="M22 22 C36 22 50 30 54 42 C38 44 26 34 22 22 Z" fill="#74cf56" />
            <path d="M0 26 C16 28 28 38 30 52 C14 48 4 38 0 26 Z" fill="#52b548" />
            <path d="M0 42 C10 44 18 54 18 66 C6 62 0 52 0 42 Z" fill="#38943c" />
          </svg>
          <svg viewBox="0 0 198 540" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10 h-[530px] w-[198px] overflow-visible drop-shadow-[4px_8px_18px_rgba(12,62,138,0.18)]">
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
            <SidebarItem icon="/assets/sidebar/home.png" label="Home" href="/dashboard" active={pathname === '/dashboard'} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/learn.png" label="Learn" href="/learn" active={pathname?.startsWith('/learn')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/journey.png" label="Journey" href="/journey" active={pathname?.startsWith('/journey')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/progress.png" label="Progress" href="/progress" active={pathname?.startsWith('/progress')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/rewards.png" label="Rewards" href="/rewards" active={pathname?.startsWith('/rewards')} playClick={playClick} />
            <SidebarItem icon="/assets/sidebar/profile.png" label="Profile" href="/profile" active={pathname?.startsWith('/profile')} playClick={playClick} />
          </nav>
        </aside>

        {/* ===============================================
            MAIN CONTENT AREA (COMPACT / NO SCROLL)
        ================================================ */}
        <section className="min-w-0 flex-1 flex flex-col pl-[6px] gap-[14px]">

          {/* TITLE BUBBLE */}
          <div className="shrink-0 inline-flex flex-col justify-center rounded-[28px] bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_60%,rgba(255,255,255,0.3)_100%)] backdrop-blur-md px-[28px] py-[12px] shadow-[0_4px_12px_rgba(20,62,115,0.06)] border border-white/50 w-[540px]">
            <div className="flex items-center gap-[12px]">
              <span className="text-[26px]">🎁</span>
              <h1 className="text-[28px] font-black leading-none text-[#0f3066] flex items-center gap-2">
                My Rewards <span className="text-[20px] text-[#ffca3a]">✨</span>
              </h1>
            </div>
            <p className="mt-[6px] pl-[40px] text-[13px] font-bold text-[#45628a]">
              Collect badges, earn rewards, and reach new milestones!
            </p>
          </div>

          {/* CONTENT GRID WRAPPER (Compact, fit 100vh) */}
          <div className="flex-1 min-h-0 flex flex-col gap-[14px] overflow-hidden pr-[4px]">
            
            {/* TOP ROW: BADGES & MILESTONES */}
            <div className="shrink-0 h-[46%] grid grid-cols-[1.6fr_1fr] gap-[14px]">
              
              {/* MY BADGES */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-[0_6px_16px_rgba(20,62,115,0.06)] border border-[#eef3f9] flex flex-col">
                <div className="flex items-center justify-between mb-[16px] shrink-0">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[22px]">🏅</span>
                    <h2 className="text-[18px] font-black text-[#0c347a]">My Badges</h2>
                    <span className="text-[16px] text-[#ffca3a]">✨</span>
                  </div>
                  <button onClick={() => playClick()} className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[14px] py-[6px] text-[12px] font-bold text-[#2a80f0] transition hover:bg-[#e4f1ff]">
                    12 / 30 Collected →
                  </button>
                </div>
                
                <div className="grid grid-cols-6 gap-[10px] items-center flex-1 pb-[8px]">
                  {myBadges.map((badge) => (
                    <div key={badge.id} className="flex flex-col items-center gap-[6px]">
                      {badge.unlocked ? (
                        <div className="flex h-[100px] w-[100px] items-center justify-center transition-transform hover:scale-105 hover:-translate-y-1">
                          {badge.icon ? (
                            <img src={badge.icon} alt={badge.name} className="h-full w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]" />
                          ) : (
                            <span className="text-[40px]">🏆</span>
                          )}
                        </div>
                      ) : (
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-[24px] bg-[#f8fafc] border-[2px] border-[#eef3f9] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                          <svg viewBox="0 0 24 24" className="h-[28px] w-[28px] text-[#c2d0df]" fill="currentColor">
                            <path d="M12 17a2 2 0 0 0 2-2c0-1.11-.89-2-2-2a2 2 0 0 0-2 2c0 1.11.89 2 2 2zm6-7h-1V8c0-2.76-2.24-5-5-5S7 5.24 7 8v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-6-5c1.66 0 3 1.34 3 3v2H9V8c0-1.66 1.34-3 3-3zm6 14H6V12h12v10z"/>
                          </svg>
                        </div>
                      )}
                      <span className={`text-center text-[11.5px] font-black leading-tight max-w-[80px] ${badge.unlocked ? 'text-[#0c347a]' : 'text-[#879ab3]'}`}>
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MY MILESTONES */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-[0_6px_16px_rgba(20,62,115,0.06)] border border-[#eef3f9] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[22px]">🏆</span>
                    <h2 className="text-[18px] font-black text-[#0c347a]">My Milestones</h2>
                  </div>
                  <button onClick={() => playClick()} className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[14px] py-[6px] text-[12px] font-bold text-[#2a80f0] transition hover:bg-[#e4f1ff]">
                    View All →
                  </button>
                </div>
                
                {/* Highlighted Milestone Card */}
                <div className="relative flex-1 rounded-[24px] bg-[linear-gradient(135deg,#f0fdf4_0%,#e1fadd_100%)] border-[2.5px] border-[#86efac] p-[16px] flex items-center overflow-hidden">
                  
                  {/* Efek Sinar Bintang (Sunburst) di Belakang Badge */}
                  <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[160px] h-[160px] pointer-events-none opacity-[0.25]">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
                      <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="#ffca3a" />
                      <path d="M15 15 L45 45 L85 15 L55 45 L85 85 L55 55 L15 85 L45 55 Z" fill="#ffca3a" />
                    </svg>
                  </div>
                  
                  {/* Kilauan (Sparkles) Manual */}
                  <div className="absolute left-[20px] top-[20px] text-[16px] text-[#ffca3a] animate-pulse">✨</div>
                  <div className="absolute left-[130px] bottom-[20px] text-[12px] text-[#ffca3a] animate-pulse">✨</div>
                  <div className="absolute right-[80px] top-[14px] text-[16px] text-[#ffca3a] animate-pulse">✨</div>

                  <div className="flex items-center gap-[18px] z-10 w-full pl-[10px] pr-[14px]">
                    {/* Gambar Badge */}
                    <div className="shrink-0 flex h-[100px] w-[100px] items-center justify-center relative">
                      <img src="/assets/badges/math-badge.png" alt="Math Explorer" className="h-full w-full object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(234,179,8,0.5)] transition-transform hover:scale-110" />
                    </div>
                    
                    {/* Teks & Progress Bar */}
                    <div className="flex-1 mt-[8px]">
                      <div className="flex items-center justify-between mb-[2px]">
                        <h3 className="text-[18px] font-black text-[#0c347a] flex items-center gap-1 drop-shadow-sm">
                          Math Explorer
                        </h3>
                      </div>
                      <p className="text-[12px] font-bold text-[#647d9d] mb-[12px]">Master 5 math skills</p>
                      
                      <div className="flex items-center gap-[12px]">
                        <div className="flex-1 h-[10px] overflow-hidden rounded-full bg-[#dcfce7]">
                          <div className="h-full rounded-full bg-[#22c55e]" style={{ width: '100%' }} />
                        </div>
                        <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#22c55e] text-white shadow-sm">
                          <span className="text-[14px] font-black">✓</span>
                        </div>
                      </div>
                      <p className="mt-[6px] text-[12px] font-black text-[#16a34a]">5 / 5</p>
                    </div>
                  </div>
                  
                  {/* Completed Stamp (Digeser ke dalam agar tidak terpotong) */}
                  <div className="absolute right-[14px] top-[18px] z-20 rotate-[-12deg] rounded-md border-[2.5px] border-[#22c55e] px-[10px] py-[4px] bg-white shadow-[0_4px_12px_rgba(34,197,94,0.2)] transform transition-transform hover:scale-105">
                    <span className="text-[13px] font-black tracking-wider text-[#22c55e] uppercase">Completed!</span>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM ROW: STORE & RECENT */}
            <div className="flex-1 min-h-0 grid grid-cols-[1.6fr_1fr] gap-[14px]">
              
              {/* REWARD STORE */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-[0_6px_16px_rgba(20,62,115,0.06)] border border-[#eef3f9] flex flex-col justify-between">
                <div className="flex items-start justify-between mb-[10px]">
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <span className="text-[22px]">🏪</span>
                      <h2 className="text-[18px] font-black text-[#0c347a]">Reward Store</h2>
                    </div>
                    <p className="mt-[2px] text-[12px] font-bold text-[#647d9d] pl-[32px]">Use your XP to unlock exciting rewards!</p>
                  </div>
                  <div className="flex items-center gap-[6px] font-black text-[#143975] text-[14px]">
                    My XP: {userProfile.totalXp.toLocaleString()} <span className="text-[18px] text-[#ffca3a] drop-shadow-sm">⭐</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-[14px] flex-1">
                  {storeItems.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-between rounded-[20px] border-[2px] border-[#eef3f9] p-[12px] transition-transform hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(20,62,115,0.08)]">
                      <div className="flex h-[60px] w-full items-center justify-center rounded-[16px] bg-[#f8fbff]">
                        {item.icon ? (
                          <img src={item.icon} alt={item.name} className="h-[46px] object-contain drop-shadow-sm" />
                        ) : (
                          <span className="text-[32px]">🎁</span>
                        )}
                      </div>
                      <h4 className="text-center text-[11px] font-black text-[#0c347a] h-[28px] leading-tight flex items-center justify-center mt-[4px]">{item.name}</h4>
                      <div className="flex items-center gap-[4px] mb-[8px]">
                        <span className="text-[12px] text-[#ffca3a]">⭐</span>
                        <span className="text-[12px] font-black text-[#143975]">{item.price.toLocaleString()}</span>
                      </div>
                      <button onClick={() => playClick()} className="w-full rounded-full bg-[linear-gradient(180deg,#2b9aff_0%,#116bf2_100%)] py-[6px] text-[12px] font-black text-white shadow-[0_4px_12px_rgba(43,154,255,0.25)] transition-all hover:brightness-110 active:scale-95">
                        Redeem
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* RECENT REWARDS */}
              <div className="rounded-[24px] bg-white p-[20px] shadow-[0_6px_16px_rgba(20,62,115,0.06)] border border-[#eef3f9] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[22px] text-[#647d9d]">🕒</span>
                    <h2 className="text-[18px] font-black text-[#0c347a]">Recent Rewards</h2>
                  </div>
                  <button onClick={() => playClick()} className="inline-flex items-center gap-1 rounded-full bg-[#f0f6fc] px-[14px] py-[6px] text-[12px] font-bold text-[#2a80f0] transition hover:bg-[#e4f1ff]">
                    View All →
                  </button>
                </div>

                <div className="flex flex-col flex-1 justify-center">
                  {recentRewards.map((reward, index) => (
                    <div key={reward.id} className={`flex items-center gap-[14px] py-[10px] ${index !== recentRewards.length - 1 ? 'border-b border-[#eef3f9]' : ''}`}>
                      <div className="shrink-0 flex h-[48px] w-[48px] items-center justify-center rounded-[14px] p-[2px]">
                        {reward.icon ? (
                          <img src={reward.icon} alt={reward.title} className="h-full w-full object-contain drop-shadow-sm transition-transform hover:scale-105" />
                        ) : (
                          <span className="text-[24px]">🎁</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-[13px] font-black text-[#0c347a]">{reward.title}</p>
                        <p className="truncate mt-[2px] text-[11px] font-bold text-[#879ab3]">{reward.desc}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-[10px] font-extrabold text-[#94a8c1]">{reward.time}</span>
                      </div>
                    </div>
                  ))}
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
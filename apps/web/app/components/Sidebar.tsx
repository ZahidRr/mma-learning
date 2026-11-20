'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UI_TEXT, useAppLocale } from '../lib/i18n';

export default function Sidebar() {
  const pathname = usePathname();
  const [locale] = useAppLocale();
  const t = UI_TEXT[locale];

  return (
    <aside className="relative hidden h-full w-[198px] shrink-0 overflow-visible lg:block -mt-[4px]">
      {/* SVG Background & Dedaunan Sidebar */}
      <svg viewBox="0 0 110 85" className="pointer-events-none absolute left-0 -top-[10px] z-40 h-[72px] w-[94px] overflow-visible">
        <path d="M0 0 H68 C52 22 34 38 0 58 Z" fill="#0a2e6e" opacity="0.28" />
        <path d="M0 0 H58 C48 16 28 24 0 26 Z" fill="#256f3a" />
        <path d="M18 4 C36 2 54 10 62 22 C42 26 26 18 18 4 Z" fill="#58b947" />
        <path d="M0 10 C20 8 38 18 44 32 C24 34 8 26 0 10 Z" fill="#3fa142" />
        <path d="M22 22 C36 22 50 30 54 42 C38 44 26 34 22 22 Z" fill="#74cf56" />
        <path d="M0 26 C16 28 28 38 30 52 C14 48 4 38 0 26 Z" fill="#52b548" />
        <path d="M0 42 C10 44 18 54 18 66 C6 62 0 52 0 42 Z" fill="#38943c" />
      </svg>

      <svg viewBox="0 0 198 500" className="pointer-events-none absolute left-0 top-0 z-10 h-[495px] w-[198px] overflow-visible">
        <defs>
          <linearGradient id="sidebarMainGradient" x1="0.3" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#124ca1" />
            <stop offset="50%" stopColor="#1964c7" />
            <stop offset="76%" stopColor="#257ee0" />
            <stop offset="90%" stopColor="#6eb8f5" stopOpacity="0.9" />
            <stop offset="97%" stopColor="#dff3ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="sidebarSoftGlow" cx="82%" cy="52%" r="50%">
            <stop offset="0%" stopColor="#7ad0ff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7ad0ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sidebarRightEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6cb8ff" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#82ccff" stopOpacity="0.45" />
            <stop offset="82%" stopColor="#82ccff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#82ccff" stopOpacity="0" />
          </linearGradient>
          <filter id="cloudMistBlur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>
        <path d="M 0 0 H 156 C 180 0, 194 16, 194 40 V 344 C 194 374, 178 392, 144 400 C 104 410, 86 432, 78 468 C 72 486, 42 498, 0 500 Z" fill="url(#sidebarMainGradient)" />
        <path d="M 0 0 H 156 C 180 0, 194 16, 194 40 V 344 C 194 374, 178 392, 144 400 C 104 410, 86 432, 78 468 C 72 486, 42 498, 0 500 Z" fill="url(#sidebarSoftGlow)" />
        <path d="M 156 1 C 179 1, 193 16.5, 193 40 V 344 C 193 373, 177 391, 144 399 C 108 408, 89 428, 80 460" fill="none" stroke="url(#sidebarRightEdge)" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="38" cy="468" rx="52" ry="22" fill="#eef9ff" opacity="0.85" filter="url(#cloudMistBlur)" />
        <ellipse cx="22" cy="482" rx="40" ry="18" fill="#ffffff" opacity="0.9" filter="url(#cloudMistBlur)" />
      </svg>

      {/* MENU NAVIGASI DENGAN DETEKSI RUTE OTOMATIS */}
      <nav className="relative z-30 flex flex-col gap-[3px] px-[12px] pt-[24px]">
        <SidebarItem icon="/assets/sidebar/home.png" label={t.nav.home} href="/dashboard" active={pathname === '/dashboard'} />
        <SidebarItem icon="/assets/sidebar/learn.png" label={t.nav.learn} href="/learn" active={pathname?.startsWith('/learn')} />
        <SidebarItem icon="/assets/sidebar/journey.png" label={t.nav.journey} href="/journey" active={pathname?.startsWith('/journey')} />
        <SidebarItem icon="/assets/sidebar/progress.png" label={t.nav.progress} href="/progress" active={pathname?.startsWith('/progress')} />
        <SidebarItem icon="/assets/sidebar/rewards.png" label={t.nav.rewards} href="/rewards" active={pathname?.startsWith('/rewards')} />
        <SidebarItem icon="/assets/sidebar/profile.png" label={t.nav.profile} href="/profile" active={pathname?.startsWith('/profile')} />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, href, active = false }: { icon: string; label: string; href: string; active?: boolean }) {
  return (
    <Link
      href={href}
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
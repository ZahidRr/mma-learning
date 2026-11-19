'use client';

import { useState, useEffect } from 'react';

export default function OpeningAnimation({ children }: { children: React.ReactNode }) {
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [panDown, setPanDown] = useState(false);
  const [openGate, setOpenGate] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    // =========================================================================
    // FITUR SKIP ANIMASI DIMATIKAN SEMENTARA UNTUK DEVELOPMENT
    // Jika nanti mau di-deploy, hapus tanda komentar (/* dan */) di bawah ini:
    // =========================================================================
    /*
    const hasSeenOpening = sessionStorage.getItem('hasSeenOpening');
    if (hasSeenOpening) {
      setIsAnimationDone(true);
      return; 
    }
    sessionStorage.setItem('hasSeenOpening', 'true');
    */
    // =========================================================================

    // 1. Sedikit delay agar transisi CSS berjalan mulus
    const timer0 = setTimeout(() => {
      setIsLogoVisible(true); 
    }, 50);

    // 2. SCENE 1: Animasi logo membesar (1500ms) + ditahan (2000ms) = 3500ms.
    const timer1 = setTimeout(() => {
      setPanDown(true); 
    }, 3550); 

    // 3. SCENE 2: Kamera turun memakan waktu 1200ms (selesai di 4750ms).
    // Kita tahan gerbang tertutup selama 1.5 detik.
    // 4750ms + 1500ms = 6250ms.
    const timer2 = setTimeout(() => {
      setOpenGate(true); // Mulai buka gerbang kayu
    }, 6250);

    // 4. SCENE 3: Gerbang terbuka memakan waktu 1200ms.
    // 6250ms + 1200ms = 7450ms (dibulatkan jadi 7500ms).
    const timer3 = setTimeout(() => {
      setIsAnimationDone(true); // Animasi selesai
    }, 7500); 

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#dff2ff]">
      {/* 
        HALAMAN LOGIN (Children) 
      */}
      <div className="absolute inset-0 z-0">
        {children}
      </div>

      {/* OVERLAY ANIMASI UTAMA */}
      {!isAnimationDone && (
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
          
          {/* ==================================================
              SCENE 2 & 3: LAYER GERBANG KAYU (Wooden Gate)
          ================================================== */}
          <div 
            className="absolute inset-0 flex flex-col transition-transform duration-[1200ms] ease-in-out"
            style={{ 
              transform: panDown ? 'translateY(0%)' : 'translateY(100%)' 
            }}
          >
            {/* PANEL ATAS (Menggunakan z-10 agar logo menimpa panel bawah) */}
            <div 
              className="relative z-10 h-1/2 w-full transition-transform duration-[1200ms] ease-in-out"
              style={{ transform: openGate ? 'translateY(-100%)' : 'translateY(0%)' }}
            >
              <div 
                className="absolute bottom-0 left-0 h-[50vh] w-full bg-cover bg-bottom bg-no-repeat"
                style={{ backgroundImage: "url('/assets/opening/gateatas.png')" }}
              />
              
              {/* Logo MindVerse diperbesar (w-[520px]) */}
              <img 
                src="/assets/opening/MMA MindVerse Playful Logo.png" 
                alt="MindVerse" 
                className="absolute bottom-0 left-1/2 w-[520px] max-w-[90vw] -translate-x-1/2 translate-y-1/2 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* PANEL BAWAH */}
            <div 
              className="relative z-0 h-1/2 w-full transition-transform duration-[1200ms] ease-in-out"
              style={{ transform: openGate ? 'translateY(100%)' : 'translateY(0%)' }}
            >
              <div 
                className="absolute left-0 top-0 h-[50vh] w-full bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: "url('/assets/opening/gatebawah.png')" }}
              />
            </div>
          </div>

          {/* ==================================================
              SCENE 1: LAYER COMPANY INTRO
          ================================================== */}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-[1200ms] ease-in-out"
            style={{ 
              backgroundImage: "url('/assets/opening/bglogo.png')",
              transform: panDown ? 'translateY(-100%)' : 'translateY(0%)'
            }}
          >
            <div 
              className={`absolute z-0 h-[60vw] w-[60vw] max-h-[600px] max-w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_35%,transparent_70%)] transition-all duration-[1500ms] ease-out ${
                isLogoVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} 
            />

            <img 
              src="/assets/opening/logomma.png" 
              alt="MMA Logo" 
              className={`relative z-10 w-[480px] max-w-[85vw] object-contain drop-shadow-lg transition-all duration-[1500ms] ease-out ${
                isLogoVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            />
          </div>

        </div>
      )}
    </div>
  );
}
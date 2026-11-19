'use client';

import { useEffect } from 'react';
import useSound from 'use-sound';

export default function GlobalBGM() {
  const [playBGM, { sound }] = useSound('/assets/sounds/background.aac', {
    volume: 0.08,
    loop: true,
    format: ['aac'],
  });

  useEffect(() => {
    if (!sound) return;

    // Fungsi untuk mencoba memutar musik
    const tryAutoplay = () => {
      if (!sound.playing()) {
        playBGM();
      }
    };

    // 1. Coba putar secara otomatis saat komponen dimuat (Autoplay)
    // Browser mungkin akan membiarkan ini jika skor interaksi user di web ini sudah tinggi
    tryAutoplay();

    // 2. Fallback: Jika autoplay diblokir browser, tunggu interaksi pertama
    window.addEventListener('click', tryAutoplay);
    window.addEventListener('keydown', tryAutoplay);

    return () => {
      window.removeEventListener('click', tryAutoplay);
      window.removeEventListener('keydown', tryAutoplay);
    };
  }, [playBGM, sound]);

  return null;
}
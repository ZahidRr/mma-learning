export type AppLocale = 'en' | 'id' | 'zh';

export const DEFAULT_LOCALE: AppLocale = 'en';

export function getStoredLocale(): AppLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const saved = window.localStorage.getItem('appLanguage');
  if (saved === 'id' || saved === 'zh' || saved === 'en') return saved;
  return DEFAULT_LOCALE;
}

export function setStoredLocale(locale: AppLocale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('appLanguage', locale);
}

export const UI_TEXT = {
  en: {
    nav: {
      home: 'Home',
      learn: 'Learn',
      journey: 'Journey',
      progress: 'Progress',
      rewards: 'Rewards',
      profile: 'Profile',
    },
    profile: {
      title: 'My Profile',
      subtitle: 'Manage your account and view your progress!',
      myCharacter: 'My Character',
      mimoTipTitle: "Mimo's Tip!",
      mimoTipBody:
        "You're doing amazing explorer! Keep up the brilliant work every single day to unlock secret rewards and special badges! 🚀✨",
      learningPreferences: 'Learning Preferences',
      language: 'Language',
      languageSaved: 'Language updated!',
      musicAndSound: 'Music & Sound',
      dailyGoal: 'Daily Goal',
      editGoal: 'Edit Goal',
      dailyGoalSub: "Keep going! You're doing great!",
      perDay: 'per day',
      accountSettings: 'Account Settings',
      changePassword: 'Change Password',
      editProfile: 'Edit Profile',
      privacySettings: 'Privacy Settings',
      helpAndSupport: 'Help & Support',
      logOut: 'Log Out',
    },
    battle: {
      loadingAdventure: 'Loading your adventure...',
      loadingNext: 'Loading next question...',
      lockIn: "Lock in, you've got this! ✨",
      questionLabel: 'QUESTION',
      chooseAnswer: 'Choose the correct answer below!',
      takeYourTime: 'Take your time, little explorer!',
      checkAnswer: 'CHECK ANSWER',
      awesome: 'Awesome! 🎉',
      notQuiteRight: 'Not quite right!',
      correctDesc: 'You cooked with that answer! Keep it up.',
      incorrectDesc: "No worries! Let's try another one.",
      continueBtn: 'CONTINUE',
      gotItBtn: 'GOT IT',
      legendTitle: 'Absolute Legend!',
      legendDesc: 'You totally aced this adventure!',
      xpEarned: 'XP Earned! ✨',
      backToDashboard: 'BACK TO DASHBOARD',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      learn: 'Belajar',
      journey: 'Petualangan',
      progress: 'Progres',
      rewards: 'Hadiah',
      profile: 'Profil',
    },
    profile: {
      title: 'Profil Saya',
      subtitle: 'Kelola akunmu dan lihat perkembangan belajarmu!',
      myCharacter: 'Karakterku',
      mimoTipTitle: 'Tips Mimo!',
      mimoTipBody:
        'Kerja bagus, penjelajah kecil! Terus belajar setiap hari untuk membuka hadiah rahasia dan lencana spesial! 🚀✨',
      learningPreferences: 'Preferensi Belajar',
      language: 'Bahasa',
      languageSaved: 'Bahasa berhasil diubah!',
      musicAndSound: 'Musik & Suara',
      dailyGoal: 'Target Harian',
      editGoal: 'Ubah Target',
      dailyGoalSub: 'Terus semangat! Kamu hebat!',
      perDay: 'per hari',
      accountSettings: 'Pengaturan Akun',
      changePassword: 'Ubah Kata Sandi',
      editProfile: 'Edit Profil',
      privacySettings: 'Pengaturan Privasi',
      helpAndSupport: 'Bantuan & Dukungan',
      logOut: 'Keluar',
    },
    battle: {
      loadingAdventure: 'Memuat petualanganmu...',
      loadingNext: 'Memuat soal berikutnya...',
      lockIn: 'Fokus, kamu pasti bisa! ✨',
      questionLabel: 'PERTANYAAN',
      chooseAnswer: 'Pilih jawaban yang benar di bawah ini!',
      takeYourTime: 'Pelan-pelan saja, penjelajah kecil!',
      checkAnswer: 'PERIKSA JAWABAN',
      awesome: 'Keren Banget! 🎉',
      notQuiteRight: 'Kurang tepat!',
      correctDesc: 'Jawabanmu mantap! Lanjutkan terus.',
      incorrectDesc: 'Tidak apa-apa! Ayo coba soal berikutnya.',
      continueBtn: 'LANJUT',
      gotItBtn: 'PAHAM',
      legendTitle: 'Luar Biasa!',
      legendDesc: 'Kamu berhasil menaklukkan petualangan ini!',
      xpEarned: 'XP Didapat! ✨',
      backToDashboard: 'KEMBALI KE BERANDA',
    },
  },
  // Slot siap pakai untuk Chinese (sementara mewarisi en hingga konten zh diisi)
  zh: {
    nav: {
      home: '首页',
      learn: '学习',
      journey: '冒险地图',
      progress: '进度',
      rewards: '奖励',
      profile: '个人资料',
    },
    profile: {
      title: 'My Profile',
      subtitle: 'Manage your account and view your progress!',
      myCharacter: 'My Character',
      mimoTipTitle: "Mimo's Tip!",
      mimoTipBody:
        "You're doing amazing explorer! Keep up the brilliant work every single day to unlock secret rewards and special badges! 🚀✨",
      learningPreferences: 'Learning Preferences',
      language: 'Language',
      languageSaved: 'Language updated!',
      musicAndSound: 'Music & Sound',
      dailyGoal: 'Daily Goal',
      editGoal: 'Edit Goal',
      dailyGoalSub: "Keep going! You're doing great!",
      perDay: 'per day',
      accountSettings: 'Account Settings',
      changePassword: 'Change Password',
      editProfile: 'Edit Profile',
      privacySettings: 'Privacy Settings',
      helpAndSupport: 'Help & Support',
      logOut: 'Log Out',
    },
    battle: {
      loadingAdventure: 'Loading your adventure...',
      loadingNext: 'Loading next question...',
      lockIn: "Lock in, you've got this! ✨",
      questionLabel: 'QUESTION',
      chooseAnswer: 'Choose the correct answer below!',
      takeYourTime: 'Take your time, little explorer!',
      checkAnswer: 'CHECK ANSWER',
      awesome: 'Awesome! 🎉',
      notQuiteRight: 'Not quite right!',
      correctDesc: 'You cooked with that answer! Keep it up.',
      incorrectDesc: "No worries! Let's try another one.",
      continueBtn: 'CONTINUE',
      gotItBtn: 'GOT IT',
      legendTitle: 'Absolute Legend!',
      legendDesc: 'You totally aced this adventure!',
      xpEarned: 'XP Earned! ✨',
      backToDashboard: 'BACK TO DASHBOARD',
    },
  },
} as const;
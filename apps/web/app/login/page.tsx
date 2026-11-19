"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import useSound from "use-sound";
import OpeningAnimation from "../components/OpeningAnimation"; // Pastikan path ini sesuai dengan letak file Anda

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Inisialisasi efek suara klik
  const [playClick] = useSound("/assets/sounds/click.mp3", { volume: 0.5 });

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Mainkan suara saat tombol Log In ditekan (form di-submit)
    playClick();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Email atau password tidak sesuai.");
      }

      const data = await response.json();

      // SIMPAN ACCESS TOKEN & USER ID KE LOCAL STORAGE
      localStorage.setItem("accessToken", data.accessToken);
      
      // Asumsi respons login Anda mengembalikan objek `user` atau langsung `id`. 
      // Sesuaikan `data.user?.id` atau `data.id` dengan format API NestJS Anda.
      const userId = data.user?.id || data.id; 
      if (userId) {
         localStorage.setItem("userId", userId);
      }

      // Langsung menuju ke Dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Login gagal. Silakan coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <OpeningAnimation>
      <main className="relative h-[100dvh] overflow-hidden bg-[#dff2ff]">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/auth/login-bg.png')",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" />

        {/* =====================================================
            DESKTOP
        ====================================================== */}

        <div className="relative z-10 hidden h-full lg:block">
          <div
            className="
              absolute
              left-[63%]
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              xl:left-[68%]
              2xl:left-[63%]
            "
          >
            <LoginCard
              email={email}
              password={password}
              showPassword={showPassword}
              loading={loading}
              error={error}
              setEmail={setEmail}
              setPassword={setPassword}
              setShowPassword={setShowPassword}
              handleLogin={handleLogin}
              playClick={playClick} 
              onCreateAccount={() => {
                playClick();
                router.push("/register");
              }}
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            items-center
            justify-center
            px-4
            py-4
            lg:hidden
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

          <div className="relative z-10 w-full max-w-[430px]">
            <LoginCard
              email={email}
              password={password}
              showPassword={showPassword}
              loading={loading}
              error={error}
              setEmail={setEmail}
              setPassword={setPassword}
              setShowPassword={setShowPassword}
              handleLogin={handleLogin}
              playClick={playClick} 
              onCreateAccount={() => {
                playClick();
                router.push("/register");
              }}
            />
          </div>
        </div>
      </main>
    </OpeningAnimation>
  );
}

/* =========================================================
   TYPES
========================================================= */

type LoginCardProps = {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  error: string;

  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setShowPassword: (value: boolean) => void;

  handleLogin: (event: FormEvent<HTMLFormElement>) => void;
  onCreateAccount: () => void;
  playClick: () => void; 
};

/* =========================================================
   LOGIN CARD
========================================================= */

function LoginCard({
  email,
  password,
  showPassword,
  loading,
  error,
  setEmail,
  setPassword,
  setShowPassword,
  handleLogin,
  onCreateAccount,
  playClick,
}: LoginCardProps) {
  return (
    <section
      className="
        relative
        w-[440px]
        max-w-[calc(100vw-32px)]
        rounded-[30px]
        border
        border-[#dce5f2]
        bg-[#fffefa]/95
        p-[5px]
        shadow-[0_24px_65px_rgba(39,77,120,0.16)]
        backdrop-blur-[5px]
      "
    >
      {/* =====================================================
          INNER PANEL
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          items-center
          rounded-[26px]
          border
          border-[#edf2f7]
          bg-white/78
          px-[28px]
          pb-[28px]
          pt-[20px]
          sm:px-[30px]
        "
      >
        {/* =================================================
            AVATAR
        ================================================== */}

        <div className="flex w-full justify-center">
          <img
            src="/assets/auth/mimo-avatar.png"
            alt="Mimo"
            className="
              h-[132px]
              w-[166px]
              object-contain
              sm:h-[138px]
              sm:w-[174px]
            "
          />
        </div>

        {/* =================================================
            TITLE + SUBTITLE
        ================================================== */}

        <div className="mt-[-5px] w-full text-center">
          <h1
            className="
              text-[29px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.025em]
              text-[#173b86]
              sm:text-[31px]
            "
          >
            Welcome back!
            <span className="ml-2 text-[#f7bd2e]">✦</span>
          </h1>

          <p
            className="
              mt-[4px]
              text-[14px]
              font-semibold
              text-[#7d8bac]
            "
          >
            Log in to continue your learning journey.
          </p>
        </div>

        {/* =================================================
            FORM
        ================================================== */}

        <form
          onSubmit={handleLogin}
          className="
            mt-[24px]
            w-full
            max-w-[380px]
          "
        >
          {/* =================================================
              EMAIL
          ================================================== */}

          <div
            className="
              flex
              h-[50px]
              w-full
              items-center
              rounded-[14px]
              border
              border-[#dbe3ef]
              bg-white
              px-[14px]
              transition
              focus-within:border-[#7caef4]
              focus-within:ring-[3px]
              focus-within:ring-[#dcecff]
            "
          >
            <MailIcon />

            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email or Username"
              autoComplete="username"
              required
              className="
                auth-input
                ml-[12px]
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-[14px]
                font-semibold
                text-[#263f70]
                outline-none
                placeholder:font-medium
                placeholder:text-[#9ca9c2]
              "
            />
          </div>

          {/* =================================================
              PASSWORD
          ================================================== */}

          <div
            className="
              mt-[14px]
              flex
              h-[50px]
              w-full
              items-center
              rounded-[14px]
              border
              border-[#dbe3ef]
              bg-white
              px-[14px]
              transition
              focus-within:border-[#7caef4]
              focus-within:ring-[3px]
              focus-within:ring-[#dcecff]
            "
          >
            <LockIcon />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              required
              className="
                auth-input
                ml-[12px]
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-[14px]
                font-semibold
                text-[#263f70]
                outline-none
                placeholder:font-medium
                placeholder:text-[#9ca9c2]
              "
            />

            <button
              type="button"
              onClick={() => {
                playClick(); 
                setShowPassword(!showPassword);
              }}
              className="
                ml-2
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-[#8d98b7]
                transition
                hover:bg-[#f2f6fb]
                hover:text-[#6c79a3]
              "
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>

          {/* =================================================
              FORGOT PASSWORD
          ================================================== */}

          <div className="mt-[8px] flex w-full justify-end">
            <button
              type="button"
              onClick={() => {
                playClick(); 
              }}
              className="
                text-[13px]
                font-bold
                text-[#2477ea]
                transition
                hover:text-[#185ab7]
                hover:underline
              "
            >
              Forgot password?
            </button>
          </div>

          {/* =================================================
              ERROR
          ================================================== */}

          {error && (
            <div
              className="
                mt-3
                w-full
                rounded-xl
                border
                border-[#f4c7c7]
                bg-[#fff5f5]
                px-4
                py-2.5
                text-center
                text-[13px]
                font-semibold
                text-[#c84d4d]
              "
            >
              {error}
            </div>
          )}

          {/* =================================================
              LOGIN BUTTON
          ================================================== */}

          <button
            type="submit"
            disabled={loading}
            className="
              mt-[17px]
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              rounded-[15px]
              bg-[linear-gradient(180deg,#38a3f5_0%,#2178ed_100%)]
              px-5
              text-[18px]
              font-black
              tracking-[-0.015em]
              text-white
              shadow-[0_8px_20px_rgba(37,124,237,0.24)]
              transition
              duration-200
              hover:-translate-y-[1px]
              hover:shadow-[0_11px_24px_rgba(37,124,237,0.29)]
              active:translate-y-0
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? (
              "Logging in..."
            ) : (
              <>
                Log In
                <span className="ml-[10px] text-[22px] font-bold leading-none">
                  →
                </span>
              </>
            )}
          </button>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              my-[17px]
              flex
              w-full
              items-center
              gap-[12px]
            "
          >
            <div className="h-px flex-1 bg-[#d8e0eb]" />

            <span
              className="
                whitespace-nowrap
                text-[13px]
                font-semibold
                text-[#8592ad]
              "
            >
              New here?
            </span>

            <div className="h-px flex-1 bg-[#d8e0eb]" />
          </div>

          {/* =================================================
              CREATE ACCOUNT
          ================================================== */}

          <button
            type="button"
            onClick={onCreateAccount}
            className="
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              rounded-[15px]
              border-[1.7px]
              border-[#2479ef]
              bg-white/75
              px-5
              text-[17px]
              font-black
              tracking-[-0.015em]
              text-[#2474df]
              transition
              duration-200
              hover:bg-[#f3f8ff]
              active:bg-[#e9f3ff]
            "
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}

/* =========================================================
   ICONS
========================================================= */

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-[#97a2bf]"
      aria-hidden="true"
    >
      <path
        d="M4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5V16.5C19.5 17.3284 18.8284 18 18 18H6C5.17157 18 4.5 17.3284 4.5 16.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />

      <path
        d="M5.5 8L12 12.7L18.5 8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-[#97a2bf]"
      aria-hidden="true"
    >
      <path
        d="M8 10V8.2C8 5.88 9.79 4 12 4C14.21 4 16 5.88 16 8.2V10"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#97a2bf]"
      aria-hidden="true"
    >
      <path
        d="M2.7 12C4.3 8.8 7.6 6.75 12 6.75C16.4 6.75 19.7 8.8 21.3 12C19.7 15.2 16.4 17.25 12 17.25C7.6 17.25 4.3 15.2 2.7 12Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />

      <circle
        cx="12"
        cy="12"
        r="2.6"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#97a2bf]"
      aria-hidden="true"
    >
      <path
        d="M3 3L21 21"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M10.8 6.9C11.19 6.8 11.59 6.75 12 6.75C16.4 6.75 19.7 8.8 21.3 12C20.72 13.15 19.97 14.16 19.05 15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M14.15 14.15C13.61 14.69 12.84 15.02 12 15.02C10.35 15.02 9 13.67 9 12.02C9 11.18 9.33 10.41 9.87 9.87"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M6.13 6.12C4.61 7.23 3.39 8.75 2.7 12C4.3 15.2 7.6 17.25 12 17.25C13.45 17.25 14.77 17.03 15.96 16.61"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
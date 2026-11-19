"use client";

import {
  FormEvent,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import useSound from "use-sound";

/* =========================================================
   TEMPORARY LEARNING PLANS
   Nanti berasal dari database/API.
========================================================= */

const learningPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "Price soon",
    billing: "Learning essentials",
    description:
      "A simple way to start learning and build a steady study routine.",
    benefits: [
      "Core learning activities",
      "Student progress",
      "Practice exercises",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    price: "Price soon",
    billing: "More practice & progress",
    description:
      "More learning activities and practice to support consistent progress.",
    benefits: [
      "Everything in Starter",
      "More practice activities",
      "Extended progress insights",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Price soon",
    billing: "Complete learning experience",
    description:
      "A complete learning experience with access to all available features.",
    benefits: [
      "Everything in Plus",
      "Full learning access",
      "Additional learning features",
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function RegisterPage() {
  const router = useRouter();

  const [gradeLevel, setGradeLevel] = useState("1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [parentEmail, setParentEmail] = useState("");

  const [selectedPlan, setSelectedPlan] = useState("plus");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Inisialisasi efek suara klik
  const [playClick] = useSound("/assets/sounds/click.mp3", { volume: 0.5 });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    playClick();
    setIsLoading(true);

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      
      // Tembak API NestJS untuk membuat akun user baru
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parentEmail,
          password: password,
          displayName: username,
          gradeLevel: parseInt(gradeLevel, 10),
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mendaftar");
      }

      const data = await response.json();

      // Simpan userId ke localStorage agar Onboarding tahu akun mana yang sedang aktif
      localStorage.setItem("userId", data.id); 

      // Lanjut ke halaman Onboarding!
      router.push("/onboarding");
    } catch (error) {
      console.error("Error saat register:", error);
      alert("Gagal melakukan registrasi, silakan periksa kembali data Anda.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#dff2ff] lg:h-[100dvh] lg:overflow-hidden">
      {/* Background sama dengan Login */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/auth/login-bg.png')",
        }}
      />

      <div className="pointer-events-none fixed inset-0 bg-white/[0.02]" />

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="relative z-10 hidden h-full lg:block">
        <div
          className="
            absolute
            left-[66%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <RegisterCard
            gradeLevel={gradeLevel}
            username={username}
            password={password}
            parentEmail={parentEmail}
            selectedPlan={selectedPlan}
            showPassword={showPassword}
            isLoading={isLoading}
            setGradeLevel={setGradeLevel}
            setUsername={setUsername}
            setPassword={setPassword}
            setParentEmail={setParentEmail}
            setSelectedPlan={setSelectedPlan}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
            playClick={playClick}
            onLogin={() => {
              playClick();
              router.push("/login");
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
          min-h-[100dvh]
          items-center
          justify-center
          px-4
          py-6
          lg:hidden
        "
      >
        <div className="pointer-events-none fixed inset-0 bg-white/10 backdrop-blur-[1px]" />

        <div className="relative z-10 w-full max-w-[760px]">
          <RegisterCard
            gradeLevel={gradeLevel}
            username={username}
            password={password}
            parentEmail={parentEmail}
            selectedPlan={selectedPlan}
            showPassword={showPassword}
            isLoading={isLoading}
            setGradeLevel={setGradeLevel}
            setUsername={setUsername}
            setPassword={setPassword}
            setParentEmail={setParentEmail}
            setSelectedPlan={setSelectedPlan}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
            playClick={playClick}
            onLogin={() => {
              playClick();
              router.push("/login");
            }}
          />
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   TYPES
========================================================= */

type RegisterCardProps = {
  gradeLevel: string;
  username: string;
  password: string;
  parentEmail: string;
  selectedPlan: string;
  showPassword: boolean;
  isLoading: boolean;

  setGradeLevel: (value: string) => void;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  setParentEmail: (value: string) => void;
  setSelectedPlan: (value: string) => void;
  setShowPassword: (value: boolean) => void;

  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onLogin: () => void;
  playClick: () => void;
};

/* =========================================================
   REGISTER CARD
========================================================= */

function RegisterCard({
  gradeLevel,
  username,
  password,
  parentEmail,
  selectedPlan,
  showPassword,
  isLoading,
  setGradeLevel,
  setUsername,
  setPassword,
  setParentEmail,
  setSelectedPlan,
  setShowPassword,
  handleSubmit,
  onLogin,
  playClick,
}: RegisterCardProps) {
  const activePlan = learningPlans.find(
    (plan) => plan.id === selectedPlan,
  );

  return (
    <section
      className="
        relative
        w-[820px]
        max-w-[calc(100vw-32px)]
        rounded-[30px]
        border
        border-[#dce5f2]
        bg-[#fffefa]/95
        p-[5px]
        shadow-[0_24px_65px_rgba(39,77,120,0.17)]
        backdrop-blur-[6px]
      "
    >
      <div
        className="
          rounded-[26px]
          border
          border-[#edf2f7]
          bg-white/80
          px-[34px]
          pb-[28px]
          pt-[19px]
          sm:px-[38px]
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[700px]
            items-center
            gap-[16px]
          "
        >
          <img
            src="/assets/auth/mimo-avatar.png"
            alt="Mimo"
            className="
              h-[82px]
              w-[106px]
              shrink-0
              object-contain
            "
          />

          <div className="min-w-0 text-left">
            <h1
              className="
                text-[27px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.025em]
                text-[#173b86]
              "
            >
              Create your learning account
              <span className="ml-2 text-[#f7bd2e]">
                ✦
              </span>
            </h1>

            <p
              className="
                mt-[5px]
                text-[13px]
                font-semibold
                leading-[1.4]
                text-[#7d8bac]
              "
            >
              Set up your profile to start learning,
              practicing, and growing.
            </p>
          </div>
        </div>

        {/* =================================================
            FORM
        ================================================== */}

        <form
          onSubmit={handleSubmit}
          className="mt-[18px] w-full"
        >
          <div
            className="
              grid
              grid-cols-1
              gap-x-[15px]
              gap-y-[11px]
              md:grid-cols-2
            "
          >
            {/* Primary Level */}

            <InputShell>
              <SchoolIcon />

              <select
                value={gradeLevel}
                onChange={(event) =>
                  setGradeLevel(
                    event.target.value,
                  )
                }
                className="
                  ml-[11px]
                  h-full
                  min-w-0
                  flex-1
                  appearance-none
                  bg-transparent
                  text-[14px]
                  font-semibold
                  text-[#42577d]
                  outline-none
                "
              >
                <option value="1">
                  Primary 1
                </option>

                <option value="2">
                  Primary 2
                </option>

                <option value="3">
                  Primary 3
                </option>

                <option value="4">
                  Primary 4
                </option>

                <option value="5">
                  Primary 5
                </option>

                <option value="6">
                  Primary 6
                </option>
              </select>

              <ChevronDownIcon />
            </InputShell>

            {/* Student Username */}

            <InputShell>
              <UsernameIcon />

              <input
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Student Username"
                autoComplete="username"
                required
                className="
                  auth-input
                  ml-[11px]
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
            </InputShell>

            {/* Password */}

            <InputShell>
              <LockIcon />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Password"
                autoComplete="new-password"
                required
                className="
                  auth-input
                  ml-[11px]
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

              <PasswordButton
                visible={showPassword}
                onClick={() => {
                  playClick();
                  setShowPassword(!showPassword);
                }}
              />
            </InputShell>

            {/* Parent Email */}

            <InputShell>
              <MailIcon />

              <input
                type="email"
                value={parentEmail}
                onChange={(event) =>
                  setParentEmail(
                    event.target.value,
                  )
                }
                placeholder="Parent's Email"
                autoComplete="email"
                required
                className="
                  auth-input
                  ml-[11px]
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
            </InputShell>
          </div>

          {/* =================================================
              LEARNING PLAN
          ================================================== */}

          <div className="mt-[22px]">
            <div>
              <p
                className="
                  text-[14px]
                  font-extrabold
                  leading-tight
                  text-[#294b83]
                "
              >
                Choose your Learning Plan
              </p>

              <p
                className="
                  mt-[4px]
                  text-[11.5px]
                  font-semibold
                  text-[#8794ad]
                "
              >
                You can change your selection before
                payment.
              </p>
            </div>

            {/* =================================================
                PLAN CARDS
            ================================================== */}

            <div
              className="
                mt-[12px]
                grid
                grid-cols-1
                gap-[11px]
                sm:grid-cols-3
              "
            >
              {learningPlans.map((plan) => {
                const isSelected =
                  selectedPlan === plan.id;

                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setSelectedPlan(plan.id);
                    }}
                    className={`
                      relative
                      min-h-[94px]
                      rounded-[15px]
                      border-[1.5px]
                      px-[15px]
                      py-[14px]
                      text-left
                      transition
                      duration-200

                      ${
                        isSelected
                          ? "border-[#348df1] bg-[#f1f7ff] shadow-[0_5px_14px_rgba(52,141,241,0.11)]"
                          : "border-[#dce4ef] bg-white/80 hover:border-[#aacbf4] hover:bg-[#f9fcff]"
                      }
                    `}
                  >
                    {/* Popular Badge */}

                    {plan.recommended && (
                      <span
                        className="
                          absolute
                          right-[9px]
                          top-[9px]
                          rounded-full
                          bg-[#fff1bd]
                          px-[8px]
                          py-[3px]
                          text-[8.5px]
                          font-extrabold
                          text-[#b47700]
                        "
                      >
                        Popular
                      </span>
                    )}

                    {/* Plan Name */}

                    <p
                      className={`
                        pr-[52px]
                        text-[13.5px]
                        font-extrabold
                        leading-tight

                        ${
                          isSelected
                            ? "text-[#1768d5]"
                            : "text-[#36527c]"
                        }
                      `}
                    >
                      {plan.name}
                    </p>

                    {/* Plan Info */}

                    <div className="mt-[9px] flex items-end justify-between">
                      <div>
                        <p
                          className="
                            text-[12.5px]
                            font-extrabold
                            leading-tight
                            text-[#263f70]
                          "
                        >
                          {plan.price}
                        </p>

                        <p
                          className="
                            mt-[4px]
                            text-[10.5px]
                            font-semibold
                            leading-tight
                            text-[#8b97ae]
                          "
                        >
                          {plan.billing}
                        </p>
                      </div>

                      {isSelected && (
                        <div
                          className="
                            flex
                            h-[21px]
                            w-[21px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#348df1]
                            text-white
                          "
                        >
                          <CheckIcon />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                SELECTED PLAN INFORMATION
            ================================================== */}

            {activePlan && (
              <div
                className="
                  mt-[12px]
                  flex
                  items-center
                  gap-[13px]
                  rounded-[15px]
                  border
                  border-[#dce7f5]
                  bg-[linear-gradient(135deg,#f8fbff_0%,#f5f9ff_100%)]
                  px-[15px]
                  py-[14px]
                "
              >
                <div
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-[#e5f1ff]
                    text-[#2479ef]
                  "
                >
                  <PlanIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-[7px]
                    "
                  >
                    <p
                      className="
                        text-[12.5px]
                        font-extrabold
                        text-[#294b83]
                      "
                    >
                      {activePlan.name} Plan
                    </p>

                    <span
                      className="
                        rounded-full
                        bg-[#e5f1ff]
                        px-[8px]
                        py-[2px]
                        text-[9px]
                        font-extrabold
                        text-[#2474df]
                      "
                    >
                      Selected
                    </span>
                  </div>

                  <p
                    className="
                      mt-[3px]
                      text-[10.5px]
                      font-semibold
                      leading-[1.5]
                      text-[#7f8da8]
                    "
                  >
                    {activePlan.description}
                  </p>

                  <div
                    className="
                      mt-[6px]
                      flex
                      flex-wrap
                      gap-x-[16px]
                      gap-y-[4px]
                    "
                  >
                    {activePlan.benefits.map(
                      (benefit) => (
                        <span
                          key={benefit}
                          className="
                            flex
                            items-center
                            gap-[4px]
                            text-[10px]
                            font-semibold
                            text-[#697b9b]
                          "
                        >
                          <span className="text-[#36a66f]">
                            ✓
                          </span>

                          {benefit}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              CONTINUE
          ================================================== */}

          <button
            type="submit"
            disabled={isLoading}
            className="
              mt-[18px]
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              rounded-[15px]
              bg-[linear-gradient(180deg,#38a3f5_0%,#2178ed_100%)]
              px-5
              text-[17px]
              font-extrabold
              text-white
              shadow-[0_8px_20px_rgba(37,124,237,0.24)]
              transition
              duration-200
              hover:-translate-y-[1px]
              hover:shadow-[0_11px_24px_rgba(37,124,237,0.29)]
              active:translate-y-0
              disabled:opacity-70
            "
          >
            {isLoading ? "Creating Account..." : "Continue"}

            {!isLoading && (
              <span className="ml-[10px] text-[22px] leading-none">
                →
              </span>
            )}
          </button>

          {/* =================================================
              LOGIN LINK
          ================================================== */}

          <div
            className="
              mt-[13px]
              flex
              items-center
              justify-center
              gap-[5px]
              text-[12px]
            "
          >
            <span className="font-semibold text-[#8794ad]">
              Already have an account?
            </span>

            <button
              type="button"
              onClick={onLogin}
              className="
                font-extrabold
                text-[#2477ea]
                transition
                hover:text-[#185ab7]
                hover:underline
              "
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* =========================================================
   INPUT SHELL
========================================================= */

function InputShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        flex
        h-[49px]
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
      {children}
    </div>
  );
}

/* =========================================================
   PASSWORD BUTTON
========================================================= */

function PasswordButton({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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
        visible
          ? "Hide password"
          : "Show password"
      }
    >
      {visible ? (
        <EyeIcon />
      ) : (
        <EyeOffIcon />
      )}
    </button>
  );
}

/* =========================================================
   ICONS
========================================================= */

function UsernameIcon() {
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
        d="M5 8.5H19"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M5 15.5H19"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M9 4L7.5 20"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M16.5 4L15 20"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SchoolIcon() {
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
        d="M3 10L12 5L21 10L12 15L3 10Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />

      <path
        d="M6.5 12.2V16.2C8.2 18.1 10 19 12 19C14 19 15.8 18.1 17.5 16.2V12.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
        d="M4.5 7.5C4.5 6.67 5.17 6 6 6H18C18.83 6 19.5 6.67 19.5 7.5V16.5C19.5 17.33 18.83 18 18 18H6C5.17 18 4.5 17.33 4.5 16.5V7.5Z"
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

function ChevronDownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-[#99a5bc]"
      aria-hidden="true"
    >
      <path
        d="M7 9.5L12 14.5L17 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5.5C5 4.67 5.67 4 6.5 4H17.5C18.33 4 19 4.67 19 5.5V18.5C19 19.33 18.33 20 17.5 20H6.5C5.67 20 5 19.33 5 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />

      <path
        d="M8.5 8H15.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M8.5 12H15.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />

      <path
        d="M8.5 16H12.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
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
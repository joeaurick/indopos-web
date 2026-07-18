import { LoginBackground } from "@/features/auth/components/LoginBackground";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { LoginHero } from "@/features/auth/components/LoginHero";

export default function LoginPage() {
  return (
    <LoginBackground>
      <div
        className="
          relative
          grid
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[36px]
          border
          border-white/50
          bg-white/70
          shadow-2xl
          backdrop-blur-xl

          lg:grid-cols-2
        "
      >
        <LoginHero />
        <LoginForm />
      </div>
    </LoginBackground>
  );
}
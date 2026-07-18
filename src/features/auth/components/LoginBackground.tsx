import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function LoginBackground({
  children,
}: Props) {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-slate-100
        via-white
        to-teal-50
        p-6
      "
    >
      {/* Blur Background */}

      <div
        className="
          absolute
          -left-44
          -top-44
          h-[420px]
          w-[420px]
          rounded-full
          bg-teal-300/30
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -bottom-52
          -right-44
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-300/30
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/30
          blur-[200px]
        "
      />

      {children}
    </main>
  );
}
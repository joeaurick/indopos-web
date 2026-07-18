import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppTableHead({
  children,
}: Props) {
  return (
    <thead
      className="
        sticky
        top-0
        bg-[var(--hover)]
      "
    >
      {children}
    </thead>
  );
}
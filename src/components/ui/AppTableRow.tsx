import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export function AppTableRow({
  children,
  className,
}: Props) {
  return (
    <tr
      className={clsx(
        `
        border-b
        border-[var(--border)]
        transition-all
        hover:bg-[var(--hover)]
        `,
        className
      )}
    >
      {children}
    </tr>
  );
}
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export function AppTableCell({
  children,
  className,
}: Props) {
  return (
    <td
      className={clsx(
        `
        px-6
        py-4
        text-sm
        text-[var(--foreground)]
        `,
        className
      )}
    >
      {children}
    </td>
  );
}
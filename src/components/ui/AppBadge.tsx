import { ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "success"
  | "warning"
  | "danger"
  | "info";

type Props = {
  children: ReactNode;
  variant?: Variant;
};

export function AppBadge({
  children,
  variant = "info",
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",

        {
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300":
            variant === "success",

          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300":
            variant === "warning",

          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300":
            variant === "danger",

          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":
            variant === "info",
        }
      )}
    >
      {children}
    </span>
  );
}
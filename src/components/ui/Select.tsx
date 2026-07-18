import {
  SelectHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type Props =
  SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  className,
  children,
  ...props
}: Props) {
  return (
    <select
      {...props}
      className={cn(
        "w-full",
        "rounded-xl",
        "border",
        "border-slate-200",
        "bg-white",
        "px-4",
        "py-3",
        "outline-none",
        "transition-all",
        "focus:border-teal-600",
        "focus:ring-2",
        "focus:ring-teal-200",
        className
      )}
    >
      {children}
    </select>
  );
}
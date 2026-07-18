import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-xl",
        "bg-teal-700",
        "px-5",
        "py-3",
        "font-medium",
        "text-white",
        "transition-all",
        "duration-200",
        "hover:bg-teal-800",
        className
      )}
    >
      {children}
    </button>
  );
}
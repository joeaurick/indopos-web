import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: ReactNode;
  className?: string;
};

export function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-slate-200",
        "bg-white",
        "shadow-sm",
        "transition-all",
        "duration-200",
        "hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
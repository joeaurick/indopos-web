import {
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type Props =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  className,
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-[120px]",
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
    />
  );
}
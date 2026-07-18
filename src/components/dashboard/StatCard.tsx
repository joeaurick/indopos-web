import { ReactNode } from "react";
import {
  ArrowUpRight,
} from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
};

export function StatCard({
  title,
  value,
  icon,
  color,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* TOP ACCENT */}

      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: `linear-gradient(to right, ${color}, transparent)`,
        }}
      />

      {/* GLOW */}

      <div
        className="
          absolute
          -right-14
          -top-14
          h-44
          w-44
          rounded-full
          blur-[90px]
          opacity-10
        "
        style={{
          background: color,
        }}
      />

      <div className="relative flex items-start justify-between">

        <div className="flex-1">

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-[34px] font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          

        </div>

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:-rotate-6
          "
          style={{
            backgroundColor: `${color}15`,
            color,
          }}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}
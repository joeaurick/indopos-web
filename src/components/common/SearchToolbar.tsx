"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  rightSlot?: React.ReactNode;
};

export function SearchToolbar({
  value,
  placeholder = "Cari data...",
  onChange,
  rightSlot,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            pl-11
            pr-4
            outline-none
            transition
            focus:border-teal-500
          "
        />
      </div>

      {rightSlot && (
        <div className="flex items-center gap-3">
          {rightSlot}
        </div>
      )}

    </div>
  );
}
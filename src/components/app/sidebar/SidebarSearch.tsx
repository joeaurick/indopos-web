"use client";

import { Search } from "lucide-react";

import { useSidebarSearchStore } from "@/store/sidebar-search.store";

type Props = {
  collapsed: boolean;
};

export function SidebarSearch({
  collapsed,
}: Props) {
  const keyword =
    useSidebarSearchStore(
      (state) => state.keyword
    );

  const setKeyword =
    useSidebarSearchStore(
      (state) => state.setKeyword
    );

  if (collapsed) return null;

  return (
    <div className="px-4 pb-4">
      <div
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          px-3
          py-2
        "
      >
        <Search
          size={18}
          className="text-slate-400"
        />

        <input
          value={keyword}
          onChange={(e) =>
            setKeyword(
              e.target.value
            )
          }
          placeholder="Cari menu..."
          className="
            w-full
            bg-transparent
            text-sm
            outline-none
            placeholder:text-slate-400
          "
        />
      </div>
    </div>
  );
}
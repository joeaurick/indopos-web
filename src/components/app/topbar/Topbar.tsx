"use client";

import {
  Search,
  Bell,
  Settings,
  Moon,
} from "lucide-react";

import { TopbarProfile } from "./TopbarProfile";
import { TopbarClock } from "./TopbarClock";

export function Topbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-20
        shrink-0
        items-center
        justify-between
        border-b
        border-[var(--border)]
        bg-[var(--card)]/90
        px-8
        backdrop-blur-xl
      "
    >
      {/* LEFT */}

      <div className="flex min-w-0 flex-1 items-center">

        <div className="relative w-full max-w-lg">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--text-muted)]
            "
          />

          <input
            placeholder=""
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--hover)]
              pl-11
              pr-4
              outline-none
              transition-all
              duration-200
              focus:border-[var(--primary)]
              focus:bg-white
            "
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="ml-8 flex shrink-0 items-center gap-3">

        <TopbarClock />

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            transition
            hover:bg-[var(--hover)]
          "
        >
          <Bell size={18} />
        </button>

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            transition
            hover:bg-[var(--hover)]
          "
        >
          <Settings size={18} />
        </button>

        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--card)]
            transition
            hover:bg-[var(--hover)]
          "
        >
          <Moon size={18} />
        </button>

        <TopbarProfile />

      </div>
    </header>
  );
}
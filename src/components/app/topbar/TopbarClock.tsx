"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

export function TopbarClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-200
        px-4
        py-2
      "
    >
      <Clock3
        size={18}
        className="text-teal-600"
      />

      <span className="min-w-[40px] text-sm font-medium">
        {time || "--:--"}
      </span>
    </div>
  );
}
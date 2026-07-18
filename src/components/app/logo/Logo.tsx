"use client";

import { useEffect } from "react";

import {
  useBusinessStore,
} from "@/features/settings";

export function Logo() {
  const {
    business,
    fetchBusiness,
  } = useBusinessStore();

  useEffect(() => {
    fetchBusiness();
  }, [fetchBusiness]);

  return (
    <div className="flex min-w-0 items-center gap-3">

      {business?.logo_url ? (
        <img
          src={business.logo_url}
          alt={business.name}
          className="
            h-11
            w-11
            shrink-0
            rounded-2xl
            border
            border-[var(--border)]
            object-cover
          "
        />
      ) : (
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-[var(--primary)]
            text-lg
            font-bold
            text-white
          "
        >
          {business?.name?.charAt(0)?.toUpperCase() ??
            "I"}
        </div>
      )}

      <div className="min-w-0">

        <h2
          className="
            truncate
            text-lg
            font-bold
            leading-none
            text-[var(--text)]
          "
        >
          {business?.name ?? "IndoPOS"}
        </h2>

        <p
          className="
            mt-1
            truncate
            text-xs
            text-[var(--text-muted)]
          "
        >
          {business?.business_type ??
            "Smart Business"}
        </p>

      </div>

    </div>
  );
}
"use client";

import { SearchBar } from "../components/SearchBar";
import { CategoryTabs } from "../components/CategoryTabs";
import { ProductGrid } from "../components/ProductGrid";
import { CartPanel } from "../components/CartPanel";

export function PosPage() {
  return (
    <div className="flex h-[calc(100vh-88px)] gap-8">

      {/* LEFT PANEL */}

      <section
        className="
          flex
          min-w-0
          flex-1
          flex-col
          overflow-hidden
          rounded-[32px]
          border
          border-[var(--border)]
          bg-[var(--card)]
          shadow-sm
        "
      >

        {/* HEADER */}

        <div
          className="
            shrink-0
            border-b
            border-[var(--border)]
            bg-[var(--card)]
            p-6
          "
        >
          <SearchBar />

          <div className="mt-5">
            <CategoryTabs />
          </div>
        </div>

        {/* PRODUCT GRID */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            p-6
          "
        >
          <ProductGrid />
        </div>

      </section>

      {/* RIGHT PANEL */}

      <aside
        className="
          flex
          h-full
          w-[420px]
          shrink-0
        "
      >
        <CartPanel />
      </aside>

    </div>
  );
}
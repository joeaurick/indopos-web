"use client";

import { Search } from "lucide-react";

type Props = {
  search: string;
  onSearch: (value: string) => void;
};

export function InventoryToolbar({
  search,
  onSearch,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Inventory
        </h1>

        <p className="mt-1 text-slate-500">
          Kelola stok seluruh produk.
        </p>
      </div>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(e) =>
            onSearch(e.target.value)
          }
          placeholder="Cari produk atau SKU..."
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            py-3
            pl-11
            pr-4
            outline-none
            focus:border-teal-500
          "
        />
      </div>
    </div>
  );
}
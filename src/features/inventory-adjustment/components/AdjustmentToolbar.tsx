"use client";

import { Plus } from "lucide-react";

type Props = {
  search: string;
  onSearch: (value: string) => void;
  onAdd: () => void;
};

export function AdjustmentToolbar({
  search,
  onSearch,
  onAdd,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-4">

      <input
        value={search}
        onChange={(e) =>
          onSearch(e.target.value)
        }
        placeholder="Cari produk..."
        className="w-full rounded-xl border px-4 py-2"
      />

      <button
        onClick={onAdd}
        className="flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-white"
      >
        <Plus size={18} />
        Adjustment
      </button>

    </div>
  );
}
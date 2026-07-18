"use client";

import { Pencil, Trash2 } from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function ProductActions({
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={onEdit}
        className="
          rounded-lg
          p-2
          text-amber-600
          transition
          hover:bg-amber-100
        "
        title="Edit Produk"
      >
        <Pencil size={18} />
      </button>

      <button
        onClick={onDelete}
        className="
          rounded-lg
          p-2
          text-red-600
          transition
          hover:bg-red-100
        "
        title="Hapus Produk"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
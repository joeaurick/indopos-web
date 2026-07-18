"use client";

import {
  Pencil,
  Trash2,
} from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function SupplierActions({
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-3">

      <button
        type="button"
        onClick={onEdit}
        className="rounded-lg p-2 text-amber-600 transition hover:bg-amber-50"
      >
        <Pencil size={18} />
      </button>

      <button
        type="button"
        onClick={onDelete}
        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}
"use client";

import {
  Pencil,
  Trash2,
} from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function CustomerActions({
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={onEdit}
        className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-100"
      >
        <Pencil size={18} />
      </button>

      <button
        type="button"
        onClick={onDelete}
        className="rounded-lg p-2 text-red-600 transition hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
"use client";

import {
  Pencil,
  Trash2,
} from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function PurchaseActions({
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex justify-center gap-3">

      <button
        onClick={onEdit}
      >
        <Pencil
          size={18}
          className="text-amber-500"
        />
      </button>

      <button
        onClick={onDelete}
      >
        <Trash2
          size={18}
          className="text-red-600"
        />
      </button>

    </div>
  );
}
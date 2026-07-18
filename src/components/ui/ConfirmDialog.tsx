"use client";

type Props = {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "Hapus",
  cancelText = "Batal",
  loading = false,
  onConfirm,
  onCancel,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="border-b px-6 py-5">
          <h2 className="text-xl font-bold">
            {title}
          </h2>
        </div>

        <div className="px-6 py-5">
          <p className="text-slate-600">
            {description}
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-5">
          <button
            onClick={onCancel}
            disabled={loading}
            className="
              rounded-xl
              border
              px-5
              py-2.5
              font-medium
              hover:bg-slate-50
              disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              rounded-xl
              bg-red-600
              px-5
              py-2.5
              font-semibold
              text-white
              hover:bg-red-700
              disabled:opacity-50
            "
          >
            {loading
              ? "Menghapus..."
              : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { notify } from "@/lib/notify";

import { ExpenseCategory } from "../types";
import { useExpenseCategoryStore } from "../store/expense-category.store";

type Props = {
  open: boolean;
  category: ExpenseCategory | null;
  onClose: () => void;
};

export function DeleteExpenseCategoryDialog({
  open,
  category,
  onClose,
}: Props) {
  const loading =
    useExpenseCategoryStore(
      (state) => state.loading
    );

  const deleteCategory =
    useExpenseCategoryStore(
      (state) => state.deleteCategory
    );

  async function handleDelete() {
    if (!category) return;

    const toastId =
      notify.loading(
        "Menghapus kategori..."
      );

    try {
      await deleteCategory(
        category.id
      );

      notify.dismiss(
        toastId
      );

      notify.success(
        "Kategori berhasil dihapus."
      );

      onClose();
    } catch (error: any) {
      console.error(error);

      notify.dismiss(
        toastId
      );

      notify.error(
        error?.message ??
          "Terjadi kesalahan."
      );
    }
  }

  return (
    <ConfirmDialog
      open={open}
      title="Hapus Kategori"
      description={`Yakin ingin menghapus kategori "${category?.name ?? ""}"?`}
      confirmText="Hapus"
      loading={loading}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  );
}
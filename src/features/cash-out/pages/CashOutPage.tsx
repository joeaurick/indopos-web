"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { PageHeader } from "@/components/app/page-header/PageHeader";

import { Expense } from "../types";

import { useCashOutStore } from "../store/cash-out.store";

import { CashOutSummary } from "../components/CashOutSummary";
import { CashOutFilter } from "../components/CashOutFilter";
import { CashOutTable } from "../components/CashOutTable";
import { CashOutForm } from "../components/CashOutForm";

export function CashOutPage() {
  const expenses = useCashOutStore(
    (state) => state.data.expenses
  );

  const deleteExpense =
    useCashOutStore(
      (state) => state.deleteExpense
    );

  const [formOpen, setFormOpen] =
    useState(false);

  const [mode, setMode] =
    useState<"create" | "edit">(
      "create"
    );

  const [
    selectedExpense,
    setSelectedExpense,
  ] = useState<Expense | null>(
    null
  );

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  const [
    deleteId,
    setDeleteId,
  ] = useState("");

  function handleCreate() {
    setMode("create");

    setSelectedExpense(null);

    setFormOpen(true);
  }

  function handleEdit(id: string) {
    const expense =
      expenses.find(
        (item) => item.id === id
      ) ?? null;

    setMode("edit");

    setSelectedExpense(expense);

    setFormOpen(true);
  }

  function handleDelete(
    id: string
  ) {
    setDeleteId(id);

    setDeleteOpen(true);
  }

  async function confirmDelete() {
    try {
      await deleteExpense(deleteId);

      setDeleteOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <PageHeader
        title="Cash Out"
        subtitle="Kelola seluruh pengeluaran usaha."
        action={
          <Button
            onClick={handleCreate}
          >
            <Plus
              size={18}
              className="mr-2"
            />
            Tambah Pengeluaran
          </Button>
        }
      />

      <CashOutSummary />

      <div className="mt-6">
        <CashOutFilter />
      </div>

      <div className="mt-6">
        <CashOutTable
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <CashOutForm
        open={formOpen}
        mode={mode}
        expense={selectedExpense}
        onClose={() =>
          setFormOpen(false)
        }
        onSuccess={() =>
          setFormOpen(false)
        }
      />

      <ConfirmDialog
        open={deleteOpen}
        title="Hapus Pengeluaran"
        description="Apakah Anda yakin ingin menghapus data pengeluaran ini?"
        confirmText="Hapus"
        cancelText="Batal"
        onCancel={() =>
          setDeleteOpen(false)
        }
        onConfirm={
          confirmDelete
        }
      />
    </>
  );
}
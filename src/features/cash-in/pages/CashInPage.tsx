"use client";

import { useState } from "react";

import { notify } from "@/lib/notify";

import { PageHeader } from "@/components/app/page-header/PageHeader";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

import { CashInSummary } from "../components/CashInSummary";
import { CashInFilter } from "../components/CashInFilter";
import { CashInTable } from "../components/CashInTable";
import { CashInForm } from "../components/CashInForm";

import { useCashInStore } from "../store/cash-in.store";

export function CashInPage() {
  const cashIn = useCashInStore(
    (state) => state.data.cashIn
  );

  const deleteCashIn =
    useCashInStore(
      (state) => state.deleteCashIn
    );

  const loading =
    useCashInStore(
      (state) => state.loading
    );

  const [openForm, setOpenForm] =
    useState(false);

  const [
    openDelete,
    setOpenDelete,
  ] = useState(false);

  const [
    selectedId,
    setSelectedId,
  ] = useState<string | null>(null);

  const selectedCashIn =
    cashIn.find(
      (item) => item.id === selectedId
    ) ?? null;

  async function handleDelete() {
    if (!selectedId) return;

    try {
      await deleteCashIn(selectedId);

      notify.success(
        "Cash In berhasil dihapus."
      );

      setOpenDelete(false);

      setSelectedId(null);
    } catch (error: any) {
      notify.error(
        error?.message ??
          "Gagal menghapus Cash In."
      );
    }
  }

  return (
    <>
      <PageHeader
        title="Cash In"
        subtitle="Kelola seluruh pemasukan selain penjualan."
        action={
          <button
            onClick={() => {
              setSelectedId(null);
              setOpenForm(true);
            }}
            className="
              rounded-xl
              bg-emerald-600
              px-5
              py-3
              font-semibold
              text-white
              hover:bg-emerald-700
            "
          >
            + Tambah Cash In
          </button>
        }
      />

      <CashInSummary />

      <div className="mt-6">
        <CashInFilter />
      </div>

      <div className="mt-6">
        <CashInTable
          onEdit={(id: string) => {
            setSelectedId(id);
            setOpenForm(true);
          }}
          onDelete={(id: string) => {
            setSelectedId(id);
            setOpenDelete(true);
          }}
        />
      </div>

      <CashInForm
        open={openForm}
        mode={
          selectedCashIn
            ? "edit"
            : "create"
        }
        cashIn={selectedCashIn}
        onClose={() => {
          setOpenForm(false);
          setSelectedId(null);
        }}
      />

      <ConfirmDialog
        open={openDelete}
        title="Hapus Cash In"
        description="Data Cash In yang dihapus tidak dapat dikembalikan. Apakah Anda yakin ingin menghapus data ini?"
        loading={loading}
        confirmText="Hapus"
        cancelText="Batal"
        onConfirm={handleDelete}
        onCancel={() => {
          setOpenDelete(false);
          setSelectedId(null);
        }}
      />
    </>
  );
}
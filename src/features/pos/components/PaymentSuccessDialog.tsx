"use client";

import {
  CheckCircle2,
  Printer,
  ArrowLeft,
  Receipt,
} from "lucide-react";

import { AppButton } from "@/components/ui";

type Props = {
  open: boolean;
  invoice: string;
  total: number;
  onClose: () => void;
  onPrint: () => void;
};

export function PaymentSuccessDialog({
  open,
  invoice,
  total,
  onClose,
  onPrint,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div
        className="
          w-full
          max-w-lg
          rounded-[32px]
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-8
          shadow-2xl
        "
      >
        {/* Icon */}

        <div className="flex justify-center">

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-emerald-100
            "
          >
            <CheckCircle2
              size={54}
              className="text-emerald-600"
            />
          </div>

        </div>

        {/* Title */}

        <div className="mt-6 text-center">

          <h2 className="text-3xl font-bold">
            Pembayaran Berhasil
          </h2>

          <p className="mt-2 text-[var(--text-muted)]">
            Transaksi berhasil disimpan ke sistem.
          </p>

        </div>

        {/* Card */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--hover)]
            p-6
          "
        >
          <div className="flex items-center gap-3">

            <Receipt
              size={22}
              className="text-[var(--primary)]"
            />

            <span className="font-semibold">
              Detail Transaksi
            </span>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between">

              <span className="text-[var(--text-muted)]">
                Invoice
              </span>

              <span className="font-semibold">
                {invoice}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-[var(--text-muted)]">
                Total Pembayaran
              </span>

              <span className="text-2xl font-bold text-[var(--primary)]">
                Rp {total.toLocaleString("id-ID")}
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex gap-4">

          <AppButton
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            <ArrowLeft size={18} />

            <span className="ml-2">
              Kembali
            </span>
          </AppButton>

          <AppButton
            onClick={onPrint}
            className="flex-1"
          >
            <Printer size={18} />

            <span className="ml-2">
              Cetak Struk
            </span>
          </AppButton>

        </div>

      </div>

    </div>
  );
}
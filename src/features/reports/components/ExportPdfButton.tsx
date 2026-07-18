"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { useReportStore } from "../store/report.store";

export function ExportPdfButton() {
  const history = useReportStore(
    (state) => state.data.history
  );

  const summary = useReportStore(
    (state) => state.data.summary
  );

  function exportPdf() {
    if (history.length === 0) {
      alert("Belum ada data.");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("DONARA DONAT", 14, 18);

    doc.setFontSize(12);
    doc.text(
      "Laporan Transaksi",
      14,
      26
    );

    doc.setFontSize(10);

    doc.text(
      `Tanggal Cetak : ${new Date().toLocaleString(
        "id-ID"
      )}`,
      14,
      34
    );

    doc.text(
      `Total Income : Rp ${summary.totalIncome.toLocaleString(
        "id-ID"
      )}`,
      14,
      44
    );

    doc.text(
      `Total Expense : Rp ${summary.totalExpense.toLocaleString(
        "id-ID"
      )}`,
      14,
      50
    );

    doc.text(
      `Gross Profit : Rp ${summary.grossProfit.toLocaleString(
        "id-ID"
      )}`,
      14,
      56
    );

    doc.text(
      `Net Profit : Rp ${summary.netProfit.toLocaleString(
        "id-ID"
      )}`,
      14,
      62
    );

    autoTable(doc, {
      startY: 72,

      head: [[
        "Tanggal",
        "Jenis",
        "Invoice",
        "Status",
        "Total",
      ]],

      body: history.map((item) => [
        new Date(
          item.created_at
        ).toLocaleDateString(
          "id-ID"
        ),

        item.type,

        item.invoice,

        item.status,

        `Rp ${item.total.toLocaleString(
          "id-ID"
        )}`,
      ]),
    });

    doc.save(
      `Report-${
        new Date()
          .toISOString()
          .slice(0, 10)
      }.pdf`
    );
  }

  return (
    <button
      onClick={exportPdf}
      className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
    >
      Export PDF
    </button>
  );
}
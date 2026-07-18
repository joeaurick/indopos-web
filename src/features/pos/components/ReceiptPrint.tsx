"use client";

import { useEffect } from "react";

import { Receipt } from "./Receipt";

type Item = {
  id: string;
  name: string;
  sku?: string;
  qty: number;
  price: number;
  subtotal?: number;
};

type Business = {
  name: string;
  address: string;
  phone: string;
  logo_url: string | null;
  receipt_footer: string;
};

type Props = {
  invoice: string;
  createdAt: string;
  total: number;
  paymentMethod: string;
  paymentAmount: number;
  changeAmount: number;
  business: Business;
  items: Item[];
};

export function ReceiptPrint({
  invoice,
  createdAt,
  total,
  paymentMethod,
  paymentAmount,
  changeAmount,
  business,
  items,
}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen justify-center bg-slate-100 p-8 print:bg-white print:p-0">
      <Receipt
        invoice={invoice}
        createdAt={createdAt}
        total={total}
        paymentMethod={paymentMethod}
        paymentAmount={paymentAmount}
        changeAmount={changeAmount}
        business={business}
        items={items}
      />
    </div>
  );
}
export type PurchaseOrder = {
  id: string;

  supplier_id: string;

  supplier_name: string;

  invoice_number: string;

  order_date: string;

  status: "DRAFT" | "RECEIVED" | "CANCELLED";

  subtotal: number;

  discount: number;

  tax: number;

  total: number;

  note: string | null;

  is_active: boolean;

  created_at: string;
};

export type PurchaseOrderItem = {
  product_id: string;

  product_name: string;

  qty: number;

  cost_price: number;

  subtotal: number;
};

export type PurchaseOrderPayload = {
  supplier_id: string;

  invoice_number: string;

  order_date: string;

  subtotal: number;

  discount: number;

  tax: number;

  total: number;

  note: string | null;

  items: PurchaseOrderItem[];
};
export type Adjustment = {
  id: string;

  product_id: string;

  product_name: string;

  sku: string;

  stock_before: number;

  stock_after: number;

  qty: number;

  type:
    | "IN"
    | "OUT"
    | "ADJUSTMENT";

  note: string | null;

  created_at: string;
};

export type AdjustmentPayload = {
  product_id: string;

  qty: number;

  type:
    | "IN"
    | "OUT"
    | "ADJUSTMENT";

  note: string | null;
};
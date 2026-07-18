export type InventoryItem = {
  id: string;

  product_id: string;

  product_name: string;

  sku: string;

  category_id: string | null;

  category_name: string | null;

  stock: number;

  minimum_stock: number;

  is_active: boolean;

  created_at: string;
};

export type StockAdjustmentPayload = {
  product_id: string;

  type: "IN" | "OUT" | "ADJUSTMENT";

  quantity: number;

  note: string | null;
};

export type StockMovement = {
  id: string;

  product_id: string;

  product_name: string;

  reference_type:
    | "PURCHASE"
    | "SALE"
    | "ADJUSTMENT"
    | "RETURN";

  reference_id: string | null;

  movement_type:
    | "IN"
    | "OUT";

  qty: number;

  stock_before: number;

  stock_after: number;

  note: string | null;

  created_at: string;
};

export type StockMovementPayload = {
  product_id: string;

  reference_type: string;

  reference_id: string | null;

  movement_type: "IN" | "OUT";

  qty: number;

  stock_before: number;

  stock_after: number;

  note: string | null;
};
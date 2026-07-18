export type Sale = {
  id: string;

  invoice: string;

  customer_id: string | null;

  subtotal: number;

  discount: number;

  tax: number;

  total: number;

  payment_method: string;

  payment_amount: number;

  change_amount: number;

  status: string;

  note: string | null;

  is_active: boolean;

  created_at: string;
};

export type SaleItem = {
  id: string;

  sale_id: string;

  product_id: string;

  product_name: string;

  sku: string;

  quantity: number;

  price: number;

  subtotal: number;
};

export type SalePayload = {
  customer_id: string | null;

  subtotal: number;

  discount: number;

  tax: number;

  total: number;

  payment_method: string;

  payment_amount: number;

  change_amount: number;

  note: string | null;

  items: SalePayloadItem[];
};

export type SalePayloadItem = {
  product_id: string;

  quantity: number;

  price: number;

  subtotal: number;
};

export type SaleDetailItem = {
  id: string;

  quantity: number;

  price: number;

  subtotal: number;

  product: {
    id: string;

    name: string;

    sku: string;
  };
};
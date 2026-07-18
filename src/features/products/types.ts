export type Product = {
  id: string;

  name: string;

  sku: string;

  price: number;

  stock: number;

  category_id: string | null;

  category_name: string | null;

  is_active: boolean;

  created_at: string;
};

export type ProductPayload = {
  name: string;

  sku: string;

  price: number;

  stock: number;

  category_id: string | null;
};
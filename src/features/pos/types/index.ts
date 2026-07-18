export interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  qty: number;
}

export interface CartStore {
  items: CartItem[];

  addItem: (item: Omit<CartItem, "qty">) => void;

  removeItem: (id: string) => void;

  increaseQty: (id: string) => void;

  decreaseQty: (id: string) => void;

  clearCart: () => void;

  subtotal: () => number;

  totalQty: () => number;
}
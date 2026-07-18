import { create } from "zustand";
import { CartStore } from "../types";

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    const items = get().items;

    const existing = items.find((i) => i.id === item.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === item.id
            ? {
                ...i,
                qty: i.qty + 1,
              }
            : i
        ),
      });

      return;
    }

    set({
      items: [
        ...items,
        {
          ...item,
          qty: 1,
        },
      ],
    });
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  increaseQty: (id) => {
    set({
      items: get().items.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      ),
    });
  },

  decreaseQty: (id) => {
    set({
      items: get()
        .items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0),
    });
  },

  clearCart: () => {
    set({
      items: [],
    });
  },

  subtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  },

  totalQty: () => {
    return get().items.reduce(
      (total, item) => total + item.qty,
      0
    );
  },
}));
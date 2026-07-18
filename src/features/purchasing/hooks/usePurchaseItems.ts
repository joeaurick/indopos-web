"use client";

import { useMemo, useState } from "react";

import { Product } from "@/features/products";

export type PurchaseItem = {
  product_id: string;
  product_name: string;
  qty: number;
  cost_price: number;
  subtotal: number;
};

export function usePurchaseItems() {
  const [items, setItems] = useState<PurchaseItem[]>([]);

  function addProduct(product: Product) {
    const exist = items.find(
      (x) => x.product_id === product.id
    );

    if (exist) return;

    setItems([
      ...items,
      {
        product_id: product.id,
        product_name: product.name,
        qty: 1,
        cost_price: product.price,
        subtotal: product.price,
      },
    ]);
  }

  function removeProduct(id: string) {
    setItems(
      items.filter(
        (x) => x.product_id !== id
      )
    );
  }

  function updateQty(
    id: string,
    qty: number
  ) {
    setItems(
      items.map((item) => {
        if (item.product_id !== id)
          return item;

        return {
          ...item,
          qty,
          subtotal:
            qty * item.cost_price,
        };
      })
    );
  }

  function updatePrice(
    id: string,
    price: number
  ) {
    setItems(
      items.map((item) => {
        if (item.product_id !== id)
          return item;

        return {
          ...item,
          cost_price: price,
          subtotal:
            item.qty * price,
        };
      })
    );
  }

  const subtotal = useMemo(() => {
    return items.reduce(
      (a, b) => a + b.subtotal,
      0
    );
  }, [items]);

  return {
    items,
    subtotal,
    addProduct,
    removeProduct,
    updateQty,
    updatePrice,
    setItems,
  };
}
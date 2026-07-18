import { supabase } from "@/services/supabase/client";

import {
  StockMovement,
  StockMovementPayload,
} from "../types";

export const stockMovementService = {
  async getMovements(): Promise<
    StockMovement[]
  > {
    const { data, error } =
      await supabase
        .from("stock_movements")
        .select(`
          *,
          products (
            name
          )
        `)
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      throw error;
    }

    return (data ?? []).map(
      (item: any) => ({
        id: item.id,

        product_id:
          item.product_id,

        product_name:
          item.products?.name ??
          "-",

        reference_type:
          item.reference_type,

        reference_id:
          item.reference_id,

        movement_type:
          item.movement_type,

        qty: item.qty,

        stock_before:
          item.stock_before,

        stock_after:
          item.stock_after,

        note: item.note,

        created_at:
          item.created_at,
      })
    );
  },

  async createMovement(
    payload: StockMovementPayload
  ) {
    const { error } =
      await supabase
        .from(
          "stock_movements"
        )
        .insert(payload);

    if (error) {
      throw error;
    }
  },
};
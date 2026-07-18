import { supabase } from "@/services/supabase/client";

import {
  Sale,
  SaleItem,
  SalePayload,
} from "../types";

export const salesService = {
  async getSales(): Promise<Sale[]> {
    const { data, error } = await supabase
      .from("sales")
      .select("*")
      .eq("is_active", true)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      throw error;
    }

    return (data ?? []).map(
      (item: any) => ({
        id: item.id,

        invoice: item.invoice,

        customer_id:
          item.customer_id,

        subtotal:
          Number(item.subtotal ?? 0),

        discount:
          Number(item.discount ?? 0),

        tax:
          Number(item.tax ?? 0),

        total:
          Number(item.total ?? 0),

        payment_method:
          item.payment_method ??
          "CASH",

        payment_amount:
          Number(
            item.payment_amount ?? 0
          ),

        change_amount:
          Number(
            item.change_amount ?? 0
          ),

        status:
          item.status ?? "PAID",

        note:
          item.note,

        is_active:
          item.is_active,

        created_at:
          item.created_at,
      })
    );
  },

  async getSaleDetail(
    saleId: string
  ): Promise<SaleItem[]> {
    const { data, error } =
      await supabase
        .from("sale_items")
        .select(`
          *,
          product:products (
            id,
            name,
            sku
          )
        `)
        .eq("sale_id", saleId);

    if (error) {
      throw error;
    }

    return (data ?? []).map(
      (item: any) => ({
        id: item.id,

        sale_id:
          item.sale_id,

        product_id:
          item.product_id,

        product_name:
          item.product?.name ??
          "-",

        sku:
          item.product?.sku ??
          "-",

        quantity:
          Number(
            item.quantity
          ),

        price:
          Number(item.price),

        subtotal:
          Number(
            item.subtotal
          ),
      })
    );
  },

  async createSale(
    payload: SalePayload
  ) {
    const {
      items,
      ...header
    } = payload;

    const {
      data: sale,
      error,
    } = await supabase
      .from("sales")
      .insert({
        ...header,

        status: "PAID",

        is_active: true,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    if (items.length > 0) {
      const detail =
        items.map((item) => ({
          sale_id: sale.id,

          product_id:
            item.product_id,

          quantity:
            item.quantity,

          price:
            item.price,

          subtotal:
            item.subtotal,
        }));

      const {
        error: detailError,
      } = await supabase
        .from("sale_items")
        .insert(detail);

      if (detailError) {
        throw detailError;
      }

      // Kurangi stok
      for (const item of items) {
        const {
          data: product,
          error:
            productError,
        } = await supabase
          .from("products")
          .select(
            "stock"
          )
          .eq(
            "id",
            item.product_id
          )
          .single();

        if (
          productError
        ) {
          throw productError;
        }

        const before =
          Number(
            product.stock
          );

        const after =
          before -
          item.quantity;

        const {
          error:
            updateError,
        } = await supabase
          .from(
            "products"
          )
          .update({
            stock:
              after < 0
                ? 0
                : after,
          })
          .eq(
            "id",
            item.product_id
          );

        if (
          updateError
        ) {
          throw updateError;
        }

        // Stock movement
        const {
          error:
            movementError,
        } = await supabase
          .from(
            "stock_movements"
          )
          .insert({
            product_id:
              item.product_id,

            reference_type:
              "SALE",

            reference_id:
              sale.id,

            movement_type:
              "OUT",

            qty:
              item.quantity,

            stock_before:
              before,

            stock_after:
              after,

            note:
              sale.invoice,
          });

        if (
          movementError
        ) {
          throw movementError;
        }
      }
    }

    return sale;
  },

  async deleteSale(
    id: string
  ) {
    const { error } =
      await supabase
        .from("sales")
        .update({
          is_active: false,
        })
        .eq("id", id);

    if (error) {
      throw error;
    }
  },
};
import { supabase } from "@/services/supabase/client";

import {
  Supplier,
  SupplierPayload,
} from "../types";

export const supplierService = {
  async getSuppliers(): Promise<Supplier[]> {
    const { data, error } = await supabase
      .from("suppliers")
      .select("*")
      .eq("is_active", true)
      .order("name", {
        ascending: true,
      });

    if (error) {
      throw error;
    }

    return (data ?? []) as Supplier[];
  },

  async createSupplier(
    payload: SupplierPayload
  ) {
    const { data, error } = await supabase
      .from("suppliers")
      .insert({
        ...payload,
        is_active: true,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async updateSupplier(
    id: string,
    payload: SupplierPayload
  ) {
    const { data, error } = await supabase
      .from("suppliers")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async deleteSupplier(id: string) {
    const { error } = await supabase
      .from("suppliers")
      .update({
        is_active: false,
      })
      .eq("id", id);

    if (error) {
      throw error;
    }
  },
};
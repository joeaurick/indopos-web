import { supabase } from "@/services/supabase/client";

import {
  Customer,
  CustomerPayload,
} from "../types";

export const customerService = {
  async getCustomers(): Promise<Customer[]> {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .eq("is_active", true)
      .order("name", {
        ascending: true,
      });

    if (error) {
      throw error;
    }

    return (data ?? []) as Customer[];
  },

  async createCustomer(
    payload: CustomerPayload
  ) {
    const { data, error } = await supabase
      .from("customers")
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

  async updateCustomer(
    id: string,
    payload: CustomerPayload
  ) {
    const { data, error } = await supabase
      .from("customers")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  async deleteCustomer(
    id: string
  ) {
    const { error } = await supabase
      .from("customers")
      .update({
        is_active: false,
      })
      .eq("id", id);

    if (error) {
      throw error;
    }
  },
};
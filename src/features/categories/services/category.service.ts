import { supabase } from "@/services/supabase/client";
import { Category } from "../types";

type CategoryPayload = {
  name: string;
  description: string | null;
};

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("is_active", true)
      .order("name");

    console.group("CATEGORY SERVICE");
    console.log("Data :", data);
    console.log("Error :", error);
    console.groupEnd();

    if (error) {
      throw error;
    }

    return (data ?? []) as Category[];
  },

  async createCategory(
    payload: CategoryPayload
  ): Promise<void> {
    const { data, error } = await supabase
      .from("categories")
      .insert({
        ...payload,
        is_active: true,
      })
      .select();

    console.group("CREATE CATEGORY");
    console.log("Payload :", payload);
    console.log("Data :", data);
    console.log("Error :", error);
    console.groupEnd();

    if (error) {
      throw error;
    }
  },

  async updateCategory(
    id: string,
    payload: CategoryPayload
  ): Promise<void> {
    const { data, error } = await supabase
      .from("categories")
      .update(payload)
      .eq("id", id)
      .select();

    console.group("UPDATE CATEGORY");
    console.log("ID :", id);
    console.log("Payload :", payload);
    console.log("Data :", data);
    console.log("Error :", error);
    console.groupEnd();

    if (error) {
      throw error;
    }
  },

  async deleteCategory(
    id: string
  ): Promise<void> {
    const { data, error } = await supabase
      .from("categories")
      .update({
        is_active: false,
      })
      .eq("id", id)
      .select();

    console.group("DELETE CATEGORY");
    console.log("ID :", id);
    console.log("Data :", data);
    console.log("Error :", error);
    console.groupEnd();

    if (error) {
      throw error;
    }
  },
};
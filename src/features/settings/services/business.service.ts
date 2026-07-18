import { supabase } from "@/services/supabase/client";
import { Business } from "../types";

export const businessService = {
  async getBusiness(): Promise<Business | null> {
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .eq("is_active", true)
      .limit(1)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  },

  async saveBusiness(
    business: Partial<Business>
  ) {
    const current =
      await this.getBusiness();

    const payload = {
      name: business.name ?? "",
      business_type:
        business.business_type ?? "",
      email: business.email ?? "",
      phone: business.phone ?? "",
      address: business.address ?? "",
      website:
        business.website ?? "",
      tax_number:
        business.tax_number ?? "",
      receipt_footer:
        business.receipt_footer ??
        "Terima kasih telah berbelanja.",
      logo_url:
        business.logo_url ?? "",
      is_active: true,
      updated_at:
        new Date().toISOString(),
    };

    if (!current) {
      const { error } =
        await supabase
          .from("businesses")
          .insert({
            ...payload,
            created_at:
              new Date().toISOString(),
          });

      if (error) {
        throw error;
      }

      return;
    }

    const { error } =
      await supabase
        .from("businesses")
        .update(payload)
        .eq("id", current.id);

    if (error) {
      throw error;
    }
  },

  async deleteLogo() {
    const current =
      await this.getBusiness();

    if (!current?.logo_url) return;

    const path =
      current.logo_url.split("/logos/")[1];

    if (path) {
      await supabase.storage
        .from("logos")
        .remove([path]);
    }

    const { error } =
      await supabase
        .from("businesses")
        .update({
          logo_url: "",
          updated_at:
            new Date().toISOString(),
        })
        .eq("id", current.id);

    if (error) {
      throw error;
    }
  },
};
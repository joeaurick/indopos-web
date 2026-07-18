import { create } from "zustand";

import { businessService } from "../services/business.service";
import { Business } from "../types";

type State = {
  business: Business | null;

  loading: boolean;

  fetchBusiness: () => Promise<void>;

  saveBusiness: (
    business: Partial<Business>
  ) => Promise<void>;
};

export const useBusinessStore =
  create<State>((set) => ({
    business: null,

    loading: false,

    fetchBusiness: async () => {
      set({
        loading: true,
      });

      try {
        const business =
          await businessService.getBusiness();

        set({
          business,
          loading: false,
        });
      } catch (e) {
        console.error(e);

        set({
          loading: false,
        });
      }
    },

    saveBusiness: async (
      business
    ) => {
      await businessService.saveBusiness(
        business
      );

      const latest =
        await businessService.getBusiness();

      set({
        business: latest,
      });
    },
  }));
import { create } from "zustand";

import {
  PurchaseOrder,
  PurchaseOrderPayload,
} from "../types";

import { purchaseService } from "../services/purchase.service";

type PurchaseState = {
  purchases: PurchaseOrder[];

  loading: boolean;

  fetchPurchases: () => Promise<void>;

  createPurchase: (
    payload: PurchaseOrderPayload
  ) => Promise<void>;

  deletePurchase: (
    id: string
  ) => Promise<void>;

  receivePurchase: (
    id: string
  ) => Promise<void>;
};

export const usePurchaseStore =
  create<PurchaseState>((set, get) => ({
    purchases: [],

    loading: false,

    fetchPurchases: async () => {
      set({
        loading: true,
      });

      try {
        const purchases =
          await purchaseService.getPurchases();

        set({
          purchases,
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    createPurchase: async (
      payload
    ) => {
      set({
        loading: true,
      });

      try {
        await purchaseService.createPurchase(
          payload
        );

        await get().fetchPurchases();
      } finally {
        set({
          loading: false,
        });
      }
    },

    deletePurchase: async (
      id
    ) => {
      set({
        loading: true,
      });

      try {
        await purchaseService.deletePurchase(
          id
        );

        await get().fetchPurchases();
      } finally {
        set({
          loading: false,
        });
      }
    },

    receivePurchase: async (
      id
    ) => {
      set({
        loading: true,
      });

      try {
        await purchaseService.receivePurchase(
          id
        );

        await get().fetchPurchases();
      } finally {
        set({
          loading: false,
        });
      }
    },
  }));
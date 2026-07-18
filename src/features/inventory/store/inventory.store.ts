import { create } from "zustand";

import {
  InventoryItem,
  StockAdjustmentPayload,
} from "../types";

import { inventoryService } from "../services/inventory.service";

type InventoryState = {
  items: InventoryItem[];

  loading: boolean;

  search: string;

  selectedCategory: string | null;

  fetchInventory: () => Promise<void>;

  adjustStock: (
    payload: StockAdjustmentPayload
  ) => Promise<void>;

  setSearch: (
    value: string
  ) => void;

  setSelectedCategory: (
    id: string | null
  ) => void;
};

export const useInventoryStore =
create<InventoryState>((set, get) => ({

  items: [],

  loading: false,

  search: "",

  selectedCategory: null,

  setSearch: (value) => {
    set({
      search: value,
    });
  },

  setSelectedCategory: (id) => {
    set({
      selectedCategory: id,
    });
  },

  fetchInventory: async () => {

    set({
      loading: true,
    });

    try {

      const items =
        await inventoryService.getInventory();

      set({
        items,
        loading: false,
      });

    } catch (error) {

      console.error(error);

      set({
        loading: false,
      });

    }

  },

  adjustStock: async (payload) => {

    set({
      loading: true,
    });

    try {

      await inventoryService.adjustStock(
        payload
      );

      await get().fetchInventory();

    } finally {

      set({
        loading: false,
      });

    }

  },

}));
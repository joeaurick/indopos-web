"use client";

import { create } from "zustand";

type SidebarGroupState = {
  opened: Record<string, boolean>;

  toggle: (group: string) => void;

  hydrate: () => void;
};

const STORAGE_KEY = "sidebar-groups";

const defaultState = {
  Main: true,
  Transaction: true,
  Inventory: true,
  "Master Data": true,
  Analytics: true,
  System: true,
};

export const useSidebarGroupStore =
  create<SidebarGroupState>((set, get) => ({
    opened: defaultState,

    hydrate: () => {
      if (typeof window === "undefined") return;

      try {
        const saved = localStorage.getItem(
          STORAGE_KEY
        );

        if (!saved) return;

        set({
          opened: JSON.parse(saved),
        });
      } catch (err) {
        console.error(err);
      }
    },

    toggle: (group) => {
      const opened = {
        ...get().opened,
        [group]:
          !get().opened[group],
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(opened)
      );

      set({
        opened,
      });
    },
  }));
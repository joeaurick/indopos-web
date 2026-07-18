"use client";

import { create } from "zustand";

type SidebarState = {
  collapsed: boolean;

  toggle: () => void;

  setCollapsed: (
    value: boolean
  ) => void;
};

export const useSidebarStore =
  create<SidebarState>((set, get) => ({
    collapsed:
      typeof window !== "undefined"
        ? localStorage.getItem(
            "sidebar-collapsed"
          ) === "true"
        : false,

    toggle: () => {
      const value =
        !get().collapsed;

      localStorage.setItem(
        "sidebar-collapsed",
        String(value)
      );

      set({
        collapsed: value,
      });
    },

    setCollapsed: (
      value
    ) => {
      localStorage.setItem(
        "sidebar-collapsed",
        String(value)
      );

      set({
        collapsed: value,
      });
    },
  }));
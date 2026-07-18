"use client";

import { create } from "zustand";

type SidebarSearchState = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const useSidebarSearchStore =
  create<SidebarSearchState>((set) => ({
    keyword: "",

    setKeyword: (keyword) =>
      set({
        keyword,
      }),
  }));
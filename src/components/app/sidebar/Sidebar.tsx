"use client";

import { useEffect } from "react";

import {
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { navigation } from "@/constants/navigation";
import { Logo } from "@/components/app/logo/Logo";

import { useSidebarStore } from "@/store/sidebar.store";
import { useSidebarGroupStore } from "@/store/sidebar-group.store";
import { useSidebarSearchStore } from "@/store/sidebar-search.store";

import { SidebarGroup } from "./SidebarGroup";
import { SidebarSearch } from "./SidebarSearch";

export function Sidebar() {
  const collapsed =
    useSidebarStore(
      (state) => state.collapsed
    );

  const toggle =
    useSidebarStore(
      (state) => state.toggle
    );

  const hydrate =
    useSidebarGroupStore(
      (state) => state.hydrate
    );

  const keyword =
    useSidebarSearchStore(
      (state) => state.keyword
    );

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const filteredNavigation =
    navigation
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title
            .toLowerCase()
            .includes(
              keyword.toLowerCase()
            )
        ),
      }))
      .filter(
        (group) =>
          group.items.length > 0
      );

  return (
    <aside
      className={`
        hidden
        lg:flex
        sticky
        top-0
        h-screen
        shrink-0
        flex-col
        border-r
        border-slate-200
        bg-gradient-to-b
        from-white
        to-slate-50
        transition-all
        duration-300

        ${
          collapsed
            ? "w-[82px]"
            : "w-[290px]"
        }
      `}
    >
      {/* HEADER */}

      <div
        className="
          flex
          h-20
          shrink-0
          items-center
          justify-between
          border-b
          border-slate-200
          px-4
          bg-white
        "
      >
        {!collapsed && <Logo />}

        <button
          onClick={toggle}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-500
            transition-all
            hover:bg-slate-100
            hover:text-[var(--primary)]
          "
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      {/* SEARCH */}

      <div
        className="
          shrink-0
          border-b
          border-slate-200
          bg-white
        "
      >
        <SidebarSearch
          collapsed={collapsed}
        />
      </div>

      {/* MENU */}

      <nav
        className="
          flex-1
          overflow-y-auto
          px-3
          py-5
          space-y-7
        "
      >
        {filteredNavigation.map(
          (group) => (
            <SidebarGroup
              key={group.title}
              title={group.title}
              items={group.items}
              collapsed={collapsed}
            />
          )
        )}
      </nav>

      {/* FOOTER */}

      <div
        className="
          border-t
          border-slate-200
          bg-white
          p-4
        "
      >
        <div
          className={`
            flex
            items-center

            ${
              collapsed
                ? "justify-center"
                : "gap-3"
            }
          `}
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-teal-500
              to-emerald-600
              text-lg
              font-bold
              text-white
              shadow-lg
            "
          >
            A
          </div>

          {!collapsed && (
            <div className="min-w-0">

              <h4
                className="
                  truncate
                  font-semibold
                  text-slate-800
                "
              >
                Administrator
              </h4>

              <p
                className="
                  truncate
                  text-sm
                  text-slate-500
                "
              >
                Super Admin
              </p>

            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
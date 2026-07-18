"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  href: string;
  icon: LucideIcon;
  collapsed: boolean;
};

export function SidebarItem({
  title,
  href,
  icon: Icon,
  collapsed,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" &&
      pathname.startsWith(href));

  return (
    <Link
      href={href}
      title={collapsed ? title : undefined}
      className={`
        group
        relative
        flex
        items-center
        rounded-xl
        transition-all
        duration-200

        ${
          collapsed
            ? `
              mx-auto
              h-12
              w-12
              justify-center
            `
            : `
              h-12
              gap-3
              px-4
            `
        }

        ${
          active
            ? `
              bg-white
              text-slate-900
              shadow-md
              font-semibold
            `
            : `
              text-slate-600
              hover:bg-slate-100
              hover:text-slate-900
            `
        }
      `}
    >
      {/* Garis hijau menu aktif */}
      {active && (
        <span
          className="
            absolute
            left-0
            top-2
            bottom-2
            w-1
            rounded-r-full
            bg-[var(--primary)]
          "
        />
      )}

      <Icon
        size={20}
        className={`
          shrink-0
          transition-all
          duration-200

          ${
            active
              ? "text-[var(--primary)]"
              : "group-hover:text-[var(--primary)]"
          }
        `}
      />

      {!collapsed && (
        <span
          className={`
            flex-1
            truncate
            text-sm

            ${
              active
                ? "font-semibold"
                : "font-medium"
            }
          `}
        >
          {title}
        </span>
      )}
    </Link>
  );
}
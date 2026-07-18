"use client";

import Link from "next/link";
import {
  X,
  Package,
  Boxes,
  Users,
  Truck,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
  Settings,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const menus = [
  {
    title: "Inventory",
    href: "/inventory",
    icon: Boxes,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Truck,
  },
  {
    title: "Cash In",
    href: "/cash-in",
    icon: ArrowDownCircle,
  },
  {
    title: "Cash Out",
    href: "/cash-out",
    icon: ArrowUpCircle,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function MobileMenuSheet({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40"
      />

      <div
        className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        rounded-t-3xl
        bg-white
        p-6
        shadow-2xl
      "
      >
        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="grid grid-cols-3 gap-4">

          {menus.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="
                  flex
                  flex-col
                  items-center
                  rounded-2xl
                  border
                  p-4
                  transition
                  hover:bg-slate-50
                "
              >
                <Icon
                  size={24}
                  className="mb-2 text-[var(--primary)]"
                />

                <span className="text-center text-sm font-medium">
                  {item.title}
                </span>

              </Link>
            );
          })}

        </div>

      </div>
    </>
  );
}
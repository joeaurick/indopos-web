"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  User,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";

import { logout } from "@/lib/auth/logout";

export function TopbarProfile() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-3
          py-2
          shadow-sm
          transition-all
          hover:border-teal-500
          hover:shadow-md
        "
      >
        <div className="relative">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-teal-500
              to-emerald-600
              text-lg
              font-bold
              text-white
            "
          >
            A
          </div>

          <span
            className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
          />

        </div>

        <div className="text-left">

          <h4 className="text-sm font-semibold text-slate-800">
            Administrator
          </h4>

          <p className="text-xs text-slate-500">
            Super Admin
          </p>

        </div>

        <ChevronDown
          size={18}
          className="text-slate-500"
        />
      </button>

      {open && (

        <div
          className="
            absolute
            right-0
            mt-3
            w-72
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-2xl
          "
        >

          {/* HEADER */}

          <div
            className="
              flex
              items-center
              gap-4
              border-b
              border-slate-200
              px-5
              py-5
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-teal-500
                to-emerald-600
                text-xl
                font-bold
                text-white
              "
            >
              A
            </div>

            <div>

              <h3 className="font-semibold text-slate-800">
                Administrator
              </h3>

              <p className="text-sm text-slate-500">
                Super Admin
              </p>

            </div>

          </div>


          <div className="border-t border-slate-200 p-2">

            <MenuItem
              icon={LogOut}
              label="Logout"
              danger
              onClick={logout}
            />

          </div>

        </div>

      )}
    </div>
  );
}

type ItemProps = {
  icon: any;
  label: string;
  danger?: boolean;
  onClick?: () => void;
};

function MenuItem({
  icon: Icon,
  label,
  danger,
  onClick,
}: ItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all

        ${
          danger
            ? "text-red-600 hover:bg-red-50"
            : "text-slate-700 hover:bg-slate-100"
        }
      `}
    >
      <Icon size={19} />

      <span>{label}</span>
    </button>
  );
}
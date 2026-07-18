"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        rounded-xl
        bg-teal-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        hover:bg-teal-700
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}
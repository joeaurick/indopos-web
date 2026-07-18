type Props = {
  className?: string;
};

export function AppSkeleton({
  className = "",
}: Props) {
  return (
    <div
      className={`
        animate-pulse
        rounded-xl
        bg-slate-200
        dark:bg-slate-700
        ${className}
      `}
    />
  );
}
import clsx from "clsx";

type BadgeProps = {
  label: string;
  variant?: "info" | "success" | "warning" | "error" | "neutral";
};

export function Badge({ label, variant = "neutral" }: BadgeProps) {
  const variants = {
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    error: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    neutral: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  };
  return (
    <span className={clsx("px-2 py-0.5 text-xs font-medium rounded-full", variants[variant])}>
      {label}
    </span>
  );
}
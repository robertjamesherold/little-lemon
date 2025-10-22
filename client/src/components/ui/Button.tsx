import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80";

  const variants = {
    primary:
      "button-bg-1 text-white focus:ring-blue-500 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-200",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-blue-500 disabled:text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

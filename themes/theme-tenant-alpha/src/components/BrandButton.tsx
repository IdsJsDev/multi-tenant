import React from "react";

type Variant = "primary" | "outline";
type Size = "sm" | "md" | "lg";

interface BrandButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  "aria-busy"?: boolean | "true" | "false";
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:opacity-90 disabled:opacity-50",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white disabled:opacity-50",
};

export function BrandButton({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  type = "button",
  "aria-busy": ariaBusy,
}: BrandButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-busy={ariaBusy}
      className={[
        "inline-flex items-center justify-center font-medium rounded-base transition-all cursor-pointer active:scale-[0.98]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        sizeClasses[size],
        variantClasses[variant],
      ].join(" ")}
    >
      {children}
    </button>
  );
}

"use client";
import clsx from "clsx";
type ButtonVariant = "solid" | "outline";
type ButtonColor = "success" | "critical" | "default";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRounded = "sm" | "md" | "lg";

const colorVariants = {
  success: "bg-success border-success text-success",
  critical: "bg-critical border-critical text-critical",
  default: "bg-default border-default text-search",
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  color: ButtonColor;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  disabled?: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={clsx(
        `font-ibm-plex-sans box-border flex items-center justify-center`,
        `${colorVariants[props.color]}`,
        props.variant === "solid" ? "text-white" : "",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.disabled ? "opacity-50" : "opacity-100",
        {
          [`h-10 text-base`]: props.size === "sm",
          [`h-16 text-base`]: props.size === "md",
          [`h-20 text-base`]: props.size === "lg",
        },
        {
          [`rounded-lg`]: props.rounded === "sm",
          [`rounded-2xl`]: props.rounded === "md",
          [`rounded-3xl`]: props.rounded === "lg",
        },
        {
          [`border-1 ${colorVariants[props.color]} bg-white`]:
            props.variant === "outline",
        },
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}

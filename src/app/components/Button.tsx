"use client";
import clsx from "clsx";
type ButtonVariant = "solid" | "outline";
type ButtonColor = "success" | "critical" | "default";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRounded = "sm" | "md" | "lg";

const colorVariants = {
  success: "bg-green-500 border-green-500 text-green-500",
  critical: "bg-critical border-critical text-critical",
  default: "bg-default border-default text-default",
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
        `box-border flex w-full items-center justify-center`,
        `${colorVariants[props.color]}`,
        props.variant === "solid" ? "text-white" : "",
        props.disabled? "cursor-not-allowed" : "cursor-pointer",
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
        
      )}
    >
      {props.children}
    </button>
  );
}

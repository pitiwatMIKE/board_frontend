"use client";
import { Input } from "@headlessui/react";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputField({ ...props }: InputFieldProps) {
  const { className, ...rest } = props;
  return (
    <Input
      className={clsx(
        "border-default placeholder-default mt-3 block w-full rounded-lg border-1 bg-white px-3 py-1.5 text-sm/6 text-black",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
        className,
      )}
      {...rest}
    />
  );
}

import { Textarea } from "@headlessui/react";
import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextAreaField(props: TextAreaFieldProps) {
  const { className, ...rest } = props;
  return (
    <Textarea
      className={clsx(
        "text-text border-default placeholder-default mt-3 block w-full resize-none rounded-lg border-1 bg-white/5 px-3 py-1.5 text-sm/6",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
        className,
      )}
      rows={3}
      {...rest}
    />
  );
}

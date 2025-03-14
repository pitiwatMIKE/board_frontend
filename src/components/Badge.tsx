import clsx from "clsx";

export default function Badge(props: { text: string; className?: string }) {
  return (
    <span
      className={clsx(
        "text-brand bg-badge flex h-6 max-w-max min-w-14 items-center justify-center rounded-2xl px-2 py-1 text-xs",
        props.className,
      )}
    >
      {props.text}
    </span>
  );
}

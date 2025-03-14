import clsx from "clsx";
import Image from "next/image";

export default function CommentBadge(props: {
  count: number;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "text-grey-300 flex items-center gap-1 text-sm",
        props.className,
      )}
    >
      <Image src="/comment-icon.svg" alt="comment" width={12} height={12} />
      <span>{props.count}</span>
      <span>Comments</span>
    </span>
  );
}

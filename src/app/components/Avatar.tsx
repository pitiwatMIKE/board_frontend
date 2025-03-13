import clsx from "clsx";
import Image from "next/image";

export default function Avatar(props: {
  src: string;
  alt: string;
  isOnline?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative h-[31px] w-[31px] rounded-full",
        props.className,
      )}
    >
      <Image
        className="rounded-full"
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
      />
      {props.isOnline ? (
        <div className="bg-online absolute -right-0 -bottom-0 h-[12px] w-[12px] rounded-full border-1 border-white"></div>
      ) : null}
    </div>
  );
}

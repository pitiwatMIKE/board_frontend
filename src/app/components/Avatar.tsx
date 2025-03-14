import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Avatar(props: {
  src: string;
  alt: string;
  isOnline?: boolean;
  className?: string;
}) {
  const [imageSrc, setImageSrc] = useState(props.src);

  const handleError = () => {
    setImageSrc("/Avatar.svg");
  };

  return (
    <div
      className={clsx(
        "relative h-[31px] w-[31px] rounded-full",
        props.className,
      )}
    >
      <Image
        className="rounded-full"
        src={imageSrc || "/Avatar.svg"}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        onError={handleError}
      />
      {props.isOnline ? (
        <div className="bg-online absolute -right-0 -bottom-0 h-[12px] w-[12px] rounded-full border-1 border-white"></div>
      ) : null}
    </div>
  );
}

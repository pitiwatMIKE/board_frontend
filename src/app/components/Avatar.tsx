import Image from "next/image";

export default function Avatar(props: { src: string; alt: string }) {
  return (
    <div className="relative h-[31px] w-[31px] overflow-hidden rounded-full">
      <Image src={props.src} alt={props.alt} layout="fill" objectFit="cover" />
    </div>
  );
}

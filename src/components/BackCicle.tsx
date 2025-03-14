import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackCicle() {
  const router = useRouter();
  return (
    <div
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-green-100 text-black"
      onClick={() => {
        router.back();
      }}
    >
      <Image
        className="rotate-180 brightness-90 invert"
        src="/back-icon.svg"
        width={20}
        height={20}
        alt="back-icon"
      />
    </div>
  );
}

"use client";
import clsx from "clsx";
import { menuItems } from "../constants/menu";
import { isMatchPathname } from "../utils/is-match-path";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarDesktop(props: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "bg-grey-100 h-full w-full pt-8 pl-6 text-green-500",
        props.className,
      )}
    >
      {menuItems.map((item) => (
        <li
          className={clsx(
            "mb-4 flex cursor-pointer items-center gap-2",
            isMatchPathname(pathname, item.path) ? "font-bold" : "",
          )}
          key={item.name}
          onClick={() => {
            router.push(item.path);
          }}
        >
          <Image
            className={clsx(
              isMatchPathname(pathname, item.path)
                ? "brightness-0"
                : "opacity-50 brightness-0",
            )}
            src={item.icon}
            width={24}
            height={24}
            alt={item.name}
          />
          {item.name}
        </li>
      ))}
    </div>
  );
}

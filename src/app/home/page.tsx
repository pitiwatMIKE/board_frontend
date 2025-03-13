"use client";
import clsx from "clsx";
import Postcard from "../components/Postcard";
import { menuItems } from "../constants/menu";
import { isMatchPathname } from "../utils/is-match-path";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SidebarDesktop from "../components/SidebarDesktop";

export default function HomePage() {
  const pathname = usePathname();
  return (
    <div className="bg-grey-100 pb-10">
      <div className="h-11">tes</div>

      <div className="mx-auto max-w-[798px] flex-3 shrink-0 overflow-hidden rounded-2xl">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Postcard
              username="Wittawat"
              avatarImage="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
              category="TV"
              commentCount={32}
              title="The Beginning of the End of the World"
              content="The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

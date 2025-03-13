"use client";
import Image from "next/image";
import Button from "../components/Button";
import Postcard from "../components/Postcard";
import DropDown, { DropDownItem } from "../components/Dropdown";
import { useState } from "react";

export default function HomePage() {
  const [selectCategory, setSelectCategory] = useState<DropDownItem | null>();

  const items: DropDownItem[] = [
    { id: 1, name: "Trending" },
    { id: 2, name: "New" },
    { id: 3, name: "Top" },
  ];

  return (
    <div className="bg-grey-100 mx-auto max-w-[798px] p-3 lg:pb-10">
      <div className="mt-6 mb-5 flex items-center justify-between">
        <div className="cursor-pointer lg:hidden">
          <Image
            src="/search-icon.svg"
            alt="search"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="flex gap-3">
          <DropDown items={items} onSelect={setSelectCategory} />
          <Button
            className="h-10 w-28"
            color="success"
            variant="solid"
            rounded="sm"
            size="sm"
          >
            Create +
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl">
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

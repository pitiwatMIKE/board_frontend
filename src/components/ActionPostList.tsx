import { useState } from "react";
import DropDown, { DropDownItem } from "./Dropdown";
import Image from "next/image";
import clsx from "clsx";
import InputField from "./InputField";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import useUserTokenStore from "@/store/userToken";

export default function ActionPostList(props: {
  categoryItems: DropDownItem[];
  onSelectCategory: (item: DropDownItem | null) => void;
  onSearch: (search: string) => void;
  onOpenModal: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { token } = useUserTokenStore();
  const { categoryItems, onSelectCategory, onSearch, onOpenModal } = props;
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleOpenModal = () => {
    if (!token) {
      router.push(`/sign-in?redirect=${pathname}`);
      return;
    }
    onOpenModal(true);
  };

  return (
    <div className="flex items-center justify-between gap-9">
      <>
        <div
          className={clsx("cursor-pointer lg:hidden", isOpenSearch && "hidden")}
        >
          <Image
            src="/search-icon.svg"
            alt="search"
            width={24}
            height={24}
            priority
            onClick={() => setIsOpenSearch(true)}
          />
        </div>
        <div
          className={clsx(
            "relative w-full",
            isOpenSearch ? "block" : "hidden lg:block",
          )}
        >
          <div className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400">
            <Image
              src="/search-icon.svg"
              alt="search"
              width={24}
              height={24}
              priority
              onClick={() => setIsOpenSearch(true)}
            />
          </div>
          <InputField
            className="placeholder-search border-green-100 !bg-transparent pl-10"
            placeholder="Search"
            onBlur={() => setIsOpenSearch(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsOpenSearch(false);
            }}
            onChange={(e) => {
              if (e.target.value?.length == 0) setIsOpenSearch(false);
              onSearch(e.target.value);
            }}
          />
        </div>
      </>
      {!isOpenSearch && (
        <div className="flex gap-3 lg:gap-6">
          <DropDown items={categoryItems} onSelect={onSelectCategory} />
          <Button
            className="h-10 w-28"
            color="success"
            variant="solid"
            rounded="sm"
            size="sm"
            onClick={handleOpenModal}
          >
            Create +
          </Button>
        </div>
      )}
    </div>
  );
}

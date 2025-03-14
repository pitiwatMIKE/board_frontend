import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface DropDownItem {
  id: number;
  name: string;
}

export interface DropDownProps {
  type?: "onModal" | null;
  item?: DropDownItem | null;
  items: DropDownItem[];
  onSelect: (item: DropDownItem | null) => void;
}

export default function DropDown(props: DropDownProps) {
  const [selected, setSelected] = useState<DropDownItem | null>(null);
  const { item, items, type } = props;

  useEffect(() => {
    if (item) {
      setSelected(item);
    }
  }, [item]);

  const handleSelect = (item: DropDownItem) => {
    if (selected?.id === item.id) {
      setSelected(null);
      props.onSelect(null);
      return;
    }
    setSelected(item);
    props.onSelect(item);
  };

  const textNoneSelected =
    type == "onModal" ? "Choose a community" : "Comunity";

  return (
    <Menu>
      {({ open }) => (
        <div className="flex items-center">
          {type != "onModal" && open && (
            <div
              className={clsx(
                "bg-opacity-50 fixed inset-0 z-30 bg-black opacity-50",
              )}
              aria-hidden="true"
            />
          )}

          <MenuButton
            className={clsx(
              "font-ibm-plex-sans flex items-center justify-between gap-0.5 font-medium whitespace-nowrap text-black p-3",
              {
                "border-success text-success flex h-10 w-56 items-center justify-between rounded-lg border-1 ":
                  type == "onModal",
              },
            )}
          >
            <div className="">{selected ? selected.name : textNoneSelected}</div>
            <Image
              src={
                type == "onModal"
                  ? "/chevron-down-green.svg"
                  : "/chevron-down.svg"
              }
              alt="chevron-down"
              width={20}
              height={20}
            />
          </MenuButton>
          <MenuItems
            anchor={type == "onModal" ? "bottom start" : "bottom end"}
            className={clsx(
              "z-40 min-w-52 rounded-sm bg-white text-black shadow-lg drop-shadow-md lg:min-w-80",
            )}
          >
            {items.map((item, index) => (
              <MenuItem key={index}>
                <div
                  className={clsx(
                    "px-3 py-3 hover:bg-green-100 data-[focus]:bg-green-100",
                    {
                      "bg-green-100": selected?.id === item.id,
                    },
                  )}
                  onClick={() => handleSelect(item)}
                >
                  <div className={clsx("flex items-center justify-between")}>
                    <span>{item.name}</span>
                    {selected?.id === item.id && (
                      <Image
                        src="/check-icon.svg"
                        alt="check"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              </MenuItem>
            ))}
          </MenuItems>
        </div>
      )}
    </Menu>
  );
}

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export interface DropDownItem {
  id: number;
  name: string;
}

export interface DropDownProps {
  items: DropDownItem[];
  onSelect: (item: DropDownItem | null) => void;
}

export default function DropDown(props: DropDownProps) {
  const [selected, setSelected] = useState<DropDownItem | null>(null);
  const { items } = props;

  const handleSelect = (item: DropDownItem) => {
    if (selected?.id === item.id) {
      setSelected(null);
      props.onSelect(null);
      return;
    }
    setSelected(item);
    props.onSelect(item);
  };

  return (
    <Menu>
      {({ open }) => (
        <div className="flex items-center">
          {open && (
            <div
              className={clsx(
                "bg-opacity-50 fixed inset-0 z-30 bg-black opacity-50",
              )}
              aria-hidden="true"
            />
          )}

          <MenuButton
            className={clsx(
              "font-ibm-plex-sans flex items-center gap-0.5 font-medium text-black",
            )}
          >
            <span>{selected ? selected.name : "Comunity"}</span>
            <Image
              src="/chevron-down.svg"
              alt="chevron-down"
              width={20}
              height={20}
            />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className={clsx(
              "z-40 min-w-52 lg:min-w-80 rounded-sm bg-white text-black shadow-lg drop-shadow-md",
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

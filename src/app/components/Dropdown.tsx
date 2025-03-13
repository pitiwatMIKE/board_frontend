import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
export default function DropDown() {
  const items = [
    { name: "Settings", href: "/settings" },
    { name: "Support", href: "/support" },
    { name: "License", href: "/license" },
  ];
  return (
    <Menu>
      <MenuButton className={clsx("text-black")}>Comunity</MenuButton>
      <MenuItems
        anchor="bottom end"
        className={clsx("w-64 rounded-sm bg-white text-black")}
      >
        {items.map((item, index) => (
          <MenuItem key={index}>
            <div className="px-2 py-2 hover:bg-amber-200">{item.name}</div>
          </MenuItem>
        ))}

        {/* <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem> */}
      </MenuItems>
    </Menu>
  );
}

"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import SignInButton from "./SignInButton";
import { isMatchPathname } from "@/utils/isMatchPath";
import { menuItems } from "@/constants/menu";


const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(
          hamburgerRef.current &&
          hamburgerRef.current.contains(event.target as Node)
        )
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Hamburger Icon */}
      <button className="lg:hidden" onClick={toggleSidebar} ref={hamburgerRef}>
        <Image src={"/menu.svg"} width={24} height={24} alt="menu" />
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 h-full w-[280px] transform rounded-tl-xl rounded-bl-xl bg-green-500 px-4 py-5 transition-transform lg:hidden ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="pb-6">
          <Image
            className="cursor-pointer"
            onClick={closeSidebar}
            src={"/back-icon.svg"}
            width={16}
            height={12}
            alt="back-icon"
          />
        </div>
        <ul className="text-grey-100 mb-3 flex flex-col text-base">
          {menuItems.map((item) => (
            <li
              className={clsx(
                "mb-4 flex cursor-pointer items-center gap-2",
                isMatchPathname(pathname, item.path) ? "font-bold" : "",
              )}
              key={item.name}
              onClick={() => {
                closeSidebar();
                router.push(item.path);
              }}
            >
              <Image
                className={clsx(
                  isMatchPathname(pathname, item.path)
                    ? "opacity-90"
                    : "brightness-75",
                )}
                src={item.icon}
                width={24}
                height={24}
                alt={item.name}
              />
              {item.name}
            </li>
          ))}

          <div className="mt-4">
            <SignInButton />
          </div>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const menuItems = [
  {
    name: "Home",
    icon: "/home-icon.svg",
    path: "/",
  },
  {
    name: "Our Blog",
    icon: "/home-icon.svg",
    path: "/",
  },
];

const Sidebar = () => {
  const router = useRouter();
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
        className={`fixed top-0 right-0 z-50 h-full w-[280px] transform rounded-tl-xl rounded-bl-xl bg-green-500 px-4 py-5 text-base font-extrabold text-white transition-transform lg:hidden ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="pb-6">
          <Image
            className="cursor-pointer brightness-0 invert"
            onClick={closeSidebar}
            src={"/back-icon.svg"}
            width={16}
            height={12}
            alt="back-icon"
          />
        </div>
        <ul className="flex flex-col">
          {menuItems.map((item) => (
            <li
              className="mb-4"
              key={item.name}
              onClick={() => {
                closeSidebar();
                router.push(item.path);
              }}
            >
              {item.name}
            </li>
          ))}
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

"use client";
import Sidebar from "./Sidebar";
import Button from "./Button";
import { useRouter } from "next/navigation";
import SignInButton from "./SignInButton";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-green-500 px-4">
      <h1 className="font-castoro text-xl">a Board</h1>
      <Sidebar />

      <div className="hidden lg:block">
        <SignInButton />
      </div>
    </div>
  );
}

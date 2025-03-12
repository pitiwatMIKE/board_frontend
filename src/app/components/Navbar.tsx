import { Castoro } from "next/font/google";

const castoro = Castoro({
  variable: "--font-castoro",
  weight: "400",
  style: "italic",
});

export default function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between bg-green-500 px-4 text-xl">
      <h1 className={`${castoro.className}`}>aBoard</h1>
      <h1 className={`${castoro.className}`}>aBoard</h1>
    </div>
  );
}

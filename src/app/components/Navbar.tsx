import Sidebar from "./Sidebar";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between bg-green-500 px-4">
      <h1 className="font-castoro text-xl">a Board</h1>
      <Sidebar />

      <div className="hidden lg:block">
        <Button
          className="w-28 font-medium"
          color="success"
          variant="solid"
          size="sm"
          rounded="sm"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

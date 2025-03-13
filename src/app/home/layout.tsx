import Navbar from "../components/Navbar";
import SidebarDesktop from "../components/SidebarDesktop";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-grey-100 h-full pt-16">
      <Navbar />
      <div className="flex gap-5">
        <div className="hidden flex-1 lg:block">
          <SidebarDesktop />
        </div>
        <div>{children}</div>
        <div className="hidden flex-1 lg:block"></div>
      </div>
    </div>
  );
}

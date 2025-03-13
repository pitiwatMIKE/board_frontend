import Navbar from "../components/Navbar";
import SidebarDesktop from "../components/SidebarDesktop";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full pt-16">
      <Navbar />
      <div className="bg-grey-100 flex gap-5">
        <div className="hidden flex-1 lg:block">
          <SidebarDesktop />
        </div>
        <div className="flex-3">{children}</div>
        <div className="hidden flex-1 lg:block"></div>
      </div>
    </div>
  );
}

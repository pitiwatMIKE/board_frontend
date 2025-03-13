import Navbar from "../components/Navbar";
import SidebarDesktop from "../components/SidebarDesktop";

export default function OurBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-ful pt-16">
      <Navbar />
      <div className="flex gap-28 bg-white">
        <div className="hidden flex-1 lg:block">
          <SidebarDesktop />
        </div>
        <div className="flex-3">{children}</div>
      </div>
    </div>
  );
}

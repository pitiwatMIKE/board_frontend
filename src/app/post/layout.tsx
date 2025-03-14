import Navbar from "@/components/Navbar";
import SidebarDesktop from "@/components/SidebarDesktop";


export default function OurBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full pt-16">
      <Navbar />
      <div className="flex h-full gap-28 bg-white">
        <div className="hidden flex-1 lg:block">
          <SidebarDesktop />
        </div>
        <div className="h-full flex-3 overflow-scroll">{children}</div>
      </div>
    </div>
  );
}

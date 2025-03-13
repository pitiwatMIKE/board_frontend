import Navbar from "../components/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-grey-100 h-full pt-16">
      <Navbar />
      {children}
    </div>
  );
}

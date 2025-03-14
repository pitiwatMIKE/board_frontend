import type { Metadata } from "next";
import { Castoro, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import InitMasterData from "@/init/InitMasterData";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
  subsets: ["latin", "latin-ext"],
});

const castoro = Castoro({
  variable: "--font-castoro",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Board",
  description: "Assignment board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} ${castoro.variable} h-full w-full`}
      >
        <InitMasterData>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="h-full">{children}</div>
          </Suspense>
        </InitMasterData>
      </body>
    </html>
  );
}

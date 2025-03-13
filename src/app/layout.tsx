import type { Metadata } from "next";
import { Castoro, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
});

const castoro = Castoro({
  variable: "--font-castoro",
  weight: "400",
  style: "italic",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} ${castoro.variable}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}

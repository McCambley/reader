import type { Metadata } from "next";
// import { Inter as Font } from "next/font/google";
// import { Roboto_Slab as Font } from "next/font/google";
import { IBM_Plex_Mono as Font } from "next/font/google";
import dynamic from "next/dynamic";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// import { Open_Sans as Font } from "next/font/google";
const SearchInput = dynamic(() => import("../components/SearchInput"), {
  ssr: false,
});

import "./globals.css";
import { Nav } from "@/components/Nav";
// import { RefreshButton } from "@/components/RefreshButton";
import { SwipeableContainer } from "@/components/SwipeableContainer";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "500", "300", "700"],
});

export const metadata: Metadata = {
  title: "reader.",
  description: "A more productive way to scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="flex min-h-screen text-xs flex-col items-start justify-between px-4 py-2">
          <section className="w-full">
            <Nav />
            <SwipeableContainer>{children}</SwipeableContainer>
          </section>
          {/* <RefreshButton /> */}
          <SearchInput />
        </main>
      </body>
    </html>
  );
}

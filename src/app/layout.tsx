import type { Metadata } from "next";
// import { Inter as Font } from "next/font/google";
import { Open_Sans as Font } from "next/font/google";

import "./globals.css";
import { Nav } from "@/components/Nav";
import { RefreshButton } from "@/components/RefreshButton";

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
        <main className="flex min-h-screen flex-col items-start justify-between p-4">
          <section>
            <Nav />
            {children}
          </section>
          <RefreshButton />
        </main>
      </body>
    </html>
  );
}

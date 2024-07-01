import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { RefreshButton } from "@/components/RefreshButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "reader.",
  description: "A more productive way to scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const results = await getNotionData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-start justify-between p-4">
          <section>
            <Nav />
            {/* <Links pages={results} /> */}
            {children}
          </section>
          <RefreshButton />
        </main>
      </body>
    </html>
  );
}

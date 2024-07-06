"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = ["/random", "/best", "/new", "/read", "/all"];
const DEFAULT_PATH = LINKS[0];

export const Nav: React.FC = () => {
  const path = usePathname();
  const onHomepage = path === "/";
  const shouldUnderline = (link: string): boolean =>
    path === link || (onHomepage && link === DEFAULT_PATH);

  return (
    <nav className="flex gap-2 items-end sticky top-0 z-10 pb-2 ">
      <h1 className="text-xl underline translate-y-[2px]">
        <Link href="/" className="">
          reader.
        </Link>
      </h1>
      {LINKS.map((link, index) => (
        <Link key={link} href={link} className="">
          <span className={shouldUnderline(link) ? "underline" : ""}>
            {link}
          </span>
        </Link>
      ))}
    </nav>
  );
};

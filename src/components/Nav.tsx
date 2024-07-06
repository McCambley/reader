"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = ["/shuffle", "/best", "/new", "/read", "/all", "/favorites"];
const DEFAULT_PATH = LINKS[0];

export const Nav: React.FC = () => {
  const path = usePathname();
  const onHomepage = path === "/";
  const shouldUnderline = (link: string): boolean =>
    path === link || (onHomepage && link === DEFAULT_PATH);

  return (
    <>
      <nav className="sticky top-0 z-10">
        <div className="flex gap-2 items-end pb-1">
          <h1 className="text-xl underline translate-y-[2px]">
            <Link href="/" className="">
              reader.
            </Link>
          </h1>
          {LINKS.map((link, index) => (
            <Link key={link} href={link} className="">
              <span className={shouldUnderline(link) ? "underline" : ""}>
                {link.slice(0, 2)}
              </span>
            </Link>
          ))}
        </div>
        <p className="pb-2 opacity-50">{path}</p>
      </nav>
    </>
  );
};

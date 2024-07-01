"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["/best", "/new", "/read", "/random", "/all"];

export const Nav: React.FC = () => {
  const path = usePathname();
  console.log({ path });
  return (
    <nav className="flex gap-2 items-end sticky top-0 bg-black z-10 pb-2">
      <h1 className="text-xl underline">
        <Link href="/">reader.</Link>
      </h1>
      {links.map((link, index) => (
        <Link key={links[index]} href={link}>
          <span className={path === link ? "underline" : ""}> {link} </span>
        </Link>
      ))}
    </nav>
  );
};

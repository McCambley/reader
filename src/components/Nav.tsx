"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS, DEFAULT_PATH, HOME, LINK_ALIASES } from "@/app/constants";

export const Nav: React.FC = () => {
  const path = usePathname();
  const onHomepage = path === HOME;
  const shouldUnderline = (link: string): boolean =>
    path === link || (onHomepage && link === DEFAULT_PATH);

  const handleHelpClick = () => {
    alert(
      "Yellow = in progress\nWhite = unread\nGray = read\n\n'.:' = high priority\n'.' = medium priority\n'' = low priority\n\n"
    );
  };
  return (
    <nav className="sticky top-0 z-10 flex justify-between w-full">
      <div>
        <div className="text-xl flex gap-2 items-end pb-1">
          <h1 className="text-xl">
            <Link href="/" className="">
              reader.
            </Link>
          </h1>
          {LINKS.map((link, index) => (
            <Link key={link} href={link} className="opacity-50">
              <span>{link.slice(0, 1)}</span>
              <span className={shouldUnderline(link) ? "underline" : ""}>
                {LINK_ALIASES[link] ? LINK_ALIASES[link] : link.slice(1, 2)}
              </span>
            </Link>
          ))}
        </div>
        <p className="pb-2 opacity-50">
          {path?.length === 1 ? DEFAULT_PATH : path}
        </p>
      </div>
      <button
        className="help-button text-xl rounded-full p-1 "
        onClick={handleHelpClick}
      >
        ?
      </button>
    </nav>
  );
};

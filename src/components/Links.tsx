import React from "react";
import { NotionDatabasePages } from "@/schemas/notionResponse";
import Link from "./Link";
import dynamic from "next/dynamic";
const SearchInput = dynamic(() => import("./SearchInput"), { ssr: false });

interface LinksProps {
  pages: NotionDatabasePages;
}

export const Links: React.FC<LinksProps> = ({ pages }) => {
  return (
    <>
      <SearchInput />
      {pages.length ? (
        <ul>
          {pages.map((page, index) => (
            <Link key={page.id} page={page} index={index} />
          ))}
        </ul>
      ) : (
        <p>No results found...</p>
      )}
    </>
  );
};

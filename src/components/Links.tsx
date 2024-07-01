import React from "react";
import { NotionDatabasePages } from "@/schemas/notionResponse";
import Link from "./Link";

interface LinksProps {
  pages: NotionDatabasePages;
}

export const Links: React.FC<LinksProps> = ({ pages }) => {
  return (
    <ul>
      {pages.map((page, index) => (
        <Link key={page.id} page={page} index={index} />
      ))}
    </ul>
  );
};

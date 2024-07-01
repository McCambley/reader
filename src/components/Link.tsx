import React from "react";
import { NotionDatabasePage } from "@/schemas/notionResponse";

interface LinkProps {
  page: NotionDatabasePage;
  index: number;
}

export const Link: React.FC<LinkProps> = ({ page, index }) => {
  return (
    <li key={page.id}>
      <a className="underline" href={page.properties.Link.url || ""}>
        {index + 1}. {page.properties.Name.title[0].plain_text}
      </a>
      <p className="italic">
        <a href={page.url || ""}>
          {new Date(page.created_time).toDateString()}
        </a>
      </p>
      -
    </li>
  );
};

export default Link;

import React from "react";
import { NotionDatabasePage } from "@/schemas/notionResponse";
import { LinkLink } from "./LinkLink";

const parseLinkClass = (color: string | undefined): string => {
  switch (color) {
    case "yellow":
      return "in-progress-link";
    case "red":
      return "completed-link";
    case "green":
      return "unread-link";
    default:
      return "";
  }
};

interface LinkProps {
  page: NotionDatabasePage;
  index: number;
}

export const Link: React.FC<LinkProps> = ({ page, index }) => {
  const colorClass = parseLinkClass(page.properties.Status.select?.color);
  const status = page.properties.Status.select?.name;
  const importance = page.properties.Importance.select?.name.substring(1);
  const facet = page.properties.Facet.select?.name;
  const url = page.properties.Link.url || page.url;
  const pageUrl = page.url;
  const name = page.properties.Name.title[0].plain_text;
  const shortenedUrl = url?.split("/")[2];
  const createdTime = new Date(
    page.properties["Created time"].created_time
  ).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const type = page.properties.Type.select?.name;

  return (
    <li key={page.id} className="mb-3 grid grid-cols-[4ch_1fr]">
      <p className={colorClass}>{index + 1}.</p>
      <LinkLink
        className={colorClass}
        href={url || ""}
        pageId={page.id}
        status={status}
      >
        <span>
          {name} <span className="opacity-50">({shortenedUrl})</span>
        </span>
      </LinkLink>
      <p className="opacity-50">{importance ? importance : ""}</p>
      <p className="italic opacity-50 flex">
        <a href={pageUrl || ""} className="">
          <span>{createdTime} · </span>
          {facet ? <span>{facet} </span> : null}
          {type ? <span>{type} </span> : null}
        </a>
      </p>
    </li>
  );
};

export default Link;

import React from "react";
import { NotionDatabasePage } from "@/schemas/notionResponse";

interface LinkProps {
  page: NotionDatabasePage;
  index: number;
}

export const Link: React.FC<LinkProps> = ({ page, index }) => {
  // const status = page.properties.Status.select?.name;
  const statusColor = page.properties.Status.select?.color;
  const importance = page.properties.Importance.select?.name;
  const facet = page.properties.Facet.select?.name;
  const url = page.properties.Link.url;
  const pageUrl = page.url;
  // const source = page.properties.Source.select?.name;
  // const checked = page.properties.Checked.checkbox;
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
  // const tags = page.properties.Tags.multi_select.map((tag) => tag.name);

  return (
    <li key={page.id} className="mb-4">
      <a className="" href={url || ""}>
        <span className={`text-${statusColor}-600`}>
          {index + 1}. {name}
        </span>{" "}
        <span className="opacity-50">({shortenedUrl})</span>
      </a>
      <p className="italic text-xs">
        {importance ? (
          <span className="not-italic">{importance} · </span>
        ) : null}
        <a href={pageUrl || ""} className="opacity-50">
          <span>{createdTime} · </span>
          {facet ? <span>{facet} </span> : null}
          {type ? <span>{type} </span> : null}
          {/* {source ? <span>{source} </span> : null} */}
          {/* {tags.length ? <span>{tags[0]} </span> : null} */}
        </a>
      </p>
    </li>
  );
};

export default Link;
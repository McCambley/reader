"use client";
import React from "react";
import { updateNotionPage } from "@/utils/updateNotionPage";
import { useRouter } from "next/navigation";

interface LinkLinkProps {
  className: string;
  href: string;
  children: React.ReactNode;
  pageId: string;
  status?: string;
}

export const LinkLink: React.FC<LinkLinkProps> = ({
  className,
  href,
  children,
  pageId,
  status,
}) => {
  const router = useRouter();
  const handleLinkClick =
    (pageId: string, url: string, status?: string) =>
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.open(url);
      /*
      // Uncomment this block to update the status of the page in Notion
      if (status === "On Deck") {
        await updateNotionPage({ pageId, status: "Working" });
        router.refresh();
      }
      */
    };

  return (
    <a
      href={href}
      className={className}
      onClick={handleLinkClick(pageId, href, status)}
    >
      {children}
    </a>
  );
};

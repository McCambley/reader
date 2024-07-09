"use server";
import { Client } from "@notionhq/client";
const notionAPIKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID as string;

// Initializing a client
const notion = new Client({ auth: notionAPIKey });

export async function updateNotionPage({
  pageId,
  status = "Working",
}: {
  pageId: string;
  status?: "Working" | "On Deck" | "Finished";
}) {
  try {
    const response = await notion.pages.update({
      page_id: pageId,
      properties: {
        Status: {
          select: {
            name: status,
          },
        },
      },
    });
    console.log(response);
  } catch (error) {
    console.error("Error updating Notion page:", error);
  }
}

import { Client } from "@notionhq/client";
import {
  NotionDatabaseSchema,
  NotionDatabase,
} from "../schemas/notionResponse";

const notionAPIKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID as string;

// Initializing a client
const notion = new Client({ auth: notionAPIKey });

export async function getNotionData() {
  // @ts-ignore
  const response: NotionDatabase = await notion.databases.query({
    database_id: databaseId,
  });

  const validationResult = NotionDatabaseSchema.safeParse(response);

  if (!validationResult.success) {
    console.error("Validation error:", validationResult);
    throw new Error("Invalid Notion API response");
  }

  return validationResult.data;
}

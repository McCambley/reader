import { Client } from "@notionhq/client";
import { z } from "zod";
import {
  NotionDatabaseSchema,
  NotionDatabase,
} from "../schemas/notionResponse";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const notionAPIKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID as string;

// Initializing a client
const notion = new Client({ auth: notionAPIKey });

export async function getNotionData() {
  let hasMore: boolean | undefined = true;
  let startCursor: string | null = null;
  let results: NotionDatabase["results"] = [];
  let count = 0;
  // @ts-ignore
  while (hasMore && count < 5) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: startCursor ? startCursor : undefined,
    });

    const validationResult = NotionDatabaseSchema.safeParse(response);

    if (!validationResult?.success) {
      console.error(
        "Validation error:",
        JSON.stringify(validationResult.error, null, 2)
      );
      throw new Error("Invalid Notion API response");
    }

    if (count === 4) {
      throw new Error("Hanging");
    }

    results = results.concat(validationResult.data.results);
    hasMore = validationResult.data.has_more;
    startCursor = validationResult.data.next_cursor;
    console.log({
      result: validationResult.data,
      hasMore,
      startCursor,
      count,
    });
    count++;
  }

  return results;
}

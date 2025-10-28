import { Client } from "@notionhq/client";
import { clearCache } from "./clearCache";
import {
  NotionDatabaseSchema,
  NotionDatabase,
} from "../schemas/notionResponse";
import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

const notionAPIKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID as string;

interface GetNotionDataArguments {
  filter?: QueryDatabaseParameters["filter"];
  sorts?: QueryDatabaseParameters["sorts"];
  limit?: boolean;
}

// Initializing a client
const notion = new Client({ auth: notionAPIKey });

export async function getNotionData({
  filter,
  sorts,
  limit = true,
}: GetNotionDataArguments) {
  clearCache();
  try {
    let hasMore: boolean | undefined = true;
    let startCursor: string | null = null;
    let results: NotionDatabase["results"] = [];
    while (hasMore) {
      const response = await notion.databases.query({
        database_id: databaseId,
        start_cursor: startCursor ? startCursor : undefined,
        filter,
        sorts,
      });

      const validationResult = NotionDatabaseSchema.safeParse(response);

      if (!validationResult?.success) {
        console.error(
          "Validation error:",
          JSON.stringify(validationResult.error, null, 2)
        );
        throw new Error("Invalid Notion API response");
      }

      results = results.concat(validationResult.data.results);
      hasMore = limit ? false : validationResult.data.has_more;
      startCursor = validationResult.data.next_cursor;
    }

    // Return the results
    return results;
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return [];
  }
}

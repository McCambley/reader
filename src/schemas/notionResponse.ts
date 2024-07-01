import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { z } from "zod";

const SelectSchema = z.object({
  id: z.string(),
  type: z.literal("select"),
  select: z
    .object({
      id: z.string().optional(),
      name: z.string(),
      color: z.string().optional(),
    })
    .nullable(),
});

const MultiSelectSchema = z.object({
  id: z.string(),
  type: z.literal("multi_select"),
  multi_select: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string(),
      color: z.string().optional(),
    })
  ),
});

const UrlSchema = z.object({
  url: z.string().url().nullable(),
});

const CreatedTimeSchema = z.object({
  id: z.string(),
  type: z.literal("created_time"),
  created_time: z.string().datetime(),
});

const TextSchema = z.object({
  content: z.string().optional(),
  link: z.nullable(z.any()).optional(),
});

const AnnotationsSchema = z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.string(),
});

const TitleItemSchema = z.object({
  type: z.string().optional(),
  text: TextSchema.optional(),
  annotations: z.any(),
  plain_text: z.string().nullable(),
  href: z.nullable(z.string()).optional(),
  link: z.nullable(z.string()).optional(),
});

const TitleSchema = z.object({
  id: z.string().optional(),
  type: z.string().optional(),
  title: z.array(TitleItemSchema),
});

const CheckboxSchema = z.object({
  id: z.string(),
  type: z.literal("checkbox"),
  checkbox: z.boolean(),
});

const PropertiesSchema = z.object({
  Importance: SelectSchema,
  Facet: SelectSchema,
  Link: UrlSchema,
  Status: SelectSchema,
  Source: SelectSchema,
  Tags: MultiSelectSchema,
  Type: SelectSchema,
  "Created time": CreatedTimeSchema,
  Name: TitleSchema,
  Checked: CheckboxSchema,
});

const NotionDatabaseSchema = z.object({
  object: z.string(),
  results: z.array(
    z.object({
      object: z.string(),
      id: z.string(),
      created_time: z.string().datetime(),
      last_edited_time: z.string().datetime(),
      created_by: z.any(),
      last_edited_by: z.any(),
      cover: z.null(),
      icon: z.any().nullable(),
      parent: z.any(),
      archived: z.boolean(),
      in_trash: z.boolean(),
      properties: PropertiesSchema,
      url: z.string().url(),
      public_url: z.string().nullable().optional(),
    })
  ),
  next_cursor: z.string().nullable(),
  has_more: z.boolean().optional(),
  type: z.string(),
  request_id: z.string(),
});

export type NotionDatabase = z.infer<typeof NotionDatabaseSchema>;
export type NotionDatabasePages = NotionDatabase["results"];
export type NotionDatabasePage = NotionDatabasePages[number];
export { NotionDatabaseSchema };

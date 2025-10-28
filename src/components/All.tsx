import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

interface Props {
  query?: string;
}

export async function All({ query }: Props) {
  const results = await getNotionData({
    limit: false,
    filter: query
      ? {
          or: [
            { property: "Name", url: { contains: query } },
            { property: "Link", title: { contains: query } },
          ],
        }
      : undefined,
    sorts: query
      ? [
          {
            property: "Status",
            direction: "ascending",
          },

          {
            property: "Importance",
            direction: "ascending",
          },
        ]
      : undefined,
  });
  return <Links pages={results} />;
}

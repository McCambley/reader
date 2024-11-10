import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";
import { mediaSources } from "@/app/constants";

export async function Videos() {
  let results = await getNotionData({
    filter: {
      and: [
        { property: "Status", select: { does_not_equal: "Finished" } },
        {
          or: [
            ...mediaSources.map((source) => ({
              property: "Link",
              url: { contains: source },
            })),
          ],
        },
      ],
    },
    sorts: [
      {
        property: "Status",
        direction: "ascending",
      },

      {
        property: "Importance",
        direction: "ascending",
      },
    ],
  });
  return <Links pages={results} />;
}

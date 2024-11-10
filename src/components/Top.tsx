import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";
import { mediaSources } from "@/app/constants";

export async function Top() {
  const results = await getNotionData({
    filter: {
      and: [
        { property: "Status", select: { does_not_equal: "Finished" } },
        ...mediaSources.map((source) => ({
          property: "Link",
          url: { does_not_contain: source },
        })),
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

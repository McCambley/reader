import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function Done() {
  const results = await getNotionData({
    filter: { property: "Status", select: { equals: "Finished" } },
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

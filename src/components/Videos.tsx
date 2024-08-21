import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function Videos() {
  let results = await getNotionData({
    // filter: { property: "Status", select: { does_not_equal: "Finished" } },
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
  // This could be optimized by filtering the results in the getNotionData function
  results = results.filter((result) =>
    result?.properties?.Link?.url?.includes("youtube")
  );
  return <Links pages={results} />;
}

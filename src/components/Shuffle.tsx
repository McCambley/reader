import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";
import { getRandomItems } from "@/utils/getRandomItems";

export async function Shuffle() {
  const results = await getNotionData({
    limit: false,
    filter: { property: "Status", select: { does_not_equal: "Finished" } },
  });
  const randomItems = getRandomItems(results, 30);
  return <Links pages={randomItems} />;
}

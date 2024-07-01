import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";
import { getRandomItems } from "@/utils/getRandomItems";

export async function Random() {
  const results = await getNotionData({
    limit: false,
    filter: { property: "Status", select: { does_not_equal: "Finished" } },
  });
  const randomItems = getRandomItems(results, 10);
  return <Links pages={randomItems} />;
}

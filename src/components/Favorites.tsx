import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function Favorites() {
  const results = await getNotionData({
    filter: { property: "Favorite", checkbox: { equals: true } },
    sorts: [
      {
        property: "Last edited time",
        direction: "descending",
      },
    ],
  });
  console.log({ results: results.map((r) => r.properties) });
  return <Links pages={results} />;
}

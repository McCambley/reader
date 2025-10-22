import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function New() {
  const results = await getNotionData({
    limit: true,
    sorts: [
      {
        property: "Created time",
        direction: "descending",
      },
    ],
  });
  return <Links pages={results} />;
}

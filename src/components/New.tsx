import Image from "next/image";
import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function New() {
  const results = await getNotionData({});
  return <Links pages={results} />;
}

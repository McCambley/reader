import { getNotionData } from "@/utils/getNotionData";
import { Links } from "@/components/Links";

export async function All() {
  const results = await getNotionData({ limit: false });
  return <Links pages={results} />;
}

import { Random } from "@/components/Random";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return <Random />;
}

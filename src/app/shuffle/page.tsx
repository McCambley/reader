import { Shuffle } from "@/components/Shuffle";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return <Shuffle />;
}

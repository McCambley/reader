import { Best } from "@/components/Best";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return <Best />;
}

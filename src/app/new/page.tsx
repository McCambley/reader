import { New } from "@/components/New";
import { revalidatePath } from "next/cache";

export default async function Page() {
  return <New />;
}

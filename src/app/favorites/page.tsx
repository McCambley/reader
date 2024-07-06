import { Favorites } from "@/components/Favorites";
import { revalidatePath } from "next/cache";

export default async function Page() {
  return <Favorites />;
}

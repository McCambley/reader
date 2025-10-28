import { All } from "@/components/All";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: Props) {
  const { query = "" } = await searchParams;
  return <All query={query} />;
}

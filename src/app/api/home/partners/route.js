import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("partners");
  return new Response(JSON.stringify(data || []), { status: 200 });
}

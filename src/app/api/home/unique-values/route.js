import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("core_services", {
    filter: { slug: { _eq: "unique-value" } },
  });
  return new Response(JSON.stringify(data || []), { status: 200 });
}

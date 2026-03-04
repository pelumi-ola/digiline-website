import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("core_services", {
    filter: { slug: { _eq: "core-service" } },
  });
  return new Response(JSON.stringify(data || []), { status: 200 });
}

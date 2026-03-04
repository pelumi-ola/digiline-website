import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("herosection", {
    filter: { page: { _eq: "home" } },
    limit: 1,
  });
  return new Response(JSON.stringify(data?.[0] || null), { status: 200 });
}

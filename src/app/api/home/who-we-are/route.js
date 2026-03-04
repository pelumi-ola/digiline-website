import { fetchCollection } from "@/lib/api";

export async function GET() {
  const data = await fetchCollection("subheading", {
    filter: { page: { _eq: "home" } },
  });
  return new Response(JSON.stringify(data?.[0] || null), { status: 200 });
}

// import { fetchCollection } from "@/lib/api";

// export async function GET() {
//   const data = await fetchCollection("core_services", {
//     filter: { slug: { _eq: "core-service" } },
//   });
//   return new Response(JSON.stringify(data || []), { status: 200 });
// }

import { fetchCollection } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchCollection("core_services", {
      filter: { slug: { _eq: "core-service" } },
    });

    return new Response(JSON.stringify(data || []), { status: 200 });
  } catch (error) {
    console.error("Core services API error:", error);
    return new Response(JSON.stringify([]), { status: 500 });
  }
}

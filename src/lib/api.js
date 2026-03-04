import directus from "./directus";

// Generic collection fetch
export async function fetchCollection(collection, query = {}) {
  try {
    const data = await directus.items(collection).readMany(query);
    return data.data; // Directus returns { data, meta }
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    return null;
  }
}

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("Loaded API_BASE:", API_BASE);

if (!API_BASE) {
  console.error("❌ ERROR: NEXT_PUBLIC_API_BASE_URL is missing!");
}

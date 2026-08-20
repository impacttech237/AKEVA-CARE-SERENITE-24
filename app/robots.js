import { getSite } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function robots() {
  const site = await getSite();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

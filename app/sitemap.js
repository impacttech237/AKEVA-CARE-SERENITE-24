import { routes } from "@/lib/site";
import { getSite, getArticles } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const [site, articles] = await Promise.all([getSite(), getArticles()]);
  const now = new Date();
  const pages = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const posts = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: now,
  }));
  return [...pages, ...posts];
}

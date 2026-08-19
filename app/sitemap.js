import { routes, site } from "@/lib/site";
import { articles } from "@/lib/content";

export default function sitemap() {
  const now = new Date();
  const pages = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const posts = articles.map((a) => ({
    url: `${site.url}/conseils/${a.slug}`,
    lastModified: now,
  }));
  return [...pages, ...posts];
}

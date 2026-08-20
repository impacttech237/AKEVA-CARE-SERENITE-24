import Link from "next/link";
import BlogFilters from "@/components/BlogFilters";
import { articles } from "@/lib/content";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Blog",
  description:
    "Le blog Akeva Care : conseils pour les familles et la diaspora — garde malade, hôpital, nuit, personnes âgées, organisation à distance.",
};

export default function Page() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Conseils pour les familles</h1>
          <p className="lead">
            Des textes utiles, sans jargon, pour décider vite — et bien. Yaoundé,
            Douala, et depuis l'étranger.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="blog-featured">
            <div className="blog-featured-media">
              <img src={featured.image} alt="" />
            </div>
            <div className="blog-featured-copy">
              <p className="eyebrow">{featured.category}</p>
              <h2>{featured.title}</h2>
              <p className="lead">{featured.excerpt}</p>
              <p className="small mt-s">{featured.date}</p>
              <span className="link-more mt-m">
                Lire l'article <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <BlogFilters articles={rest} />
        </div>
      </section>
    </>
  );
}

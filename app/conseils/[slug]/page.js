import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/content";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function Page({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <article className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="crumbs">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/conseils">Conseils</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="small">{article.date}</p>
          <div className="media-frame mt-l">
            <img src={article.image} alt="" style={{ width: "100%", height: 420, objectFit: "cover" }} />
          </div>
          <div className="prose mt-l">
            {article.content.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <CTABanner title="Une situation proche de la vôtre ?" />
    </>
  );
}

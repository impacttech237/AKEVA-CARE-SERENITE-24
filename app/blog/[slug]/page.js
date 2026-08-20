import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, relatedArticles } from "@/lib/content";
import CTABanner from "@/components/CTABanner";
import { Arrow } from "@/components/Icons";

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
  const related = relatedArticles(article.slug);

  return (
    <>
      <article className="page-hero">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="crumbs">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="small">
            {article.date} · Akeva Care
          </p>
          <div className="media-frame mt-l">
            <img
              src={article.image}
              alt=""
              style={{ width: "100%", height: "min(58vw, 440px)", objectFit: "cover" }}
            />
          </div>
          <div className="prose mt-l">
            {article.content.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <p className="eyebrow">À lire aussi</p>
            <h2 className="mt-s">Autres articles</h2>
            <div className="grid-3 mt-l">
              {related.map((a) => (
                <article className="card" key={a.slug}>
                  <div className="card-media">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="card-body">
                    <p className="small">{a.category}</p>
                    <h3 className="mt-s">{a.title}</h3>
                    <Link className="link-more" href={`/blog/${a.slug}`}>
                      Lire <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title="Une situation proche de la vôtre ?" />
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/content";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Conseils",
  description:
    "Guides pour les familles et la diaspora : choisir une garde malade, organiser un accompagnement à distance, préparer un retour à domicile.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Ressources</p>
          <h1>Conseils</h1>
          <p className="lead">
            Des textes utiles, sans jargon, pour les familles qui doivent
            décider vite — et bien.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 70}>
              <article className="card">
                <div className="card-media">
                  <img src={a.image} alt="" />
                </div>
                <div className="card-body">
                  <p className="small">
                    {a.category} · {a.date}
                  </p>
                  <h3 className="mt-s">{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <Link className="link-more" href={`/conseils/${a.slug}`}>
                    Lire l'article <Arrow />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { formulas } from "@/lib/content";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Nos formules",
  description:
    "Présence jour, nuit, 24h/24, accompagnement hospitalier et formule diaspora. Devis personnalisé à Yaoundé et Douala.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Offre</p>
          <h1>Nos formules</h1>
          <p className="lead">
            Des cadres clairs, toujours ajustés à la situation. Les tarifs se
            construisent après l'échange — pas avant d'avoir compris le besoin.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {formulas.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 70}>
              <article className={`formula ${f.featured ? "is-featured" : ""}`}>
                <span className="tag">{f.tag}</span>
                <h3>{f.name}</h3>
                <p>{f.text}</p>
                <ul>
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link className="link-more" href="/demander-un-devis">
                  Demander un devis <Arrow />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Accompagnement à Douala",
  description:
    "Garde malade, auxiliaire de vie et accompagnement hospitalier à Douala. Akeva Care Sérénité 24.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="eyebrow">Douala</p>
            <h1>Accompagnement à domicile et à l'hôpital à Douala</h1>
            <p className="lead">
              À Douala comme à Yaoundé, Akeva Care met en place une présence
              professionnelle : domicile, hôpital, jour, nuit ou en continu.
            </p>
            <div className="btn-row mt-m">
              <Link className="btn btn-primary" href="/demander-un-devis">
                Demander un devis Douala <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/yaounde">
                Voir Yaoundé
              </Link>
            </div>
          </div>
          <Reveal className="media-frame">
            <img src="/images/douala.jpg" alt="Douala" style={{ width: "100%", height: 400, objectFit: "cover" }} />
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} className="card-plain" delay={(i % 3) * 60}>
              <h3>{s.title}</h3>
              <p className="muted">{s.short}</p>
              <Link className="link-more" href={`/${s.slug}`}>
                En savoir plus <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner title="Besoin d'une présence à Douala ?" />
    </>
  );
}

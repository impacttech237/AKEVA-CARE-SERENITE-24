import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { getServices } from "@/lib/data";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Accompagnement à Yaoundé",
  description:
    "Garde malade, auxiliaire de vie et accompagnement hospitalier à Yaoundé. Akeva Care Sérénité 24.",
};

export default async function Page() {
  const services = await getServices();
  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="eyebrow">Yaoundé</p>
            <h1>Accompagnement à domicile et à l'hôpital à Yaoundé</h1>
            <p className="lead">
              Akeva Care organise des présences dans la capitale : garde de
              jour, garde de nuit, 24h/24, accompagnement hospitalier et
              auxiliaire de vie.
            </p>
            <div className="btn-row mt-m">
              <Link className="btn btn-primary" href="/demander-un-devis">
                Demander un devis Yaoundé <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/douala">
                Voir Douala
              </Link>
            </div>
          </div>
          <Reveal className="media-frame">
            <img src="/images/yaounde.jpg" alt="Yaoundé" style={{ width: "100%", height: 400, objectFit: "cover" }} />
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
      <CTABanner title="Besoin d'une présence à Yaoundé ?" />
    </>
  );
}

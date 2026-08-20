import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { Arrow } from "@/components/Icons";
import { getServices } from "@/lib/data";

export const metadata = {
  title: "Nos services",
  description:
    "Garde malade, auxiliaire de vie, accompagnement hospitalier, garde de jour et de nuit, 24h/24, personnes âgées, troubles psychiques et location de matériel à Yaoundé et Douala.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Akeva Care</p>
          <h1>Nos services</h1>
          <p className="lead">
            Une présence professionnelle et humaine, à domicile ou à l'hôpital.
            Chaque accompagnement est organisé selon la situation — pas selon
            une grille figée.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <article className="card">
                <div className="card-media">
                  <img src={s.image} alt="" />
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <Link className="link-more" href={`/${s.slug}`}>
                    En savoir plus <Arrow />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}

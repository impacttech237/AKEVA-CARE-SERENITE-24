import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/site";
import { whyPoints } from "@/lib/content";

export const metadata = {
  title: "À propos",
  description:
    "Akeva Care Sérénité 24 : une structure d'accompagnement à la personne, professionnelle, humaine et organisée, à Yaoundé et Douala.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">La maison</p>
          <h1>Plus qu'une simple présence.</h1>
          <p className="lead">
            Akeva Care Sérénité 24 est une structure d'accompagnement à
            domicile et à l'hôpital. Nous refusons l'image d'une agence de
            « garde-malades » improvisée. Nous voulons être la référence
            rassurante, accessible et humaine de l'accompagnement à la personne
            au Cameroun.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <Reveal className="media-frame">
            <img src="/images/hero-home.jpg" alt="L'approche humaine d'Akeva Care" style={{ width: "100%", height: 480, objectFit: "cover" }} />
          </Reveal>
          <div>
            <p className="eyebrow">Promesse</p>
            <h2>{site.promise}</h2>
            <p className="lead mt-s">{site.tagline}</p>
            <div className="stats mt-l">
              <div className="stat">
                <strong>24/7</strong>
                <span>Organisation possible</span>
              </div>
              <div className="stat">
                <strong>2</strong>
                <span>Villes d'intervention</span>
              </div>
              <div className="stat">
                <strong>1</strong>
                <span>Interlocuteur pour la famille</span>
              </div>
              <div className="stat">
                <strong>∞</strong>
                <span>Situations écoutées</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Ce que nous défendons</p>
            <h2>Professionnels. Fiables. Humains.</h2>
          </Reveal>
          <div className="grid-2">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} className="card-plain" delay={(i % 2) * 60}>
                <h3>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Faire connaissance avec Akeva Care" />
    </>
  );
}

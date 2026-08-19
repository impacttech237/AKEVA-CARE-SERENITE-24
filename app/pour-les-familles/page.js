import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { Arrow } from "@/components/Icons";
import { steps } from "@/lib/content";

export const metadata = {
  title: "Pour les familles",
  description:
    "Comprendre comment Akeva Care accompagne votre proche : fonctionnement, formules, devis et questions fréquentes.",
};

const cards = [
  {
    href: "/comment-ca-fonctionne",
    title: "Comment ça fonctionne",
    text: "Cinq étapes, de l'appel au premier jour d'accompagnement.",
  },
  {
    href: "/nos-formules",
    title: "Nos formules",
    text: "Jour, nuit, 24h/24, hôpital, diaspora — à composer selon le besoin.",
  },
  {
    href: "/demander-un-devis",
    title: "Demander un devis",
    text: "Expliquez la situation. Nous revenons vers vous avec une proposition.",
  },
  {
    href: "/faq",
    title: "FAQ",
    text: "Ce que nous faisons, ce que nous ne faisons pas, les délais, les tarifs.",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Familles</p>
          <h1>Vous n'avez pas à tout porter seuls.</h1>
          <p className="lead">
            Akeva Care existe pour les familles — sur place ou à l'étranger —
            qui veulent une présence fiable auprès d'un parent, sans y laisser
            leur santé ni leur sommeil.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={i * 70}>
              <Link href={c.href} className="card-plain" style={{ display: "block" }}>
                <h3>{c.title}</h3>
                <p className="muted mt-s">{c.text}</p>
                <span className="link-more mt-m">
                  Lire <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Le parcours</p>
            <h2>De l'appel à la présence.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 60}>
                <p className="n">{s.n}</p>
                <h3>{s.title}</h3>
                <p className="small">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Pour la diaspora",
  description:
    "Organisez depuis la France, la Belgique, le Canada, la Suisse ou les États-Unis l'accompagnement d'un parent à Yaoundé ou Douala.",
};

const points = [
  {
    title: "Un interlocuteur unique",
    text: "Vous n'enchaînez pas les numéros. Un conseiller Akeva Care suit le dossier de bout en bout.",
  },
  {
    title: "Comptes-rendus réguliers",
    text: "WhatsApp, appel, points convenus : vous savez comment s'est passée la journée ou la nuit.",
  },
  {
    title: "Présence réelle sur place",
    text: "Nous intervenons à Yaoundé et Douala, à domicile et à l'hôpital. Pas une mise en relation fantôme.",
  },
  {
    title: "Organisation à distance",
    text: "Évaluation, devis, démarrage : tout peut se faire sans que vous preniez l'avion dans l'urgence.",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <p className="eyebrow">Diaspora</p>
            <h1>Prendre soin depuis loin.</h1>
            <p className="lead">
              Vous vivez en France, en Belgique, au Canada, en Suisse, au
              Luxembourg, aux États-Unis ou ailleurs. Votre parent est au
              Cameroun. Akeva Care organise la présence que vous ne pouvez pas
              tenir vous-même.
            </p>
            <div className="btn-row mt-m">
              <Link className="btn btn-primary" href="/demander-un-devis">
                Organiser un accompagnement <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/comment-ca-fonctionne">
                Voir le fonctionnement
              </Link>
            </div>
          </div>
          <Reveal className="media-frame">
            <img
              src="/images/hero-hands.jpg"
              alt="Rester proche malgré la distance"
              style={{ width: "100%", height: 420, objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          {points.map((p, i) => (
            <Reveal key={p.title} className="card-plain" delay={i * 70}>
              <p className="num">0{i + 1}</p>
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section band-ink">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Ce que les familles nous disent</p>
            <h2 className="quote" style={{ maxWidth: "22ch" }}>
              « Je ne peux pas être à Yaoundé demain. Mais je refuse que maman
              passe la nuit seule à l'hôpital. »
            </h2>
            <p className="mt-m" style={{ color: "rgba(246,239,230,.7)" }}>
              C'est exactement le type de situation que nous organisons.
            </p>
          </Reveal>
        </div>
      </section>
      <CTABanner title="Parlez-nous de votre parent." />
    </>
  );
}

import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { steps } from "@/lib/content";

export const metadata = {
  title: "Comment ça fonctionne",
  description:
    "Contact, évaluation, proposition, démarrage : le fonctionnement d'Akeva Care Sérénité 24 à Yaoundé et Douala.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Parcours</p>
          <h1>Comment ça fonctionne</h1>
          <p className="lead">
            Pas de processus opaque. Un échange, une évaluation, une
            proposition, puis une présence organisée et suivie.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: 14 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} className="card-plain split" delay={i * 50}>
              <div>
                <p className="n" style={{ color: "var(--terra)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem" }}>
                  {s.n}
                </p>
                <h2>{s.title}</h2>
              </div>
              <p className="lead" style={{ margin: 0 }}>
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner title="Prêt à nous parler de la situation ?" />
    </>
  );
}

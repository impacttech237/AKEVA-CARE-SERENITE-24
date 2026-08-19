import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis d'accompagnement Akeva Care à Yaoundé ou Douala. Réponse via WhatsApp, appel ou email.",
};

export default function Page() {
  return (
    <section className="page-hero" style={{ paddingBottom: 100 }}>
      <div className="container split">
        <div>
          <p className="eyebrow">Devis</p>
          <h1>Demander un accompagnement</h1>
          <p className="lead">
            Décrivez la situation en quelques lignes. Un conseiller vous
            recontacte. Vous pouvez aussi appeler le {site.phoneDisplay}.
          </p>
          <ul className="mt-m">
            {[
              "Réponse claire sur ce qui est possible",
              "Yaoundé, Douala, ou organisation depuis l'étranger",
              "Aucune obligation après le premier échange",
            ].map((t) => (
              <li key={t} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

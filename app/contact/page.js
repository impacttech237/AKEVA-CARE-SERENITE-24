import QuoteForm from "@/components/QuoteForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Akeva Care Sérénité 24 à Yaoundé et Douala : téléphone, WhatsApp, email ou formulaire.",
};

export default function Page() {
  return (
    <section className="page-hero" style={{ paddingBottom: 100 }}>
      <div className="container split">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Parlons de votre proche.</h1>
          <p className="lead">
            Téléphone, WhatsApp ou formulaire. Un conseiller recueille les
            informations nécessaires.
          </p>
          <ul className="mt-m">
            <li style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
              <strong>Téléphone</strong>
              <p>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </p>
            </li>
            <li style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
              <strong>WhatsApp</strong>
              <p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Écrire maintenant
                </a>
              </p>
            </li>
            <li style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
              <strong>Email</strong>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </li>
            <li style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
              <strong>Villes</strong>
              <p>Yaoundé · Douala</p>
            </li>
            <li style={{ padding: "14px 0", borderTop: "1px solid var(--line)" }}>
              <strong>Disponibilité</strong>
              <p>{site.hours}</p>
            </li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

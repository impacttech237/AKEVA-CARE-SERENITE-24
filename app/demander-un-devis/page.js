import QuoteForm from "@/components/QuoteForm";
import { IconClip, IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/ContactIcons";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis d'accompagnement Akeva Care à Yaoundé ou Douala. Réponse via WhatsApp, appel ou email.",
};

export default function Page() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="contact-badge">
              <IconClip />
              Demander un devis
            </span>
            <h1>Demander un accompagnement</h1>
            <p>
              Décrivez la situation en quelques lignes. Un conseiller vous
              recontacte. Aucune obligation après le premier échange.
            </p>
            <ul className="contact-meta">
              <li>
                <a href={`tel:${site.phoneTel}`}>
                  <span className="contact-ico">
                    <IconPhone />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span>
                  <span className="contact-ico">
                    <IconPin />
                  </span>
                  Yaoundé · Douala · diaspora
                </span>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <span className="contact-ico">
                    <IconMail />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <span className="contact-ico">
                    <IconWhatsApp />
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

import ContactForm from "@/components/ContactForm";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/ContactIcons";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Akeva Care Sérénité 24 à Yaoundé et Douala : téléphone, WhatsApp, email ou formulaire.",
};

export default function Page() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="contact-badge">
              <IconMail />
              Écrire à Akeva
            </span>
            <h1>Parlons de votre proche.</h1>
            <p>
              Un premier échange suffit. Remplissez le formulaire ou contactez-nous
              directement — un conseiller recueille les informations nécessaires.
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
                  Yaoundé · Douala
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

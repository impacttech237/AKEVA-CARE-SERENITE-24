import QuoteForm from "@/components/QuoteForm";
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
              <ClipIcon />
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
                    <PhoneIcon />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span>
                  <span className="contact-ico">
                    <PinIcon />
                  </span>
                  Yaoundé · Douala · diaspora
                </span>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <span className="contact-ico">
                    <MailIcon />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <span className="contact-ico">
                    <WaIcon />
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

function ClipIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d="M8 12.5 15.2 5.3a3 3 0 1 1 4.2 4.3L9.8 19.2a4.5 4.5 0 0 1-6.4-6.4L14.2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M7 3h3l1.4 3.8-2 1.1a12 12 0 0 0 6.6 6.6l1.1-2L21 14v3c0 1.1-1 2-2.2 2C9.4 19 5 14.6 5 5.2 5 4 5.9 3 7 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" fill="currentColor" />
      <circle cx="12" cy="10" r="2.2" fill="#fff" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3.2" y="6" width="17.6" height="12" rx="2.2" fill="currentColor" />
      <path d="M4.2 7.4 12 13.1l7.8-5.7" fill="none" stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 3.2A8.8 8.8 0 0 0 5.6 17.3L4 20.6l3.4-1.5A8.8 8.8 0 1 0 12 3.2Zm4.9 12.4c-.2.6-1.2 1.1-1.6 1.1-.4 0-.7 0-2.2-.9a9.4 9.4 0 0 1-3.6-3.4c-.5-.8-.9-1.7-.9-2.2s.5-1.3 1-1.5c.2-.1.4-.1.5 0l.7 1.6c.1.2.1.3 0 .5l-.4.5c-.1.1 0 .3.1.4a6 6 0 0 0 1.6 1.8c.5.4 1 .6 1.2.5l.5-.4c.1-.1.3-.1.4 0l1.5.8c.1.1.2.3.2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

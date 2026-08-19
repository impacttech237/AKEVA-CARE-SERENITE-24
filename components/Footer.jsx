import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo invert />
          <p>{site.tagline}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${site.phoneTel}`} style={{ color: "#efe6da", borderColor: "rgba(239,230,218,.2)" }}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Familles</h4>
            <ul>
              <li>
                <Link href="/comment-ca-fonctionne">Comment ça fonctionne</Link>
              </li>
              <li>
                <Link href="/nos-formules">Nos formules</Link>
              </li>
              <li>
                <Link href="/demander-un-devis">Demander un devis</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/diaspora">Pour la diaspora</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Akeva Care</h4>
            <ul>
              <li>
                <Link href="/a-propos">À propos</Link>
              </li>
              <li>
                <Link href="/conseils">Conseils</Link>
              </li>
              <li>
                <Link href="/yaounde">Yaoundé</Link>
              </li>
              <li>
                <Link href="/douala">Douala</Link>
              </li>
              <li>
                <Link href="/demander-un-devis">Demander un devis</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li>Yaoundé · Douala</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</span>
        <span>
          <Link href="/mentions-legales">Mentions légales</Link>
          {" · "}
          <Link href="/confidentialite">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { getSite } from "@/lib/data";

export default async function Footer() {
  const site = await getSite();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-mark">
            <img src="/logo-akeva.png" alt="Akeva Care Sérénité 24" />
          </div>

          <div className="footer-identity">
            <h2>Akeva Care</h2>
            <p className="footer-sub">Sérénité 24</p>
            <p className="footer-tag">{site.tagline}</p>
          </div>

          <div className="footer-grid">
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>Yaoundé · Douala</li>
                <li>{site.hours}</li>
              </ul>
            </div>

            <div className="footer-actions">
              <Link className="btn-foot btn-foot-fill" href="/demander-un-devis">
                Demander un devis
              </Link>
              <a
                className="btn-foot"
                href={whatsappLink(site.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <div>
              <h4>Accès rapide</h4>
              <ul className="footer-quick">
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/diaspora">Diaspora</Link>
                </li>
                <li>
                  <Link href="/a-propos">À propos</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/yaounde">Yaoundé</Link>
                </li>
                <li>
                  <Link href="/douala">Douala</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <span>
              <Link href="/mentions-legales">Mentions légales</Link>
              {" · "}
              <Link href="/confidentialite">Confidentialité</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

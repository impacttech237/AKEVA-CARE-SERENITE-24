import Link from "next/link";
import { Arrow } from "./Icons";
import { whatsappLink } from "@/lib/site";
import { getSite } from "@/lib/data";

export default async function CTABanner({
  title = "Parlons de la situation de votre proche.",
  text = "Un premier échange suffit. WhatsApp, appel ou devis — nous vous répondons avec clarté.",
  cta = "Demander un accompagnement",
  href = "/demander-un-devis",
}) {
  const site = await getSite();
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band" style={{ background: "var(--forest)" }}>
          <div>
            <p className="eyebrow" style={{ color: "#ffd7c4" }}>
              Akeva Care · Yaoundé & Douala
            </p>
            <h2 className="mt-s">{title}</h2>
            <p className="mt-s" style={{ maxWidth: "36ch", color: "rgba(255,248,244,.85)" }}>
              {text}
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-light" href={href}>
              {cta} <Arrow />
            </Link>
            <a className="btn btn-ghost" href={whatsappLink(site.whatsapp)} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import QuoteForm from "./QuoteForm";
import CTABanner from "./CTABanner";
import { Arrow } from "./Icons";
import { whatsappLink } from "@/lib/site";
import { getSite, getSteps, getServices } from "@/lib/data";

export default async function ServicePage({ service }) {
  const [site, steps, services] = await Promise.all([getSite(), getSteps(), getServices()]);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="sticky-cta">
            <a className="btn btn-primary" href={whatsappLink(site.whatsapp, service.whatsapp)} target="_blank" rel="noopener noreferrer">
              {service.cta} <Arrow />
            </a>
          </div>
          <div className="crumbs">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <p className="eyebrow">Akeva Care · Yaoundé & Douala</p>
          <h1>{service.h1}</h1>
          <p className="lead">{service.intro}</p>
          <div className="btn-row mt-m">
            <Link className="btn btn-primary" href="/demander-un-devis">
              {service.cta} <Arrow />
            </Link>
            <a className="btn btn-ghost" href={whatsappLink(site.whatsapp, service.whatsapp)} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="media-frame">
            <div className="img-reveal" style={{ borderRadius: 28 }}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "min(62vw, 520px)", objectFit: "cover" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Ce que nous organisons</p>
            <h2>Une présence utile, dans un cadre clair.</h2>
          </div>
          <div className="grid-2">
            {service.highlights.map((h, i) => (
              <Reveal key={h.title} className="card-plain" delay={i * 70}>
                <p className="num">0{i + 1}</p>
                <h3>{h.title}</h3>
                <p className="muted">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Inclus</p>
            <h2>Ce que comprend l'accompagnement.</h2>
            <ul className="mt-m">
              {service.included.map((item) => (
                <li key={item} style={{ padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="note">
              {service.limits.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-plain">
              <p className="eyebrow">Comment ça commence</p>
              <h3 className="mt-s">Cinq étapes, sans flou.</h3>
              <ol className="mt-m">
                {steps.map((s) => (
                  <li key={s.n} style={{ padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                    <strong>
                      {s.n} — {s.title}
                    </strong>
                    <p className="small">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Demander {service.title.toLowerCase()}</p>
            <h2>Expliquez-nous la situation.</h2>
            <p className="lead mt-s">
              Un conseiller Akeva Care vous répond. Vous pouvez aussi appeler le{" "}
              {site.phoneDisplay} ou écrire sur WhatsApp.
            </p>
          </div>
          <QuoteForm presetService={service.title} site={site} services={services} />
        </div>
      </section>

      <CTABanner title={service.cta} href="/demander-un-devis" />
    </>
  );
}

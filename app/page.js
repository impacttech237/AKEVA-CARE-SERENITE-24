import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQList from "@/components/FAQList";
import CTABanner from "@/components/CTABanner";
import { Arrow } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { faqs, steps, testimonials, whyPoints } from "@/lib/content";

const accompany = [
  {
    title: "À domicile",
    text: "Une présence adaptée aux besoins quotidiens de votre proche.",
    href: "/auxiliaire-de-vie",
  },
  {
    title: "À l'hôpital",
    text: "Un accompagnement lorsque votre famille ne peut pas être présente en permanence.",
    href: "/accompagnement-hospitalier",
  },
  {
    title: "Personnes âgées",
    text: "Une présence humaine pour préserver confort, autonomie et sécurité.",
    href: "/personnes-agees",
  },
  {
    title: "Troubles psychiques",
    text: "Un accompagnement quotidien adapté, en complément du suivi des professionnels de santé.",
    href: "/accompagnement-troubles-psychiques",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container-wide hero-grid">
          <div>
            <p className="eyebrow">Yaoundé · Douala · Présence 24h/24</p>
            <h1>
              <span className="reveal-line">
                <span>Votre proche a besoin</span>
              </span>
              <span className="reveal-line">
                <span>d'un accompagnement fiable ?</span>
              </span>
              <span className="reveal-line italic" style={{ color: "var(--terra)", marginTop: 8 }}>
                <span>Nous sommes là.</span>
              </span>
            </h1>
            <p className="lead hero-copy">
              Akeva Care Sérénité 24 accompagne les personnes âgées, les
              personnes dépendantes et les patients à domicile ou à l'hôpital,
              avec une approche professionnelle, humaine et personnalisée.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/demander-un-devis">
                Demander un accompagnement <Arrow />
              </Link>
              <a
                className="btn btn-ghost"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacter Akeva Care
              </a>
            </div>
            <p className="small mt-s">{site.tagline}</p>
          </div>

          <div className="hero-visual">
            <div className="shot">
              <img
                src="/images/hero-home.jpg"
                alt="Accompagnante Akeva Care auprès d'une personne âgée à domicile"
              />
              <span className="float-badge">Présence 24h/24</span>
            </div>
            <div className="shot">
              <img src="/images/hero-hands.jpg" alt="Mains tenues, présence rassurante" />
            </div>
            <div className="shot">
              <img
                src="/images/hero-garden.jpg"
                alt="Promenade accompagnée d'une personne âgée"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Yaoundé · Douala · France · Belgique · Canada · Suisse · Luxembourg · États-Unis · Diaspora · Présence 24h/24 · Domicile · Hôpital ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Nous pouvons vous accompagner</p>
            <h2>Là où votre proche a besoin de quelqu'un.</h2>
          </Reveal>
          <div className="grid-4">
            {accompany.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link href={item.href} className="card-plain" style={{ display: "block", height: "100%" }}>
                  <p className="num">0{i + 1}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="link-more">
                    En savoir plus <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-ink">
        <div className="container">
          <Reveal>
            <p className="eyebrow">La réalité de beaucoup de familles</p>
            <h2 style={{ maxWidth: "18ch" }}>
              Vous n'aviez pas prévu d'être aussi loin.
              <span className="italic" style={{ display: "block", color: "var(--terra-soft)", marginTop: 12 }}>
                Ou aussi fatigués.
              </span>
            </h2>
            <p className="lead mt-m" style={{ color: "rgba(246,239,230,.72)" }}>
              C'est pour cela qu'Akeva Care existe : prendre soin de vos
              proches, même lorsque vous ne pouvez pas être là.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Nos services</p>
            <h2>Une offre claire, pour des besoins très concrets.</h2>
          </Reveal>
          <div className="grid-3">
            {services.slice(0, 8).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <article className="card">
                  <div className="card-media">
                    <img src={s.image} alt="" />
                  </div>
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <Link className="link-more" href={`/${s.slug}`}>
                      En savoir plus <Arrow />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-l">
            <Link className="btn btn-ghost" href="/services">
              Tous les services <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section band-ink">
        <div className="container why-grid">
          <Reveal>
            <div className="media-frame" style={{ minHeight: 420 }}>
              <div className="img-reveal" style={{ minHeight: 420, borderRadius: 28 }}>
                <img
                  src="/images/svc-ages.jpg"
                  alt="Personne âgée accompagnée avec dignité"
                  style={{ width: "100%", height: 520, objectFit: "cover" }}
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Pourquoi Akeva Care ?</p>
              <h2>Parce que votre proche mérite plus qu'une simple présence.</h2>
            </Reveal>
            <div className="why-list mt-m">
              {whyPoints.map((p, i) => (
                <Reveal key={p.title} className="why-item" delay={i * 40}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p className="small">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-m">
              <a className="btn btn-primary" href={whatsappLink("Bonjour Akeva Care, je souhaite parler à un conseiller.")} target="_blank" rel="noopener noreferrer">
                Parler à un conseiller <Arrow />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Comment ça marche ?</p>
            <h2>Cinq étapes. Rien d'obscur.</h2>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 70}>
                <p className="n">{s.n}</p>
                <h3>{s.title}</h3>
                <p className="small">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Pour la diaspora</p>
            <h2>Vous vivez loin. Votre parent est au Cameroun.</h2>
            <p className="lead mt-s">
              France, Belgique, Canada, Suisse, Luxembourg, États-Unis : nous
              organisons l'accompagnement à distance, avec un interlocuteur
              unique et des comptes-rendus réguliers.
            </p>
            <div className="btn-row mt-m">
              <Link className="btn btn-primary" href="/diaspora">
                Organiser depuis l'étranger <Arrow />
              </Link>
              <Link className="btn btn-ghost" href="/demander-un-devis">
                Demander un devis
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80} className="collage">
            <div className="media-frame tall">
              <img src="/images/hero-home.jpg" alt="" />
            </div>
            <div>
              <div className="media-frame wide">
                <img src="/images/svc-24h.jpg" alt="" />
              </div>
              <div className="media-frame wide mt-s">
                <img src="/images/svc-nuit.jpg" alt="" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Nos villes</p>
            <h2>Yaoundé et Douala, la même exigence.</h2>
          </Reveal>
          <div className="grid-2">
            <Reveal>
              <Link href="/yaounde" className="city-card">
                <img src="/images/svc-jour.jpg" alt="Accompagnement à Yaoundé" />
                <span className="shade" />
                <span className="txt">
                  <p className="eyebrow" style={{ color: "#ffd7c4" }}>Capitale</p>
                  <h3>Yaoundé</h3>
                  <p className="small" style={{ color: "rgba(255,255,255,.8)" }}>
                    Domicile et hôpital · En savoir plus
                  </p>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/douala" className="city-card">
                <img src="/images/svc-24h.jpg" alt="Accompagnement à Douala" />
                <span className="shade" />
                <span className="txt">
                  <p className="eyebrow" style={{ color: "#ffd7c4" }}>Littoral</p>
                  <h3>Douala</h3>
                  <p className="small" style={{ color: "rgba(255,255,255,.8)" }}>
                    Domicile et hôpital · En savoir plus
                  </p>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Des familles nous font confiance</p>
            <h2>Des mots simples, des situations réelles.</h2>
          </Reveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="card-plain" delay={i * 80}>
                <p className="quote">“{t.quote}”</p>
                <p className="mt-m">
                  <strong>{t.name}</strong>
                  <span className="small" style={{ display: "block" }}>
                    {t.role}
                  </span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Ce que les familles demandent d'abord.</h2>
            <p className="lead mt-s">
              Akeva Care n'est pas une simple agence de garde-malades. Voici le
              cadre, clairement.
            </p>
            <Link className="btn btn-ghost mt-m" href="/faq">
              Toute la FAQ <Arrow />
            </Link>
          </Reveal>
          <FAQList items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

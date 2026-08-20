import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQList from "@/components/FAQList";
import { Arrow } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { articles, faqs, steps, testimonials } from "@/lib/content";

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
      <section className="hero-bleed">
        <img
          className="hero-bleed-img"
          src="/images/hero-bleed.jpg"
          alt="Accompagnante Akeva Care auprès d'une personne âgée à domicile"
        />
        <div className="hero-bleed-shade" />
        <div className="container-wide hero-bleed-copy">
          <h1>
            <span className="reveal-line">
              <span>Votre proche a besoin</span>
            </span>
            <span className="reveal-line">
              <span>d'un accompagnement fiable ?</span>
            </span>
            <span className="reveal-line">
              <span>
                Nous sommes là, chez <em>Akeva Care</em>
              </span>
            </span>
          </h1>
          <p>
            Akeva Care Sérénité 24 accompagne les personnes âgées, les
            personnes dépendantes et les patients à domicile ou à l'hôpital,
            avec une approche professionnelle, humaine et personnalisée.
          </p>
        </div>
      </section>

      <section className="manifesto">
        <div className="container">
          <p>
            Prendre soin de vos proches comme s'ils étaient les nôtres — avec
            cœur, dignité et confiance.
          </p>
          <svg className="mark-heart" viewBox="0 0 40 40" aria-hidden="true">
            <path
              d="M20 33s-11.5-7.2-11.5-15.2C8.5 13 12.2 10 16 10c2.2 0 3.7 1 4 2.2C20.3 11 21.8 10 24 10c3.8 0 7.5 3 7.5 7.8C31.5 25.8 20 33 20 33Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container panel-split">
          <Reveal className="media-frame" style={{ minHeight: 340 }}>
            <img src="/images/svc-nuit.jpg" alt="Présence attentive auprès d'un proche" />
          </Reveal>
          <Reveal className="panel panel-green" delay={80}>
            <h2>Organiser l'accompagnement d'un parent peut être épuisant, coûteux, et solitaire.</h2>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container split">
          <Reveal>
            <h2>Préserver l'autonomie, avec un accompagnement pensé pour la personne.</h2>
            <div className="service-mini">
              {accompany.slice(0, 3).map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                  <Link className="link-more" href={item.href}>
                    En savoir plus <Arrow />
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal className="media-frame" delay={80} style={{ minHeight: 420 }}>
            <img
              src="/images/hero-garden.jpg"
              alt="Promenade accompagnée"
              style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 420 }}
            />
          </Reveal>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-top">
            <Reveal className="panel panel-cream">
              <h2>Vous n'aviez pas prévu cette épreuve</h2>
            </Reveal>
            <Reveal className="panel panel-orange" delay={80}>
              <h2>mais elle est devenue votre quotidien.</h2>
            </Reveal>
          </div>
          <Reveal className="story-bottom" delay={120}>
            <div className="panel panel-green">
              <h2>
                C'est pour cela que nous avons créé <em>Akeva Care</em>
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="section-head center">
            <h2>Un accompagnement professionnel et humain, à domicile et à l'hôpital.</h2>
            <p className="lead" style={{ textAlign: "center" }}>
              {site.tagline} Présence organisée à Yaoundé et Douala, y compris
              lorsque vous vivez à l'étranger.
            </p>
          </Reveal>
          <Reveal className="media-frame" style={{ minHeight: 380, position: "relative" }}>
            <img
              src="/images/cta-wide.jpg"
              alt="Accompagnement en extérieur"
              style={{ width: "100%", height: "min(62vw, 520px)", objectFit: "cover" }}
            />
            <span className="caption-pill">
              Le premier réseau d'accompagnement conçu pour les familles — sur place et depuis loin.
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container bento">
          <Reveal className="stat-card">
            <strong>24/7</strong>
            <span>Organisation possible, jour et nuit</span>
          </Reveal>
          <Reveal className="bento-photo" delay={60}>
            <img src="/images/svc-jour.jpg" alt="Présence de jour à domicile" />
          </Reveal>
          <Reveal className="stat-card" delay={80}>
            <strong>2</strong>
            <span>Villes — Yaoundé et Douala</span>
          </Reveal>
          <Reveal className="stat-card" delay={100}>
            <strong>1</strong>
            <span>Interlocuteur pour toute la famille</span>
          </Reveal>
          <Reveal className="stat-card" delay={140}>
            <strong>5</strong>
            <span>Étapes, de l'appel à la présence</span>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="heart-band">
            <svg className="mark-heart" viewBox="0 0 40 40" aria-hidden="true" style={{ margin: 0 }}>
              <path
                d="M20 33s-11.5-7.2-11.5-15.2C8.5 13 12.2 10 16 10c2.2 0 3.7 1 4 2.2C20.3 11 21.8 10 24 10c3.8 0 7.5 3 7.5 7.8C31.5 25.8 20 33 20 33Z"
                fill="currentColor"
              />
            </svg>
            <div>
              <h2>Construire le bon accompagnement dès le début.</h2>
              <p className="mt-s" style={{ color: "rgba(243,238,230,.72)", maxWidth: "42ch" }}>
                Que vous commenciez aujourd'hui ou que vous cherchiez à mieux
                organiser ce qui existe déjà : un conseiller écoute, évalue, et
                propose une présence claire.
              </p>
              <div className="btn-row mt-m">
                <a
                  className="btn btn-primary"
                  href={whatsappLink("Bonjour Akeva Care, je souhaite parler à un conseiller.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parler à un conseiller <Arrow />
                </a>
                <Link className="btn btn-ghost" href="/a-propos" style={{ color: "#f3eee6", borderColor: "rgba(243,238,230,.25)" }}>
                  À propos
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Des familles nous écrivent</p>
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

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container solutions">
          <Reveal>
            <h2>Des solutions pour chaque moment de l'accompagnement.</h2>
            <p className="lead mt-s">
              Jour, nuit, hôpital, 24h/24, diaspora : on compose selon la
              situation, pas selon une grille figée.
            </p>
          </Reveal>
          <div className="solution-list">
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>
                {s.title}
                <span>En savoir plus</span>
              </Link>
            ))}
          </div>
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
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
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

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container grid-2">
          <Reveal>
            <Link href="/yaounde" className="city-card" style={{ minHeight: 340 }}>
              <img src="/images/yaounde.jpg" alt="Yaoundé" />
              <span className="shade" />
              <span className="txt">
                <p className="eyebrow" style={{ color: "#ffd7c4" }}>Capitale</p>
                <h3>Yaoundé</h3>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/douala" className="city-card" style={{ minHeight: 340 }}>
              <img src="/images/douala.jpg" alt="Douala" />
              <span className="shade" />
              <span className="txt">
                <p className="eyebrow" style={{ color: "#ffd7c4" }}>Littoral</p>
                <h3>Douala</h3>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="photo-cta">
            <img src="/images/cta-wide.jpg" alt="" />
            <span className="shade" />
            <span className="txt">
              <h2>Tout commence par une conversation.</h2>
              <p className="mt-s" style={{ maxWidth: "36ch", color: "rgba(255,255,255,.86)" }}>
                Parlons de la situation de votre proche — aujourd'hui.
              </p>
              <div className="btn-row mt-m">
                <Link className="btn btn-primary" href="/demander-un-devis">
                  Demander un accompagnement <Arrow />
                </Link>
                <a className="btn btn-light" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Blog</p>
            <h2>Conseils pour les familles</h2>
          </Reveal>
          <div className="grid-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <article className="card">
                  <div className="card-media">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="card-body">
                    <p className="small">
                      {a.category} · {a.date}
                    </p>
                    <h3 className="mt-s">{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <Link className="link-more" href={`/blog/${a.slug}`}>
                      Lire l'article <Arrow />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-l">
            <Link className="btn btn-ghost" href="/blog">
              Tout le blog <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Foire aux questions</h2>
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
    </>
  );
}

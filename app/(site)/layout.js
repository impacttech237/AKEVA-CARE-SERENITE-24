import "@fontsource-variable/bricolage-grotesque/standard.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import { getSite } from "@/lib/data";

// Contenu piloté par D1 (admin) : rendu dynamique à chaque requête plutôt que
// figé au build, pour que les modifications du dashboard soient visibles sans redéploiement.
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const site = await getSite();
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — Accompagnement à domicile et à l'hôpital`,
      template: `%s · ${site.shortName}`,
    },
    description: site.description,
    keywords: [
      "garde malade Yaoundé",
      "garde malade Douala",
      "auxiliaire de vie Cameroun",
      "accompagnement personnes âgées",
      "garde de nuit",
      "accompagnement hospitalier",
      "diaspora Cameroun",
      "Akeva Care",
    ],
    openGraph: {
      title: site.name,
      description: site.description,
      locale: "fr_FR",
      type: "website",
      images: ["/images/hero-home.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.description,
      images: ["/images/hero-home.jpg"],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/hero-home.jpg`,
    areaServed: ["Yaoundé", "Douala", "Cameroun"],
    openingHours: "Mo-Su 00:00-23:59",
    slogan: site.tagline,
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <Header site={site} />
        <main id="contenu">{children}</main>
        <Footer />
        <Floaters site={site} />
      </body>
    </html>
  );
}

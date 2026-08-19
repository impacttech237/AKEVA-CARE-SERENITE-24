import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/outfit";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import { site } from "@/lib/site";

export const metadata = {
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

export default function RootLayout({ children }) {
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
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <Floaters />
      </body>
    </html>
  );
}

// Navigation : structure du site, pas du contenu éditorial — reste en code.
// Les paramètres (téléphone, email, etc.) viennent désormais de D1 via lib/data.js (getSite).
export const whatsappLink = (whatsappNumber, text) => {
  const msg = text || "Bonjour Akeva Care, je souhaite un accompagnement pour un proche.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const nav = [
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/garde-malade", label: "Garde malade" },
      { href: "/auxiliaire-de-vie", label: "Auxiliaire de vie" },
      { href: "/accompagnement-hospitalier", label: "Accompagnement hospitalier" },
      { href: "/garde-de-jour", label: "Garde de jour" },
      { href: "/garde-de-nuit", label: "Garde de nuit" },
      { href: "/accompagnement-24h", label: "Accompagnement 24h/24" },
      { href: "/personnes-agees", label: "Personnes âgées" },
      {
        href: "/accompagnement-troubles-psychiques",
        label: "Troubles psychiques",
      },
      { href: "/location-materiel-medical", label: "Location de matériel" },
    ],
  },
  {
    href: "/pour-les-familles",
    label: "Familles",
    children: [
      { href: "/comment-ca-fonctionne", label: "Comment ça fonctionne" },
      { href: "/nos-formules", label: "Nos formules" },
      { href: "/demander-un-devis", label: "Demander un devis" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/diaspora", label: "Diaspora" },
  {
    href: "/villes",
    label: "Villes",
    children: [
      { href: "/yaounde", label: "Yaoundé" },
      { href: "/douala", label: "Douala" },
    ],
  },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export const routes = [
  "/",
  "/services",
  "/garde-malade",
  "/auxiliaire-de-vie",
  "/accompagnement-hospitalier",
  "/garde-de-jour",
  "/garde-de-nuit",
  "/accompagnement-24h",
  "/personnes-agees",
  "/accompagnement-troubles-psychiques",
  "/location-materiel-medical",
  "/pour-les-familles",
  "/comment-ca-fonctionne",
  "/nos-formules",
  "/demander-un-devis",
  "/faq",
  "/diaspora",
  "/villes",
  "/yaounde",
  "/douala",
  "/a-propos",
  "/blog",
  "/mentions-legales",
  "/confidentialite",
];

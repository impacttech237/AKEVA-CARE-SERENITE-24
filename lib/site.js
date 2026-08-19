export const site = {
  name: "Akeva Care Sérénité 24",
  shortName: "Akeva Care",
  tagline: "Prendre soin de vos proches, même lorsque vous ne pouvez pas être là.",
  promise: "Un accompagnement professionnel et humain à domicile et à l'hôpital.",
  description:
    "Akeva Care Sérénité 24 accompagne les personnes âgées, les personnes dépendantes et les patients à domicile ou à l'hôpital à Yaoundé et Douala. Présence professionnelle, humaine et personnalisée.",
  url: "https://akevacare.cm",
  email: "contact@akevacare.cm",
  phoneDisplay: "+237 6 99 00 24 24",
  phoneTel: "+237699002424",
  whatsapp: "237699002424",
  cities: ["Yaoundé", "Douala"],
  hours: "24h/24 · 7j/7",
};

export const whatsappLink = (text) => {
  const msg = text || "Bonjour Akeva Care, je souhaite un accompagnement pour un proche.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
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
  { href: "/conseils", label: "Conseils" },
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
  "/conseils",
  "/mentions-legales",
  "/confidentialite",
];

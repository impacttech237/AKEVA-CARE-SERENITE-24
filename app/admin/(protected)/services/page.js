"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "slug", label: "Slug (URL, ex: garde-malade)", type: "text", required: true },
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "title", label: "Titre", type: "text", required: true },
  { name: "menu_title", label: "Titre menu (optionnel)", type: "text" },
  { name: "short", label: "Résumé court (listes)", type: "textarea" },
  { name: "h1", label: "Titre H1 (page du service)", type: "text" },
  { name: "intro", label: "Introduction", type: "textarea" },
  { name: "image", label: "Image", type: "image" },
  { name: "cta", label: "Texte du bouton d'appel à l'action", type: "text" },
  { name: "whatsapp_message", label: "Message WhatsApp pré-rempli", type: "textarea" },
  {
    name: "highlights",
    label: "Points forts (titre + texte)",
    type: "object-list",
    itemFields: [
      { name: "title", label: "Titre" },
      { name: "text", label: "Texte" },
    ],
  },
  { name: "included", label: "Ce qui est inclus (une ligne par élément)", type: "string-list" },
  { name: "limits", label: "Limites / avertissements (une ligne par élément)", type: "string-list" },
];

export default function ServicesAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/services"
      title="Services"
      fields={fields}
      itemLabel={(s) => s.title}
      addLabel="Ajouter un service"
    />
  );
}

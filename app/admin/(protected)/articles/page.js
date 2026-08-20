"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "slug", label: "Slug (URL de l'article)", type: "text", required: true },
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "title", label: "Titre", type: "text", required: true },
  { name: "excerpt", label: "Extrait (résumé)", type: "textarea" },
  { name: "date_label", label: "Date affichée (ex: 12 août 2026)", type: "text" },
  { name: "image", label: "Image de couverture", type: "image" },
  { name: "category", label: "Catégorie", type: "text" },
  { name: "read_time", label: "Temps de lecture (optionnel, ex: 5 min)", type: "text" },
  {
    name: "content",
    label: "Contenu de l'article",
    type: "paragraphs",
    hint: "Un paragraphe par ligne, laissez une ligne vide entre deux paragraphes.",
  },
];

export default function ArticlesAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/articles"
      title="Articles / Blog"
      fields={fields}
      itemLabel={(a) => a.title}
      addLabel="Ajouter un article"
    />
  );
}

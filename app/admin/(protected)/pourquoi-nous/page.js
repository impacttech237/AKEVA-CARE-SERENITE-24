"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "title", label: "Titre", type: "text", required: true },
  { name: "text", label: "Texte", type: "textarea" },
];

export default function WhyPointsAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/why-points"
      title="Pourquoi nous (page À propos)"
      fields={fields}
      itemLabel={(p) => p.title}
      addLabel="Ajouter un argument"
    />
  );
}

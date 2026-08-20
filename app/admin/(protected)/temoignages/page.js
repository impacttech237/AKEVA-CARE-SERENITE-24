"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "quote", label: "Citation", type: "textarea", required: true },
  { name: "name", label: "Nom (ex: A. M.)", type: "text", required: true },
  { name: "role", label: "Rôle / lien (ex: Fille — diaspora, France)", type: "text" },
];

export default function TestimonialsAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/testimonials"
      title="Témoignages"
      fields={fields}
      itemLabel={(t) => `${t.name} — ${t.role || ""}`}
      addLabel="Ajouter un témoignage"
    />
  );
}

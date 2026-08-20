"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "step_no", label: "Numéro affiché (ex: 01)", type: "text", required: true },
  { name: "title", label: "Titre", type: "text", required: true },
  { name: "text", label: "Texte", type: "textarea" },
];

export default function StepsAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/steps"
      title="Étapes (Comment ça fonctionne)"
      fields={fields}
      itemLabel={(s) => `${s.step_no} — ${s.title}`}
      addLabel="Ajouter une étape"
    />
  );
}

"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "name", label: "Nom de la formule", type: "text", required: true },
  { name: "tag", label: "Étiquette (ex: Le quotidien)", type: "text" },
  { name: "text", label: "Description", type: "textarea" },
  { name: "points", label: "Points inclus (une ligne par élément)", type: "string-list" },
  { name: "featured", label: "Mettre en avant (formule vedette)", type: "checkbox" },
];

export default function FormulasAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/formulas"
      title="Formules"
      fields={fields}
      itemLabel={(f) => f.name}
      addLabel="Ajouter une formule"
    />
  );
}

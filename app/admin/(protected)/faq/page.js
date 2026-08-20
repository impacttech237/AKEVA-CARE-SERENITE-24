"use client";

import ResourceManager from "@/components/admin/ResourceManager";

const fields = [
  { name: "order_index", label: "Ordre d'affichage", type: "number" },
  { name: "question", label: "Question", type: "text", required: true },
  { name: "answer", label: "Réponse", type: "textarea", required: true },
];

export default function FaqAdminPage() {
  return (
    <ResourceManager
      apiPath="/api/admin/faqs"
      title="FAQ"
      fields={fields}
      itemLabel={(f) => f.question}
      addLabel="Ajouter une question"
    />
  );
}

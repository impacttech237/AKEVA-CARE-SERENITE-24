import Link from "next/link";
import { getDB } from "@/lib/cf";
import { listLeads } from "@/lib/db/leads";

async function countRows(db, table) {
  const row = await db.prepare(`SELECT COUNT(*) as n FROM ${table}`).first();
  return row?.n ?? 0;
}

export default async function AdminHome() {
  const db = await getDB();
  const [services, articles, formulas, faqs, testimonials, leads] = await Promise.all([
    countRows(db, "services"),
    countRows(db, "articles"),
    countRows(db, "formulas"),
    countRows(db, "faqs"),
    countRows(db, "testimonials"),
    listLeads(db),
  ]);
  const recentLeads = leads.slice(0, 5);
  const newLeads = leads.filter((l) => l.status === "nouveau").length;

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h1>Tableau de bord</h1>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <strong>{services}</strong>
          <span>Services</span>
        </div>
        <div className="admin-stat-card">
          <strong>{articles}</strong>
          <span>Articles</span>
        </div>
        <div className="admin-stat-card">
          <strong>{formulas}</strong>
          <span>Formules</span>
        </div>
        <div className="admin-stat-card">
          <strong>{faqs}</strong>
          <span>Questions FAQ</span>
        </div>
        <div className="admin-stat-card">
          <strong>{testimonials}</strong>
          <span>Témoignages</span>
        </div>
        <div className="admin-stat-card">
          <strong>{newLeads}</strong>
          <span>Nouvelles demandes</span>
        </div>
      </div>

      <h2 style={{ fontSize: "1.05rem", marginBottom: 10 }}>Dernières demandes de devis</h2>
      {recentLeads.length === 0 ? (
        <p className="admin-muted">Aucune demande pour l'instant.</p>
      ) : (
        <ul className="admin-list">
          {recentLeads.map((lead) => (
            <li className="admin-list-item" key={lead.id}>
              <span>
                {lead.name} · {lead.phone} · {lead.service || "—"}
              </span>
              <span className="admin-muted">{new Date(lead.created_at).toLocaleDateString("fr-FR")}</span>
            </li>
          ))}
        </ul>
      )}
      <p style={{ marginTop: 14 }}>
        <Link className="admin-btn-small" href="/admin/devis">
          Voir toutes les demandes →
        </Link>
      </p>
    </div>
  );
}

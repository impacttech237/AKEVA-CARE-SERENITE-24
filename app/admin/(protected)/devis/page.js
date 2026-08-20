"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/admin/fetch";

const STATUSES = ["nouveau", "contacté", "en cours", "converti", "perdu"];

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    adminFetch("/api/admin/leads")
      .then((data) => setLeads(data.leads))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
    try {
      await adminFetch(`/api/admin/leads/${id}`, { method: "PUT", body: JSON.stringify({ status }) });
    } catch (err) {
      setError(err.message);
      load();
    }
  };

  const remove = async (id) => {
    if (!confirm("Supprimer cette demande ?")) return;
    try {
      await adminFetch(`/api/admin/leads/${id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h1>Demandes de devis</h1>
      </div>
      {error && <p className="admin-error">{error}</p>}
      {loading ? (
        <p className="admin-muted">Chargement…</p>
      ) : leads.length === 0 ? (
        <p className="admin-muted">Aucune demande pour l'instant.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Contact</th>
                <th>Ville</th>
                <th>Service</th>
                <th>Situation</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{new Date(lead.created_at).toLocaleDateString("fr-FR")}</td>
                  <td>
                    {lead.name}
                    {lead.diaspora ? " 🌍" : ""}
                  </td>
                  <td>
                    {lead.phone}
                    {lead.email ? <><br />{lead.email}</> : null}
                  </td>
                  <td>{lead.city}</td>
                  <td>{lead.service}</td>
                  <td style={{ maxWidth: 220 }}>{lead.message}</td>
                  <td>
                    <select value={lead.status} onChange={(e) => updateStatus(lead.id, e.target.value)}>
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button className="admin-btn-small admin-btn-danger" onClick={() => remove(lead.id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

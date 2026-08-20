"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/admin/fetch";

const fields = [
  { name: "name", label: "Nom complet du site" },
  { name: "shortName", label: "Nom court" },
  { name: "tagline", label: "Slogan" },
  { name: "promise", label: "Promesse" },
  { name: "description", label: "Description SEO", textarea: true },
  { name: "url", label: "URL du site (ex: https://akevacare.cm)" },
  { name: "email", label: "Email de contact" },
  { name: "phoneDisplay", label: "Téléphone affiché (ex: +237 6 99 00 24 24)" },
  { name: "phoneTel", label: "Téléphone pour lien tel: (ex: +237699002424)" },
  { name: "whatsapp", label: "Numéro WhatsApp (sans +, ex: 237699002424)" },
  { name: "hours", label: "Horaires (ex: 24h/24 · 7j/7)" },
];

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    adminFetch("/api/admin/settings").then((data) => setSettings(data.settings)).catch((err) => setError(err.message));
  }, []);

  if (!settings) return <p className="admin-muted">Chargement…</p>;

  const onChange = (name, value) => setSettings((s) => ({ ...s, [name]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const data = await adminFetch("/api/admin/settings", { method: "PUT", body: JSON.stringify(settings) });
      setSettings(data.settings);
      setSaved(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h1>Paramètres du site</h1>
      </div>
      <form className="admin-form" onSubmit={onSubmit}>
        {fields.map((f) => (
          <div className="admin-field" key={f.name}>
            <label>{f.label}</label>
            {f.textarea ? (
              <textarea rows={3} value={settings[f.name] || ""} onChange={(e) => onChange(f.name, e.target.value)} />
            ) : (
              <input value={settings[f.name] || ""} onChange={(e) => onChange(f.name, e.target.value)} />
            )}
          </div>
        ))}
        {error && <p className="admin-error">{error}</p>}
        {saved && !error && <p className="admin-muted">Enregistré.</p>}
        <div className="admin-form-actions">
          <button className="admin-btn-primary" type="submit" disabled={saving}>
            {saving ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </form>
    </div>
  );
}

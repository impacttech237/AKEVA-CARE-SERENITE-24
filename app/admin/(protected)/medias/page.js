"use client";

import { useEffect, useRef, useState } from "react";
import { adminFetch } from "@/lib/admin/fetch";

export default function MediaAdminPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const load = () => {
    setLoading(true);
    adminFetch("/api/admin/media")
      .then((data) => setItems(data.items))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const upload = async (files) => {
    if (!files?.length) return;
    setUploading(true);
    setError("");
    try {
      for (const file of files) {
        const form = new FormData();
        form.append("file", file);
        await adminFetch("/api/admin/media", { method: "POST", body: form });
      }
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const remove = async (id) => {
    if (!confirm("Supprimer ce fichier ?")) return;
    try {
      await adminFetch(`/api/admin/media/${id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err.message);
    }
  };

  const copy = (url) => {
    navigator.clipboard?.writeText(window.location.origin + url).catch(() => {});
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h1>Médiathèque</h1>
        <button className="admin-btn-primary" onClick={() => inputRef.current?.click()} disabled={uploading}>
          {uploading ? "Envoi…" : "+ Téléverser"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => upload(e.target.files)}
        />
      </div>
      {error && <p className="admin-error">{error}</p>}
      {loading ? (
        <p className="admin-muted">Chargement…</p>
      ) : items.length === 0 ? (
        <p className="admin-muted">Aucun fichier téléversé pour l'instant. Les images du site (dossier /images) restent utilisables directement en tapant leur chemin dans les champs image.</p>
      ) : (
        <div className="admin-media-grid">
          {items.map((item) => (
            <div className="admin-media-item" key={item.id}>
              <img src={item.url} alt="" />
              <p className="admin-media-url">{item.url}</p>
              <div className="admin-media-actions">
                <button className="admin-btn-small" onClick={() => copy(item.url)}>
                  Copier
                </button>
                <button className="admin-btn-small admin-btn-danger" onClick={() => remove(item.id)}>
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

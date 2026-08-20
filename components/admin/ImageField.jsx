"use client";

import { useRef, useState } from "react";
import { adminFetch } from "@/lib/admin/fetch";

export default function ImageField({ label, value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const upload = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const data = await adminFetch("/api/admin/media", { method: "POST", body: form });
      onChange(data.item.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="admin-field">
      <label>{label}</label>
      <div className="admin-image-field">
        {value && <img src={value} alt="" className="admin-image-preview" />}
        <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} placeholder="/images/exemple.jpg ou URL" />
        <button type="button" className="admin-btn-small" onClick={() => inputRef.current?.click()} disabled={uploading}>
          {uploading ? "Envoi…" : "Téléverser"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => upload(e.target.files?.[0])}
        />
      </div>
      {error && <p className="admin-error">{error}</p>}
    </div>
  );
}

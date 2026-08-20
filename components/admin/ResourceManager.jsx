"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/admin/fetch";
import ImageField from "./ImageField";

function defaultsFor(fields) {
  const out = {};
  for (const f of fields) {
    if (f.type === "checkbox") out[f.name] = false;
    else if (f.type === "number") out[f.name] = 0;
    else if (f.type === "string-list" || f.type === "object-list") out[f.name] = [];
    else out[f.name] = "";
  }
  return out;
}

function StringListField({ label, value, onChange, itemLabel = "élément" }) {
  const items = value || [];
  const update = (i, v) => {
    const next = [...items];
    next[i] = v;
    onChange(next);
  };
  return (
    <div className="admin-field">
      <label>{label}</label>
      {items.map((item, i) => (
        <div className="admin-list-row" key={i}>
          <input value={item} onChange={(e) => update(i, e.target.value)} />
          <button type="button" className="admin-btn-icon" onClick={() => onChange(items.filter((_, j) => j !== i))}>
            ✕
          </button>
        </div>
      ))}
      <button type="button" className="admin-btn-small" onClick={() => onChange([...items, ""])}>
        + Ajouter {itemLabel}
      </button>
    </div>
  );
}

function ObjectListField({ label, value, onChange, itemFields }) {
  const items = value || [];
  const update = (i, key, v) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: v };
    onChange(next);
  };
  return (
    <div className="admin-field">
      <label>{label}</label>
      {items.map((item, i) => (
        <div className="admin-object-row" key={i}>
          {itemFields.map((f) => (
            <input
              key={f.name}
              placeholder={f.label}
              value={item[f.name] || ""}
              onChange={(e) => update(i, f.name, e.target.value)}
            />
          ))}
          <button type="button" className="admin-btn-icon" onClick={() => onChange(items.filter((_, j) => j !== i))}>
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        className="admin-btn-small"
        onClick={() => onChange([...items, Object.fromEntries(itemFields.map((f) => [f.name, ""]))])}
      >
        + Ajouter
      </button>
    </div>
  );
}

function Field({ field, value, onChange }) {
  if (field.type === "textarea" || field.type === "paragraphs") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        <textarea
          rows={field.type === "paragraphs" ? 10 : 4}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
        {field.hint && <p className="admin-hint">{field.hint}</p>}
      </div>
    );
  }
  if (field.type === "checkbox") {
    return (
      <label className="admin-checkbox">
        <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
        {field.label}
      </label>
    );
  }
  if (field.type === "number") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        <input type="number" value={value ?? 0} onChange={(e) => onChange(Number(e.target.value))} />
      </div>
    );
  }
  if (field.type === "string-list") {
    return <StringListField label={field.label} value={value} onChange={onChange} />;
  }
  if (field.type === "object-list") {
    return <ObjectListField label={field.label} value={value} onChange={onChange} itemFields={field.itemFields} />;
  }
  if (field.type === "image") {
    return <ImageField label={field.label} value={value} onChange={onChange} />;
  }
  return (
    <div className="admin-field">
      <label>{field.label}</label>
      <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} required={field.required} />
    </div>
  );
}

function ItemForm({ fields, value, onChange, onSubmit, onCancel, saving }) {
  return (
    <form
      className="admin-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {fields.map((f) => (
        <Field key={f.name} field={f} value={value[f.name]} onChange={(v) => onChange({ ...value, [f.name]: v })} />
      ))}
      <div className="admin-form-actions">
        <button type="submit" className="admin-btn-primary" disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
        <button type="button" className="admin-btn-ghost" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
}

export default function ResourceManager({ apiPath, title, fields, itemLabel, addLabel = "Ajouter" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null); // { id, ...fields } ou { ...defaults } pour création
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await adminFetch(apiPath);
      setItems(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiPath]);

  const startCreate = () => setEditing(defaultsFor(fields));
  const startEdit = (item) => setEditing({ ...item });
  const cancel = () => setEditing(null);

  const save = async () => {
    setSaving(true);
    setError("");
    try {
      if (editing.id) {
        await adminFetch(`${apiPath}/${editing.id}`, { method: "PUT", body: JSON.stringify(editing) });
      } else {
        await adminFetch(apiPath, { method: "POST", body: JSON.stringify(editing) });
      }
      setEditing(null);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (item) => {
    if (!confirm(`Supprimer « ${itemLabel(item)} » ?`)) return;
    try {
      await adminFetch(`${apiPath}/${item.id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-head">
        <h1>{title}</h1>
        {!editing && (
          <button className="admin-btn-primary" onClick={startCreate}>
            + {addLabel}
          </button>
        )}
      </div>

      {error && <p className="admin-error">{error}</p>}

      {editing ? (
        <ItemForm fields={fields} value={editing} onChange={setEditing} onSubmit={save} onCancel={cancel} saving={saving} />
      ) : loading ? (
        <p className="admin-muted">Chargement…</p>
      ) : items.length === 0 ? (
        <p className="admin-muted">Rien ici pour l'instant.</p>
      ) : (
        <ul className="admin-list">
          {items.map((item) => (
            <li key={item.id} className="admin-list-item">
              <span>{itemLabel(item)}</span>
              <span className="admin-list-actions">
                <button className="admin-btn-small" onClick={() => startEdit(item)}>
                  Modifier
                </button>
                <button className="admin-btn-small admin-btn-danger" onClick={() => remove(item)}>
                  Supprimer
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

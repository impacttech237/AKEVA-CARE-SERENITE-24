// Fabrique de dépôt CRUD générique pour les tables "collection" (services, formules,
// faqs, articles, temoignages, why_points, steps) : elles partagent toutes la même
// forme (id, order_index optionnel, quelques colonnes texte, quelques colonnes JSON).

function serializeField(value, { isJson, isBool }) {
  if (isJson) return JSON.stringify(value ?? []);
  if (isBool) return value ? 1 : 0;
  return value === undefined ? null : value;
}

function deserializeRow(row, jsonFields, boolFields) {
  const out = { ...row };
  for (const f of jsonFields) {
    try {
      out[f] = out[f] ? JSON.parse(out[f]) : [];
    } catch {
      out[f] = [];
    }
  }
  for (const f of boolFields) {
    out[f] = !!out[f];
  }
  return out;
}

export function defineResource({
  table,
  fields,
  jsonFields = [],
  boolFields = [],
  orderable = true,
  touchTimestamp = false,
}) {
  const fieldMeta = (f) => ({ isJson: jsonFields.includes(f), isBool: boolFields.includes(f) });
  const orderClause = orderable ? "ORDER BY order_index ASC, id ASC" : "ORDER BY id ASC";

  return {
    async list(db) {
      const { results } = await db.prepare(`SELECT * FROM ${table} ${orderClause}`).all();
      return results.map((r) => deserializeRow(r, jsonFields, boolFields));
    },

    async get(db, id) {
      const row = await db.prepare(`SELECT * FROM ${table} WHERE id = ?`).bind(id).first();
      return row ? deserializeRow(row, jsonFields, boolFields) : null;
    },

    async create(db, data) {
      const cols = fields.filter((f) => f in data);
      const values = cols.map((c) => serializeField(data[c], fieldMeta(c)));
      const placeholders = cols.map(() => "?").join(", ");
      const result = await db
        .prepare(`INSERT INTO ${table} (${cols.join(", ")}) VALUES (${placeholders})`)
        .bind(...values)
        .run();
      return result.meta.last_row_id;
    },

    async update(db, id, data) {
      const cols = fields.filter((f) => f in data);
      if (cols.length === 0) return;
      const setParts = cols.map((c) => `${c} = ?`);
      const values = cols.map((c) => serializeField(data[c], fieldMeta(c)));
      if (touchTimestamp) setParts.push("updated_at = datetime('now')");
      await db
        .prepare(`UPDATE ${table} SET ${setParts.join(", ")} WHERE id = ?`)
        .bind(...values, id)
        .run();
    },

    async remove(db, id) {
      await db.prepare(`DELETE FROM ${table} WHERE id = ?`).bind(id).run();
    },

    async reorder(db, orderedIds) {
      const stmts = orderedIds.map((id, i) =>
        db.prepare(`UPDATE ${table} SET order_index = ? WHERE id = ?`).bind(i, id)
      );
      await db.batch(stmts);
    },
  };
}

const JSON_KEYS = new Set(["cities"]);

export async function getSettings(db) {
  const { results } = await db.prepare("SELECT key, value FROM site_settings").all();
  const out = {};
  for (const row of results) {
    out[row.key] = JSON_KEYS.has(row.key) ? safeJson(row.value, []) : row.value;
  }
  return out;
}

export async function updateSettings(db, patch) {
  const stmts = Object.entries(patch).map(([key, value]) => {
    const stored = JSON_KEYS.has(key) ? JSON.stringify(value) : String(value);
    return db
      .prepare(
        "INSERT INTO site_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value"
      )
      .bind(key, stored);
  });
  if (stmts.length) await db.batch(stmts);
}

function safeJson(str, fallback) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

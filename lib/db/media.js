function slugifyFilename(name) {
  const dot = name.lastIndexOf(".");
  const base = dot > 0 ? name.slice(0, dot) : name;
  const ext = dot > 0 ? name.slice(dot) : "";
  const slug = base
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${slug || "fichier"}${ext.toLowerCase()}`;
}

export async function uploadMedia(env, file) {
  const db = env.DB;
  const key = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${slugifyFilename(file.name)}`;
  const buffer = await file.arrayBuffer();
  await env.MEDIA.put(key, buffer, {
    httpMetadata: { contentType: file.type || "application/octet-stream" },
  });
  const url = `/api/media/${key}`;
  const result = await db
    .prepare("INSERT INTO media (key, url, content_type, size) VALUES (?, ?, ?, ?)")
    .bind(key, url, file.type || null, buffer.byteLength)
    .run();
  return { id: result.meta.last_row_id, key, url, content_type: file.type, size: buffer.byteLength };
}

export async function listMedia(db) {
  const { results } = await db.prepare("SELECT * FROM media ORDER BY created_at DESC").all();
  return results;
}

export async function deleteMedia(env, id) {
  const db = env.DB;
  const row = await db.prepare("SELECT key FROM media WHERE id = ?").bind(id).first();
  if (!row) return;
  await env.MEDIA.delete(row.key);
  await db.prepare("DELETE FROM media WHERE id = ?").bind(id).run();
}

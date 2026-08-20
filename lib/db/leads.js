export async function createLead(db, data) {
  const result = await db
    .prepare(
      `INSERT INTO leads (name, phone, email, city, service, relation, diaspora, contact_pref, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      data.name,
      data.phone,
      data.email || null,
      data.city || null,
      data.service || null,
      data.relation || null,
      data.diaspora ? 1 : 0,
      data.contact_pref || null,
      data.message || null
    )
    .run();
  return result.meta.last_row_id;
}

export async function listLeads(db) {
  const { results } = await db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
  return results.map((r) => ({ ...r, diaspora: !!r.diaspora }));
}

export async function updateLeadStatus(db, id, status) {
  await db.prepare("UPDATE leads SET status = ? WHERE id = ?").bind(status, id).run();
}

export async function deleteLead(db, id) {
  await db.prepare("DELETE FROM leads WHERE id = ?").bind(id).run();
}

import { NextResponse } from "next/server";
import { getDB } from "@/lib/cf";
import { createLead } from "@/lib/db/leads";

export async function POST(request) {
  const data = await request.json().catch(() => null);
  if (!data || !data.name || !data.phone) {
    return NextResponse.json({ error: "Nom et téléphone requis." }, { status: 400 });
  }
  // Honeypot silencieux : un bot qui remplit ce champ caché est ignoré sans erreur.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const db = await getDB();
  await createLead(db, data);
  return NextResponse.json({ ok: true }, { status: 201 });
}

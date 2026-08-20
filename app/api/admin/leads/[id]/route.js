import { NextResponse } from "next/server";
import { getDB } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";
import { updateLeadStatus, deleteLead } from "@/lib/db/leads";

export async function PUT(request, { params }) {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const { status } = await request.json().catch(() => ({}));
  if (!status) return NextResponse.json({ error: "Statut requis." }, { status: 400 });
  const db = await getDB();
  await updateLeadStatus(db, params.id, status);
  return NextResponse.json({ ok: true });
}

export async function DELETE(request, { params }) {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const db = await getDB();
  await deleteLead(db, params.id);
  return NextResponse.json({ ok: true });
}

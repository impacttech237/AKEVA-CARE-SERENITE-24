import { NextResponse } from "next/server";
import { getDB } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";
import { getSettings, updateSettings } from "@/lib/db/settings";

export async function GET() {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const db = await getDB();
  const settings = await getSettings(db);
  return NextResponse.json({ settings });
}

export async function PUT(request) {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const patch = await request.json().catch(() => null);
  if (!patch) return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
  const db = await getDB();
  await updateSettings(db, patch);
  const settings = await getSettings(db);
  return NextResponse.json({ settings });
}

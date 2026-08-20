import { NextResponse } from "next/server";
import { getDB } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";
import { listLeads } from "@/lib/db/leads";

export async function GET() {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const db = await getDB();
  const leads = await listLeads(db);
  return NextResponse.json({ leads });
}

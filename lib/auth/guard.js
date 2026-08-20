import { NextResponse } from "next/server";
import { getCurrentUser } from "./current-user";

// Utilisation : const guard = await requireAdminApi(); if (guard) return guard;
export async function requireAdminApi() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Non authentifié." }, { status: 401 });
  return null;
}

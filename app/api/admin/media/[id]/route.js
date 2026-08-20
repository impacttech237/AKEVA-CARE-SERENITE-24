import { NextResponse } from "next/server";
import { getEnv } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";
import { deleteMedia } from "@/lib/db/media";

export async function DELETE(request, { params }) {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const env = await getEnv();
  await deleteMedia(env, params.id);
  return NextResponse.json({ ok: true });
}

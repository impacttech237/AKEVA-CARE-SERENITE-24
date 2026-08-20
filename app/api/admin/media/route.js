import { NextResponse } from "next/server";
import { getDB, getEnv } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";
import { listMedia, uploadMedia } from "@/lib/db/media";

const MAX_SIZE = 8 * 1024 * 1024; // 8 Mo

export async function GET() {
  const guard = await requireAdminApi();
  if (guard) return guard;
  const db = await getDB();
  const items = await listMedia(db);
  return NextResponse.json({ items });
}

export async function POST(request) {
  const guard = await requireAdminApi();
  if (guard) return guard;

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Fichier manquant." }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Fichier trop volumineux (8 Mo max)." }, { status: 413 });
  }
  if (!file.type?.startsWith("image/")) {
    return NextResponse.json({ error: "Seules les images sont acceptées." }, { status: 415 });
  }

  const env = await getEnv();
  const item = await uploadMedia(env, file);
  return NextResponse.json({ item }, { status: 201 });
}

import { NextResponse } from "next/server";
import { getDB, getEnv } from "@/lib/cf";
import { verifyPassword } from "@/lib/auth/password";
import { createSessionToken, SESSION_COOKIE } from "@/lib/auth/session";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const email = (body.email || "").toLowerCase().trim();
  const password = body.password || "";

  if (!email || !password) {
    return NextResponse.json({ error: "Email et mot de passe requis." }, { status: 400 });
  }

  const db = await getDB();
  const env = await getEnv();
  const user = await db.prepare("SELECT * FROM admin_users WHERE email = ?").bind(email).first();

  if (!user || !(await verifyPassword(password, user.password_hash))) {
    return NextResponse.json({ error: "Identifiants invalides." }, { status: 401 });
  }

  const token = await createSessionToken({ sub: user.id, email: user.email }, env.SESSION_SECRET);
  const res = NextResponse.json({ ok: true, email: user.email });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: request.url.startsWith("https://"),
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

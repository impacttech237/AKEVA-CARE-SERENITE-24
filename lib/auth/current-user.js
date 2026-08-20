import { cookies } from "next/headers";
import { getEnv } from "@/lib/cf";
import { SESSION_COOKIE, verifySessionToken } from "./session";

export async function getCurrentUser() {
  const jar = cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const env = await getEnv();
  const payload = await verifySessionToken(token, env.SESSION_SECRET);
  if (!payload) return null;
  return { id: payload.sub, email: payload.email };
}

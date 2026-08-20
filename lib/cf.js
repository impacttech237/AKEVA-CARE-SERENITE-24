import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getEnv() {
  const { env } = await getCloudflareContext({ async: true });
  return env;
}

export async function getDB() {
  const env = await getEnv();
  return env.DB;
}

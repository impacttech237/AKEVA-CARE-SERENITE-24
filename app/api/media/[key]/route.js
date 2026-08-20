import { getEnv } from "@/lib/cf";

export async function GET(request, { params }) {
  const env = await getEnv();
  const object = await env.MEDIA.get(params.key);
  if (!object) return new Response("Introuvable", { status: 404 });

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
      ETag: object.httpEtag,
    },
  });
}

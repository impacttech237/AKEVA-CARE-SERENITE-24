import { NextResponse } from "next/server";
import { getDB } from "@/lib/cf";
import { requireAdminApi } from "@/lib/auth/guard";

function describeDbError(err) {
  const msg = String(err?.message || err);
  if (msg.includes("UNIQUE")) return "Cette valeur (slug) existe déjà.";
  return "Erreur base de données.";
}

// Fabrique les handlers GET (liste) / POST (création) pour une route collection,
// ex. app/api/admin/services/route.js.
export function makeListHandlers(repo) {
  return {
    async GET() {
      const guard = await requireAdminApi();
      if (guard) return guard;
      const db = await getDB();
      const items = await repo.list(db);
      return NextResponse.json({ items });
    },
    async POST(request) {
      const guard = await requireAdminApi();
      if (guard) return guard;
      const data = await request.json().catch(() => null);
      if (!data) return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
      const db = await getDB();
      try {
        const id = await repo.create(db, data);
        const item = await repo.get(db, id);
        return NextResponse.json({ item }, { status: 201 });
      } catch (err) {
        return NextResponse.json({ error: describeDbError(err) }, { status: 409 });
      }
    },
  };
}

// Fabrique les handlers GET / PUT / DELETE pour une route élément,
// ex. app/api/admin/services/[id]/route.js.
export function makeItemHandlers(repo) {
  return {
    async GET(request, { params }) {
      const guard = await requireAdminApi();
      if (guard) return guard;
      const db = await getDB();
      const item = await repo.get(db, params.id);
      if (!item) return NextResponse.json({ error: "Introuvable." }, { status: 404 });
      return NextResponse.json({ item });
    },
    async PUT(request, { params }) {
      const guard = await requireAdminApi();
      if (guard) return guard;
      const data = await request.json().catch(() => null);
      if (!data) return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
      const db = await getDB();
      try {
        await repo.update(db, params.id, data);
      } catch (err) {
        return NextResponse.json({ error: describeDbError(err) }, { status: 409 });
      }
      const item = await repo.get(db, params.id);
      return NextResponse.json({ item });
    },
    async DELETE(request, { params }) {
      const guard = await requireAdminApi();
      if (guard) return guard;
      const db = await getDB();
      await repo.remove(db, params.id);
      return NextResponse.json({ ok: true });
    },
  };
}

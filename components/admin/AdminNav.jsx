"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Tableau de bord" },
  { group: "Contenu" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/formules", label: "Formules" },
  { href: "/admin/articles", label: "Articles / Blog" },
  { href: "/admin/temoignages", label: "Témoignages" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/pourquoi-nous", label: "Pourquoi nous" },
  { href: "/admin/etapes", label: "Étapes" },
  { group: "Site" },
  { href: "/admin/parametres", label: "Paramètres" },
  { href: "/admin/medias", label: "Médiathèque" },
  { href: "/admin/devis", label: "Demandes de devis" },
];

export default function AdminNav({ email }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="admin-sidebar">
      <h2>Akeva Care · Admin</h2>
      {links.map((item, i) =>
        item.group ? (
          <p className="admin-sidebar-group" key={`g-${i}`}>
            {item.group}
          </p>
        ) : (
          <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
            {item.label}
          </Link>
        )
      )}
      <form onSubmit={(e) => { e.preventDefault(); logout(); }}>
        <p className="admin-sidebar-group" style={{ marginTop: 0 }}>
          {email}
        </p>
        <button type="submit">Se déconnecter</button>
      </form>
    </aside>
  );
}

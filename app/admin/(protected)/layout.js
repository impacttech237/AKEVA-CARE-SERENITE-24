import AdminNav from "@/components/admin/AdminNav";
import { requireAdminUser } from "@/lib/auth/require-admin-page";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  const user = await requireAdminUser();
  return (
    <div className="admin-shell">
      <AdminNav email={user.email} />
      <main className="admin-main">{children}</main>
    </div>
  );
}

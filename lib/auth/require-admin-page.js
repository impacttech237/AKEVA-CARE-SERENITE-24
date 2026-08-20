import { redirect } from "next/navigation";
import { getCurrentUser } from "./current-user";

export async function requireAdminUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/admin/login");
  return user;
}

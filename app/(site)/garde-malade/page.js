import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Garde malade à domicile et à l'hôpital",
  description:
    "Garde malade à Yaoundé et Douala : jour, nuit, 24h/24 et accompagnement hospitalier. Présence professionnelle, suivi de la famille.",
};

export default async function Page() {
  const service = await getService("garde-malade");
  return <ServicePage service={service} />;
}

import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Accompagnement 24h/24",
  description:
    "Présence 24h/24 à Yaoundé et Douala, avec relais organisés et suivi de la famille.",
};

export default async function Page() {
  const service = await getService("accompagnement-24h");
  return <ServicePage service={service} />;
}

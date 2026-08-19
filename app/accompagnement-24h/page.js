import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("accompagnement-24h");

export const metadata = {
  title: "Accompagnement 24h/24",
  description:
    "Présence 24h/24 à Yaoundé et Douala, avec relais organisés et suivi de la famille.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

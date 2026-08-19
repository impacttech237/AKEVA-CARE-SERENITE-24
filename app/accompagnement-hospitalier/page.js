import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("accompagnement-hospitalier");

export const metadata = {
  title: "Accompagnement hospitalier",
  description:
    "Présence au chevet à Yaoundé et Douala lorsque la famille ne peut pas rester à l'hôpital.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

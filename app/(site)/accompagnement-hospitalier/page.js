import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Accompagnement hospitalier",
  description:
    "Présence au chevet à Yaoundé et Douala lorsque la famille ne peut pas rester à l'hôpital.",
};

export default async function Page() {
  const service = await getService("accompagnement-hospitalier");
  return <ServicePage service={service} />;
}

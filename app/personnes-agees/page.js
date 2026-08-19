import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("personnes-agees");

export const metadata = {
  title: "Accompagnement des personnes âgées",
  description:
    "Accompagnement des personnes âgées à Yaoundé et Douala : confort, autonomie, sécurité et présence humaine.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

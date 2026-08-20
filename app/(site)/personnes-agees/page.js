import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Accompagnement des personnes âgées",
  description:
    "Accompagnement des personnes âgées à Yaoundé et Douala : confort, autonomie, sécurité et présence humaine.",
};

export default async function Page() {
  const service = await getService("personnes-agees");
  return <ServicePage service={service} />;
}

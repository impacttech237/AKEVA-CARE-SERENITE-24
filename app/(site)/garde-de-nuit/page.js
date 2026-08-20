import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Garde de nuit à domicile et à l'hôpital",
  description:
    "Garde de nuit à Yaoundé et Douala : une veille rassurante lorsque la nuit devient le moment le plus fragile.",
};

export default async function Page() {
  const service = await getService("garde-de-nuit");
  return <ServicePage service={service} />;
}

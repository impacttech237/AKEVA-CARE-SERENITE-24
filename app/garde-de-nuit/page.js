import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("garde-de-nuit");

export const metadata = {
  title: "Garde de nuit à domicile et à l'hôpital",
  description:
    "Garde de nuit à Yaoundé et Douala : une veille rassurante lorsque la nuit devient le moment le plus fragile.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

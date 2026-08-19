import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("garde-de-jour");

export const metadata = {
  title: "Garde de jour à domicile",
  description:
    "Garde de jour à Yaoundé et Douala : présence, aide quotidienne et compagnie pendant la journée.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

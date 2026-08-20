import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Garde de jour à domicile",
  description:
    "Garde de jour à Yaoundé et Douala : présence, aide quotidienne et compagnie pendant la journée.",
};

export default async function Page() {
  const service = await getService("garde-de-jour");
  return <ServicePage service={service} />;
}

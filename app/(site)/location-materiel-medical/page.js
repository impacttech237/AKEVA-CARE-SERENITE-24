import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Location de matériel médical",
  description:
    "Location de matériel médical à Yaoundé et Douala : fauteuil, déambulateur, lit et aides techniques selon disponibilités.",
};

export default async function Page() {
  const service = await getService("location-materiel-medical");
  return <ServicePage service={service} />;
}

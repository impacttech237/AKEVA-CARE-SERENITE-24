import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("location-materiel-medical");

export const metadata = {
  title: "Location de matériel médical",
  description:
    "Location de matériel médical à Yaoundé et Douala : fauteuil, déambulateur, lit et aides techniques selon disponibilités.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

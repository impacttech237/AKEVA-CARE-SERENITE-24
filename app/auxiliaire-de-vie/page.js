import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("auxiliaire-de-vie");

export const metadata = {
  title: "Auxiliaire de vie à domicile",
  description:
    "Auxiliaire de vie à Yaoundé et Douala : aide au quotidien, confort, autonomie et dignité à domicile.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

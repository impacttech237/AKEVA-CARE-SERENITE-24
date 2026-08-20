import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Auxiliaire de vie à domicile",
  description:
    "Auxiliaire de vie à Yaoundé et Douala : aide au quotidien, confort, autonomie et dignité à domicile.",
};

export default async function Page() {
  const service = await getService("auxiliaire-de-vie");
  return <ServicePage service={service} />;
}

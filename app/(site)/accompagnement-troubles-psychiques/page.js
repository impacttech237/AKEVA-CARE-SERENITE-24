import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/data";

export const metadata = {
  title: "Accompagnement des troubles psychiques",
  description:
    "Accompagnement quotidien adapté aux troubles psychiques, en complément du suivi des professionnels de santé. Yaoundé et Douala.",
};

export default async function Page() {
  const service = await getService("accompagnement-troubles-psychiques");
  return <ServicePage service={service} />;
}

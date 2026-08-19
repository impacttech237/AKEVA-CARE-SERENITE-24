import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("accompagnement-troubles-psychiques");

export const metadata = {
  title: "Accompagnement des troubles psychiques",
  description:
    "Accompagnement quotidien adapté aux troubles psychiques, en complément du suivi des professionnels de santé. Yaoundé et Douala.",
};

export default function Page() {
  return <ServicePage service={service} />;
}

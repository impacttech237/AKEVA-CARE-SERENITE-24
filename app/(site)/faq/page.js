import FAQList from "@/components/FAQList";
import CTABanner from "@/components/CTABanner";
import { getFaqs } from "@/lib/data";

export const metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur Akeva Care : services, délais, tarifs, diaspora, limites professionnelles.",
};

export default async function Page() {
  const faqs = await getFaqs();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1>Questions fréquentes</h1>
          <p className="lead">
            Le cadre d'abord. Pour le reste, un échange de cinq minutes dit
            souvent plus qu'une page.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <FAQList items={faqs} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Nos villes",
  description: "Akeva Care intervient à Yaoundé et Douala, à domicile et à l'hôpital.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Présence</p>
          <h1>Nos villes</h1>
          <p className="lead">
            Deux villes, une même exigence : une présence organisée, humaine et
            suivie.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <Link href="/yaounde" className="city-card" style={{ minHeight: 380 }}>
              <img src="/images/svc-jour.jpg" alt="Yaoundé" />
              <span className="shade" />
              <span className="txt">
                <h2>Yaoundé</h2>
                <p>Domicile et hôpital</p>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/douala" className="city-card" style={{ minHeight: 380 }}>
              <img src="/images/svc-24h.jpg" alt="Douala" />
              <span className="shade" />
              <span className="txt">
                <h2>Douala</h2>
                <p>Domicile et hôpital</p>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

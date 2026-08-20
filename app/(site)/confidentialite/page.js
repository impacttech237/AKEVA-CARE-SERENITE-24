import { getSite } from "@/lib/data";

export const metadata = { title: "Confidentialité" };

export default async function Page() {
  const site = await getSite();
  return (
    <section className="page-hero" style={{ paddingBottom: 100 }}>
      <div className="container prose">
        <p className="eyebrow">Juridique</p>
        <h1>Confidentialité</h1>
        <p>
          Le formulaire de devis enregistre les informations saisies (nom,
          téléphone, email, situation) afin que notre équipe puisse vous
          recontacter, en plus de l'ouverture immédiate de WhatsApp vers le
          numéro {site.phoneDisplay}. Ces données ne sont ni vendues ni
          partagées avec des tiers.
        </p>
        <p>
          Les échanges concernant la situation d'un proche sont traités avec
          discrétion. Nous ne publions jamais d'identité de famille sans
          accord.
        </p>
        <p>
          Ce site peut utiliser des journaux techniques d'hébergement (adresse
          IP, pages visitées) à des fins de sécurité et de performance.
        </p>
        <p>
          Pour toute question : {site.email}.
        </p>
      </div>
    </section>
  );
}

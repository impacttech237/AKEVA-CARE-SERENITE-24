import { site } from "@/lib/site";

export const metadata = { title: "Confidentialité" };

export default function Page() {
  return (
    <section className="page-hero" style={{ paddingBottom: 100 }}>
      <div className="container prose">
        <p className="eyebrow">Juridique</p>
        <h1>Confidentialité</h1>
        <p>
          Le formulaire de devis n'enregistre aucune donnée sur nos serveurs.
          Les informations saisies sont transmises via WhatsApp, à votre
          initiative, vers le numéro {site.phoneDisplay}.
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

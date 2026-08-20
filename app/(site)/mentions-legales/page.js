import { getSite } from "@/lib/data";

export const metadata = { title: "Mentions légales" };

export default async function Page() {
  const site = await getSite();
  return (
    <section className="page-hero" style={{ paddingBottom: 100 }}>
      <div className="container prose">
        <p className="eyebrow">Juridique</p>
        <h1>Mentions légales</h1>
        <p>
          Le site {site.name} présente les services d'accompagnement à la
          personne proposés à Yaoundé et Douala. Éditeur : {site.name}. Contact
          : {site.email} · {site.phoneDisplay}.
        </p>
        <p>
          Akeva Care Sérénité 24 est un service d'accompagnement à domicile et
          à l'hôpital. Il ne constitue pas un établissement de santé et ne se
          substitue pas à un professionnel médical.
        </p>
        <p>
          Les photographies sont des visuels d'illustration. Les témoignages
          présentés sont des exemples de situations types, rédigés à des fins
          de compréhension de l'offre.
        </p>
        <p>
          Le numéro de téléphone et l'adresse email indiqués sont destinés à
          être remplacés par les coordonnées définitives de la cliente avant
          mise en ligne publique.
        </p>
      </div>
    </section>
  );
}

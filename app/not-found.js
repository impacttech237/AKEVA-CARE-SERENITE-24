import Link from "next/link";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Cette page n'existe pas.</h1>
        <p className="lead">Revenez à l'accueil, ou parlez-nous directement de votre besoin.</p>
        <div className="btn-row mt-m">
          <Link className="btn btn-primary" href="/">
            Accueil <Arrow />
          </Link>
          <Link className="btn btn-ghost" href="/demander-un-devis">
            Demander
          </Link>
        </div>
      </div>
    </section>
  );
}

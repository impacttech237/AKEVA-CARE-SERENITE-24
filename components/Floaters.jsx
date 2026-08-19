"use client";

import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { WhatsApp } from "./Icons";

export default function Floaters() {
  return (
    <>
      <a
        className="wa-float"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
      >
        <WhatsApp />
      </a>
      <nav className="mobile-bar" aria-label="Actions rapides">
        <a href={`tel:${site.phoneTel}`}>Appeler</a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <Link className="accent" href="/demander-un-devis">
          Devis
        </Link>
      </nav>
    </>
  );
}

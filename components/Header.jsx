"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav, whatsappLink } from "@/lib/site";

const pillNav = nav.filter((item) =>
  ["Services", "Familles", "Diaspora", "Blog"].includes(item.label)
);

export default function Header({ site }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAcc(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="header-inner">
          <Link className="logo-pill" href="/" aria-label="Akeva Care Sérénité 24 — accueil">
            <Logo compact />
          </Link>

          <div className="nav-pill">
            <nav aria-label="Navigation principale">
              {pillNav.map((item) => (
                <div className="nav-item" key={item.href}>
                  <Link className="nav-link" href={item.href}>
                    {item.label}
                    {item.children && (
                      <svg className="caret" viewBox="0 0 10 10" aria-hidden="true">
                        <path
                          d="M2 3.5 5 6.5 8 3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <div className="dropdown">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link className="btn btn-primary nav-cta" href="/demander-un-devis">
              Demander
            </Link>
          </div>

          <button
            className={`burger-pill ${open ? "is-open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        <Link href="/">Accueil</Link>
        {nav.map((item) =>
          item.children ? (
            <div key={item.href}>
              <button
                className="mobile-acc"
                onClick={() => setAcc(acc === item.href ? null : item.href)}
              >
                {item.label}
                <span>{acc === item.href ? "–" : "+"}</span>
              </button>
              <div className={`mobile-sub ${acc === item.href ? "is-open" : ""}`}>
                <Link href={item.href}>Tout voir</Link>
                {item.children.map((c) => (
                  <Link key={c.href} href={c.href}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          )
        )}
        <div className="mobile-actions">
          <Link className="btn btn-primary" href="/demander-un-devis">
            Demander un accompagnement
          </Link>
          <a className="btn btn-whatsapp" href={whatsappLink(site.whatsapp)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            Appeler {site.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}

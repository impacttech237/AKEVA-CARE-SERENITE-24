"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Arrow } from "./Icons";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <header className={`header ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" aria-label="Akeva Care Sérénité 24 — accueil">
            <Logo />
          </Link>

          <nav className="nav-desktop" aria-label="Navigation principale">
            {nav.map((item) => (
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

          <div className="header-cta">
            <a
              className="btn btn-ghost"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacter
            </a>
            <Link className="btn btn-primary" href="/demander-un-devis">
              Demander <Arrow />
            </Link>
          </div>

          <button
            className={`burger ${open ? "is-open" : ""}`}
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
          <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
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

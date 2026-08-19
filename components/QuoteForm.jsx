"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

const initial = {
  name: "",
  phone: "",
  email: "",
  city: "Yaoundé",
  service: "Garde malade",
  relation: "Parent",
  diaspora: false,
  message: "",
  contact: "WhatsApp",
};

export default function QuoteForm({ presetService = "" }) {
  const [data, setData] = useState({
    ...initial,
    service: presetService || initial.service,
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d) => ({ ...d, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      "Bonjour Akeva Care, demande de devis :",
      `Nom : ${data.name}`,
      `Téléphone : ${data.phone}`,
      data.email ? `Email : ${data.email}` : null,
      `Ville : ${data.city}`,
      `Service : ${data.service}`,
      `Lien avec la personne : ${data.relation}`,
      data.diaspora ? "Je contacte depuis l'étranger (diaspora)." : null,
      `Contact préféré : ${data.contact}`,
      data.message ? `Situation : ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form-panel">
        <h3>WhatsApp s'ouvre avec votre demande.</h3>
        <p>
          Si rien ne s'affiche, appelez le {site.phoneDisplay} ou écrivez à{" "}
          {site.email}.
        </p>
        <a className="btn-send" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <SendIcon />
          Ouvrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className="contact-form-panel" onSubmit={onSubmit}>
      <div className="contact-grid">
        <div className="contact-field">
          <label htmlFor="quote-name">Votre nom</label>
          <input
            id="quote-name"
            name="name"
            placeholder="Nom"
            required
            value={data.name}
            onChange={onChange}
          />
        </div>
        <div className="contact-field">
          <label htmlFor="quote-phone">Votre téléphone</label>
          <input
            id="quote-phone"
            name="phone"
            placeholder="WhatsApp ou appel"
            required
            value={data.phone}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="quote-email">Email (optionnel)</label>
        <input
          id="quote-email"
          name="email"
          type="email"
          placeholder="email@exemple.com"
          value={data.email}
          onChange={onChange}
        />
      </div>
      <div className="contact-grid">
        <div className="contact-field">
          <label htmlFor="quote-city">Ville</label>
          <select id="quote-city" name="city" value={data.city} onChange={onChange}>
            <option>Yaoundé</option>
            <option>Douala</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor="quote-service">Services</label>
          <select id="quote-service" name="service" value={data.service} onChange={onChange}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-field">
          <label htmlFor="quote-relation">La personne accompagnée</label>
          <select id="quote-relation" name="relation" value={data.relation} onChange={onChange}>
            <option>Parent</option>
            <option>Conjoint</option>
            <option>Autre proche</option>
            <option>Moi-même</option>
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor="quote-contact">Vous recontacter par</label>
          <select id="quote-contact" name="contact" value={data.contact} onChange={onChange}>
            <option>WhatsApp</option>
            <option>Appel</option>
            <option>Email</option>
          </select>
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="quote-message">Décrivez la situation</label>
        <textarea
          id="quote-message"
          name="message"
          value={data.message}
          onChange={onChange}
          placeholder="Âge approximatif, domicile ou hôpital, jour / nuit / 24h…"
        />
      </div>
      <label className="contact-check">
        <input type="checkbox" name="diaspora" checked={data.diaspora} onChange={onChange} />
        <span>Je contacte depuis l'étranger (diaspora).</span>
      </label>
      <button className="btn-send" type="submit">
        <SendIcon />
        Envoyer
      </button>
    </form>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M4 11.5 20 4l-6.2 16-2.6-6.2L4 11.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

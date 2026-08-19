"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { Arrow } from "./Icons";

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
      <div className="form-success">
        <p className="eyebrow">Message préparé</p>
        <h3 className="mt-s">WhatsApp s'ouvre avec votre demande.</h3>
        <p className="muted mt-s">
          Si la fenêtre ne s'affiche pas, écrivez-nous au {site.phoneDisplay} ou
          à {site.email}.
        </p>
        <div className="btn-row mt-m">
          <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            Appeler
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="grid-2">
        <div className="field">
          <label htmlFor="name">Votre nom</label>
          <input id="name" name="name" required value={data.name} onChange={onChange} />
        </div>
        <div className="field">
          <label htmlFor="phone">Téléphone / WhatsApp</label>
          <input id="phone" name="phone" required value={data.phone} onChange={onChange} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email (optionnel)</label>
        <input id="email" name="email" type="email" value={data.email} onChange={onChange} />
      </div>
      <div className="grid-2">
        <div className="field">
          <label htmlFor="city">Ville</label>
          <select id="city" name="city" value={data.city} onChange={onChange}>
            <option>Yaoundé</option>
            <option>Douala</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="service">Type d'accompagnement</label>
          <select id="service" name="service" value={data.service} onChange={onChange}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid-2">
        <div className="field">
          <label htmlFor="relation">La personne accompagnée est</label>
          <select id="relation" name="relation" value={data.relation} onChange={onChange}>
            <option>Parent</option>
            <option>Conjoint</option>
            <option>Autre proche</option>
            <option>Moi-même</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="contact">Vous préférez être recontacté par</label>
          <select id="contact" name="contact" value={data.contact} onChange={onChange}>
            <option>WhatsApp</option>
            <option>Appel</option>
            <option>Email</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Décrivez la situation</label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={onChange}
          placeholder="Âge approximatif, domicile ou hôpital, jour / nuit / 24h, urgence..."
        />
      </div>
      <label className="check">
        <input type="checkbox" name="diaspora" checked={data.diaspora} onChange={onChange} />
        <span>Je contacte depuis l'étranger (diaspora).</span>
      </label>
      <button className="btn btn-primary" type="submit">
        Envoyer la demande <Arrow />
      </button>
      <p className="small">
        La demande s'ouvre dans WhatsApp. Aucune donnée n'est stockée sur ce site.
      </p>
    </form>
  );
}

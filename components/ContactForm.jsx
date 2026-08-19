"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

const initial = {
  name: "",
  phone: "",
  service: "Garde malade",
};

export default function ContactForm() {
  const [data, setData] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      "Bonjour Akeva Care, je souhaite vous contacter :",
      `Nom : ${data.name}`,
      `Téléphone : ${data.phone}`,
      `Service : ${data.service}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form-panel">
        <h3>WhatsApp s'ouvre avec votre message.</h3>
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
      <div className="contact-field">
        <label htmlFor="contact-name">Votre nom</label>
        <input
          id="contact-name"
          name="name"
          placeholder="Nom"
          required
          value={data.name}
          onChange={onChange}
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-phone">Votre téléphone</label>
        <input
          id="contact-phone"
          name="phone"
          placeholder="WhatsApp ou appel"
          required
          value={data.phone}
          onChange={onChange}
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-service">Services</label>
        <select id="contact-service" name="service" value={data.service} onChange={onChange}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>
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

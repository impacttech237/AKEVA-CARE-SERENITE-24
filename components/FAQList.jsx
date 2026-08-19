"use client";

import { useState } from "react";
import { Plus } from "./Icons";

export default function FAQList({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item ${open === i ? "is-open" : ""}`}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <span className="plus">
              <Plus />
            </span>
          </button>
          <div className="faq-panel">{item.a}</div>
        </div>
      ))}
    </div>
  );
}

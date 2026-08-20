"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Arrow } from "./Icons";

export default function BlogFilters({ articles, categories }) {
  const [cat, setCat] = useState("Tous");
  const list = useMemo(
    () => (cat === "Tous" ? articles : articles.filter((a) => a.category === cat)),
    [articles, cat]
  );

  return (
    <>
      <div className="blog-filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`blog-chip ${cat === c ? "is-on" : ""}`}
            onClick={() => setCat(c)}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {list.map((a) => (
          <article className="card" key={a.slug}>
            <div className="card-media">
              <img src={a.image} alt="" />
            </div>
            <div className="card-body">
              <p className="small">
                {a.category} · {a.date}
              </p>
              <h3 className="mt-s">{a.title}</h3>
              <p>{a.excerpt}</p>
              <Link className="link-more" href={`/blog/${a.slug}`}>
                Lire l'article <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

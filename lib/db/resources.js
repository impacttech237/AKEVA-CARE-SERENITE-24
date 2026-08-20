import { defineResource } from "./resource";

export const servicesRepo = defineResource({
  table: "services",
  fields: [
    "slug",
    "order_index",
    "title",
    "menu_title",
    "short",
    "h1",
    "intro",
    "image",
    "cta",
    "whatsapp_message",
    "highlights",
    "included",
    "limits",
  ],
  jsonFields: ["highlights", "included", "limits"],
  touchTimestamp: true,
});

export const formulasRepo = defineResource({
  table: "formulas",
  fields: ["order_index", "name", "tag", "text", "points", "featured"],
  jsonFields: ["points"],
  boolFields: ["featured"],
});

export const whyPointsRepo = defineResource({
  table: "why_points",
  fields: ["order_index", "title", "text"],
});

export const stepsRepo = defineResource({
  table: "steps",
  fields: ["order_index", "step_no", "title", "text"],
});

export const faqsRepo = defineResource({
  table: "faqs",
  fields: ["order_index", "question", "answer"],
});

export const articlesRepo = defineResource({
  table: "articles",
  fields: [
    "slug",
    "order_index",
    "title",
    "excerpt",
    "date_label",
    "image",
    "category",
    "read_time",
    "content",
  ],
  touchTimestamp: true,
});

export const testimonialsRepo = defineResource({
  table: "testimonials",
  fields: ["order_index", "quote", "name", "role"],
});

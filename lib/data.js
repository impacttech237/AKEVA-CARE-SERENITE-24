// Couche de lecture des données publiques du site, depuis D1.
// Server-only : à n'utiliser que dans des Server Components / route handlers.
import { cache } from "react";
import { getDB } from "./cf";
import {
  servicesRepo,
  formulasRepo,
  whyPointsRepo,
  stepsRepo,
  faqsRepo,
  articlesRepo,
  testimonialsRepo,
} from "./db/resources";
import { getSettings } from "./db/settings";

function mapService(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    menuTitle: row.menu_title,
    short: row.short,
    h1: row.h1,
    intro: row.intro,
    image: row.image,
    cta: row.cta,
    whatsapp: row.whatsapp_message,
    highlights: row.highlights,
    included: row.included,
    limits: row.limits,
  };
}

function mapArticle(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date_label,
    image: row.image,
    category: row.category,
    read: row.read_time,
    content: row.content ? row.content.split("\n\n") : [],
  };
}

function mapStep(row) {
  return { n: row.step_no, title: row.title, text: row.text };
}

function mapFaq(row) {
  return { id: row.id, q: row.question, a: row.answer };
}

export const getSite = cache(async () => {
  const db = await getDB();
  return getSettings(db);
});

export const getServices = cache(async () => {
  const db = await getDB();
  const rows = await servicesRepo.list(db);
  return rows.map(mapService);
});

export async function getService(slug) {
  const services = await getServices();
  return services.find((s) => s.slug === slug) || null;
}

export const getFormulas = cache(async () => {
  const db = await getDB();
  return formulasRepo.list(db);
});

export const getWhyPoints = cache(async () => {
  const db = await getDB();
  return whyPointsRepo.list(db);
});

export const getSteps = cache(async () => {
  const db = await getDB();
  const rows = await stepsRepo.list(db);
  return rows.map(mapStep);
});

export const getFaqs = cache(async () => {
  const db = await getDB();
  const rows = await faqsRepo.list(db);
  return rows.map(mapFaq);
});

export const getArticles = cache(async () => {
  const db = await getDB();
  const rows = await articlesRepo.list(db);
  return rows.map(mapArticle);
});

export async function getArticle(slug) {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug) || null;
}

export async function getRelatedArticles(slug, n = 3) {
  const articles = await getArticles();
  return articles.filter((a) => a.slug !== slug).slice(0, n);
}

export async function getArticleCategories() {
  const articles = await getArticles();
  return ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))];
}

export const getTestimonials = cache(async () => {
  const db = await getDB();
  return testimonialsRepo.list(db);
});

-- Akeva Care Sérénité 24 — schéma D1
-- Rejouable : toutes les créations sont IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Paramètres globaux du site (remplace lib/site.js), clé/valeur.
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  order_index INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  menu_title TEXT,
  short TEXT NOT NULL,
  h1 TEXT NOT NULL,
  intro TEXT NOT NULL,
  image TEXT,
  cta TEXT NOT NULL,
  whatsapp_message TEXT NOT NULL,
  highlights TEXT NOT NULL DEFAULT '[]',
  included TEXT NOT NULL DEFAULT '[]',
  limits TEXT NOT NULL DEFAULT '[]',
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS formulas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_index INTEGER NOT NULL DEFAULT 0,
  name TEXT NOT NULL,
  tag TEXT,
  text TEXT NOT NULL,
  points TEXT NOT NULL DEFAULT '[]',
  featured INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS why_points (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_index INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  text TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS steps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_index INTEGER NOT NULL DEFAULT 0,
  step_no TEXT NOT NULL,
  title TEXT NOT NULL,
  text TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_index INTEGER NOT NULL DEFAULT 0,
  question TEXT NOT NULL,
  answer TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  order_index INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  date_label TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  read_time TEXT,
  content TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_index INTEGER NOT NULL DEFAULT 0,
  quote TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL
);

-- Demandes de devis capturées depuis le formulaire (en plus de l'ouverture WhatsApp).
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  city TEXT,
  service TEXT,
  relation TEXT,
  diaspora INTEGER NOT NULL DEFAULT 0,
  contact_pref TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'nouveau'
);

CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  content_type TEXT,
  size INTEGER,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_articles_order ON articles(order_index);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

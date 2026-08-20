# Akeva Care Sérénité 24

Site web professionnel — accompagnement à domicile et à l'hôpital à Yaoundé et Douala.

## Stack

- Next.js 14 (App Router), rendu dynamique (SSR)
- React 18
- Cloudflare Workers (déploiement via `@opennextjs/cloudflare`)
- Cloudflare D1 (base de données) + Cloudflare R2 (médiathèque)
- CSS custom (design system crème / terracotta, motion type Medora)

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000). En dev, l'app se connecte à la base D1 locale (émulée par Wrangler) grâce à `initOpenNextCloudflareForDev()` dans `next.config.mjs`.

Pour un test plus proche de la prod (D1/R2 via Workers) :

```bash
npm run preview
```

## Administration du contenu

Tout le contenu éditorial (services, formules, FAQ, articles de blog, témoignages, étapes, paramètres du site) est stocké dans Cloudflare D1 et géré depuis un dashboard d'administration, plus de contenu en dur dans le code.

Dashboard : `/admin` (redirige vers `/admin/login` si non connecté).

- **Services** : `/admin/services`
- **Formules** : `/admin/formules`
- **Articles / Blog** : `/admin/articles`
- **Témoignages** : `/admin/temoignages`
- **FAQ** : `/admin/faq`
- **Pourquoi nous** (page À propos) : `/admin/pourquoi-nous`
- **Étapes** (Comment ça fonctionne) : `/admin/etapes`
- **Paramètres du site** (téléphone, email, WhatsApp, etc.) : `/admin/parametres`
- **Médiathèque** (upload d'images vers R2) : `/admin/medias`
- **Demandes de devis** : `/admin/devis`

Les demandes de devis s'ouvrent dans WhatsApp avec un message prérempli, et sont aussi enregistrées en base pour suivi dans le dashboard.

### Compte admin

Le compte admin initial a été créé avec l'email et le mot de passe indiqués par l'équipe lors de la mise en place. **À changer avant mise en ligne publique** — pas d'interface de changement de mot de passe pour l'instant : régénérer avec `node scripts/create-admin.mjs <email> <mot-de-passe>` puis appliquer le SQL généré via `wrangler d1 execute akeva-care-db --remote --file=...`.

## Infrastructure Cloudflare

- **D1** : `akeva-care-db` — schéma dans `db/schema.sql`, seed initial dans `db/seed.sql`.
- **R2** : `akeva-care-media` — stockage des images téléversées depuis la médiathèque, servies via `/api/media/[key]`.
- **Worker** : configuré dans `wrangler.jsonc`, bundle généré par `@opennextjs/cloudflare` dans `.open-next/`.

Déploiement :

```bash
npm run deploy
```

> **Windows, dossier avec espaces/accents** (comme celui-ci : `PROJET WEB`, `Sérénité`) : le bundler d'`@opennextjs/cloudflare` plante sur ces chemins (bug connu du portage Windows). Utiliser `npm run deploy:windows` à la place — il copie le projet dans `C:\akeva-deploy-build` (chemin simple) et déploie depuis là.

## Pages publiques

Accueil, services (9 pages), familles, fonctionnement, formules, devis, FAQ, diaspora, villes (Yaoundé, Douala), à propos, blog, mentions, confidentialité.

// Génère db/seed.sql à partir du contenu qui était en dur dans lib/content.js,
// lib/services.js et lib/site.js, pour peupler D1 avec le contenu existant du site.
// Usage : node scripts/seed-data.mjs > db/seed.sql (ou node scripts/seed-data.mjs pour écrire directement)
import { writeFileSync } from "node:fs";

const site = {
  name: "Akeva Care Sérénité 24",
  shortName: "Akeva Care",
  tagline: "Prendre soin de vos proches, même lorsque vous ne pouvez pas être là.",
  promise: "Un accompagnement professionnel et humain à domicile et à l'hôpital.",
  description:
    "Akeva Care Sérénité 24 accompagne les personnes âgées, les personnes dépendantes et les patients à domicile ou à l'hôpital à Yaoundé et Douala. Présence professionnelle, humaine et personnalisée.",
  url: "https://akevacare.cm",
  email: "contact@akevacare.cm",
  phoneDisplay: "+237 6 99 00 24 24",
  phoneTel: "+237699002424",
  whatsapp: "237699002424",
  cities: ["Yaoundé", "Douala"],
  hours: "24h/24 · 7j/7",
};

const whyPoints = [
  { title: "Personnel sélectionné et encadré", text: "Chaque intervenant est choisi, briefé et suivi. Vous n'accueillez pas un inconnu « trouvé au hasard »." },
  { title: "Accompagnement personnalisé", text: "Horaires, habitudes, langue, rythme, points de vigilance : rien n'est standardisé à l'excès." },
  { title: "Intervention à domicile et à l'hôpital", text: "Un seul interlocuteur, que votre proche soit chez lui ou hospitalisé." },
  { title: "Organisation professionnelle", text: "Évaluation, proposition, relais, suivi : une structure, pas une débrouille." },
  { title: "Suivi de la famille", text: "Vous savez ce qui se passe. Surtout si vous vivez à l'étranger." },
  { title: "Disponibilité selon les besoins", text: "Quelques heures, une nuit, une semaine, une présence 24h/24." },
  { title: "Présence à Yaoundé et Douala", text: "Deux villes, une même exigence de sérieux et d'humanité." },
];

const steps = [
  { n: "01", title: "Contactez-nous", text: "Téléphone, WhatsApp ou formulaire. Un premier échange suffit pour commencer." },
  { n: "02", title: "Expliquez votre situation", text: "Un conseiller recueille les informations nécessaires, avec calme et confidentialité." },
  { n: "03", title: "Nous évaluons vos besoins", text: "Lieu, horaires, situation du proche et type d'accompagnement." },
  { n: "04", title: "Nous proposons une solution", text: "Formule et organisation adaptées — claires, sans surprise inutile." },
  { n: "05", title: "L'accompagnement commence", text: "Akeva Care organise l'intervention et assure le suivi auprès de la famille." },
];

const faqs = [
  { q: "Akeva Care est-il un service médical ?", a: "Non. Akeva Care est un service d'accompagnement à la personne : présence, aide quotidienne, surveillance dans les limites professionnelles, lien avec la famille. Nous ne remplaçons pas un médecin, un infirmier ou un établissement de santé. Nous travaillons en complément du suivi médical existant." },
  { q: "Intervenez-vous à domicile et à l'hôpital ?", a: "Oui. Nous organisons des présences à domicile et des accompagnements hospitaliers à Yaoundé et à Douala, selon les besoins et les règles de l'établissement." },
  { q: "Puis-je organiser un accompagnement depuis l'étranger ?", a: "Oui, c'est une de nos missions centrales. La diaspora peut tout organiser à distance : évaluation, mise en place, suivi et comptes-rendus. WhatsApp et le téléphone suffisent pour démarrer." },
  { q: "En combien de temps pouvez-vous intervenir ?", a: "Cela dépend de la ville, du type de présence et de la disponibilité. Certaines demandes se mettent en place rapidement, d'autres demandent une organisation plus fine. Expliquez-nous la situation : nous vous dirons clairement ce qui est possible." },
  { q: "Quels sont vos tarifs ?", a: "Chaque situation est différente (jour, nuit, 24h, hôpital, durée, intensité). Nous établissons un devis après avoir compris le besoin. Pas de grille figée envoyée sans échange — pour éviter les mauvaises surprises." },
  { q: "Comment sont choisis les intervenants ?", a: "Le personnel est sélectionné, briefé sur la situation de votre proche et encadré. Nous attachons autant d'importance au savoir-être qu'à la fiabilité." },
  { q: "Que se passe-t-il si l'intervenant ne convient pas ?", a: "Dites-le-nous. L'accompagnement est un métier de relation : si le feeling ou le niveau de présence n'est pas le bon, nous réorganisons." },
  { q: "Intervenez-vous la nuit et le week-end ?", a: "Oui. Garde de nuit, week-end, jours fériés et accompagnement 24h/24 font partie de notre offre, selon organisation." },
  { q: "Proposez-vous de la location de matériel médical ?", a: "Oui, selon disponibilités : fauteuil, déambulateur, lit, aides techniques courantes. Demandez-nous ce dont vous avez besoin." },
  { q: "Accompagnez-vous les personnes concernées par des troubles psychiques ?", a: "Oui, sous forme d'accompagnement quotidien, toujours en complément du suivi des professionnels de santé. Nous n'établissons aucun diagnostic et n'intervenons pas à la place d'un service de psychiatrie." },
];

const formulas = [
  { name: "Présence jour", tag: "Le quotidien", text: "Quelques heures ou la journée complète à domicile. Idéal pour les repas, l'aide quotidienne et la compagnie.", points: ["Créneaux flexibles", "Aide aux actes du quotidien", "Point à la famille"] },
  { name: "Présence nuit", tag: "La vigilance", text: "Une veille organisée à domicile ou à l'hôpital, lorsque la nuit est le moment le plus fragile.", points: ["Garde de nuit", "Surveillance selon nos limites", "Alerte familiale si besoin"] },
  { name: "Présence 24h/24", tag: "La continuité", featured: true, text: "Une organisation en relais pour les situations de grande dépendance ou de besoin permanent.", points: ["Relais organisés", "Plan personnalisé", "Suivi rapproché de la famille"] },
  { name: "Hospitalier", tag: "L'hôpital", text: "Une présence au chevet, en journée ou la nuit, lorsque la famille ne peut pas rester.", points: ["Garde hospitalière", "Respect de l'établissement", "Lien avec la famille"] },
  { name: "Diaspora", tag: "Depuis l'étranger", text: "Tout organiser à distance : évaluation, mise en place, comptes-rendus, interlocuteur unique.", points: ["Pilotage à distance", "Comptes-rendus réguliers", "Yaoundé et Douala"] },
];

const articles = [
  { slug: "choisir-une-garde-malade", title: "Comment choisir une garde malade à Yaoundé ou Douala", excerpt: "Présence, limites professionnelles, suivi de la famille : les questions à poser avant de confier un proche.", date: "12 août 2026", image: "/images/svc-hopital.jpg", category: "Familles", content: [
    "Confier un parent à une garde malade n'est jamais un geste anodin. Au Cameroun, l'offre est inégale : entre la voisine dévouée, l'intermédiaire informel et une structure organisée, les écarts de sérieux sont immenses.",
    "La première question n'est pas « combien ça coûte ? » mais « que fera concrètement la personne, et que ne fera-t-elle pas ? ». Une garde malade n'est pas un médecin. Elle n'est pas non plus une simple présence assise dans un coin. Elle aide, surveille, rassure, transmet.",
    "Demandez toujours : qui encadre l'intervenant ? Que se passe-t-il la nuit ? Comment êtes-vous informés si vous vivez à l'étranger ? Qui remplace la personne si elle est absente ?",
    "Chez Akeva Care, ces réponses font partie du service. Pas d'à-peu-près : une évaluation, une proposition, un suivi.",
  ]},
  { slug: "organiser-accompagnement-depuis-etranger", title: "Organiser l'accompagnement d'un parent depuis l'étranger", excerpt: "France, Belgique, Canada, États-Unis : comment rester proche quand on vit loin de Yaoundé ou Douala.", date: "4 août 2026", image: "/images/hero-hands.jpg", category: "Diaspora", content: [
    "La culpabilité de la diaspora a une forme précise : le téléphone qui sonne trop tard, le voisin qui « passe quand il peut », la tante épuisée, l'hôpital où personne ne reste la nuit.",
    "Organiser un accompagnement à distance est possible, à condition d'avoir un interlocuteur unique, des comptes-rendus réguliers et une structure qui ne disparaît pas après le premier versement.",
    "Commencez par décrire la situation sans minimiser : autonomie, logement, ville, horaires, hospitalisation en cours ou non. WhatsApp suffit pour ce premier échange.",
    "Ensuite seulement vient l'organisation : qui intervient, quand, comment vous êtes tenus au courant, comment l'on ajuste si l'état de votre proche évolue.",
  ]},
  { slug: "retour-domicile-apres-hopital", title: "Préparer le retour à domicile après une hospitalisation", excerpt: "Les premiers jours chez soi sont souvent les plus délicats. Voici comment les sécuriser.", date: "22 juillet 2026", image: "/images/svc-jour.jpg", category: "Après l'hôpital", content: [
    "Sortir de l'hôpital n'est pas guérir. C'est changer de décor, souvent trop tôt, avec une fatigue que l'on sous-estime.",
    "Avant le retour : qui sera là la première nuit ? Le logement est-il praticable ? Faut-il un fauteuil, un lit, une présence diurne ? La famille sur place peut-elle tenir, ou est-elle déjà à bout ?",
    "Akeva Care intervient souvent à ce moment-là : garde de jour, garde de nuit, parfois 24h/24 le temps de stabiliser, et location de matériel si besoin.",
    "Le bon réflexe est d'anticiper la sortie, pas d'attendre la crise du troisième soir.",
  ]},
  { slug: "la-nuit-moment-le-plus-fragile", title: "La nuit, le moment le plus fragile", excerpt: "Chutes, désorientation, solitude : pourquoi la garde de nuit change souvent toute l'équation familiale.", date: "9 juillet 2026", image: "/images/svc-nuit.jpg", category: "Garde de nuit", content: [
    "Le jour, il y a le bruit de la maison, un voisin, un enfant qui passe. La nuit, il n'y a plus que le corps, l'inquiétude et le silence.",
    "Beaucoup de familles tiennent la journée et s'effondrent sur les nuits. Une garde de nuit n'est pas un luxe : c'est parfois la seule manière d'éviter une chute, une errance, ou l'épuisement de l'aidant.",
    "À l'hôpital, c'est encore plus vrai. Les équipes soignantes ont leurs missions. Elles ne peuvent pas tenir la main jusqu'au matin.",
    "Si les nuits sont devenues le sujet dont on ne parle plus autour de la table, parlez-nous-en.",
  ]},
  { slug: "parler-troubles-psychiques-en-famille", title: "Parler des troubles psychiques en famille", excerpt: "Sans diagnostic improvisé, sans honte : comment organiser une présence utile autour d'un proche en souffrance.", date: "18 juin 2026", image: "/images/svc-psy.jpg", category: "Accompagnement", content: [
    "Dans beaucoup de familles, le trouble psychique se dit à mots couverts. On parle de « crise », de « caractère », de « fatigue ». Pendant ce temps, le quotidien se délite.",
    "Un accompagnement à domicile n'est pas un traitement. Il ne remplace ni le médecin ni le psychologue. Il offre autre chose : un cadre, une présence calme, des routines, un relais pour les proches.",
    "Chez Akeva Care, cet accompagnement se fait toujours en complément du suivi des professionnels de santé. Nous n'établissons aucun diagnostic.",
    "Si vous ne savez plus comment tenir la maison autour d'un frère, d'une mère, d'un conjoint, un premier échange confidentiel peut déjà alléger la charge.",
  ]},
  { slug: "aidants-familiaux-tenir-dans-la-duree", title: "Aidants familiaux : tenir dans la durée", excerpt: "Aimer ne suffit pas à empêcher l'épuisement. Relais, nuit, diaspora : des appuis concrets.", date: "2 juin 2026", image: "/images/hero-home.jpg", category: "Familles", read: "5 min", content: [
    "L'aidant familial camerounais — souvent une fille, une belle-fille, une sœur — porte à la fois le soin, la maison, parfois le travail et la honte de « ne plus y arriver ».",
    "Demander une présence professionnelle n'est pas abandonner. C'est refuser que tout repose sur une seule personne jusqu'à la rupture.",
    "Quelques heures en journée, une nuit par semaine, un relais le week-end : l'accompagnement se dose. Il n'est pas tout ou rien.",
    "Akeva Care existe aussi pour cela : que les familles restent des familles, pas des équipes de garde improvisées.",
  ]},
  { slug: "quand-un-parent-refuse-laide", title: "Quand un parent refuse l'aide : par où commencer", excerpt: "Fierté, peur de déranger, méfiance : comment ouvrir la conversation sans forcer.", date: "20 mai 2026", image: "/images/svc-ages.jpg", category: "Familles", content: [
    "Beaucoup de personnes âgées refusent d'abord. Pas par caprice : par dignité. Accepter une présence, c'est admettre que l'on n'est plus tout à fait seul maître de sa maison.",
    "Évitez le mot « garde ». Parlez d'une personne qui vient pour les courses, les repas, la compagnie. Proposez un essai de quelques jours, pas un contrat à vie.",
    "Si vous vivez à l'étranger, ne négociez pas uniquement par téléphone en crise. Un conseiller Akeva Care peut expliquer le cadre, les limites, et rassurer votre parent sans le mettre en accusation.",
    "Le refus n'est pas toujours définitif. Souvent, c'est la première visite — calme, respectueuse — qui débloque ce que dix sermons familiaux n'ont pas obtenu.",
  ]},
  { slug: "rester-chez-soi-en-vieillissant", title: "Vieillir chez soi à Yaoundé ou Douala : ce qu'il faut organiser", excerpt: "Le domicile reste le lieu le plus désiré. Encore faut-il le rendre tenable.", date: "8 mai 2026", image: "/images/svc-24h.jpg", category: "Personnes âgées", content: [
    "Rester chez soi n'est pas un slogan. C'est une organisation : repas, déplacements dans le logement, nuit, médicaments prescrits à rappeler, visites, solitude.",
    "Commencez par trois questions : votre proche peut-il se lever seul ? Mange-t-il réellement ? Qui est là après 20 heures ?",
    "Ensuite seulement viennent les formules : quelques heures, une journée, une nuit, une présence 24h/24. On ajuste. On n'impose pas un dispositif trop lourd dès le premier jour.",
    "Akeva Care construit cette présence à Yaoundé et Douala, en complément du suivi médical — jamais à sa place.",
  ]},
  { slug: "famille-a-lhopital-ce-que-lon-peut-deleguer", title: "À l'hôpital : ce que la famille peut déléguer", excerpt: "Rester au chevet 24 heures n'est pas toujours possible. Voici ce qu'une présence organisée prend vraiment en charge.", date: "24 avril 2026", image: "/images/svc-hopital.jpg", category: "Après l'hôpital", content: [
    "Dans les hôpitaux de Yaoundé et Douala, la famille est souvent le relais invisible : eau, repas, nuit, information. Quand personne ne peut rester, le patient se retrouve seul entre deux visites du personnel soignant.",
    "Une présence Akeva Care n'est pas un soignant de l'établissement. Elle tient compagnie, aide aux gestes simples autorisés, et tient la famille informée.",
    "C'est particulièrement utile la nuit, le week-end, ou lorsque les enfants vivent à l'étranger.",
    "Dites-nous l'établissement, les horaires, et ce que vous attendez exactement. Nous organisons dans le respect du règlement de l'hôpital.",
  ]},
  { slug: "materiel-pour-securiser-le-domicile", title: "Sécuriser le domicile : le matériel qui change vraiment la vie", excerpt: "Fauteuil, déambulateur, lit : comment choisir sans encombrer la maison.", date: "11 avril 2026", image: "/images/svc-materiel.jpg", category: "Après l'hôpital", content: [
    "Après une hospitalisation, on veut tout acheter. Ce n'est pas toujours utile. Un déambulateur mal choisi encombre. Un lit trop tôt humilie. Un fauteuil trop tard expose à la chute.",
    "La bonne question : de quoi votre proche a-t-il besoin cette semaine, pas « un jour » ?",
    "Akeva Care conseille et loue selon disponibilités à Yaoundé et Douala. Le matériel prend tout son sens avec une présence formée à l'utiliser dans le quotidien.",
    "Demandez-nous ce dont vous avez réellement besoin. Nous vous dirons ce qui est en stock — sans vous vendre le catalogue entier.",
  ]},
];

const testimonials = [
  { quote: "Je vis à Paris. Savoir que quelqu'un est auprès de ma mère à Yaoundé, et m'écrire le soir, a changé mes nuits.", name: "A. M.", role: "Fille — diaspora, France" },
  { quote: "Ce n'est pas « une garde ». C'est une organisation. On savait qui venait, ce qui était fait, et qui appeler.", name: "S. N.", role: "Fils — Douala" },
  { quote: "Après l'hôpital, les trois premières nuits à la maison nous faisaient peur. Ils ont tenu le relais. Nous avons pu respirer.", name: "C. E.", role: "Famille — Yaoundé" },
];

const services = [
  { slug: "garde-malade", title: "Garde malade", menuTitle: "Garde malade", short: "Une présence attentive à domicile ou à l'hôpital, de jour, de nuit ou en continu.", h1: "Garde malade à domicile et à l'hôpital", intro: "Lorsqu'un proche est malade, dépendant ou hospitalisé, la présence compte autant que l'organisation. Akeva Care assure une garde malade professionnelle, humaine et encadrée — à domicile comme à l'hôpital.", image: "/images/svc-hopital.jpg", cta: "Demander une garde malade", whatsapp: "Bonjour Akeva Care, je souhaite demander une garde malade pour un proche.",
    highlights: [
      { title: "Garde de jour", text: "Une présence adaptée aux besoins du quotidien, de la toilette d'accompagnement aux repas et à la surveillance." },
      { title: "Garde de nuit", text: "Une veille rassurante lorsque la nuit devient le moment le plus fragile pour votre proche — et pour vous." },
      { title: "Garde 24h/24", text: "Une organisation continue, avec relais, pour les situations qui demandent une présence permanente." },
      { title: "Accompagnement hospitalier", text: "Quelqu'un à ses côtés quand la famille ne peut pas rester en permanence à l'hôpital." },
    ],
    included: ["Aide dans les activités quotidiennes relevant du service", "Présence et surveillance selon les limites professionnelles d'Akeva Care", "Transmission d'informations à la famille selon nos procédures", "Organisation à domicile ou à l'hôpital, à Yaoundé et Douala", "Coordination avec la famille, y compris à distance"],
    limits: ["Akeva Care n'est pas un établissement de santé et ne remplace pas un médecin, un infirmier ou un traitement prescrit.", "Les actes médicaux restent du ressort des professionnels de santé habilités."],
  },
  { slug: "auxiliaire-de-vie", title: "Auxiliaire de vie", short: "Un soutien concret pour préserver le confort, l'autonomie et la dignité au quotidien.", h1: "Auxiliaire de vie à domicile", intro: "L'auxiliaire de vie Akeva Care aide votre proche dans les gestes du quotidien : se lever, s'habiller, se nourrir, se déplacer, tenir la maison. Une présence utile, respectueuse, jamais intrusive.", image: "/images/svc-auxiliaire.jpg", cta: "Demander une auxiliaire de vie", whatsapp: "Bonjour Akeva Care, je souhaite une auxiliaire de vie à domicile.",
    highlights: [
      { title: "Aide à la toilette et à l'habillage", text: "Un accompagnement discret pour les soins d'hygiène relevant du service, dans le respect de l'intimité." },
      { title: "Repas et hydratation", text: "Préparation, aide à la prise des repas et vigilance sur l'hydratation, selon les habitudes de votre proche." },
      { title: "Entretien léger du cadre de vie", text: "Un environnement propre, rangé et rassurant, sans se substituer à un service de ménage complet." },
      { title: "Compagnie et stimulation", text: "Conversation, promenade, lecture, présence humaine — pour que la journée ne soit pas seulement « surveillée »." },
    ],
    included: ["Aide aux actes essentiels de la vie quotidienne", "Présence adaptée au rythme de la personne", "Compte-rendu simple à la famille", "Intervention à domicile à Yaoundé et Douala"],
    limits: ["L'auxiliaire de vie n'effectue pas d'actes médicaux.", "Le service s'inscrit en complément du suivi médical existant."],
  },
  { slug: "accompagnement-hospitalier", title: "Accompagnement hospitalier", short: "Une présence humaine à l'hôpital, lorsque la famille ne peut pas rester en permanence.", h1: "Accompagnement hospitalier à Yaoundé et Douala", intro: "Un séjour à l'hôpital isole. Akeva Care assure une présence auprès du patient : compagnie, vigilance, lien avec la famille, aide dans les gestes simples autorisés. Pour que personne ne reste seul entre deux visites.", image: "/images/svc-hopital.jpg", cta: "Demander un accompagnement hospitalier", whatsapp: "Bonjour Akeva Care, j'ai besoin d'un accompagnement hospitalier.",
    highlights: [
      { title: "Présence au chevet", text: "Une personne dédiée reste auprès de votre proche pendant les créneaux convenus, jour ou nuit." },
      { title: "Lien avec la famille", text: "Vous êtes informés selon nos procédures : ce qui s'est passé, l'état apparent, les besoins observés." },
      { title: "Aide aux gestes simples", text: "Confort, hydratation, installation, compagnie — dans le respect du règlement de l'établissement." },
      { title: "Relais pour la diaspora", text: "Si vous vivez à l'étranger, nous organisons la présence et le suivi à votre place." },
    ],
    included: ["Garde hospitalière de jour, de nuit ou en relais", "Coordination avec la famille", "Respect des consignes de l'établissement de santé"],
    limits: ["Nous ne remplaçons pas le personnel soignant de l'hôpital.", "Nous n'intervenons pas dans les actes médicaux ni dans les décisions cliniques."],
  },
  { slug: "garde-de-jour", title: "Garde de jour", short: "Une présence adaptée aux besoins quotidiens de votre proche, pendant la journée.", h1: "Garde de jour à domicile", intro: "La journée est faite de repas, de déplacements, de solitude parfois. La garde de jour Akeva Care installe une présence utile : aide, surveillance, compagnie, et un rythme qui rassure toute la famille.", image: "/images/svc-jour.jpg", cta: "Demander une garde de jour", whatsapp: "Bonjour Akeva Care, je souhaite une garde de jour.",
    highlights: [
      { title: "Créneaux souples", text: "Quelques heures ou la journée complète, selon la situation et le rythme de votre proche." },
      { title: "Aide quotidienne", text: "Repas, déplacements dans le logement, hygiène relevant du service, stimulation, courses légères." },
      { title: "Pour les aidants", text: "Un relais pour travailler, se reposer ou simplement souffler — sans culpabilité." },
      { title: "Suivi familial", text: "Un point régulier pour que vous sachiez comment s'est passée la journée." },
    ],
    included: ["Présence diurne à domicile", "Aide aux activités quotidiennes relevant du service", "Transmission d'informations à la famille"],
    limits: ["La garde de jour n'est pas un service médical d'urgence."],
  },
  { slug: "garde-de-nuit", title: "Garde de nuit", short: "Une veille rassurante lorsque la nuit devient le moment le plus fragile.", h1: "Garde de nuit à domicile et à l'hôpital", intro: "La nuit, les chutes, la désorientation, l'angoisse ou la douleur prennent une autre ampleur. Akeva Care organise une garde de nuit : présence, vigilance, appel de la famille si besoin.", image: "/images/svc-nuit.jpg", cta: "Demander une garde de nuit", whatsapp: "Bonjour Akeva Care, je souhaite une garde de nuit.",
    highlights: [
      { title: "Veille attentive", text: "Une présence dans le logement ou à l'hôpital, prête à intervenir dans le cadre de sa mission." },
      { title: "Réassurance", text: "Votre proche n'est pas seul. Vous pouvez dormir — ou travailler à l'étranger — plus sereinement." },
      { title: "Situations fréquentes", text: "Retour d'hospitalisation, personne âgée fragile, maladie, troubles du comportement nocturne." },
      { title: "Relais le matin", text: "Transmission claire à la famille ou à l'équipe de jour." },
    ],
    included: ["Présence nocturne organisée", "Surveillance selon les limites professionnelles", "Alerte de la famille selon nos procédures"],
    limits: ["La garde de nuit n'est pas un service d'urgence médicale.", "En cas de détresse vitale, les secours compétents sont contactés."],
  },
  { slug: "accompagnement-24h", title: "Accompagnement 24h/24", short: "Une organisation continue, avec relais, pour les besoins de présence permanente.", h1: "Accompagnement 24h/24", intro: "Certaines situations ne souffrent pas d'interruption : grande dépendance, fin de vie à domicile, post-hospitalisation délicate, troubles sévères. Akeva Care organise une présence 24h/24, avec des relais clairs et un suivi de la famille.", image: "/images/svc-24h.jpg", cta: "Demander un accompagnement 24h/24", whatsapp: "Bonjour Akeva Care, j'ai besoin d'un accompagnement 24h/24.",
    highlights: [
      { title: "Organisation en relais", text: "Des équipes se succèdent pour garantir la continuité, sans épuisement ni trou dans la présence." },
      { title: "Plan personnalisé", text: "Horaires, habitudes, points de vigilance et consignes familiales sont formalisés dès le départ." },
      { title: "Suivi rapproché", text: "La famille — sur place ou depuis l'étranger — reçoit des points réguliers." },
      { title: "Domicile ou hôpital", text: "Le dispositif s'adapte au lieu de vie et peut évoluer si la situation change." },
    ],
    included: ["Présence continue organisée", "Coordination des relais", "Compte-rendu familial selon nos procédures"],
    limits: ["La continuité de présence n'équivaut pas à une hospitalisation à domicile.", "Les soins médicaux restent du ressort des professionnels de santé."],
  },
  { slug: "personnes-agees", title: "Personnes âgées", short: "Une présence humaine pour préserver confort, autonomie et sécurité.", h1: "Accompagnement des personnes âgées", intro: "Vieillir chez soi est souvent le souhait le plus profond. Akeva Care accompagne les personnes âgées à Yaoundé et Douala avec douceur, respect et organisation — pour que le domicile reste un lieu de vie, pas un lieu d'abandon.", image: "/images/svc-ages.jpg", cta: "Parler de mon parent", whatsapp: "Bonjour Akeva Care, je souhaite un accompagnement pour une personne âgée.",
    highlights: [
      { title: "Préserver l'autonomie", text: "Nous aidons sans se substituer : chaque geste que la personne peut encore faire est respecté." },
      { title: "Sécurité au quotidien", text: "Présence, vigilance sur les déplacements, les repas, l'hydratation et les signes d'alerte simples." },
      { title: "Compagnie véritable", text: "Parler, écouter, marcher, prier, regarder un match : la relation humaine n'est pas un extra." },
      { title: "Soutien aux familles", text: "Un relais clair pour les enfants, y compris ceux qui vivent à l'étranger." },
    ],
    included: ["Accompagnement à domicile adapté à l'âge et à la situation", "Aide quotidienne et présence humaine", "Lien organisé avec la famille"],
    limits: ["Nous ne remplaçons pas un suivi gériatrique médical."],
  },
  { slug: "accompagnement-troubles-psychiques", title: "Accompagnement spécialisé des troubles psychiques", short: "Un accompagnement quotidien adapté, en complément du suivi des professionnels de santé.", h1: "Accompagnement spécialisé des troubles psychiques", intro: "Vivre avec un trouble psychique — ou accompagner un proche qui en souffre — demande constance, calme et cadre. Akeva Care propose une présence quotidienne adaptée, toujours en complément du suivi médical et psychologique existant.", image: "/images/svc-psy.jpg", cta: "Parler à un conseiller", whatsapp: "Bonjour Akeva Care, je souhaite un accompagnement pour un proche concerné par des troubles psychiques.",
    highlights: [
      { title: "Présence apaisante", text: "Un cadre stable, une voix calme, des routines qui rassurent — sans jamais forcer." },
      { title: "Complément du soin", text: "Nous ne soignons pas. Nous accompagnons le quotidien, aux côtés des professionnels de santé." },
      { title: "Soutien à la famille", text: "Un relais pour les proches épuisés, et un lien clair pour la diaspora." },
      { title: "Discrétion", text: "La dignité de la personne et la confidentialité de la situation sont non négociables." },
    ],
    included: ["Présence quotidienne adaptée", "Aide aux routines et à l'organisation du jour", "Transmission d'observations à la famille selon nos procédures"],
    limits: ["Akeva Care n'est pas un service de psychiatrie et n'établit aucun diagnostic.", "L'accompagnement se fait uniquement en complément du suivi des professionnels de santé.", "Nous n'intervenons pas dans les situations de crise psychiatrique aiguë : les services compétents doivent être contactés."],
  },
  { slug: "location-materiel-medical", title: "Location de matériel médical", short: "Le bon équipement, au bon moment, pour sécuriser le domicile ou le retour d'hôpital.", h1: "Location de matériel médical", intro: "Un lit médicalisé, un fauteuil, un déambulateur peuvent changer un retour à domicile. Akeva Care facilite la location de matériel médical pour accompagner l'autonomie et la sécurité — en complément de nos présences humaines.", image: "/images/svc-materiel.jpg", cta: "Demander du matériel", whatsapp: "Bonjour Akeva Care, je souhaite des informations sur la location de matériel médical.",
    highlights: [
      { title: "Équipements courants", text: "Fauteuil roulant, déambulateur, canne, lit médicalisé, matelas anti-escarres, chaise percée — selon disponibilités." },
      { title: "Conseil d'usage", text: "Nous vous aidons à identifier ce qui est réellement utile, sans surcharger le domicile." },
      { title: "Couplé à l'accompagnement", text: "Le matériel prend tout son sens avec une présence formée à l'utiliser dans le quotidien." },
      { title: "Yaoundé et Douala", text: "Demandez-nous la disponibilité pour votre ville : nous organisons selon le stock." },
    ],
    included: ["Conseil sur le matériel adapté à la situation", "Location selon disponibilités à Yaoundé et Douala", "Possibilité de combiner matériel et présence humaine"],
    limits: ["La location dépend des stocks et des délais.", "Akeva Care ne vend pas de dispositifs implantables et n'effectue pas d'installation hospitalière complexe."],
  },
];

// --- Sérialisation SQL ---
const esc = (s) => `'${String(s).replace(/'/g, "''")}'`;
const escJson = (v) => esc(JSON.stringify(v));
const num = (n) => (n ? 1 : 0);

let sql = "-- Seed généré depuis l'ancien contenu en dur (lib/content.js, lib/services.js, lib/site.js)\n\n";

sql += "DELETE FROM site_settings;\n";
for (const [key, value] of Object.entries(site)) {
  const v = Array.isArray(value) ? JSON.stringify(value) : String(value);
  sql += `INSERT INTO site_settings (key, value) VALUES (${esc(key)}, ${esc(v)});\n`;
}

sql += "\nDELETE FROM why_points;\n";
whyPoints.forEach((w, i) => {
  sql += `INSERT INTO why_points (order_index, title, text) VALUES (${i}, ${esc(w.title)}, ${esc(w.text)});\n`;
});

sql += "\nDELETE FROM steps;\n";
steps.forEach((s, i) => {
  sql += `INSERT INTO steps (order_index, step_no, title, text) VALUES (${i}, ${esc(s.n)}, ${esc(s.title)}, ${esc(s.text)});\n`;
});

sql += "\nDELETE FROM faqs;\n";
faqs.forEach((f, i) => {
  sql += `INSERT INTO faqs (order_index, question, answer) VALUES (${i}, ${esc(f.q)}, ${esc(f.a)});\n`;
});

sql += "\nDELETE FROM formulas;\n";
formulas.forEach((f, i) => {
  sql += `INSERT INTO formulas (order_index, name, tag, text, points, featured) VALUES (${i}, ${esc(f.name)}, ${esc(f.tag || "")}, ${esc(f.text)}, ${escJson(f.points)}, ${num(f.featured)});\n`;
});

sql += "\nDELETE FROM articles;\n";
articles.forEach((a, i) => {
  const content = a.content.join("\n\n");
  sql += `INSERT INTO articles (slug, order_index, title, excerpt, date_label, image, category, read_time, content) VALUES (${esc(a.slug)}, ${i}, ${esc(a.title)}, ${esc(a.excerpt)}, ${esc(a.date)}, ${esc(a.image || "")}, ${esc(a.category)}, ${a.read ? esc(a.read) : "NULL"}, ${esc(content)});\n`;
});

sql += "\nDELETE FROM testimonials;\n";
testimonials.forEach((t, i) => {
  sql += `INSERT INTO testimonials (order_index, quote, name, role) VALUES (${i}, ${esc(t.quote)}, ${esc(t.name)}, ${esc(t.role)});\n`;
});

sql += "\nDELETE FROM services;\n";
services.forEach((s, i) => {
  sql += `INSERT INTO services (slug, order_index, title, menu_title, short, h1, intro, image, cta, whatsapp_message, highlights, included, limits) VALUES (${esc(s.slug)}, ${i}, ${esc(s.title)}, ${s.menuTitle ? esc(s.menuTitle) : "NULL"}, ${esc(s.short)}, ${esc(s.h1)}, ${esc(s.intro)}, ${esc(s.image || "")}, ${esc(s.cta)}, ${esc(s.whatsapp)}, ${escJson(s.highlights)}, ${escJson(s.included)}, ${escJson(s.limits)});\n`;
});

writeFileSync(new URL("../db/seed.sql", import.meta.url), sql, "utf8");
console.log("db/seed.sql généré (" + sql.split("\n").length + " lignes).");

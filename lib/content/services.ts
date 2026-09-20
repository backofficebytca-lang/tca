/**
 * Services page copy. Source: TCA-Backoffice-Note-Modifications-v5.pdf (§4).
 * The page separates recurring packs (Formules) from à-la-carte services,
 * and ends with the TCA Agency redirect. The older add-on section and the
 * two one-off missions of the previous version are gone.
 */
export const SERVICES_PAGE = {
  hero: {
    eyebrow: "Nos services",
    title: "Packs récurrents et services à la carte.",
    lede: "Packs d'assistance administrative et services à la carte : mise en page, présentations, courriers, traitement d'archives.",
  },
  packs: {
    id: "packs",
    eyebrow: "Packs récurrents",
    title: "Nos packs d'assistance administrative",
    lede: "Trois formules récurrentes à prix fixe, conçues pour les artisans, auto-entrepreneurs, TPE et PME. Vous choisissez selon votre volume et votre niveau de délégation.",
    cta: { label: "Voir le détail des formules", href: "/formules" },
  },
  carte: {
    id: "services-a-la-carte",
    title: "Services à la carte",
    lede: "Une intervention ponctuelle, sur devis. Aucun engagement.",
    items: [
      {
        n: "01",
        title: "Mise en page de documents",
        text: "Mise en forme professionnelle de vos courriers, notes internes, comptes rendus, dossiers commerciaux. Livraison Word et PDF.",
      },
      {
        n: "02",
        title: "Présentation de société",
        text: "Création d'une présentation PowerPoint personnalisée aux couleurs de votre entreprise.",
      },
      {
        n: "03",
        title: "Refonte de modèles",
        text: "Homogénéisation de vos modèles existants (devis, factures, propositions commerciales).",
      },
      {
        n: "04",
        title: "Rédaction de courriers",
        text: "Courriers ponctuels hors abonnement : mise en demeure, réclamation, rupture, courrier commercial.",
      },
      {
        n: "05",
        title: "Traitement d'archives",
        text: "Numérisation, classement et indexation d'archives papier ou de sauvegardes numériques.",
      },
    ],
    cta: {
      label: "Demander un devis — Service à la carte",
      href: "/rendez-vous?type=service-a-la-carte",
    },
  },
  agency: {
    id: "tca-agency",
    eyebrow: "Groupe TCA",
    title: "Un besoin marketing ou digital ? Découvrez TCA Agency.",
    paragraphs: [
      "TCA Agency est notre agence sœur, dédiée aux prestations marketing, communication et web : création de site vitrine, identité visuelle, campagnes réseaux sociaux, gestion de communauté.",
      "Vous êtes déjà cliente d'un pack TCA Backoffice ? Vous bénéficiez d'une coordination directe entre les deux équipes, sans double interlocuteur.",
    ],
    linkLabel: "Découvrir TCA Agency",
  },
};

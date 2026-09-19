import { FORMULA_NAMES } from "@/lib/constants/site";

export const HOME = {
  hero: {
    eyebrow: "Assistance administrative externalisée",
    title: "Vous dirigez. Nous gérons l'administratif.",
    lede: "Le service d'assistance administrative externalisée dédié aux artisans, auto-entrepreneurs, TPE et PME. Une professionnelle humaine dédiée pour prendre en charge la facturation, les relances et le suivi fournisseurs. Sans embauche. Sans logiciel supplémentaire. Sans engagement long.",
    primaryCta: { label: "Prendre rendez-vous", href: "/rendez-vous" },
    secondaryCta: { label: "Découvrir nos formules", href: "/formules" },
  },
  keyFacts: [
    { title: "Ligne directe", value: "8h–18h · lundi au vendredi" },
    { title: "Relances clients", value: "J+7 · J+15 · J+30" },
    { title: "Période d'essai", value: "3 mois puis mensuel" },
    { title: "Embauche requise", value: "Zéro" },
  ],
  personNotService: {
    eyebrow: "Notre approche",
    title: "Une professionnelle. Pas un service.",
    lede: "Quand vous appelez, une professionnelle décroche. Quand vous écrivez, une professionnelle répond. Votre référente est humaine, dédiée à votre entreprise, joignable directement du lundi au vendredi de 8 h à 18 h.",
    lines: [
      "Ce n'est pas un service d'assistance virtuelle.",
      "Ce n'est pas un pool tournant d'assistants anonymes.",
      "Ce n'est pas une plateforme qui vous fait ouvrir un ticket.",
    ],
    closing:
      "Vous connaissez son nom, son adresse électronique et sa ligne directe dès la signature.",
  },
  audience: {
    eyebrow: "À qui c'est",
    title: "Un service dédié à quatre profils. Rien d'autre.",
    lede: "TCA Backoffice n'est pas un service généraliste. Nous accompagnons quatre profils précis, dont nous connaissons les rythmes, les contraintes et les priorités administratives.",
    profiles: [
      {
        name: "Artisans et professions du bâtiment",
        text: "Facturation clients, relances, gestion des fournisseurs, suivi des chantiers.",
      },
      {
        name: "Auto-entrepreneurs en croissance",
        text: "Structuration administrative, préparation à la bascule TPE, sans embauche prématurée.",
      },
      {
        name: "Dirigeants de TPE",
        text: "Back-office complet, trésorerie sous contrôle, préparation comptable en ordre.",
      },
      {
        name: "Dirigeants de PME",
        text: "Pilotage administratif et financier, marchés publics, dossiers de financement.",
      },
    ],
  },
  relances: {
    eyebrow: "Relances",
    title: "Chaque facture, relancée. Chaque euro, rentré.",
    lede: "Une facture non relancée à J+7 a trois fois moins de chances d'être réglée à l'échéance. Nos relances sont structurées, régulières, documentées. Vous n'y pensez plus. Nous en assurons chaque étape.",
    steps: [
      {
        n: "J+7",
        title: "Rappel amiable",
        text: "Message électronique courtois, confirmation de bonne réception, rappel de l'échéance.",
      },
      {
        n: "J+15",
        title: "Courrier de relance",
        text: "Courrier formel, ton posé mais net, rappel des CGV.",
      },
      {
        n: "J+30",
        title: "Mise en demeure amiable",
        text: "Courrier recommandé, ton ferme, rappel des voies de recours.",
      },
    ],
    closing:
      "Ce protocole est inclus dans les trois formules, sans surcoût. Nous adaptons le ton et le canal à votre relation commerciale.",
  },
  formulesTeaser: {
    eyebrow: "Nos formules",
    title: "Trois formules. Une même promesse : une personne, joignable, dédiée.",
    names: FORMULA_NAMES,
    cards: [
      {
        name: "Starter",
        price: "290 € HT / mois",
        priceNote: "Prix fixe",
        pourQui: "Artisans, auto-entrepreneurs",
        volume: "20 devis / 30 factures / mois",
        suivi: "Rapport mensuel",
        cta: { label: "En savoir plus", href: "/formules#starter" },
      },
      {
        name: "Essentiel",
        price: "649 € HT / mois",
        priceNote: "Prix fixe",
        pourQui: "TPE en croissance",
        volume: "60 devis / 100 factures / mois",
        suivi: "Rapport hebdomadaire",
        cta: { label: "En savoir plus", href: "/formules#essentiel" },
        featured: true,
      },
      {
        name: "Pilotage",
        price: "Sur devis",
        priceNote: null,
        pourQui: "PME, marchés publics",
        volume: "Sur mesure",
        suivi: "Hebdomadaire + point mensuel",
        cta: { label: "Demander un devis", href: "/rendez-vous?formule=pilotage" },
      },
    ],
  },
  chiffrage: {
    title: "Votre économie chiffrée en trente minutes.",
    lede: "Nous ne vous laissons pas deviner. Lors de notre premier rendez-vous, nous chiffrons ensemble le coût actuel de votre administratif et l'économie précise que représente chacune de nos formules pour votre entreprise. Vous repartez avec un devis motivé, pas avec une estimation générique.",
    cta: { label: "Réserver mon rendez-vous", href: "/rendez-vous" },
  },
  engagements: {
    eyebrow: "Nos engagements",
    title: "Sept engagements écrits. Aucune promesse floue.",
    items: [
      { n: "01", title: "Une professionnelle humaine dédiée", text: "Nommée dans votre contrat." },
      { n: "02", title: "Ligne directe", text: "8h–18h. Pas de ticket." },
      { n: "03", title: "Économie chiffrée sur mesure", text: "Calculée avec vous lors du premier RDV." },
      { n: "04", title: "Zéro embauche, zéro logiciel", text: "Nous nous adaptons à vos outils." },
      { n: "05", title: "Confidentialité écrite", text: "Clause de non-divulgation systématique." },
      { n: "06", title: "Sans engagement long", text: "3 mois d'essai, puis mensuel." },
      { n: "07", title: "Expertise sectorielle", text: "Marchés publics, financements, dossiers exigeants." },
    ],
    cta: { label: "Voir les engagements en détail", href: "/pourquoi-nous" },
  },
  finalCta: {
    title: "Reprenez la main sur votre temps.",
    lede: "Un premier rendez-vous de trente minutes suffit pour cadrer votre besoin, chiffrer votre économie et choisir votre formule.",
    primaryCta: { label: "Prendre rendez-vous", href: "/rendez-vous" },
    secondaryCta: { label: "Poser une question", href: "/rendez-vous#ecrire" },
  },
};

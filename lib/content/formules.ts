/**
 * Formules copy. Source: TCA-Backoffice-Note-Modifications-v5.pdf (§2.5 and
 * §3). The third formula is named "Sur-mesure".
 */

export type FormulaCardData = {
  id: "starter" | "essentiel" | "sur-mesure";
  label: string;
  name: string;
  price: string;
  unit: string | null;
  priceNote: string;
  pour: string;
  volume: string;
  inclusHeading: string;
  bullets: string[];
  cta: { label: string; href?: string };
  featured?: boolean;
};

export const FORMULA_CARDS: FormulaCardData[] = [
  {
    id: "starter",
    label: "Formule 01",
    name: "Starter",
    price: "290 €",
    unit: "HT / mois",
    priceNote: "Prix fixe · sans frais de mise en route",
    pour: "Artisans, auto-entrepreneurs",
    volume: "20 devis · 30 factures / mois",
    inclusHeading: "Inclus",
    bullets: [
      "Émission des devis et factures clients",
      "Gestion des factures fournisseurs",
      "Suivi des règlements clients",
      "Traitement de la boîte mail",
      "Rapport mensuel de suivi",
    ],
    cta: { label: "En savoir plus" },
  },
  {
    id: "essentiel",
    label: "Formule 02",
    name: "Essentiel",
    price: "649 €",
    unit: "HT / mois",
    priceNote: "Prix fixe · sans frais de mise en route",
    pour: "TPE",
    volume: "60 devis · 100 factures / mois",
    inclusHeading: "Tout Starter +",
    bullets: [
      "Prélèvements SEPA (clients & fournisseurs)",
      "Préparation du dossier comptable mensuel",
      "Suivi des notes de frais",
      "Rédaction et envoi des courriers",
      "Rapport hebdomadaire",
    ],
    cta: { label: "En savoir plus" },
    featured: true,
  },
  {
    id: "sur-mesure",
    label: "Formule 03",
    name: "Sur-mesure",
    price: "Sur devis",
    unit: null,
    priceNote: "Calibré selon votre volume",
    pour: "PME",
    volume: "Illimité, défini avec vous",
    inclusHeading: "Tout Essentiel +",
    bullets: [
      "Traitement de courriers volumineux",
      "Envois recommandés",
      "Gestion documentaire élargie",
      "Présentation de société (PowerPoint)",
      "Rapport hebdo + point mensuel",
    ],
    cta: { label: "Demander un devis", href: "/rendez-vous?formule=sur-mesure" },
  },
];

export const FORMULES_PAGE = {
  hero: {
    eyebrow: "Nos formules",
    title: "Trois formules à prix fixe.",
    lede: "Vous choisissez selon votre volume et votre niveau de délégation. Vous pouvez changer de formule à tout moment par simple avenant.",
  },
  sheets: {
    // Section label from the PDF (§3.2); shown to assistive technology only,
    // since the PDF provides no visible heading for it.
    title: "Fiches détaillées",
    items: [
      {
        id: "starter",
        index: "01",
        name: "Starter",
        price: "290 €",
        unit: "HT / mois",
        priceNote: "Prix fixe. Aucun frais de mise en route.",
        pourQui: "Artisans et auto-entrepreneurs.",
        volume: "20 devis · 30 factures par mois.",
        inclusions: [
          "Émission des devis et factures clients (production, envoi, archivage).",
          "Gestion des factures fournisseurs (réception, rapprochement, préparation au règlement).",
          "Suivi des règlements clients.",
          "Traitement de la boîte mail (tri, réponses courantes, remontée des urgences).",
          "Classement documentaire numérique.",
          "Rapport mensuel de suivi.",
        ],
        cta: { label: "Souscrire — Starter", href: "/rendez-vous?formule=starter" },
      },
      {
        id: "essentiel",
        index: "02",
        name: "Essentiel",
        price: "649 €",
        unit: "HT / mois",
        priceNote: "Prix fixe. Aucun frais de mise en route.",
        pourQui: "TPE.",
        volume: "60 devis · 100 factures par mois.",
        inclusions: [
          "Toutes les prestations Starter, volume élargi.",
          "Prélèvements SEPA (clients et fournisseurs, suivi des mandats).",
          "Préparation du dossier comptable mensuel (pièces classées et transmises à votre expert-comptable).",
          "Suivi des notes de frais.",
          "Rédaction et envoi des courriers.",
          "Rapport hebdomadaire de suivi.",
        ],
        cta: { label: "Souscrire — Essentiel", href: "/rendez-vous?formule=essentiel" },
        featured: true,
      },
      {
        id: "sur-mesure",
        // Invisible alias so links made to the former anchor still land on
        // this sheet. It is an element id only: no visible text uses it.
        legacyId: "pilotage",
        index: "03",
        name: "Sur-mesure",
        price: "Sur devis",
        unit: null,
        priceNote: null,
        pourQui: "PME dont le volume dépasse le périmètre Essentiel.",
        volume: "Défini avec vous.",
        inclusions: [
          "Toutes les prestations Essentiel, sans plafond de volume.",
          "Traitement de courriers volumineux et envois recommandés.",
          "Gestion documentaire élargie (archivage, classement multi-dossiers).",
          "Présentation de société — modèle PowerPoint personnalisable (livré à la signature, mises à jour à la demande).",
          "Rapport hebdomadaire et point mensuel avec le dirigeant.",
        ],
        cta: { label: "Demander un devis — Sur-mesure", href: "/rendez-vous?formule=sur-mesure" },
      },
    ],
  },
  comparison: {
    // Section label from the PDF (§3.3); shown to assistive technology only.
    title: "Tableau comparatif",
    included:
      "Toutes les formules incluent : référente dédiée, ligne directe 8h–18h, communication proactive par mail, protocole de suivi des règlements, classement documentaire, traitement de la boîte mail.",
    columns: ["Starter", "Essentiel", "Sur-mesure"],
    sections: [
      {
        title: "Volume mensuel",
        rows: [{ label: "Devis et factures clients", values: ["20 / 30", "60 / 100", "Illimité"] }],
      },
      {
        title: "Facturation & règlements",
        rows: [
          { label: "Prélèvements SEPA", values: [false, true, true] },
          { label: "Envois recommandés", values: [false, false, true] },
        ],
      },
      {
        title: "Assistance administrative",
        rows: [
          { label: "Rédaction de courriers", values: [false, true, true] },
          { label: "Suivi des notes de frais", values: [false, true, true] },
          { label: "Préparation du dossier comptable", values: [false, true, true] },
          { label: "Gestion documentaire élargie", values: [false, false, true] },
          { label: "Présentation de société (PowerPoint)", values: [false, false, true] },
        ],
      },
      {
        title: "Suivi & reporting",
        rows: [
          {
            label: "Rapport de suivi",
            values: ["Mensuel", "Hebdomadaire", "Hebdo + point mensuel"],
          },
        ],
      },
    ],
    price: { label: "Tarif HT / mois", values: ["290 €", "649 €", "Sur devis"] },
  },
  switching: {
    eyebrow: "Faire évoluer sa formule",
    title: "Commencez petit. Changez de formule quand vous êtes prêt.",
    lede: "Vous pouvez basculer d'une formule à l'autre à tout moment, sans re-signature de contrat, par simple avenant. Démarrer sur Starter, valider la collaboration, puis passer sur Essentiel dès que votre volume le justifie : ce fonctionnement progressif est celui que nous recommandons.",
  },
};

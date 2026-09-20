export const SITE = {
  name: "TCA Backoffice",
  domain: "tca-backoffice.fr",
  url: "https://tca-backoffice.fr",
  positioningPhrase: "Le service d'assistance administrative externalisée",
  legalPositioningShort: "assistance administrative externalisée",
  contactEmail: "contact@tca-backoffice.fr",
  hours: "8h–18h",
  hoursDetail: "8h–18h · lundi au vendredi",
  hoursNote: "Heures ouvrées",
  group: "Groupe TCA",
  sisterCompany: "TCA Agency",
  // PDF v5 §7 — home page metadata.
  metaTitle:
    "Assistance administrative externalisée — artisans, auto-entrepreneurs, TPE, PME | TCA Backoffice",
  metaDescription:
    "Facturation, relances clients, factures fournisseurs, préparation comptable. Référente dédiée, prix fixe, abonnement mensuel sans engagement.",
} as const;

/**
 * Valeurs non fournies par les documents fournis (brief, contenu). Le
 * numéro de ligne directe et l'URL de TCA Agency restent explicitement
 * "à confirmer avant mise en ligne" — on ne les invente pas.
 */
export const PENDING = {
  phone: "[LIGNE DIRECTE À CONFIRMER]",
  agencyUrl: "[URL TCA AGENCY À CONFIRMER]",
} as const;

export const FORMULA_NAMES = ["Starter", "Essentiel", "Sur-mesure"] as const;

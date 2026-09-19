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
  founder: "Roukia El Rhenami",
  founderTitle: "Fondatrice, TCA Backoffice",
  group: "Groupe TCA",
  sisterCompany: "TCA Agency",
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

export const AUDIENCE_PROFILES = [
  "Artisans et professions du bâtiment",
  "Auto-entrepreneurs en croissance",
  "Dirigeants de TPE",
  "Dirigeants de PME",
] as const;

export const FORMULA_NAMES = ["Starter", "Essentiel", "Pilotage"] as const;

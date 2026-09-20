/**
 * Le cahier des charges renvoie l'intégralité du texte final à un document
 * séparé (tca-backoffice-contenu-site-final.docx), non fourni dans ce
 * dossier. Conformément au brief, aucun texte final n'est inventé : ces
 * repères balisent les emplacements à remplacer avant mise en ligne.
 */
export const CONTENT_PENDING_LABEL =
  "CONTENU À INTÉGRER — DOCUMENT RÉDACTIONNEL";

export function placeholderParagraph(context: string) {
  return `[${CONTENT_PENDING_LABEL}] Texte définitif de la section « ${context} » à intégrer depuis le document rédactionnel fourni par TCA Backoffice.`;
}

export const PLACEHOLDER_PRICE = "Tarif à confirmer";

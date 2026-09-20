/**
 * Pourquoi nous — copy. The v5 PDF gives no replacement text for this page,
 * so it uses CONTENU TCA-BACKOFFICE SITE.docx as written, minus only what a
 * later rule forbids (PDF §3 and §8, and the docx's own editorial bans):
 * two of its seven contrasts (the ones whose title or body is a banned
 * phrase), the trial period, the seniority heading, the provider's
 * biography, the skills list and the sectors section. The docx wording of the
 * title ("Sept raisons. Sept engagements.") and the source numbering of the
 * contrasts are kept as written; the resulting mismatch is reported to the
 * client team rather than resolved here.
 */
export const POURQUOI_NOUS_PAGE = {
  hero: {
    eyebrow: "Pourquoi nous",
    title: "Sept raisons. Sept engagements. Aucune promesse floue.",
    lede: "Le marché de l'assistanat externalisé est saturé de plateformes. Notre choix est inverse : une personne humaine dédiée, une ligne directe, un engagement de service écrit.",
  },
  oppositionsHeading: "Ce qui nous distingue",
  oppositions: [
    {
      n: "01",
      title: "Une personne humaine, pas un service virtuel",
      market: "Pools tournants. Jamais la même interlocutrice.",
      us: "Une professionnelle humaine, nommée dans votre contrat. Elle décroche, elle répond, elle vous connaît.",
      consequence: "Votre administratif est confié à une vraie personne, pas à un système.",
    },
    {
      n: "02",
      title: "Ligne directe, pas de tickets",
      market: "Vous ouvrez un ticket. Vous attendez. Vous relancez.",
      us: "Vous appelez de 8h à 18h. Réponse dans l'heure. Les mails sont traités dès réception.",
      consequence: "Vos urgences sont réellement traitées en urgence.",
    },
    {
      n: "03",
      title: "Tarif fixe, pas de facture surprise",
      market: "Facturation à l'heure passée. La facture varie chaque mois.",
      us: "Trois formules à tarif mensuel fixe. Vous savez à l'avance ce que vous payez.",
      consequence: "Votre budget administratif est stable et prévisible.",
    },
    {
      n: "05",
      title: "Continuité, pas fragilité",
      market: "Un freelance isolé tombe malade. Vous êtes seul avec vos factures.",
      us: "Une équipe structurée, un binôme de suppléance formé sur votre dossier.",
      consequence: "Votre back-office ne s'arrête jamais.",
    },
    {
      n: "07",
      title: "Engagement court, pas enfermement",
      market: "Engagements annuels, préavis longs, pénalités de sortie.",
      us: "Abonnement mensuel. Résiliation à tout moment, sans pénalité.",
      consequence: "La qualité vous fait rester, pas le contrat.",
    },
  ],
  closing:
    "Nous avons construit TCA Backoffice à partir des reproches que les dirigeants font aux plateformes de secrétariat externalisé. Chaque décision de service répond à un point de friction identifié.",
  quiNousSommes: {
    title: "Qui nous sommes",
    histoire:
      "TCA Backoffice est une entité du groupe TCA, qui rassemble deux activités : le back-office administratif et financier, et TCA Agency, dédiée aux services digitaux.",
    equipeTitle: "Notre équipe",
    equipe: [
      "Chaque client est suivi par une référente unique, nommée au contrat, épaulée par un binôme de suppléance formé à son dossier.",
      "Aucun centre d'appels. Aucun ticket. Chaque référente suit un portefeuille limité, calibré pour garantir qualité et réactivité.",
    ],
  },
  engagementsEcrits: {
    // Source title "Nos engagements — écrits dans le contrat"; the dash is
    // replaced by a full stop because the PDF forbids em dashes in titles.
    title: "Nos engagements. Écrits dans le contrat.",
    items: [
      { title: "Confidentialité contractuelle", text: "Clause de non-divulgation systématique." },
      { title: "Sécurité des données", text: "Outils hébergés en UE. Accès bancaires en consultation seule." },
      { title: "Continuité de service", text: "Binôme de suppléance, aucune interruption." },
      { title: "Réversibilité", text: "Restitution intégrale des données classées sous 15 jours." },
    ],
  },
};

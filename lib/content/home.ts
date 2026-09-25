/**
 * Home page copy. Source: TCA-Backoffice-Note-Modifications-v5.pdf (§2), the
 * latest client instruction. The hero statement is the client's "Option B"
 * (§5 bis); the descriptive line ("Option A") stays inside the H1 for SEO and
 * the "auto-entrepreneurs" requirement.
 */
export const HOME = {
  hero: {
    // Kicker from the PDF's hero mock-up (§2.1).
    eyebrow: "Assistance administrative externalisée",
    statement: ["Votre administratif.", "Externalisé.", "Simple."],
    positioning:
      "Assistance administrative externalisée pour artisans, auto-entrepreneurs, TPE et PME.",
    subtitle:
      "Nous prenons en charge la facturation, les relances clients, la gestion des factures fournisseurs et la préparation comptable. Une référente dédiée, joignable directement. Sans embauche, sans changement d'outils, sans engagement.",
    primaryCta: { label: "Réserver un échange", href: "/rendez-vous" },
    secondaryCta: { label: "Découvrir nos formules", href: "/formules" },
    counters: [
      { label: "Ligne directe", value: "8h–18h · lundi au vendredi" },
      { label: "Suivi des règlements", value: "Zéro facture oubliée" },
      { label: "Abonnement", value: "Mensuel, sans engagement" },
      { label: "Embauche requise", value: "Zéro" },
    ],
  },
  /** Services named in the PDF, looped as the moving label band. */
  marquee: [
    "Facturation",
    "Relances clients",
    "Factures fournisseurs",
    "Préparation comptable",
    "Suivi des règlements",
    "Rédaction de courriers",
    "Classement documentaire",
    "Notes de frais",
    "Prélèvements SEPA",
    "Traitement de la boîte mail",
  ],
  profiles: {
    title: "Trois profils. Le même niveau d'attention.",
    lede: "Nous accompagnons trois catégories d'entreprises, dont nous connaissons les rythmes et les priorités administratives.",
    items: [
      {
        n: "01",
        name: "Artisans et auto-entrepreneurs",
        text: "Facturation clients, relances, gestion des factures fournisseurs, classement documentaire.",
      },
      {
        n: "02",
        name: "TPE",
        text: "Back-office administratif complet, préparation des pièces pour l'expert-comptable, suivi des règlements.",
      },
      {
        n: "03",
        name: "PME",
        text: "Volume élargi, coordination administrative et suivi documentaire. Périmètre défini sur devis.",
      },
    ],
  },
  relances: {
    eyebrow: "Suivi des règlements",
    title: "Zéro facture oubliée.",
    lede: "Chaque facture émise est suivie jusqu'au règlement, sans que vous ayez à y penser. Un protocole clair, adapté à votre relation commerciale.",
    steps: [
      {
        n: "01",
        title: "Un premier rappel avant l'échéance.",
        text: "Un message courtois est envoyé à votre client quelques jours avant la date prévue. Dans la plupart des cas, il suffit.",
      },
      {
        n: "02",
        title: "Une relance à échéance dépassée.",
        text: "Un courrier formel lui rappelle le montant dû et les conditions de paiement, sur un ton toujours professionnel.",
      },
      {
        n: "03",
        title: "Une mise en demeure si nécessaire.",
        text: "En dernier recours, nous préparons une mise en demeure en recommandé, fondée sur vos conditions contractuelles : devis signé, contrat ou conditions générales.",
      },
    ],
  },
  formulesTeaser: {
    eyebrow: "Nos formules",
    title: "Trois formules à prix fixe.",
  },
  engagements: {
    eyebrow: "Nos engagements",
    title: "Six engagements. Zéro promesse floue.",
    items: [
      { keyword: "Dédiée.", title: "Une référente unique", text: "Nommée dans votre contrat." },
      { keyword: "Directe.", title: "Ligne directe", text: "8h–18h, du lundi au vendredi." },
      { keyword: "Zéro.", title: "Aucune embauche", text: "Nous travaillons sur vos outils." },
      {
        keyword: "Écrite.",
        title: "Confidentialité",
        text: "Clause de non-divulgation systématique.",
      },
      { keyword: "Libre.", title: "Sans engagement", text: "Mensuel, résiliable à tout moment." },
      {
        keyword: "Ouverte.",
        title: "Communication",
        text: "Un dossier avance ? Vous le savez par mail.",
      },
    ],
    cta: { label: "Voir les engagements en détail", href: "/pourquoi-nous" },
  },
  testimonials: {
    title: "Retours clients.",
    lede: "Publications prochaines.",
  },
  finalCta: {
    title: "Prenons rendez-vous.",
    lede: "Un premier échange de trente minutes suffit à cadrer votre besoin et à définir la formule adaptée.",
    primaryCta: { label: "Réserver un échange", href: "/rendez-vous" },
    secondaryCta: { label: "Nous écrire", href: "/rendez-vous#ecrire" },
  },
};

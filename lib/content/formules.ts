export const FORMULES_PAGE = {
  hero: {
    eyebrow: "Nos formules",
    title: "Trois formules récurrentes. Un même engagement de service.",
    lede: "Chaque formule est autonome et couvre un périmètre défini. Vous choisissez celle qui correspond à votre volume et à votre niveau de délégation. Vous pouvez basculer à tout moment, sans re-signature de contrat.",
  },
  formulas: [
    {
      id: "starter",
      index: "01",
      name: "Starter",
      baseline: "L'entrée en matière pour structurer l'administratif courant.",
      pourQui:
        "Artisans et auto-entrepreneurs dont l'activité génère un volume mensuel maîtrisé. Vous voulez reprendre la main sur la facturation et les relances, sans embaucher.",
      inclusions: [
        "Émission des devis et factures clients — production, envoi, archivage.",
        "Gestion des factures fournisseurs — réception, rapprochement, préparation au règlement.",
        "Relances clients — J+7, J+15, J+30.",
        "Traitement de la boîte mail — tri, réponses courantes, remontée des urgences.",
        "Classement documentaire numérique — arborescence, sauvegarde.",
        "Rapport mensuel de suivi.",
      ],
      volume: "20 devis · 30 factures par mois.",
      price: "290 € HT / mois",
      priceNote: "Prix fixe. Aucun frais de mise en route.",
      cta: { label: "Souscrire — Starter", href: "/rendez-vous?formule=starter" },
    },
    {
      id: "essentiel",
      index: "02",
      name: "Essentiel",
      baseline: "Le pilier pour les TPE en croissance.",
      pourQui:
        "Dirigeants de TPE dont l'activité s'est structurée. Vous avez besoin, en plus du courant, d'une visibilité mensuelle sur votre trésorerie et d'une préparation comptable en ordre.",
      inclusions: [
        "Toutes les prestations Starter, volume élargi.",
        "Synthèse financière mensuelle — encaissements, décaissements, position de trésorerie.",
        "Prélèvements SEPA — clients et fournisseurs, suivi des mandats.",
        "Préparation du dossier comptable mensuel — pièces classées et transmises à votre expert-comptable.",
        "Suivi des notes de frais.",
        "Rédaction et envoi des courriers.",
        "Rapport hebdomadaire de suivi.",
      ],
      volume: "60 devis · 100 factures par mois.",
      price: "649 € HT / mois",
      priceNote: "Prix fixe. Aucun frais de mise en route.",
      cta: { label: "Souscrire — Essentiel", href: "/rendez-vous?formule=essentiel" },
      featured: true,
    },
    {
      id: "pilotage",
      index: "03",
      name: "Pilotage",
      baseline: "Le pilotage pour les entreprises exposées aux dossiers structurants.",
      pourQui:
        "PME établies, entreprises du BTP, sociétés répondant à des marchés publics. Vous avez besoin d'un back-office complet et d'une continuité sur des dossiers techniques.",
      inclusions: [
        "Toutes les prestations Essentiel, sans plafond de volume.",
        "Chorus Pro — dépôt, suivi, relance des factures de marchés publics.",
        "Suivi des financements BPI — dossiers, comptes rendus.",
        "Envoi des recommandés — mises en demeure, résiliations, AR.",
        "Gestion des contrats et abonnements logiciels.",
        "Synthèse financière élargie — prévision de trésorerie 3–6 mois.",
        "Rapport hebdomadaire et revue mensuelle avec le dirigeant.",
      ],
      volume: null,
      price: "Sur devis",
      priceNote:
        "Tarif calibré sur mesure au regard du volume, du nombre de dossiers structurants et de la fréquence de reporting.",
      cta: { label: "Demander un devis — Pilotage", href: "/rendez-vous?formule=pilotage" },
    },
  ],
  switching: {
    eyebrow: "Faire évoluer sa formule",
    title: "Commencez petit. Montez en gamme quand vous êtes prêt.",
    lede: "Vous pouvez basculer d'une formule à l'autre à tout moment, sans re-signature de contrat, par simple avenant. Nous encourageons ce fonctionnement progressif : commencer sur Starter, valider la collaboration, puis passer sur Essentiel dès que votre volume le justifie.",
  },
  /**
   * Composed from already-approved facts (engagement 01, key facts hours,
   * and the switching lede above) rather than new copy — flag for review
   * before treating the sentence itself as final approved content.
   */
  relationship: {
    eyebrow: "Notre approche",
    title: "Une formule adaptée à votre rythme",
    text: "Chaque formule reste suivie par la même professionnelle, nommée dans votre contrat et joignable directement du lundi au vendredi de 8h à 18h. À mesure que votre activité évolue, vous basculez d'une formule à l'autre sans changement d'interlocuteur et sans re-signature de contrat.",
  },
  comparison: {
    eyebrow: "Comparatif",
    title: "Le détail, formule par formule.",
    rows: [
      { label: "Devis & factures clients", starter: "20 / 30 / mois", essentiel: "60 / 100 / mois", pilotage: "Illimité" },
      { label: "Factures fournisseurs", starter: true, essentiel: true, pilotage: true },
      { label: "Relances J+7 / J+15 / J+30", starter: true, essentiel: true, pilotage: true },
      { label: "Traitement boîte mail", starter: true, essentiel: true, pilotage: true },
      { label: "Classement numérique", starter: true, essentiel: true, pilotage: true },
      { label: "Rédaction courriers", starter: false, essentiel: true, pilotage: true },
      { label: "Synthèse financière mensuelle", starter: false, essentiel: true, pilotage: "3–6 mois" },
      { label: "Prélèvements SEPA", starter: false, essentiel: true, pilotage: true },
      { label: "Dossier comptable mensuel", starter: false, essentiel: true, pilotage: true },
      { label: "Notes de frais", starter: false, essentiel: true, pilotage: true },
      { label: "Chorus Pro", starter: false, essentiel: false, pilotage: true },
      { label: "Suivi financements BPI", starter: false, essentiel: false, pilotage: true },
      { label: "Recommandés", starter: false, essentiel: false, pilotage: true },
      { label: "Contrats logiciels", starter: false, essentiel: false, pilotage: true },
      { label: "Rapport de suivi", starter: "Mensuel", essentiel: "Hebdo", pilotage: "Hebdo + revue" },
      { label: "Référente dédiée", starter: true, essentiel: true, pilotage: true },
      { label: "Tarif HT / mois", starter: "290 € (fixe)", essentiel: "649 € (fixe)", pilotage: "Sur devis" },
    ],
  },
};

export const SERVICES_PAGE = {
  hero: {
    eyebrow: "Nos services",
    title: "Deux missions ponctuelles, à forte technicité administrative.",
    lede: "Certains dossiers exigent une compétence spécifique et un temps important. Nous prenons en charge ces missions ponctuelles, en complément d'une formule récurrente ou de manière indépendante. Chaque mission fait l'objet d'un devis calibré.",
  },
  missions: {
    eyebrow: "Missions ponctuelles",
    title: "Le savoir-faire administratif des dossiers exigeants.",
    rows: [
      {
        index: "01",
        id: "appels-offres",
        title: "Réponse aux appels d'offres publics",
        text: "Vous répondez à des marchés publics et le montage du dossier vous prend un temps considérable. Nous prenons en charge l'intégralité de la procédure administrative.",
        meta: "Sur devis",
        items: [
          "Analyse du dossier de consultation (DCE) et cartographie des critères d'attribution.",
          "Constitution du mémoire technique — rédaction sur mesure, adaptée à votre référentiel.",
          "Préparation du DUME (Document unique de marché européen) et pièces administratives.",
          "Dépôt sur la plateforme acheteur (PLACE, AWS, e-marchespublics, etc.).",
          "Suivi administratif de la procédure jusqu'à notification du résultat.",
        ],
      },
      {
        index: "02",
        id: "financements",
        title: "Constitution de dossiers de financement",
        text: "BPI France, subventions régionales, dispositifs sectoriels : nous montons le dossier administratif, préparons les pièces justificatives et assurons le suivi jusqu'à décision.",
        meta: "Sur devis",
        items: [
          "Prêt d'honneur, prêt participatif, prêt garanti par l'État.",
          "Subventions à l'innovation, aides régionales à l'investissement.",
          "Dispositifs sectoriels — export, transition écologique, numérique.",
          "Comptes rendus administratifs périodiques exigés par l'organisme financeur.",
        ],
      },
    ],
    pricing:
      "Chaque mission est chiffrée sur devis après un premier échange de cadrage. Le tarif tient compte du volume de pièces, de la complexité du dossier et du calendrier de dépôt.",
    cta: { label: "Demander un devis — Mission ponctuelle", href: "/rendez-vous?type=mission-ponctuelle" },
  },
  agency: {
    eyebrow: "Communication et digital",
    title: "Site web, référencement, réseaux sociaux, emailing : voyez TCA Agency.",
    text: "La création de site vitrine, le référencement naturel, la gestion des réseaux sociaux, l'emailing, la prospection LinkedIn et les campagnes publicitaires relèvent de notre entité sœur TCA Agency. Elle intervient sur ces sujets en cohérence avec le service Backoffice, avec facturation distincte.",
    linkLabel: "Découvrir TCA Agency",
    id: "tca-agency",
  },
};

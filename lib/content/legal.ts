import { placeholderParagraph } from "@/lib/content/placeholders";

export const LEGAL_NOTICE =
  "Page en attente de rédaction juridique définitive (contenu à compléter par TCA Backoffice ou son conseil avant mise en ligne, conformément au document de contenu fourni).";

export const MENTIONS_LEGALES = {
  title: "Mentions légales",
  sections: [
    {
      heading: "Éditeur du site",
      text: placeholderParagraph("Dénomination, forme juridique, capital, siège, RCS, TVA"),
    },
    {
      heading: "Directeur de la publication",
      text: placeholderParagraph("Mentions légales — directeur de la publication"),
    },
    {
      heading: "Hébergeur",
      text: placeholderParagraph("Mentions légales — hébergeur"),
    },
  ],
};

export const CONFIDENTIALITE = {
  title: "Politique de confidentialité",
  sections: [
    {
      heading: "Responsable de traitement",
      text: placeholderParagraph("Confidentialité — responsable de traitement"),
    },
    { heading: "Finalités", text: placeholderParagraph("Confidentialité — finalités") },
    { heading: "Base légale", text: placeholderParagraph("Confidentialité — base légale") },
    { heading: "Destinataires", text: placeholderParagraph("Confidentialité — destinataires") },
    {
      heading: "Durées de conservation",
      text: placeholderParagraph("Confidentialité — durées de conservation"),
    },
    { heading: "Droits des personnes", text: placeholderParagraph("Confidentialité — droits des personnes") },
    {
      heading: "Coordonnées du DPO",
      text: placeholderParagraph("Confidentialité — coordonnées du délégué à la protection des données"),
    },
  ],
};

export const CGV = {
  title: "Conditions générales de vente",
  sections: [
    { heading: "Périmètre", text: placeholderParagraph("CGV — périmètre") },
    { heading: "Engagements", text: placeholderParagraph("CGV — engagements") },
    { heading: "Facturation", text: placeholderParagraph("CGV — facturation") },
    { heading: "Délais", text: placeholderParagraph("CGV — délais") },
    { heading: "Confidentialité", text: placeholderParagraph("CGV — confidentialité") },
    { heading: "Durée et résiliation", text: placeholderParagraph("CGV — durée et résiliation") },
    { heading: "Responsabilité", text: placeholderParagraph("CGV — responsabilité") },
    { heading: "Litige et compétence", text: placeholderParagraph("CGV — litige et compétence") },
  ],
};

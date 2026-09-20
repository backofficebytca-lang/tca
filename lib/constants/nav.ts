export type NavItem = {
  label: string;
  href: string;
};

// Order and labels: PDF v5 §6.4 — "Services" precedes "Formules".
export const MAIN_NAV: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Formules", href: "/formules" },
  { label: "Pourquoi nous", href: "/pourquoi-nous" },
  { label: "FAQ", href: "/faq" },
];

export const APPOINTMENT_CTA: NavItem = {
  label: "Prendre rendez-vous",
  href: "/rendez-vous",
};

export const FOOTER_COLUMNS: { title: string; links: NavItem[] }[] = [
  {
    title: "Formules",
    links: [
      { label: "Starter", href: "/formules#starter" },
      { label: "Essentiel", href: "/formules#essentiel" },
      { label: "Sur-mesure", href: "/formules#sur-mesure" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Services à la carte", href: "/services#services-a-la-carte" },
      { label: "TCA Agency", href: "/services#tca-agency" },
    ],
  },
  {
    title: "Découvrir",
    links: [
      { label: "Pourquoi nous", href: "/pourquoi-nous" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Prendre rendez-vous", href: "/rendez-vous" }],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "CGV", href: "/cgv" },
    ],
  },
];

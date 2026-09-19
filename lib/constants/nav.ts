export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Pourquoi nous choisir", href: "/pourquoi-nous" },
  { label: "Nos services", href: "/services" },
  { label: "Nos formules", href: "/formules" },
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
      { label: "Pilotage", href: "/formules#pilotage" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Missions ponctuelles", href: "/services#missions-ponctuelles" },
      { label: "TCA Agency", href: "/services#tca-agency" },
    ],
  },
  {
    title: "Découvrir",
    links: [
      { label: "Pourquoi nous choisir", href: "/pourquoi-nous" },
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

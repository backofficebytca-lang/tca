/**
 * The TCA photo campaign: full-colour photography, used as photographed.
 * See docs/IMAGE-CREDITS.md for sources and licences. Alt texts describe
 * what is visible; none identifies a person. `position` is the default
 * object-position for cropping; layouts may override it.
 */
type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

const p = (
  file: string,
  width: number,
  height: number,
  alt: string,
  position = "50% 50%"
): Photo => ({ src: `/images/${file}.jpg`, width, height, alt, position });

export const IMAGES = {
  parisGolden: p(
    "paris-golden",
    1600,
    2133,
    "Immeubles haussmanniens de Paris éclairés par le soleil couchant"
  ),
  handPen: p("hand-pen", 2200, 1652, "Main tenant un stylo au-dessus d'un document", "70% 40%"),
  parisRoof: p(
    "paris-roof",
    1600,
    2400,
    "Toits en zinc et façades parisiennes sous un ciel bleu",
    "50% 80%"
  ),
  archiveShelves: p(
    "archive-shelves",
    1600,
    2843,
    "Étagères d'archives remplies de boîtes de classement"
  ),
  deskSunlit: p(
    "desk-sunlit",
    2400,
    1600,
    "Bureau en bois baigné de lumière avec ordinateur portable, carnets et papiers"
  ),
  parisBalconies: p(
    "paris-balconies",
    1600,
    2400,
    "Façade haussmannienne aux balcons en fer forgé"
  ),
  parisStreet: p(
    "paris-street",
    2400,
    1600,
    "Rue parisienne bordée d'immeubles haussmanniens sous un ciel bleu",
    "50% 60%"
  ),
  archiveWarehouse: p(
    "archive-warehouse",
    2400,
    1532,
    "Entrepôt d'archives aux rayonnages remplis de boîtes"
  ),
  deskLaptop: p(
    "desk-laptop",
    2400,
    1349,
    "Ordinateur portable, documents et stylo sur un bureau en bois vu du dessus"
  ),
  deskMug: p("desk-mug", 2400, 1350, "Stylo, formulaire et mug noir sur un bureau en bois"),
  glassCorridor: p(
    "glass-corridor",
    1600,
    2133,
    "Couloir de bureaux vitrés aux reflets chauds"
  ),
  envelopes: p("envelopes", 2400, 1602, "Enveloppes crème et blanches disposées à plat"),
  facadeOrange: p(
    "facade-orange",
    1400,
    2400,
    "Façade d'immeuble à la trame orange en perspective"
  ),
  // Client-supplied photos (images_replaces/), added 2026-09-25.
  artisanAtelier: p(
    "artisans-atelier",
    2048,
    1536,
    "Artisan souriant consultant son téléphone dans son atelier de menuiserie"
  ),
  tpeEquipeLivraison: p(
    "tpe-equipe-livraison",
    1280,
    960,
    "Petite équipe posant devant sa camionnette de livraison"
  ),
  pmeBureauOpenSpace: p(
    "pme-bureau-open-space",
    1280,
    960,
    "Open space animé d'une PME avec plusieurs équipes au travail"
  ),
  formuleStarter: p(
    "formule-starter",
    2368,
    1792,
    "Bureau avec ordinateur portable, papiers et mètre ruban"
  ),
  formuleEssentiel: p(
    "formule-essentiel",
    1024,
    768,
    "Main posée sur un classeur « Accounting » à côté d'un ordinateur portable"
  ),
  formuleSurMesure: p(
    "formule-sur-mesure",
    1760,
    1328,
    "Dossiers et chemises classés sur une table de réunion baignée de lumière"
  ),
  relancePremierRappel: p(
    "relance-premier-rappel",
    1760,
    1328,
    "Calendrier de bureau avec une date entourée, à côté d'un téléphone"
  ),
  relanceEcheanceDepassee: p(
    "relance-echeance-depassee",
    1760,
    1328,
    "Personne consultant son téléphone devant un ordinateur portable"
  ),
  serviceMiseEnPage: p(
    "service-mise-en-page",
    2400,
    1340,
    "Personne écrivant sur un document posé sur un bureau",
    "50% 40%"
  ),
  serviceRefonteModeles: p(
    "service-refonte-modeles",
    2400,
    1340,
    "Deux personnes comparant un document imprimé et un ordinateur portable",
    "50% 40%"
  ),
  serviceRedactionCourriers: p(
    "service-redaction-courriers",
    2400,
    1340,
    "Personne sortant une lettre manuscrite de son enveloppe",
    "50% 40%"
  ),
  serviceTraitementArchives: p(
    "service-traitement-archives",
    2400,
    1340,
    "Ordinateur portable affichant une liste de fichiers archivés",
    "50% 45%"
  ),
  servicesHero: p(
    "services-hero",
    2400,
    1340,
    "Deux collègues consultant des documents devant un ordinateur portable",
    "50% 35%"
  ),
} as const;

export type PhotoKey = keyof typeof IMAGES;

/** One photograph per formula, in card order (Starter, Essentiel, Sur-mesure). */
export const FORMULA_PHOTOS = [
  IMAGES.formuleStarter,
  IMAGES.formuleEssentiel,
  IMAGES.formuleSurMesure,
] as const;

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
} as const;

export type PhotoKey = keyof typeof IMAGES;

/** One photograph per formula, in card order (Starter, Essentiel, Sur-mesure). */
export const FORMULA_PHOTOS = [IMAGES.envelopes, IMAGES.deskLaptop, IMAGES.facadeOrange] as const;

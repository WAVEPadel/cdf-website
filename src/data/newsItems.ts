export type NewsItem = {
  date: string;
  label: string;
  title: string;
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "17 mei 2026",
    label: "Update",
    title: "Bouwseizoen gestart",
    excerpt: "De eerste schetsen zijn rond en de voorbereidingen in de schuur zijn begonnen.",
  },
  {
    date: "7 juni 2026",
    label: "Nieuws",
    title: "Definitieve ontwerpkeuze",
    excerpt: "Het thema is gekozen en de planning voor alle bouwfases is vastgesteld.",
  },
  {
    date: "28 juni 2026",
    label: "Achter de schermen",
    title: "Constructie krijgt vorm",
    excerpt: "Het skelet en de eerste figuratieonderdelen staan in de steigers.",
  },
  {
    date: "9 augustus 2026",
    label: "Update",
    title: "Decoratie en afwerking",
    excerpt: "De wagen krijgt steeds meer details en sfeer in kleur en textuur.",
  },
  {
    date: "4 september 2026",
    label: "Belangrijk",
    title: "Start bloemenweek",
    excerpt: "Vanaf nu draait alles om prikken, afwerken en de laatste controles.",
  },
  {
    date: "13 september 2026",
    label: "Save the date",
    title: "Bloemencorso Eelde",
    excerpt: "Op naar het parcours met de complete wagen van Confrérie des Fleurs.",
  },
];

export type NewsItem = {
  date: string;
  label: string;
  title: string;
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026",
    label: "Update",
    title: "In 2026 bouwen wij",
    excerpt: "Het bal van ontwerpers Chris en Emily.",
  },
  {
    date: "10 april",
    label: "Nieuws",
    title: "Tent opbouwen",
    excerpt: "Vrijdag 10 april beginnen wij met de opbouw van de tent.",
  },
  {
    date: "9 mei",
    label: "Update",
    title: "Inloop avond",
    excerpt: "Ontwerp presentatie, iedereen is welkom!",
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

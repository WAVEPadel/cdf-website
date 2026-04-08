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
    title: "Het ontwerp voor 2026",
    excerpt: "Het bal van Chris en Emily krijgt vorm.",
  },
  {
    date: "10 april",
    label: "Update",
    title: "Start opbouw van de tent",
    excerpt: "Op vrijdag 10 april starten we met de opbouw van de tent.",
  },
  {
    date: "9 mei",
    label: "Update",
    title: "Inloopavond op 9 mei",
    excerpt: "Tijdens deze avond presenteren we het ontwerp. Iedereen is van harte welkom.",
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

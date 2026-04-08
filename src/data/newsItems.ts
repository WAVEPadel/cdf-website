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
    date: "6 juni 2026",
    label: "Update",
    title: "Feestavond Confrérie des Fleurs",
    excerpt: "Feestavond met alle vrijwilligers en sponsoren van Confrérie des Fleurs.",
  },
  {
    date: "22 augustus 2026",
    label: "Belangrijk",
    title: "Gezamenlijke BBQ",
    excerpt: "Met de ploeg en supporters maken we ons op voor de laatste fase richting corso.",
  },
  {
    date: "5 & 6 september 2026",
    label: "Belangrijk",
    title: "Bloemencorso Eelde",
    excerpt: "Het corso-weekend waar alle voorbereidingen samenkomen op het parcours.",
  },
];

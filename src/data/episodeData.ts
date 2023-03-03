export type episodesDataInterface = {
  src: string;
  heading: string;
  description: string;
  btnLabel: string;
};

const episodesData: episodesDataInterface[] = [
  {
    src: "/assets/episode-1.png",
    heading: "Ep 1: How to build a world-class business brand",
    description:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    btnLabel: "Listen Now",
  },
  {
    src: "/assets/episode-2.png",
    heading: "Ep 2: Getting the first 100 customers for your business",
    description:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    btnLabel: "Listen Now",
  },
  {
    src: "/assets/episode-3.png",
    heading: "Ep 3: Should I raise money for my startup, or not?",
    description:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    btnLabel: "Listen Now",
  },
];

export default episodesData;

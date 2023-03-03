export type articleNewsDataInterface = {
  src: string;
  heading: string;
  description: string;
  btnLabel: string;
};

const articleNewsData: articleNewsDataInterface[] = [
  {
    src: "/assets/news-and-article-1.png",
    heading: "Getting the first 100 customers for your business",
    description:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    btnLabel: "Read Now",
  },
  {
    src: "/assets/news-and-article-2.png",
    heading: "Apparently we had reached a great height in the atmosphere, ...",
    description:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    btnLabel: "Read Now",
  },
];

export default articleNewsData;

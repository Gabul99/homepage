export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  imgPath: string;
  arxiv?: string;
}

export const publicationList: Publication[] = [
  {
    title: "Digital Nudge Alerts: Fact-checking Generative AI Responses",
    authors: [
      "Chei Sian Lee",
      "Kok Khiang Lim",
      "Heechan Lee",
      "Dion Hoe-Lian Goh",
    ],
    imgPath: "/assets/pub_img/icadl.png",
    conference: "ICADL 2024, Short Paper",
  },
];
export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  imgPath: string;
  mainLink?: string;
}

export const publicationList: Publication[] = [
  {
    title:
      "Evaligner: Automatic Prompt and Criteria Refinement from User Feedback",
    authors: ["Heechan Lee", "Tae Soo Kim", "Juho Kim"],
    imgPath: "/assets/pub_img/evaligner.png",
    conference:
      "CHI 2025 Workshop on Human-centered Evaluation and Auditing of Language Models (HEAL)",
    mainLink: "/assets/HEAL_CHI_Evaligner.pdf",
  },
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
    mainLink: "https://doi.org/10.1007/978-981-96-0865-2_21",
  },
];

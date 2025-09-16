export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  imgPath: string;
  type: "conference" | "short" | "arxiv";
  mainLink?: string;
}

// Type: conference, short, arxiv

export const publicationList: Publication[] = [
  {
    title:
      "Evalet: Evaluating Large Language Models by Fragmenting Outputs into Functions",
    authors: [
      "Tae Soo Kim*",
      "Heechan Lee*",
      "Yoonjoo Lee",
      "Joseph Seering",
      "Juho Kim",
    ],
    imgPath: "/assets/pub_img/evalet.png",
    type: "arxiv",
    conference: "Arxiv, Under review",
    mainLink: "https://arxiv.org/abs/2509.11206",
  },
  {
    title:
      "Evaligner: Automatic Prompt and Criteria Refinement from User Feedback",
    authors: ["Heechan Lee", "Tae Soo Kim", "Juho Kim"],
    imgPath: "/assets/pub_img/evaligner.png",
    type: "short",
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
    type: "short",
    conference: "ICADL 2024, Short Paper",
    mainLink: "https://doi.org/10.1007/978-981-96-0865-2_21",
  },
];

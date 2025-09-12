export interface News {
  date: string;
  description: string;
}

export const newsList: News[] = [
  {
    date: "2025-09",
    description: "⛱️ Attend UIST 2025 at Busan, Korea. See you at Busan!",
  },
  {
    date: "2025-07",
    description:
      "🇺🇸 Visit Stanford University with Prof. Joseph! (Jul 16th ~ Jul 18th) First time to visit USA!",
  },
  {
    date: "2025-04",
    description:
      "🇯🇵 Trip to Yokohama, Japan for attending CHI 2025 (Apr 25th ~ May 2nd)",
  },
  {
    date: "2025-03",
    description: `🎉 My 'Evaligner' paper has been accepted to <a href="https://heal-workshop.github.io/" target="_blank">HEAL Workshop</a> at CHI 2025!`,
  },
  {
    date: "2025-02",
    description: "🔰 I've just joined CSTL as MS student.",
  },
  {
    date: "2024-12",
    description:
      "✅ One ICADL paper is published, what I worked during NTU exchange program",
  },
  {
    date: "2024-11",
    description: "🚀 Website Opened. First time to use Astro.",
  },
];

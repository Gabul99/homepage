export interface News {
  date: string;
  description: string;
}

export const newsList: News[] = [
  {
    date: "2025-04-25",
    description:
      "🇯🇵 Trip to Yokohama, Japan for attending CHI 2025 (Apr 25th ~ May 2nd)",
  },
  {
    date: "2025-03-28",
    description: `🎉 My 'Evaligner' paper has been accepted to <a href="https://heal-workshop.github.io/" target="_blank">HEAL Workshop</a> at CHI 2025!`,
  },
  {
    date: "2025-02-03",
    description: "🔰 I've just joined CSTL as MS student.",
  },
  {
    date: "2024-12-06",
    description:
      "✅ One ICADL paper is published, what I worked during NTU exchange program",
  },
  {
    date: "2024-11-12",
    description: "🚀 Website Opened. First time to use Astro.",
  },
];

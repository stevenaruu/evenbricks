import localFont from "next/font/local";

export const melonPop = localFont({
  src: [
    {
      path: "../assets/fonts/melon-pop.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-melon-pop",
  display: "swap",
});

export const poorStory = localFont({
  src: [
    {
      path: "../assets/fonts/poor-story.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poor-story",
  display: "swap",
});
import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { SEO_KEYWORDS } from "@/lib/seo/keywords";
import { cn } from "@/lib/utils";
import { melonPop, poorStory } from "@/styles/fonts";
import { SplashScreenProvider } from "@/lib/context/SplashScreenContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evenbricks.id"),
  title: {
    default: "Evenbricks",
    template: "%s | Evenbricks",
  },
  description: "Evenbricks offers high-quality custom bricks, character bricks, collectible figures, and precision parts made to fit perfectly.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Evenbricks" }],
  creator: "Evenbricks",
  publisher: "Evenbricks",
  openGraph: {
    title: "Evenbricks",
    description: "Evenbricks offers high-quality custom bricks, character bricks, collectible figures, and precision parts made to fit perfectly.",
    url: "https://evenbricks.id",
    siteName: "Evenbricks",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evenbricks",
    description: "Evenbricks offers high-quality custom bricks, character bricks, collectible figures, and precision parts made to fit perfectly.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        montserrat.className,
        melonPop.variable,
        poorStory.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreenProvider>{children}</SplashScreenProvider>
      </body>
    </html>
  );
}

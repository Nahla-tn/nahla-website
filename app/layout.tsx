import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import "remixicon/fonts/remixicon.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nahla.tn"),
  title: "Nahla — Logiciel Apiculture Tunisie | IA & Données Satellite",
  description:
    "Nahla aide les apiculteurs tunisiens à choisir les meilleurs emplacements de ruches grâce aux données satellitaires et à l'IA. Testé à Jendouba. Inscription ouverte.",
  keywords: "apiculture, logiciel apiculture, ruches, Tunisie, IA, NDVI, satellite, miel, AgriTech, transhumance, Jendouba, emplacement ruches",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nahla",
    title: "Nahla — Logiciel Apiculture Tunisie | IA & Données Satellite",
    description: "Nahla aide les apiculteurs tunisiens à choisir les meilleurs emplacements de ruches grâce aux données satellitaires et à l'IA. Testé à Jendouba. Inscription ouverte.",
    url: "https://nahla.tn/",
    locale: "fr_TN",
    images: [{ url: "/nahla-logo.png", width: 1200, height: 630, alt: "Nahla Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahla — IA pour l'Apiculture",
    description: "Nahla aide les apiculteurs tunisiens à choisir les meilleurs emplacements de ruches grâce aux données satellitaires et à l'IA. Testé à Jendouba. Inscription ouverte.",
    images: ["/nahla-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/nahla logo.png" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansArabic.variable} antialiased`}
      >
        <a href="#main" className="skip-link">Aller au contenu principal</a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

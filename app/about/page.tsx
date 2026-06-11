import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/about/Hero";
import { Team } from "@/components/about/Team";
import { Market } from "@/components/about/Market";
import { Impact } from "@/components/about/Impact";
import { Vision } from "@/components/about/Vision";

export const metadata: Metadata = {
  title: "Nahla — Équipe, Vision & Impact | Apiculture IA Tunisie",
  description:
    "Découvrez l'équipe, la vision et l'impact de Nahla — plateforme d'intelligence apicole pour les apiculteurs tunisiens. Jendouba, Tunisie.",
  openGraph: {
    title: "Nahla — Équipe, Vision & Impact",
    description:
      "Découvrez l'équipe, la vision et l'impact de Nahla — plateforme d'intelligence apicole pour les apiculteurs tunisiens.",
    url: "https://nahla.tn/about",
    images: [{ url: "https://nahla.tn/nahla-logo.png" }],
  },
};

export default function About() {
  return (
    <>
      <Header />

      <main id="main">
        <Hero />
        <Team />
        <Market />
        <Impact />
        <Vision />
      </main>

      <Footer />
    </>
  );
}

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/about/Team";
import { Market } from "@/components/about/Market";
import { Impact } from "@/components/about/Impact";
import { Vision } from "@/components/about/Vision";

export default function About() {
  return (
    <>
      <a href="#main" className="skip-link">
        <span className="fr">Aller au contenu</span>
        <span className="ar">انتقل للمحتوى</span>
      </a>
      
      <Header />
      
      <main id="main" className="pt-[72px]">
        <Team />
        <Market />
        <Impact />
        <Vision />
      </main>
      
      <Footer />
    </>
  );
}

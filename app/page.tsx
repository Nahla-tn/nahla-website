import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Testimonial } from "@/components/home/Testimonial";
import { Pricing } from "@/components/home/Pricing";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        <span className="fr">Aller au contenu</span>
        <span className="ar">انتقل للمحتوى</span>
      </a>
      
      <Header />
      
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      
      <Footer />
    </>
  );
}

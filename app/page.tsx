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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nahla",
    "url": "https://nahla.tn",
    "logo": "https://nahla.tn/nahla-logo.png",
    "description": "Plateforme d'intelligence artificielle pour l'apiculture en Tunisie. Données satellitaires NDVI et recommandations d'emplacements de ruches.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+216-58-025-694",
      "contactType": "customer support",
      "email": "support@nahla.tn",
      "availableLanguage": ["French", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jendouba",
      "addressCountry": "TN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nahla-%D9%86%D8%AD%D9%84%D8%A9/",
      "https://www.facebook.com/profile.php?id=61590918741775",
      "https://www.instagram.com/nahlatn/",
      "https://www.youtube.com/@Nahla-tn"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      
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

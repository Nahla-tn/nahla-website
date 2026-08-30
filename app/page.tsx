import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { HiveManagement } from "@/components/home/HiveManagement";
import { Roadmap } from "@/components/home/Roadmap";
import { Testimonial } from "@/components/home/Testimonial";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nahla.tn/#organization",
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
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://nahla.tn/#software",
        "name": "Nahla App",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "offers": {
          "@type": "Offer",
          "price": "12.00",
          "priceCurrency": "TND"
        },
        "creator": {
          "@id": "https://nahla.tn/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://nahla.tn/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que Nahla ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nahla est une plateforme d'intelligence artificielle et d'analyse de données satellitaires (NDVI) dédiée à l'apiculture en Tunisie."
            }
          },
          {
            "@type": "Question",
            "name": "Comment fonctionne l'analyse NDVI pour les abeilles ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'Indice de Végétation par Différence Normalisée (NDVI) mesure la densité et la santé de la végétation via les satellites Sentinel-2 pour évaluer le potentiel d'une zone."
            }
          },
          {
            "@type": "Question",
            "name": "Est-ce que l'application est gratuite ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'application propose des fonctionnalités de base gratuites. L'accès complet à l'IA est proposé via un abonnement à partir de 12 TND/mois."
            }
          }
        ]
      }
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
        <HiveManagement />
        <Roadmap />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </>
  );
}

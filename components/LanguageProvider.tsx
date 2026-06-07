"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (frText: React.ReactNode, arText: React.ReactNode) => React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      const saved = localStorage.getItem("nahla-lang") as Language;
      if (saved === "ar" || saved === "fr") {
        setLanguageState(saved);
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem("nahla-lang", language);
    const html = document.documentElement;
    if (language === "ar") {
      html.setAttribute("data-lang", "ar");
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("data-lang", "fr");
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "fr");
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation helper function
  const t = (frText: React.ReactNode, arText: React.ReactNode) => {
    if (!mounted) {
      // Default to rendering both wrapped in spans that are hidden by CSS before hydration to prevent layout shift
      return (
        <>
          <span className="fr">{frText}</span>
          <span className="ar">{arText}</span>
        </>
      );
    }
    return language === "ar" ? arText : frText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

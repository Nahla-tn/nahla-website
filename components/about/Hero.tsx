"use client";

import React from "react";
import { useLanguage } from "../LanguageProvider";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-forest-950 pt-[calc(72px+4rem)] pb-20 px-6 md:px-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,0.08)_0%,transparent_50%)] pointer-events-none"></div>
      <h1 className="text-white text-[clamp(2rem,4vw,3rem)] mb-4 relative font-space font-bold tracking-tight">
        {t("À propos de Nahla", "عن نحلة")}
      </h1>
      <p className="text-white/60 text-[1.1rem] max-w-[600px] mx-auto leading-[1.7] relative">
        {t(
          "La vision et l'impact de notre plateforme d'intelligence apicole.",
          "الرؤية والأثر وراء منصة الذكاء النحلي."
        )}
      </p>
    </header>
  );
};

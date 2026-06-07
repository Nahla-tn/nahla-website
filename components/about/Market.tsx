"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Market = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="market" className="py-[clamp(4rem,8vw,7rem)] bg-cream-dark" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-forest">
            {t("Opportunité de marché", "فرصة السوق")}
          </span>
          <h2 className="section-title text-forest-900">
            {t("De la Tunisie au monde arabe.", "من تونس إلى العالم العربي.")}
          </h2>
          <p className="section-desc mx-auto">
            {t("Un déploiement progressif, validé étape par étape.", "انتشار تدريجي، مُحقّق خطوة بخطوة.")}
          </p>
        </div>

        <div className={`flex items-center justify-center gap-0 flex-col md:flex-row flex-wrap mt-12 transition-all duration-700 ease-in-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          <div className="group text-center p-10 px-8 flex-1 min-w-[200px]">
            <div className="w-[100px] h-[100px] rounded-full mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-forest-600 shadow-[0_0_0_6px_rgba(27,67,50,0.15)] text-honey-400">
              <i className="ri-map-pin-2-fill text-[2rem] relative z-[2]"></i>
            </div>
            <h3 className="text-[1.1rem] text-forest-900 mb-1 font-inter font-bold">
              {t("Tunisie", "تونس")}
            </h3>
            <p className="text-[0.83rem] text-neutral-500 leading-[1.5]">
              {t("Un marché de 13 000 apiculteurs sans outil de données. Nous sommes premiers.", "سوق 13,000 نحّال بدون أداة بيانات. نحن الأوائل.")}
            </p>
            <span className="inline-block bg-cream-dark border border-cream-border rounded-full px-3 py-1 text-[0.72rem] font-bold text-forest-600 mt-2.5">
              2025 – 2026
            </span>
          </div>

          <div className="text-[1.5rem] text-neutral-400 px-2 md:rotate-0 rotate-90">
            <i className="ri-arrow-right-line rtl:rotate-180"></i>
          </div>

          <div className="group text-center p-10 px-8 flex-1 min-w-[200px]">
            <div className="w-[100px] h-[100px] rounded-full mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-honey-500 shadow-[0_0_0_6px_rgba(212,160,23,0.15)] text-white">
              <i className="ri-global-line text-[2rem] relative z-[2]"></i>
            </div>
            <h3 className="text-[1.1rem] text-forest-900 mb-1 font-inter font-bold">
              {t("Maghreb", "المغرب العربي")}
            </h3>
            <p className="text-[0.83rem] text-neutral-500 leading-[1.5]">
              {t("Algérie, Maroc, Libye — même culture, mêmes problèmes, même modèle. Prêt à dupliquer.", "الجزائر، المغرب، ليبيا — نفس الثقافة، نفس المشاكل، نفس النموذج. جاهز للتكرار.")}
            </p>
            <span className="inline-block bg-cream-dark border border-cream-border rounded-full px-3 py-1 text-[0.72rem] font-bold text-forest-600 mt-2.5">
              2027 – 2028
            </span>
          </div>

          <div className="text-[1.5rem] text-neutral-400 px-2 md:rotate-0 rotate-90">
            <i className="ri-arrow-right-line rtl:rotate-180"></i>
          </div>

          <div className="group text-center p-10 px-8 flex-1 min-w-[200px]">
            <div className="w-[100px] h-[100px] rounded-full mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-forest-900 shadow-[0_0_0_6px_rgba(11,29,20,0.15)] text-honey-400">
              <i className="ri-earth-line text-[2rem] relative z-[2]"></i>
            </div>
            <h3 className="text-[1.1rem] text-forest-900 mb-1 font-inter font-bold">
              {t("MENA", "الشرق الأوسط وشمال أفريقيا")}
            </h3>
            <p className="text-[0.83rem] text-neutral-500 leading-[1.5]">
              {t("Une plateforme de données environnementales pour l'agriculture du monde arabe — qui commence par l'apiculture.", "منصة بيانات بيئية للزراعة في العالم العربي — تبدأ بتربية النحل.")}
            </p>
            <span className="inline-block bg-cream-dark border border-cream-border rounded-full px-3 py-1 text-[0.72rem] font-bold text-forest-600 mt-2.5">
              2029+
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

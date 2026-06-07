"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Impact = () => {
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
    <section id="impact" className="py-[clamp(4rem,8vw,7rem)]" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-honey">
            {t("Impact", "الأثر")}
          </span>
          <h2 className="section-title text-forest-900">
            {t("Un impact qui dépasse la ruche.", "أثر يتجاوز الخلية.")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}>
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[4px] h-full bg-honey-500"></div>
            <i className="ri-money-dollar-circle-line text-[2rem] mb-4 block text-honey-500"></i>
            <h3 className="text-[1.15rem] text-forest-900 mb-2 font-bold font-inter">
              {t("Des revenus que les apiculteurs ne perdent plus", "إيرادات لم يعد النحّالون يخسرونها")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Un apiculteur avec 50 ruches peut économiser jusqu'à 1 200 TND en carburant et récupérer 2 à 3 kg de miel supplémentaires par ruche et par saison.",
                "نحّال يملك 50 خلية يمكنه توفير حتى 1,200 دينار وقوداً واسترجاع 2 إلى 3 كغ عسل إضافي لكل خلية في الموسم."
              )}
            </p>
          </div>

          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}>
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[4px] h-full bg-forest-400"></div>
            <i className="ri-leaf-line text-[2rem] mb-4 block text-forest-400"></i>
            <h3 className="text-[1.15rem] text-forest-900 mb-2 font-bold font-inter">
              {t("Des forêts du Nord-Ouest mieux préservées", "غابات الشمال الغربي أفضل حماية")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "En guidant les apiculteurs vers des zones optimales, Nahla réduit la surcharge de ruches dans les forêts sensibles du Nord-Ouest tunisien et favorise une pollinisation mieux répartie.",
                "بتوجيه النحالين نحو المناطق المثالية، تقلّل نحلة الضغط على غابات الشمال الغربي الحساسة وتعزز تلقيحاً أفضل توزيعاً."
              )}
            </p>
          </div>

          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}>
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[4px] h-full bg-[#3B82F6]"></div>
            <i className="ri-hand-heart-line text-[2rem] mb-4 block text-[#3B82F6]"></i>
            <h3 className="text-[1.15rem] text-forest-900 mb-2 font-bold font-inter">
              {t("L'apiculteur rural accède aux mêmes données que l'agronome", "النحّال الريفي يصل لنفس بيانات المهندس الزراعي")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Un apiculteur de Jendouba accède désormais aux mêmes données environnementales qu'un agronome équipé — depuis un simple smartphone Android en 3G.",
                "نحّال من جندوبة أصبح يصل لنفس البيانات البيئية التي يملكها مهندس زراعي مجهّز — من هاتف أندرويد بسيط على شبكة 3G."
              )}
            </p>
          </div>
        </div>

        <div className={`flex flex-wrap gap-2 mt-12 justify-center transition-all duration-700 ease-in-out delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-1.5 bg-forest-600 text-white px-4 py-1.5 rounded-full text-[0.75rem] font-bold">
            {t("🌾 ODD 2 · Faim zéro", "🌾 هدف 2 · القضاء على الجوع")}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-forest-600 text-white px-4 py-1.5 rounded-full text-[0.75rem] font-bold">
            {t("💼 ODD 8 · Travail décent", "💼 هدف 8 · عمل لائق")}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-forest-600 text-white px-4 py-1.5 rounded-full text-[0.75rem] font-bold">
            {t("🌍 ODD 13 · Action climatique", "🌍 هدف 13 · العمل المناخي")}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-forest-600 text-white px-4 py-1.5 rounded-full text-[0.75rem] font-bold">
            {t("🌿 ODD 15 · Vie terrestre", "🌿 هدف 15 · الحياة البرية")}
          </span>
        </div>
      </div>
    </section>
  );
};

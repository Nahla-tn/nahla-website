"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Features = () => {
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
    <section id="features" className="py-[clamp(5rem,10vw,8rem)] bg-cream-dark" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-forest">
            {t("Pourquoi ça marche", "لماذا ينجح")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Ce que Nahla voit avant vous<br />sur le terrain apicole.
              </>,
              <>
                ما تراه نحلة قبلك<br />في الميدان النحلي.
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] text-forest-500">
              <i className="ri-radar-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Intelligence Satellite NDVI", "ذكاء فضائي NDVI")}
            </h3>
            <p className="text-[0.9rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Nahla voit la végétation depuis l'espace — bien avant que vous arriviez sur place. Si une zone verdit ou s'assèche dans votre gouvernorat, vous le savez 5 jours à l'avance.",
                "نحلة ترى الغطاء النباتي من الفضاء — قبل وصولك بكثير. إذا اخضرّت منطقة أو جفّت في ولايتك، ستعرف قبل 5 أيام."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">Sentinel-2</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">NDVI</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Floraison", "إزهار")}</span>
            </div>
          </div>

          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] text-[#1565C0]">
              <i className="ri-cloud-windy-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Météo locale & Alertes pesticides", "طقس محلي وتنبيهات مبيدات")}
            </h3>
            <p className="text-[0.9rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "La pluie arrive demain à Béja ? Un traitement phytosanitaire est prévu près de vos ruches ? Nahla vous prévient avant que vos colonies ne soient exposées.",
                "المطر يصل غداً لباجة؟ معالجة كيميائية مخطّطة قرب خلاياك؟ نحلة تحذّرك قبل أن تتعرض مستعمراتك."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Prévisions", "توقعات")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Pesticides", "مبيدات")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Alertes push", "تنبيهات فورية")}</span>
            </div>
          </div>

          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-honey-100 to-honey-200 text-honey-600">
              <i className="ri-sparkling-2-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Recommandation d'emplacements IA", "توصيات مواقع بالذكاء الاصطناعي")}
            </h3>
            <p className="text-[0.9rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "La plateforme croise satellite, météo, terrain et retours d'apiculteurs pour vous dire exactement où placer vos ruches — et ce avant que vous ne chargiez le camion.",
                "المنصة تدمج القمر الاصطناعي، الطقس، التضاريس وتقارير النحالين لتخبرك بالضبط أين تضع خلاياك — قبل تحميل الشاحنة."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Score IA", "نتيجة ذكاء")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Emplacement optimal", "موقع مثالي")}</span>
            </div>
          </div>

          <div className={`bg-white border border-cream-border rounded-xl p-10 lg:px-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:400ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] text-[#00695C]">
              <i className="ri-group-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Données partagées entre apiculteurs", "بيانات مشتركة بين النحالين")}
            </h3>
            <p className="text-[0.9rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Chaque apiculteur qui utilise Nahla améliore la plateforme pour les autres. Plus le réseau grandit dans votre gouvernorat, plus les recommandations sont précises.",
                "كل نحّال يستخدم نحلة يحسّن المنصة للآخرين. كلما كبرت الشبكة في ولايتك، زادت دقة التوصيات."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">Crowdsourcing</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-cream-dark text-neutral-600 border border-cream-border">{t("Réseau terrain", "شبكة ميدانية")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

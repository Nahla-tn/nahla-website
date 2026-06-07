"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Vision = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      className="py-[clamp(4rem,8vw,7rem)] bg-forest-950 text-white"
      ref={sectionRef}
    >
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-light">
            {t("Vision", "الرؤية المستقبلية")}
          </span>
          <h2 className="section-title text-white">
            {t(
              <>
                La couche d&apos;intelligence
                <br />
                de l&apos;apiculture régionale.
              </>,
              <>
                طبقة الذكاء
                <br />
                لتربية النحل الإقليمية.
              </>,
            )}
          </h2>
          <p className="section-desc mx-auto text-white/60">
            {t(
              "Nahla évolue d'un outil d'aide à la décision vers une infrastructure intelligente de l'apiculture connectée.",
              "نحلة تتطور من أداة دعم قرار إلى بنية تحتية ذكية لتربية النحل المتصلة.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div
            className={`bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-honey-500/20 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}
          >
            <i className="ri-earth-line text-[1.5rem] text-honey-400 mb-4 block"></i>
            <h3 className="text-[1rem] text-white mb-2 font-bold font-inter">
              {t("Extension régionale", "توسّع إقليمي")}
            </h3>
            <p className="text-[0.85rem] text-white/60 leading-[1.6]">
              {t(
                "Déploiement progressif en Tunisie puis expansion vers le MENA, où l'apiculture transhumante est fortement pratiquée.",
                "انتشار تدريجي في تونس ثم التوسع نحو الشرق الأوسط وشمال أفريقيا.",
              )}
            </p>
          </div>

          <div
            className={`bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-honey-500/20 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}
          >
            <i className="ri-robot-2-line text-[1.5rem] text-honey-400 mb-4 block"></i>
            <h3 className="text-[1rem] text-white mb-2 font-bold font-inter">
              {t("Apiculture prédictive", "تربية نحل تنبؤية")}
            </h3>
            <p className="text-[0.85rem] text-white/60 leading-[1.6]">
              {t(
                "Savoir avant tout le monde où la miellée sera abondante cette saison — et arriver le premier. C'est là où nous allons.",
                "معرفة قبل الجميع أين سيكون الرحيق وفيراً هذا الموسم — والوصول أولاً. هذا هدفنا.",
              )}
            </p>
          </div>

          <div
            className={`bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-honey-500/20 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}
          >
            <i className="ri-store-2-line text-[1.5rem] text-honey-400 mb-4 block"></i>
            <h3 className="text-[1rem] text-white mb-2 font-bold font-inter">
              {t("Marketplace de pollinisation", "سوق التلقيح")}
            </h3>
            <p className="text-[0.85rem] text-white/60 leading-[1.6]">
              {t(
                "Réseau B2B connectant apiculteurs et agriculteurs pour des services de pollinisation optimisés et monétisés.",
                "شبكة B2B تربط النحالين والمزارعين لخدمات تلقيح محسّنة ومربحة.",
              )}
            </p>
          </div>

          <div
            className={`bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-honey-500/20 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:400ms]`}
          >
            <i className="ri-database-2-line text-[1.5rem] text-honey-400 mb-4 block"></i>
            <h3 className="text-[1rem] text-white mb-2 font-bold font-inter">
              {t("Plateforme de données agricoles", "منصة بيانات زراعية")}
            </h3>
            <p className="text-[0.85rem] text-white/60 leading-[1.6]">
              {t(
                "Une infrastructure de données environnementales intelligente, intégrant satellite, météo et terrain — au service de toute l'agriculture.",
                "بنية بيانات بيئية ذكية تدمج الأقمار الصناعية والطقس والميدان — لخدمة كل الزراعة.",
              )}
            </p>
          </div>

          <div
            className={`bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-honey-500/20 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:500ms]`}
          >
            <i className="ri-community-line text-[1.5rem] text-honey-400 mb-4 block"></i>
            <h3 className="text-[1rem] text-white mb-2 font-bold font-inter">
              {t("Réseau apicole intelligent", "شبكة نحلية ذكية")}
            </h3>
            <p className="text-[0.85rem] text-white/60 leading-[1.6]">
              {t(
                "Une base de données collective où chaque apiculteur améliore le système en partageant ses observations terrain.",
                "قاعدة بيانات جماعية حيث كل نحّال يحسّن النظام بمشاركة ملاحظاته الميدانية.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

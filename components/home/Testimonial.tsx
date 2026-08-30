"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Testimonial = () => {
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
      id="testimonial"
      className="py-[clamp(5rem,10vw,8rem)]"
      ref={sectionRef}
    >
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`max-w-[700px] mx-auto bg-forest-600 rounded-3xl p-8 md:px-12 md:py-12 md:pb-10 relative overflow-hidden transition-all duration-700 ease-in-out before:content-[''] before:absolute before:-top-[30%] before:-right-[10%] before:w-[300px] before:h-[300px] before:bg-[radial-gradient(circle,rgba(212,160,23,0.1)_0%,transparent_60%)] before:pointer-events-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-[0.78rem] font-bold text-honey-400 uppercase tracking-wider mb-4">
            <span>{t("Validation Terrain · Saison 2026", "التحقق الميداني · موسم 2026")}</span>
          </div>
          <div className="text-[1.25rem] text-white font-bold leading-[1.6] mb-4">
            {t(
              "Programme pilote actuellement déployé auprès d'apiculteurs partenaires dans le Nord-Ouest tunisien.",
              "البرنامج التجريبي قيد الاختبار الميداني حالياً مع النحالين الشركاء في الشمال الغربي التونسي.",
            )}
          </div>
          <div className="text-white/80 text-[0.95rem] leading-[1.7] mb-4">
            {t(
              "Les premières études de cas chiffrées (économies de carburant, rendements de miel et santé des colonies) seront publiées publiquement à la fin du cycle de transhumance.",
              "سيتم نشر دراسات الحالة والنتائج الميدانية الدقيقة (توفير الوقود، إنتاج العسل، وصحة الخلايا) فور اكتمال دورة الترحال الحالية.",
            )}
          </div>
          <div className="text-white/50 text-[0.8rem]">
            {t(
              "✦ Données récoltées en conditions réelles · Jendouba & Béja",
              "✦ بيانات مجمّعة في ظروف ميدانية حقيقية · جندوبة وباجة",
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

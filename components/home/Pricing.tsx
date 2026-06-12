"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export const Pricing = () => {
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
      id="pricing"
      className="py-[clamp(5rem,10vw,8rem)] relative overflow-hidden bg-forest-950 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,0.06)_0%,transparent_50%)]"
      ref={sectionRef}
    >
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-light">
            {t("Tarifs apiculteurs", "أسعار النحّالين")}
          </span>
          <h2 className="section-title text-white">
            {t(
              <>
                Moins cher qu&apos;un seul trajet
                <br />
                inutile en gasoil.
              </>,
              <>
                أرخص من رحلة واحدة
                <br />
                ضائعة بالوقود.
              </>,
            )}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 relative transition-all duration-700 ease-in-out [transition-delay:200ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <div className="text-[0.78rem] font-bold text-white/50 uppercase tracking-[0.1em] mb-4">
              {t("Sans Nahla — Chaque année", "بدون نحلة — كل سنة")}
            </div>
            <div className="font-space text-[3.5rem] font-extrabold text-[#ef4444] leading-none mb-1 flex items-baseline justify-center gap-2">
              -5 850 <span className="text-[1rem] text-white/50">{t("TND", "د.ت")}</span>
            </div>
            <div className="text-white/50 text-[0.9rem]">
              {t("perdus par apiculteur", "يخسرها كل نحّال")}
            </div>
            <ul className="mt-6">
              <li className="text-white/60 text-[0.85rem] py-1.5 flex items-center gap-2 justify-center rtl:flex-row-reverse">
                <i className="ri-close-circle-line text-[#ef4444] text-[0.9rem]"></i>
                {t(
                  "Trajets vers des zones vides (150–300 TND)",
                  <>رحلات لمناطق فارغة (<span dir="ltr">150–300</span> د.ت)</>,
                )}
              </li>
              <li className="text-white/60 text-[0.85rem] py-1.5 flex items-center gap-2 justify-center rtl:flex-row-reverse">
                <i className="ri-close-circle-line text-[#ef4444] text-[0.9rem]"></i>
                {t(
                  "Floraisons ratées, saisons perdues",
                  "إزهار فائت، مواسم ضائعة",
                )}
              </li>
              <li className="text-white/60 text-[0.85rem] py-1.5 flex items-center gap-2 justify-center rtl:flex-row-reverse">
                <i className="ri-close-circle-line text-[#ef4444] text-[0.9rem]"></i>
                {t(
                  "Mortalité des colonies par stress",
                  "وفيات المستعمرات بسبب الإجهاد",
                )}
              </li>
              <li className="text-white/60 text-[0.85rem] py-1.5 flex items-center gap-2 justify-center rtl:flex-row-reverse">
                <i className="ri-close-circle-line text-[#ef4444] text-[0.9rem]"></i>
                {t("Production divisée par deux", "إنتاج مقسوم على اثنين")}
              </li>
            </ul>
          </div>

          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 rounded-full bg-honey-500 text-forest-950 flex items-center justify-center font-extrabold text-[0.85rem] z-[5] shadow-[0_4px_20px_rgba(212,160,23,0.4)] mx-auto my-4 lg:my-0">
            VS
          </div>

          <div className="bg-white/5 border-2 border-honey-500 rounded-3xl p-12 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(212,160,23,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-honey-500 text-forest-950 text-[0.7rem] font-bold tracking-[0.08em] px-6 py-1.5 rounded-b-xl">
              {t("🚀 LANCEMENT", "🚀 إطلاق")}
            </div>
            <div className="font-space text-[4rem] font-extrabold text-white leading-none mt-6 mb-1 flex items-baseline justify-center gap-2">
              10 <span className="text-[1rem] font-medium text-white/50">{t("TND", "د.ت")}</span>
            </div>
            <div className="text-[0.88rem] text-white/60 mb-1">
              {t(
                "par mois · Toutes les fonctionnalités",
                "شهرياً · جميع المميزات",
              )}
            </div>
            <div className="text-[0.82rem] text-forest-300 font-semibold mb-6">
              {t(
                "✦ Essai gratuit 30 jours — sans carte bancaire",
                "✦ تجربة مجانية 30 يوم — بدون بطاقة بنكية",
              )}
            </div>
            <ul className="text-left rtl:text-right mb-8">
              {[
                t(
                  "Carte NDVI satellite et scores par zone",
                  "خريطة NDVI فضائية ونتائج لكل منطقة",
                ),
                t(
                  "Météo locale adaptée à l'apiculture",
                  "طقس محلي مخصص لتربية النحل",
                ),
                t(
                  "Alertes phytosanitaires et pesticides",
                  "تنبيهات صحة نباتية ومبيدات",
                ),
                t(
                  "Recommandation d'emplacements de ruches",
                  "توصيات مواقع الخلايا",
                ),
                t(
                  "Réseau communautaire d'apiculteurs",
                  "شبكة مجتمعية للنحالين",
                ),
                t(
                  "Mode 3G / hors-ligne pour le terrain",
                  "وضع 3G / بدون اتصال للميدان",
                ),
                t(
                  "Support direct de l'équipe Nahla pendant la première saison",
                  "دعم مباشر من فريق نحلة خلال الموسم الأول",
                ),
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start rtl:flex-row-reverse gap-2.5 text-[0.88rem] text-white/75 py-2 border-b border-white/5 last:border-0"
                >
                  <i className="ri-check-line text-forest-300 text-[1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#cta"
              className="btn btn-primary btn-lg w-full justify-center"
            >
              <span>
                {t("Essayer Nahla gratuitement →", "→ جرّب نحلة مجاناً")}
              </span>
            </Link>
          </div>
        </div>

        <div
          className={`text-center mt-12 relative transition-all duration-700 ease-in-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-4 bg-honey-500/10 border border-honey-500/20 rounded-full py-3 px-8 text-left rtl:text-right flex-col md:flex-row">
            <i className="ri-arrow-up-circle-fill text-honey-400 text-[1.3rem]"></i>
            <div>
              <div className="text-honey-400 font-bold text-[1rem]">
                {t(
                  "Un plein de gasoil vers une zone vide vous coûte plus cher que 3 mois de Nahla.",
                  "خزان وقود لمنطقة فارغة يكلّفك أكثر من 3 أشهر نحلة.",
                )}
              </div>
              <div className="text-white/50 text-[0.8rem]">
                {t(
                  "120 TND/an pour économiser jusqu'à 5 850 TND",
                  <><span dir="ltr">120</span> د.ت/سنة لتوفير حتى <span dir="ltr">5 850</span> د.ت</>,
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-white/45 text-[0.82rem]">
          {t(
            "Aussi disponible en carte prépayée (30 TND / 3 mois) dans les coopératives locales.",
            <>متوفر أيضاً ببطاقة مسبقة الدفع (<span dir="ltr">30</span> د.ت / <span dir="ltr">3</span> أشهر) في التعاونيات المحلية.</>,
          )}
        </p>
      </div>
    </section>
  );
};

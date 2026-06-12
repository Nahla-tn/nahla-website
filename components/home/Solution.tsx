"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Solution = () => {
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
      id="solution"
      className="py-[clamp(5rem,10vw,8rem)] bg-cream-dark"
      ref={sectionRef}
    >
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-forest">
            {t("Ce que fait Nahla", "ما تفعله نحلة")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Une décision éclairée pour chaque
                <br />
                déplacement de ruches en Tunisie.
              </>,
              <>
                قرار مدروس لكل تنقل
                <br />
                خلايا في تونس.
              </>,
            )}
          </h2>
          <p className="section-desc mx-auto">
            {t(
              "Nahla croise ce que vous ne pouvez pas voir — et le transforme en une recommandation claire, avant de charger le camion.",
              "نحلة تدمج ما لا تستطيع رؤيته — وتحوّله إلى توصية واضحة، قبل تحميل الشاحنة.",
            )}
          </p>
        </div>

        <div
          className={`flex items-center justify-center gap-6 flex-col md:flex-row flex-wrap mt-12 transition-all duration-700 ease-in-out delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center p-8 min-w-[150px] bg-white border border-cream-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <i className="ri-radar-line text-[2rem] text-forest-500 mb-3 block"></i>
            <span className="text-[0.85rem] font-semibold text-forest-900 block">
              {t(
                <>
                  Ce que vous ne
                  <br />
                  voyez pas à l&apos;œil nu
                </>,
                <>
                  ما لا تراه
                  <br />
                  بالعين المجردة
                </>,
              )}
            </span>
          </div>

          <div className="text-[1.5rem] text-neutral-400 font-light md:rotate-0 rotate-90">
            +
          </div>

          <div className="text-center p-8 min-w-[150px] bg-white border border-cream-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <i className="ri-cloud-line text-[2rem] text-forest-500 mb-3 block"></i>
            <span className="text-[0.85rem] font-semibold text-forest-900 block">
              {t(
                <>
                  Ce que personne ne vous
                  <br />
                  dit sur la météo locale
                </>,
                <>
                  ما لا يخبرك به أحد
                  <br />
                  عن الطقس المحلي
                </>,
              )}
            </span>
          </div>

          <div className="text-[1.5rem] text-neutral-400 font-light md:rotate-0 rotate-90">
            +
          </div>

          <div className="text-center p-8 min-w-[150px] bg-white border border-cream-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <i className="ri-team-line text-[2rem] text-forest-500 mb-3 block"></i>
            <span className="text-[0.85rem] font-semibold text-forest-900 block">
              {t(
                <>
                  Ce que savent ceux
                  <br />
                  qui ont essayé avant
                </>,
                <>
                  ما يعرفه من
                  <br />
                  جرّب قبلك
                </>,
              )}
            </span>
          </div>

          <div className="text-[1.5rem] text-neutral-400 font-light md:rotate-0 rotate-90">
            +
          </div>

          <div className="text-center p-8 min-w-[150px] bg-white border border-cream-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <i className="ri-brain-line text-[2rem] text-forest-500 mb-3 block"></i>
            <span className="text-[0.85rem] font-semibold text-forest-900 block">
              {t(
                <>
                  Ce que Nahla
                  <br />
                  calcule pour vous
                </>,
                <>
                  ما تحسبه نحلة
                  <br />
                  من أجلك
                </>,
              )}
            </span>
          </div>

          <div className="text-[1.5rem] text-honey-500 font-bold w-12 h-12 rounded-full bg-honey-50 flex items-center justify-center md:rotate-0 rotate-90">
            =
          </div>

          <div className="text-center py-8 px-10 bg-forest-600 text-white rounded-xl shadow-[0_12px_40px_rgba(27,67,50,0.3)]">
            <i className="ri-focus-3-line text-[2rem] text-honey-400 mb-3 block"></i>
            <span className="text-[0.95rem] font-bold block">
              {t(
                <>
                  Vous partez au bon endroit.
                  <br />
                  Au bon moment.
                </>,
                <>
                  تذهب للمكان الصحيح.
                  <br />
                  في الوقت الصحيح.
                </>,
              )}
            </span>
          </div>
        </div>

        <div
          className={`flex justify-center gap-[clamp(2rem,5vw,4rem)] flex-wrap mt-16 pt-12 border-t border-cream-border transition-all duration-700 ease-in-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center">
            <div className="text-[1.5rem] text-forest-500 mb-1">
              <i className="ri-map-pin-2-fill"></i>
            </div>
            <div className="font-space text-[0.95rem] font-bold text-forest-600">
              {t("Jendouba", "جندوبة")}
            </div>
            <div className="text-[0.75rem] text-neutral-500 font-medium mt-1">
              {t("Premier gouvernorat opérationnel", "أول ولاية عملية")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[1.5rem] text-forest-500 mb-1">
              <i className="ri-shield-check-fill"></i>
            </div>
            <div className="font-space text-[0.95rem] font-bold text-forest-600">
              {t("Testé sur le terrain", "مجرّب ميدانياً")}
            </div>
            <div className="text-[0.75rem] text-neutral-500 font-medium mt-1">
              {t("Avec des apiculteurs transhumants", "مع نحّالين رحّالين")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[1.5rem] text-forest-500 mb-1">
              <i className="ri-heart-3-fill"></i>
            </div>
            <div className="font-space text-[0.95rem] font-bold text-forest-600">
              {t("8 sur 10", "8 من 10")}
            </div>
            <div className="text-[0.75rem] text-neutral-500 font-medium mt-1">
              {t("Prêts à payer après essai", "مستعدّون للدفع بعد التجربة")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[1.5rem] text-forest-500 mb-1">
              <i className="ri-smartphone-fill"></i>
            </div>
            <div className="font-space text-[0.95rem] font-bold text-forest-600">
              {t("MVP opérationnel", "MVP جاهز")}
            </div>
            <div className="text-[0.75rem] text-neutral-500 font-medium mt-1">
              {t("Applications Android et iOS", "تطبيق أندرويد و iOS منشور")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

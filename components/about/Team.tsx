"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

export const Team = () => {
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
    <section id="team" className="py-[clamp(4rem,8vw,7rem)]" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-honey">
            {t("L'équipe", "الفريق")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Construits sur le terrain,
                <br />
                pour le terrain.
              </>,
              <>
                بُنينا في الميدان،
                <br />
                من أجل الميدان.
              </>,
            )}
          </h2>
          <p className="section-desc mx-auto">
            {t(
              "Nahla est née d'une frustration simple : voir des apiculteurs de talent perdre des saisons entières à cause d'informations introuvables.",
              "نحلة وُلدت من إحباط بسيط: رؤية نحالين موهوبين يخسرون مواسم كاملة بسبب معلومات غير متوفرة.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            className={`bg-white border border-cream-border rounded-xl p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}
          >
            <div className="w-[88px] h-[88px] rounded-full mx-auto mb-5 overflow-hidden border-3 border-cream-border relative bg-forest-100">
              <Image src="/Rajeh.jpeg" alt="Rajeh Gharbi" fill className="object-cover" sizes="88px" />
            </div>
            <div className="text-[1.05rem] font-bold text-forest-900 mb-1">
              Rajeh Gharbi
            </div>
            <div className="text-[0.82rem] text-honey-600 font-semibold mb-2">
              CEO
            </div>
            <div className="text-[0.8rem] text-neutral-500 leading-[1.5]">
              {t(
                "Vision stratégique, architecture technique et relations institutionnelles.",
                "الرؤية الاستراتيجية، الهندسة التقنية والعلاقات المؤسسية.",
              )}
            </div>
            <div className="flex justify-center gap-2.5 mt-4">
              <a
                href="https://www.linkedin.com/in/rajeh-gharbi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-forest-600/5 flex items-center justify-center text-forest-600 text-[1rem] transition-all duration-250 hover:bg-honey-500 hover:text-forest-950 hover:-translate-y-[2px]"
                aria-label="LinkedIn Rajeh Gharbi"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          <div
            className={`bg-white border border-cream-border rounded-xl p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}
          >
            <div className="w-[88px] h-[88px] rounded-full mx-auto mb-5 overflow-hidden border-3 border-cream-border relative bg-forest-100">
              <Image src="/Amin.jpeg" alt="Mohamed Amine Ouerghi" fill className="object-cover" sizes="88px" />
            </div>
            <div className="text-[1.05rem] font-bold text-forest-900 mb-1">
              Mohamed Amine Ouerghi
            </div>
            <div className="text-[0.82rem] text-honey-600 font-semibold mb-2">
              CTO Mobile
            </div>
            <div className="text-[0.8rem] text-neutral-500 leading-[1.5]">
              {t(
                "Développement mobile, intégration NDVI et application Android.",
                "تطوير الموبايل، تكامل NDVI وتطبيق أندرويد.",
              )}
            </div>
            <div className="flex justify-center gap-2.5 mt-4">
              <a
                href="https://www.linkedin.com/in/mohamed-amine-ouerghi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-forest-600/5 flex items-center justify-center text-forest-600 text-[1rem] transition-all duration-250 hover:bg-honey-500 hover:text-forest-950 hover:-translate-y-[2px]"
                aria-label="LinkedIn Mohamed Amine Ouerghi"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          <div
            className={`bg-white border border-cream-border rounded-xl p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}
          >
            <div className="w-[88px] h-[88px] rounded-full mx-auto mb-5 overflow-hidden border-3 border-cream-border relative bg-forest-100">
              <Image src="/Houssem.jpeg" alt="Houcem Akremi" fill className="object-cover" sizes="88px" />
            </div>
            <div className="text-[1.05rem] font-bold text-forest-900 mb-1">
              Houcem Akremi
            </div>
            <div className="text-[0.82rem] text-honey-600 font-semibold mb-2">
              CFO & Data
            </div>
            <div className="text-[0.8rem] text-neutral-500 leading-[1.5]">
              {t(
                "Modèles économiques, intelligence données et business intelligence.",
                "النماذج الاقتصادية، ذكاء البيانات وتحليل الأعمال.",
              )}
            </div>
            <div className="flex justify-center gap-2.5 mt-4">
              <a
                href="https://www.linkedin.com/in/akremi-houssem-/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-forest-600/5 flex items-center justify-center text-forest-600 text-[1rem] transition-all duration-250 hover:bg-honey-500 hover:text-forest-950 hover:-translate-y-[2px]"
                aria-label="LinkedIn Houcem Akremi"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          <div
            className={`bg-white border border-cream-border rounded-xl p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:400ms]`}
          >
            <div className="w-[88px] h-[88px] rounded-full mx-auto mb-5 overflow-hidden border-3 border-cream-border relative bg-forest-100">
              <Image src="/Tasnime.jpeg" alt="Tasnim Amdouni" fill className="object-cover" sizes="88px" />
            </div>
            <div className="text-[1.05rem] font-bold text-forest-900 mb-1">
              Tasnim Amdouni
            </div>
            <div className="text-[0.82rem] text-honey-600 font-semibold mb-2">
              CMO
            </div>
            <div className="text-[0.8rem] text-neutral-500 leading-[1.5]">
              {t(
                "Acquisition terrain, communauté apicole et marketing.",
                "الاستقطاب الميداني، مجتمع النحالين والتسويق.",
              )}
            </div>
            <div className="flex justify-center gap-2.5 mt-4">
              <a
                href="https://www.linkedin.com/in/tassnime-amdouni-31392b264/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-forest-600/5 flex items-center justify-center text-forest-600 text-[1rem] transition-all duration-250 hover:bg-honey-500 hover:text-forest-950 hover:-translate-y-[2px]"
                aria-label="LinkedIn Tasnim Amdouni"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

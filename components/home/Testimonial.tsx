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
          <div className="text-[4rem] text-honey-400 font-serif leading-none mb-2 opacity-60">
            &apos;
          </div>
          <blockquote className="text-[1.15rem] text-white/90 leading-[1.8] italic mb-6 relative">
            {t(
              "On teste Nahla depuis le printemps. On a évité deux déplacements inutiles et doublé notre rendement sur une zone qu'on n'aurait jamais choisie seuls.",
              "نختبر نحلة منذ الربيع. تجنّبنا رحلتين ضائعتين وضاعفنا إنتاجنا في منطقة ما كنّا لنختارها وحدنا.",
            )}
          </blockquote>
          <div className="text-white/70 text-[0.9rem] font-semibold">
            {t(
              "— Apiculteur transhumant, Jendouba (bêta-testeur)",
              "— نحّال رحّال، جندوبة (مختبر أولي)",
            )}
          </div>
          <span className="block mt-4 text-[0.75rem] text-white/40 not-italic">
            {t(
              "Témoignage de bêta-testeur — étude de cas disponible sur demande.",
              "شهادة مختبر أولي — دراسة حالة متوفرة عند الطلب.",
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

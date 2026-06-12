"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Problem = () => {
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
    <section id="problem" className="py-[clamp(5rem,10vw,8rem)]" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center mb-14 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-honey">
            {t("Ce qui coûte cher", "ما يكلّف غالياً")}
          </span>
          <div className="font-space text-[clamp(3rem,7vw,5rem)] font-extrabold bg-gradient-to-br from-honey-500 to-honey-600 text-transparent bg-clip-text leading-none mb-2 flex items-baseline justify-center gap-4">
            <span>5 850</span> <span className="text-[clamp(1.5rem,3vw,2.5rem)]">{t("TND", "د.ت")}</span>
          </div>
          <div className="text-neutral-500 text-[1.15rem] font-medium">
            {t("perdus par apiculteur, chaque année.", "يخسرها كل نحّال، كل سنة.")}
          </div>
          <div className="text-neutral-400 text-[0.88rem] italic mt-2">
            {t(
              "Ce n'est pas une projection. C'est ce que nous avons calculé avec des apiculteurs de Jendouba, ruche par ruche.",
              "هذا ليس تخميناً. هذا ما حسبناه مع نحّالي جندوبة، خلية بخلية."
            )}
          </div>
          <p className="section-desc mx-auto mt-6 text-center">
            {t(
              "En Tunisie, plus de 13 000 apiculteurs déplacent leurs ruches en se fiant à l'intuition et au bouche-à-oreille. Le résultat : des trajets inutiles, des colonies stressées et des saisons perdues.",
              "في تونس، أكثر من 13,000 نحّال ينقلون خلاياهم بالحدس والشائعات. النتيجة: رحلات ضائعة، مستعمرات مُجهَدة، ومواسم مفقودة."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`group bg-white border border-cream-border rounded-xl p-6 lg:p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-honey-500 to-honey-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-lg bg-honey-50 flex items-center justify-center text-[1.3rem] text-honey-600 mb-5">
              <i className="ri-route-line"></i>
            </div>
            <h3 className="text-[1.05rem] text-forest-900 mb-2 font-bold font-inter">
              {t("Vous arrivez sur une zone déjà épuisée", "تصل لمنطقة مستنزفة")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Un plein de gasoil, une journée de route, et à l'arrivée : rien. La zone a été pâturée ou la floraison est terminée. Coût moyen : 150 à 300 TND par trajet.",
                "خزان وقود كامل، يوم سفر، وعند الوصول: لا شيء. المنطقة مرعية أو الإزهار انتهى. التكلفة: 150 إلى 300 دينار لكل رحلة."
              )}
            </p>
          </div>

          <div className={`group bg-white border border-cream-border rounded-xl p-6 lg:p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-honey-500 to-honey-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-lg bg-honey-50 flex items-center justify-center text-[1.3rem] text-honey-600 mb-5">
              <i className="ri-emotion-sad-line"></i>
            </div>
            <h3 className="text-[1.05rem] text-forest-900 mb-2 font-bold font-inter">
              {t("Vos abeilles paient le prix des mauvais déplacements", "نحلك يدفع ثمن التنقل الخاطئ")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Chaque déplacement mal ciblé cause un stress thermique aux colonies. Plus vous déplacez sans données, plus la mortalité augmente.",
                "كل تنقل غير مدروس يسبب إجهاداً حرارياً للمستعمرات. كلما نقلت بدون بيانات، زادت الوفيات."
              )}
            </p>
          </div>

          <div className={`group bg-white border border-cream-border rounded-xl p-6 lg:p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-honey-500 to-honey-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-lg bg-honey-50 flex items-center justify-center text-[1.3rem] text-honey-600 mb-5">
              <i className="ri-flower-line"></i>
            </div>
            <h3 className="text-[1.05rem] text-forest-900 mb-2 font-bold font-inter">
              {t("La floraison était là la semaine dernière", "الإزهار كان هنا الأسبوع الماضي")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Vous la manquez chaque année. Sans visibilité sur les cycles de floraison, la production chute de 10-12 kg à 4-6 kg par ruche et par saison.",
                "تفوتك كل سنة. بدون رؤية لدورات الإزهار، ينخفض الإنتاج من 10-12 كغ إلى 4-6 كغ لكل خلية."
              )}
            </p>
          </div>

          <div className={`group bg-white border border-cream-border rounded-xl p-6 lg:p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:400ms]`}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-honey-500 to-honey-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-lg bg-honey-50 flex items-center justify-center text-[1.3rem] text-honey-600 mb-5">
              <i className="ri-compass-discover-line"></i>
            </div>
            <h3 className="text-[1.05rem] text-forest-900 mb-2 font-bold font-inter">
              {t("Personne ne partage cette information. Jusqu'ici.", "لا أحد يشارك هذه المعلومة. حتى الآن.")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65]">
              {t(
                "Aucune donnée publique sur la santé de la végétation, la densité de ruches ou les conditions locales avant de se déplacer. Chaque apiculteur repart de zéro.",
                "لا بيانات متاحة عن صحة النباتات أو كثافة الخلايا أو الظروف المحلية قبل التنقل. كل نحّال يبدأ من الصفر."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

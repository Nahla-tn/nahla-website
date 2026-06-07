"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const HowItWorks = () => {
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
    <section id="how-it-works" className="py-[clamp(5rem,10vw,8rem)]" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-honey">
            {t("En pratique", "عملياً")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Comment un apiculteur utilise<br />Nahla avant chaque déplacement.
              </>,
              <>
                كيف يستخدم النحّال نحلة<br />قبل كل تنقل.
              </>
            )}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative mt-16 before:content-[''] md:before:absolute before:hidden md:before:block before:top-[40px] before:left-[12.5%] before:right-[12.5%] before:h-[2px] before:bg-gradient-to-r before:from-honey-500 before:via-forest-500 before:to-honey-500 before:opacity-30">
          
          <div className={`text-left rtl:text-right md:text-center relative px-0 md:px-4 flex flex-row max-md:rtl:flex-row-reverse md:flex-col items-start md:items-center gap-5 md:gap-0 transition-all duration-700 ease-in-out [transition-delay:100ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full md:mx-auto md:mb-6 flex items-center justify-center font-space text-[1.4rem] md:text-[1.8rem] font-bold text-white relative z-[2] bg-gradient-to-br from-forest-600 to-forest-700 shadow-[0_8px_24px_rgba(27,67,50,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(27,67,50,0.35)]">
              1
            </div>
            <div>
              <div className="text-[1rem] font-bold text-forest-900 mb-2">
                {t("Ouvrez la carte. Pointez.", "افتح الخريطة. أشر.")}
              </div>
              <div className="text-[0.83rem] text-neutral-500 leading-[1.6]">
                {t(
                  "Lancez Nahla et dirigez-vous vers la région cible. La carte affiche les données NDVI actualisées de votre gouvernorat.",
                  "شغّل نحلة وتوجّه نحو المنطقة المستهدفة. الخريطة تعرض بيانات NDVI المحدّثة لولايتك."
                )}
              </div>
            </div>
          </div>

          <div className={`text-left rtl:text-right md:text-center relative px-0 md:px-4 flex flex-row max-md:rtl:flex-row-reverse md:flex-col items-start md:items-center gap-5 md:gap-0 transition-all duration-700 ease-in-out [transition-delay:200ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full md:mx-auto md:mb-6 flex items-center justify-center font-space text-[1.4rem] md:text-[1.8rem] font-bold text-white relative z-[2] bg-gradient-to-br from-honey-500 to-honey-600 shadow-[0_8px_24px_rgba(212,160,23,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(212,160,23,0.35)]">
              2
            </div>
            <div>
              <div className="text-[1rem] font-bold text-forest-900 mb-2">
                {t("Nahla croise les données.", "نحلة تدمج البيانات.")}
              </div>
              <div className="text-[0.83rem] text-neutral-500 leading-[1.6]">
                {t(
                  "La plateforme analyse satellite, météo locale et retours terrain — sans que vous fassiez quoi que ce soit.",
                  "المنصة تحلل القمر الاصطناعي، الطقس المحلي والتقارير الميدانية — دون أن تفعل أي شيء."
                )}
              </div>
            </div>
          </div>

          <div className={`text-left rtl:text-right md:text-center relative px-0 md:px-4 flex flex-row max-md:rtl:flex-row-reverse md:flex-col items-start md:items-center gap-5 md:gap-0 transition-all duration-700 ease-in-out [transition-delay:300ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full md:mx-auto md:mb-6 flex items-center justify-center font-space text-[1.4rem] md:text-[1.8rem] font-bold text-white relative z-[2] bg-gradient-to-br from-forest-600 to-forest-700 shadow-[0_8px_24px_rgba(27,67,50,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(27,67,50,0.35)]">
              3
            </div>
            <div>
              <div className="text-[1rem] font-bold text-forest-900 mb-2">
                {t("Vert : partez. Rouge : attendez.", "أخضر: انطلق. أحمر: انتظر.")}
              </div>
              <div className="text-[0.83rem] text-neutral-500 leading-[1.6]">
                {t(
                  "Chaque zone reçoit un score de 0 à 100. Comparez, choisissez la meilleure, et prenez votre décision en confiance.",
                  "كل منطقة تحصل على درجة من 0 إلى 100. قارن، اختر الأفضل، واتخذ قرارك بثقة."
                )}
              </div>
            </div>
          </div>

          <div className={`text-left rtl:text-right md:text-center relative px-0 md:px-4 flex flex-row max-md:rtl:flex-row-reverse md:flex-col items-start md:items-center gap-5 md:gap-0 transition-all duration-700 ease-in-out [transition-delay:400ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full md:mx-auto md:mb-6 flex items-center justify-center font-space text-[1.4rem] md:text-[1.8rem] font-bold text-white relative z-[2] bg-gradient-to-br from-honey-500 to-honey-600 shadow-[0_8px_24px_rgba(212,160,23,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(212,160,23,0.35)]">
              4
            </div>
            <div>
              <div className="text-[1rem] font-bold text-forest-900 mb-2">
                {t("Déplacez. Récoltez. Revenez.", "انقل. احصد. عُد.")}
              </div>
              <div className="text-[0.83rem] text-neutral-500 leading-[1.6]">
                {t(
                  "Installez vos ruches au bon endroit. Récoltez davantage. Puis revenez consulter Nahla pour la prochaine transhumance.",
                  "ضع خلاياك في المكان الصحيح. احصد أكثر. ثم عُد لاستشارة نحلة للتنقل القادم."
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

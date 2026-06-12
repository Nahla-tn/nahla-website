"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../LanguageProvider";

type FAQItem = {
  id: number;
  question: { fr: React.ReactNode; ar: React.ReactNode };
  answer: { fr: React.ReactNode; ar: React.ReactNode };
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: {
      fr: "Qu'est-ce que Nahla ?",
      ar: "ما هي منصة نحلة ؟",
    },
    answer: {
      fr: "Nahla est une plateforme d'intelligence artificielle et d'analyse de données satellitaires (NDVI) dédiée à l'apiculture en Tunisie. Elle aide les apiculteurs à trouver les meilleurs emplacements pour la transhumance de leurs ruches.",
      ar: "نحلة هي منصة ذكاء اصطناعي وتحليل بيانات الأقمار الصناعية (NDVI) مخصصة لتربية النحل في تونس. تساعد النحالين في العثور على أفضل المواقع لتنقل خلاياهم.",
    },
  },
  {
    id: 2,
    question: {
      fr: "Comment fonctionne l'analyse NDVI pour les abeilles ?",
      ar: "كيف يعمل تحليل NDVI للنحل ؟",
    },
    answer: {
      fr: "L'Indice de Végétation par Différence Normalisée (NDVI) mesure la densité et la santé de la végétation. Nahla utilise les satellites Sentinel-2 pour analyser cet indice et croiser les données avec la météo locale, offrant ainsi un score précis sur le potentiel d'une zone pour les abeilles.",
      ar: "مؤشر الغطاء النباتي (NDVI) يقيس كثافة وصحة الغطاء النباتي. تستخدم نحلة أقمار Sentinel-2 لتحليل هذا المؤشر ومقاطعة البيانات مع الطقس المحلي، مما يوفر درجة دقيقة حول إمكانات المنطقة للنحل.",
    },
  },
  {
    id: 3,
    question: {
      fr: "Est-ce que l'application est gratuite ?",
      ar: "هل التطبيق مجاني ؟",
    },
    answer: {
      fr: "L'application propose des fonctionnalités de base gratuites. L'accès complet à l'intelligence artificielle et aux recommandations NDVI avancées est proposé via un abonnement abordable (à partir de 10 TND/mois). Les 50 premiers inscrits au programme pilote bénéficient d'un accès gratuit jusqu'en décembre.",
      ar: "يقدم التطبيق ميزات أساسية مجانية. يتم توفير الوصول الكامل إلى الذكاء الاصطناعي وتوصيات NDVI المتقدمة من خلال اشتراك ميسور التكلفة (بدءاً من 10 دينار/شهر). يحصل أول 50 مسجلاً في البرنامج التجريبي على وصول مجاني حتى ديسمبر.",
    },
  },
  {
    id: 4,
    question: {
      fr: "Où l'application est-elle disponible ?",
      ar: "أين يتوفر التطبيق ؟",
    },
    answer: {
      fr: "Nahla est actuellement en phase pilote et testée intensivement dans le gouvernorat de Jendouba. Cependant, la plateforme couvrira progressivement l'ensemble du territoire tunisien.",
      ar: "نحلة حالياً في المرحلة التجريبية ويتم اختبارها بشكل مكثف في ولاية جندوبة. ومع ذلك، ستغطي المنصة تدريجياً كامل الأراضي التونسية.",
    },
  },
];

export const FAQ = () => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section 
      id="faq" 
      className="py-[clamp(5rem,8vw,8rem)] relative"
      ref={sectionRef}
    >
      <div className="container max-w-[800px] relative z-[2]">
        <div className={`text-center mb-16 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-honey">
            {t("FAQ", "أسئلة شائعة")}
          </span>
          <h2 className="section-title text-forest-950">
            {t(
              "Questions fréquentes",
              "الأسئلة المتداولة"
            )}
          </h2>
          <p className="section-desc mx-auto">
            {t(
              "Tout ce que vous devez savoir sur la technologie et la plateforme Nahla.",
              "كل ما تحتاج لمعرفته حول تكنولوجيا ومنصة نحلة."
            )}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen 
                    ? "border-honey-300 shadow-[0_8px_30px_rgba(212,160,23,0.12)]" 
                    : "border-cream-border hover:border-honey-200"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left rtl:text-right bg-transparent border-none cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-[1.1rem] transition-colors ${isOpen ? "text-honey-600" : "text-forest-900"}`}>
                    {t(faq.question.fr, faq.question.ar)}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-honey-100 text-honey-600 rotate-180" : "bg-forest-50 text-forest-500"}`}>
                    <i className="ri-arrow-down-s-line text-xl leading-none"></i>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-neutral-600 leading-relaxed text-[0.95rem]">
                      {t(faq.answer.fr, faq.answer.ar)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

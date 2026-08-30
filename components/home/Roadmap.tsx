"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const Roadmap = () => {
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
    <section id="roadmap" className="py-[clamp(5rem,10vw,8rem)] bg-cream-dark" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-forest">
            {t("Transparence & Feuille de Route", "الشفافية وخارطة الطريق")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Ce qui est opérationnel aujourd&apos;hui.<br />Et ce que nous construisons.
              </>,
              <>
                ما يعمل اليوم في الميدان.<br />وما نحن بصدد بنائه.
              </>
            )}
          </h2>
          <p className="section-desc mx-auto">
            {t(
              "Nous appliquons une transparence totale avec la communauté apicole : nous distinguons clairement les outils déployés sur le terrain des fonctionnalités en cours de développement.",
              "نلتزم بالشفافية الكاملة مع مجتمع النحالين: نميّز بوضوح بين الميزات العاملة في الميدان اليوم وتلك التي لا تزال قيد التطوير."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          
          {/* TIER 1: DISPONIBLE MAINTENANT */}
          <div className={`bg-white border-2 border-emerald-600/30 rounded-2xl p-8 flex flex-col justify-between relative shadow-[0_12px_40px_rgba(16,185,129,0.08)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[0.72rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  {t("Disponible Maintenant", "متوفر الآن")}
                </span>
                <span className="text-[0.75rem] font-semibold text-neutral-400">
                  {t("Saison 2026", "موسم 2026")}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-bold text-forest-900 mb-2 font-inter">
                {t("Phase Pilote Terrain", "المرحلة الميدانية العاملة")}
              </h3>
              <p className="text-[0.85rem] text-neutral-500 mb-6 leading-[1.6]">
                {t(
                  "Fonctionnalités déjà développées, intégrées au backend et déployées dans l'application mobile Nahla auprès des premiers apiculteurs partenaires :",
                  "ميزات مطورة بالكامل ومتصلة بالخادم وتعمل داخل تطبيق الجوال لدى النحالين الشركاء:"
                )}
              </p>

              <ul className="space-y-3 text-[0.86rem] text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Registre complet : ruchers GPS, ruches & généalogie des reines", "سجل رقمي: مناحل GPS، خلايا وسلالات الملكات")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Fiches d'inspections sanitaires (couvain, reine, dépistage varroa)", "فحص صحي ميداني (الحضنة، الملكة، الفاروا)")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Enregistrement des miellées et statistiques de récoltes (kg)", "توثيق جني العسل وإحصائيات الإنتاج (كغ)")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Scanner QR Code pour identification rapide au rucher", "مسح رمز QR للتعرف الفوري على الخلية")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Radar satellite Sentinel-2 (NDVI) & météo apicole locale", "رادار الأقمار الصناعية NDVI وطقس محلي للنحل")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Alertes phytosanitaires et pesticides de voisinage", "تنبيهات المبيدات والصحة النباتية المجاورة")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Guides, vidéos et fiches conseils d'experts", "إرشادات، فيديوهات ونصائح الخبراء")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-checkbox-circle-fill text-emerald-600 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Mode hors-ligne avec synchronisation automatique", "وضع العمل بدون إنترنت مع مزامنة لاحقة")}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-cream-border text-[0.78rem] text-emerald-700 font-bold flex items-center gap-1.5">
              <i className="ri-shield-check-line"></i>
              <span>{t("En test actif · Jendouba & Béja", "قيد الاختبار الفعلي · جندوبة وباجة")}</span>
            </div>
          </div>

          {/* TIER 2: EN COURS DE DÉVELOPPEMENT */}
          <div className={`bg-white border border-cream-border rounded-2xl p-8 flex flex-col justify-between relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-[0.72rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <i className="ri-loader-2-line animate-spin"></i>
                  {t("En Développement", "قيد الإنجاز")}
                </span>
                <span className="text-[0.75rem] font-semibold text-neutral-400">
                  {t("Q4 2026 – 2027", "أواخر 2026 - 2027")}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-bold text-forest-900 mb-2 font-inter">
                {t("Prochaines Mises à Jour", "التحديثات القادمة")}
              </h3>
              <p className="text-[0.85rem] text-neutral-500 mb-6 leading-[1.6]">
                {t(
                  "Fonctionnalités planifiées dont l'architecture technique est arrêtée et qui arriveront au fil des prochaines versions de l'application :",
                  "ميزات مبرمجة ومحددة تقنياً ستصل تباعاً في الإصدارات القادمة للتطبيق:"
                )}
              </p>

              <ul className="space-y-3 text-[0.86rem] text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line text-amber-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Planificateur national de transhumance avec calcul de coût carburant", "مخطط الترحال الوطني مع حساب تكلفة الوقود")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line text-amber-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Alertes SMS directes en cas de pulvérisation agricole voisine", "تنبيهات SMS فورية عند رش مبيدات قريب")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line text-amber-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Export officiel PDF du registre d'élevage conforme aux normes vétérinaires", "تصدير رسمي للسجل متوافق مع متطلبات البياطرة")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line text-amber-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Extension de la couverture haute résolution à Bizerte, Siliana et Le Kef", "توسيع الرادار عالي الدقة لبنزرت، سليانة والكاف")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-time-line text-amber-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Module d'alerte météo prédictive à 14 jours", "تنبؤات طقس ممتدة لـ 14 يوماً")}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-cream-border text-[0.78rem] text-amber-700 font-bold flex items-center gap-1.5">
              <i className="ri-flask-line"></i>
              <span>{t("En phase de calibration · Arrive prochainement", "قيد الضبط الميداني · قريباً")}</span>
            </div>
          </div>

          {/* TIER 3: VISION STRATÉGIQUE */}
          <div className={`bg-white border border-cream-border rounded-2xl p-8 flex flex-col justify-between relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-forest-100 text-forest-800 text-[0.72rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <i className="ri-compass-3-line"></i>
                  {t("Vision Future", "رؤية مستقبلية")}
                </span>
                <span className="text-[0.75rem] font-semibold text-neutral-400">
                  {t("Horizon 2027+", "أفق 2027+")}
                </span>
              </div>

              <h3 className="text-[1.25rem] font-bold text-forest-900 mb-2 font-inter">
                {t("Horizons & Ambition", "الآفاق الاستراتيجية")}
              </h3>
              <p className="text-[0.85rem] text-neutral-500 mb-6 leading-[1.6]">
                {t(
                  "Axes stratégiques à moyen et long terme visant à bâtir une infrastructure technologique durable pour l'agriculture du monde arabe :",
                  "أهداف استراتيجية متوسطة وطويلة المدى لبناء بنية تحتية متطورة للقطاع الفلاحي في العالم العربي:"
                )}
              </p>

              <ul className="space-y-3 text-[0.86rem] text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <i className="ri-sparkling-line text-honey-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Marketplace de pollinisation B2B (mise en relation rémunérée apiculteurs / agriculteurs)", "سوق B2B لخدمات التلقيح بمقابل بين الفلاحين والنحالين")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-sparkling-line text-honey-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Modèles IA d'apiculture prédictive pour anticiper les miellées plusieurs semaines à l'avance", "نماذج ذكاء اصطناعي لتوقع مواسم الرحيق مسبقاً")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-sparkling-line text-honey-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Expansion régionale de l'infrastructure de données apicoles au Maghreb (Algérie, Maroc)", "التوسع الإقليمي في المغرب العربي (الجزائر والمغرب)")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="ri-sparkling-line text-honey-500 text-[1.1rem] mt-0.5 flex-shrink-0"></i>
                  <span>{t("Capteurs connectés IoT en ruche pour suivi de poids et température en continu", "حساسات إنترنت الأشياء IoT لمتابعة الوزن والحرارة")}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-cream-border text-[0.78rem] text-forest-700 font-bold flex items-center gap-1.5">
              <i className="ri-flag-line"></i>
              <span>{t("Feuille de route stratégique", "خارطة طريق مستقبلية")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

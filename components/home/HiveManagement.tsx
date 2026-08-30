"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const HiveManagement = () => {
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
    <section id="hive-management" className="py-[clamp(5rem,10vw,8rem)] bg-white" ref={sectionRef}>
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label label-honey">
            {t("Gestion d'Élevage & Quotidien", "إدارة المناحل والعمل اليومي")}
          </span>
          <h2 className="section-title text-forest-900">
            {t(
              <>
                Bien plus qu&apos;un satellite.<br />Le carnet d&apos;élevage complet de votre rucher.
              </>,
              <>
                أكثر من مجرد قمر صناعي.<br />سجل التربية الرقمي الشامل لمناحلك.
              </>
            )}
          </h2>
          <p className="section-desc mx-auto">
            {t(
              "Nahla remplace vos carnets papier et vos notes éparpillées par une application mobile pensée pour les conditions réelles du terrain apicole.",
              "نحلة تعوض الدفاتر الورقية والملاحظات المبعثرة بتطبيق جوال مصمم خصيصاً لظروف العمل الميداني في المناحل."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1: Ruchers, Ruches & Reines */}
          <div className={`bg-cream rounded-xl border border-cream-border p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:100ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#FFF3E0] to-[#FFE082] text-honey-600">
              <i className="ri-archive-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Ruchers, Ruches & Reines", "المناحل، الخلايا والملكات")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Cartographiez vos ruchers avec leurs coordonnées GPS. Tenez un inventaire individuel de chaque ruche et suivez l'âge, la couleur de marquage et la lignée de chaque reine.",
                "وثّق مواقع مناحلك بإحداثيات GPS الدقيقة. احتفظ بجرد مفصل لكل خلية وتابع عمر الملكات، لون الترقيم وسلالة كل ملكة."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Ruchers GPS", "مناحل GPS")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Fiches Ruches", "بطاقات الخلايا")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Suivi Reines", "تتبع الملكات")}</span>
            </div>
          </div>

          {/* Card 2: Inspections Sanitaires & Varroa */}
          <div className={`bg-cream rounded-xl border border-cream-border p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:200ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] text-forest-500">
              <i className="ri-heart-pulse-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Inspections & Santé Varroa", "الفحص الصحي ومكافحة الفاروا")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Remplissez votre fiche de visite en quelques secondes : ponte fraîche, couvain operculé, réserves de miel/pollen, dépistage du varroa et historique complet des traitements vétérinaires.",
                "سجل زياراتك الميدانية في ثوانٍ: وجود الحضنة المفتوحة والمغلقة، مخزون العسل وحبوب اللقاح، نسبة الفاروا وسجل المعالجات البيطرية."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Checklist Visite", "قائمة الفحص")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Dépistage Varroa", "مراقبة الفاروا")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Traitements", "المعالجات")}</span>
            </div>
          </div>

          {/* Card 3: Récoltes & Production de Miel */}
          <div className={`bg-cream rounded-xl border border-cream-border p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:300ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3] text-honey-600">
              <i className="ri-scales-3-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Récoltes & Rendements", "جني العسل والإنتاجية")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Enregistrez chaque miellée avec précision : kilos extraits par ruche, type floral (eucalyptus, romarin, thym), cadres récoltés et réserves laissées pour l'hivernage. Visualisez vos meilleurs rendements.",
                "وثّق كل فرز عسل بدقة: الكيلوغرامات لكل خلية، نوع الزهرة (كاليتوس، إكليل، زعتر)، الإطارات المأخوذة والمخزون المتروك للتشتية."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Kilos par Ruche", "كغ لكل خلية")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Variétés Florales", "أنواع العسل")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Statistiques", "إحصائيات")}</span>
            </div>
          </div>

          {/* Card 4: Scanner QR Code Ruches */}
          <div className={`bg-cream rounded-xl border border-cream-border p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-honey-300 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} [transition-delay:400ms]`}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[1.5rem] mb-6 bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] text-[#00695C]">
              <i className="ri-qr-code-line"></i>
            </div>
            <h3 className="text-[1.15rem] text-forest-900 mb-2.5 font-bold font-inter">
              {t("Scanner QR Code Terrain", "مسح رمز QR الميداني")}
            </h3>
            <p className="text-[0.88rem] text-neutral-500 leading-[1.65] mb-4">
              {t(
                "Chaque ruche dispose de son identifiant QR Code. Visez simplement avec l'appareil photo du téléphone pour afficher son historique complet sans enlever vos gants ni chercher son numéro.",
                "كل خلية تحمل رمز QR خاص بها. وجّه كاميرا الهاتف لفتح سجل الخلية فوراً دون نزع القفازات أو البحث عن رقمها يدوياً في الميدان."
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Scan Caméra", "مسح بالكاميرا")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Mains Libres", "سهل وسريع")}</span>
              <span className="text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-cream-border">{t("Mode Déconnecté", "بدون إنترنت")}</span>
            </div>
          </div>
        </div>

        {/* Spotlight Banner: Conseils & Formations Apicoles */}
        <div className={`mt-10 bg-forest-950 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden border border-white/10 transition-all duration-700 ease-in-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-honey-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-[2]">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 bg-honey-500/20 text-honey-400 text-[0.78rem] font-bold px-3.5 py-1.5 rounded-full mb-4 border border-honey-500/30">
                <i className="ri-video-line"></i>
                <span>{t("Académie & Conseils d'Experts", "أكاديمية ونصوص الخبراء")}</span>
              </div>
              <h3 className="text-[1.35rem] md:text-[1.6rem] font-bold font-inter text-white mb-3">
                {t(
                  "Des guides pratiques, vidéos et fiches techniques pour chaque saison apicole.",
                  "إرشادات عملية، فيديوهات تدريبية وبطاقات تقنية لكل موسم نحلي."
                )}
              </h3>
              <p className="text-[0.92rem] text-white/75 leading-[1.7]">
                {t(
                  "Retrouvez dans l'application des tutoriels exclusifs et des conseils rédigés par des agronomes et maîtres-apiculteurs tunisiens : préparation aux transhumances, gestion de l'essaimage, nutrition de relais et protocoles de protection sanitaire.",
                  "استفد في التطبيق من فيديوهات حصرية ونصائح محررة من مهندسين زراعيين ونحالين محترفين في تونس: الإعداد للترحال، تفادي التطريد، التغذية التكميلية وبروتوكولات الوقاية الصحية."
                )}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-3 min-w-[220px]">
              <div className="flex items-center gap-2.5 text-[0.85rem] text-white/85">
                <i className="ri-check-line text-honey-400 font-bold"></i>
                <span>{t("Vidéos pas-à-pas", "فيديوهات تطبيقية")}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.85rem] text-white/85">
                <i className="ri-check-line text-honey-400 font-bold"></i>
                <span>{t("Calendrier saisonnier", "روزنامة موسمية")}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.85rem] text-white/85">
                <i className="ri-check-line text-honey-400 font-bold"></i>
                <span>{t("Protocoles sanitaires", "بروتوكولات صحية")}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[0.85rem] text-white/85">
                <i className="ri-check-line text-honey-400 font-bold"></i>
                <span>{t("Inclus dans Nahla Premium", "مشمول في نحلة بريميوم")}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

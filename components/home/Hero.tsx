"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-[100svh] flex items-center bg-forest-950 relative overflow-hidden pt-[calc(72px+3rem)] pb-12 px-6 md:px-12">
      <div className="hero-gradient absolute inset-0 pointer-events-none z-0"></div>
      <div className="hero-grid-bg"></div>
      
      <div className="max-w-[1140px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[2]">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-full px-4 py-1.5 text-[0.78rem] font-semibold text-white/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-300 animate-blink"></span>
            <span>{t("Testé sur le terrain · Jendouba, Tunisie", "تم اختباره ميدانياً · جندوبة، تونس")}</span>
          </div>
          
          <div className="text-[0.85rem] font-medium text-honey-400 tracking-[0.08em] uppercase mb-4 font-space">
            Guiding Bees to Better Fields
          </div>
          
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] text-white leading-[1.05] mb-6 font-extrabold font-space">
            {t(
              <>
                Arrêtez de déplacer vos{" "}
                <span className="bg-gradient-to-br from-honey-400 to-honey-300 text-transparent bg-clip-text">ruches</span> au hasard.
              </>,
              <>
                توقّف عن نقل{" "}
                <span className="bg-gradient-to-br from-honey-400 to-honey-300 text-transparent bg-clip-text">خلاياك</span> بالتخمين.
              </>
            )}
          </h1>
          
          <p className="text-[1.15rem] text-white/70 max-w-[520px] mx-auto lg:mx-0 leading-[1.75] mb-10">
            {t(
              "Nahla analyse le terrain avant vous — végétation, météo, floraisons — et vous dit exactement où aller. Avant que vous ne chargiez le camion.",
              "نحلة تحلل الأرض قبلك — غطاء نباتي، طقس، إزهار — وتخبرك بالضبط أين تذهب. قبل أن تحمّل الشاحنة."
            )}
          </p>
          
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link href="/#cta" className="btn btn-primary btn-lg">
              <i className="ri-play-circle-line"></i>
              <span>{t("Demander une démo gratuite", "اطلب عرضاً مجانياً")}</span>
            </Link>
            <Link href="/#how-it-works" className="btn btn-secondary btn-lg">
              <span>{t("Voir comment ça marche", "شاهد كيف يعمل")}</span>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0">
          <div className="float-card animate-floatc absolute top-[15%] -left-[55px] bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl px-3.5 py-2.5 text-[0.72rem] text-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hidden lg:block">
            <i className="ri-radar-line text-honey-400 mr-1 rtl:mr-0 rtl:ml-1"></i> 
            <span>{t("NDVI Sentinel-2", "NDVI Sentinel-2")}</span>
          </div>
          <div className="float-card animate-floatc absolute bottom-[25%] -right-[45px] bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-xl px-3.5 py-2.5 text-[0.72rem] text-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hidden lg:block [animation-delay:1.5s]">
            <i className="ri-temp-hot-line text-honey-400 mr-1 rtl:mr-0 rtl:ml-1"></i> 
            <span>{t("Météo locale", "طقس محلي")}</span>
          </div>

          <div className="w-[200px] h-[400px] lg:w-[280px] lg:h-[560px] rounded-[40px] bg-forest-800 relative shadow-[0_60px_120px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[24px] before:bg-forest-950 before:rounded-b-[16px] before:z-[5]" role="img" aria-label="Aperçu de l'application Nahla">
            <img src="/app.png" alt="Nahla App Screen" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-forest-700 to-forest-800">
              <div className="pt-8 px-5 pb-3 text-center text-[0.75rem] text-white/80 font-semibold">
                🐝 Nahla
              </div>
              <div className="flex-1 m-2 rounded-[16px] relative overflow-hidden bg-gradient-to-br from-[#1a5c3a] via-[#0d3321] to-forest-600">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                <div className="absolute rounded-full animate-zpulse w-[50px] h-[50px] bg-honey-400/40 top-[25%] left-[30%] shadow-[0_0_20px_rgba(212,160,23,0.3)]"></div>
                <div className="absolute rounded-full animate-zpulse w-[35px] h-[35px] bg-forest-300/50 top-[50%] left-[60%] [animation-delay:0.8s]"></div>
                <div className="absolute rounded-full animate-zpulse w-[25px] h-[25px] bg-honey-300/50 top-[40%] left-[20%] [animation-delay:1.5s]"></div>
                <div className="absolute rounded-full animate-zpulse w-[40px] h-[40px] bg-forest-400/40 top-[65%] left-[45%] [animation-delay:2s]"></div>
                
                <div className="absolute top-[30%] left-[42%] w-[14px] h-[14px] bg-honey-400 rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(212,160,23,0.3),0_2px_8px_rgba(0,0,0,0.3)] z-[2]"></div>
              </div>
              <div className="px-3 pb-5 pt-2.5 flex flex-col gap-2">
                <div className="bg-white/10 backdrop-blur-[12px] border border-white/5 rounded-[14px] py-2.5 px-4 flex justify-between items-center">
                  <div>
                    <div className="text-[0.62rem] text-white/70 font-medium">Score NDVI</div>
                    <div className="text-[1.2rem] font-extrabold text-honey-400 font-space">84<span className="text-[0.7rem] opacity-60">/100</span></div>
                  </div>
                  <div className="text-[0.58rem] bg-forest-300/20 text-forest-300 px-2.5 py-1 rounded-full font-semibold">
                    {t("✓ Recommandé", "✓ موصى")}
                  </div>
                </div>
                <div className="h-[5px] bg-white/10 rounded-[3px] overflow-hidden">
                  <div className="h-full rounded-[3px] bg-gradient-to-r from-honey-500 to-honey-300 animate-bargrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

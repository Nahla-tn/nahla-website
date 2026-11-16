"use client";

import React from "react";
import { SectionLink } from "../SectionLink";
import Image from "next/image";
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
                Arrêt���q�^
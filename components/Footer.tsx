"use client";

import Link from "next/link";
import { SectionLink } from "./SectionLink";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 px-6 py-12 md:px-12 md:pt-12 md:pb-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-12 pb-10 border-b border-white/10">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2">
              <Image
                src="/nahla-logo.svg"
                alt="Nahla"
                width={28}
                height={28}
                className="w-7 h-7 brightness-0 invert"
              />
              <span className="text-white font-space font-bold text-[1.2rem]">
                Nahla
              </span>
            </div>
            <p className="text-neutral-500 text-[0.85rem] leading-[1.6] mt-3">
              {t(
                "Guiding Bees to Better Fields — plateforme d'intelligence apicole pour la Tunisie.",
                "Guiding Bees to Better Fields — منصة ذكاء نحلي لتونس.",
              )}
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-white/40 text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-4 font-inter">
                {t("Pr���q�^
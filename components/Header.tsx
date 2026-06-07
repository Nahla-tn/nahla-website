"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream-border shadow-[0_1px_12px_rgba(0,0,0,0.06)] bg-[#f9f6ef]/85 backdrop-blur-[20px]"
          : "border-b border-transparent bg-[#f9f6ef]/85 backdrop-blur-[20px]"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-[1140px] mx-auto w-full flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-space font-bold text-[1.4rem] text-forest-600"
          aria-label="Nahla — retour à l'accueil"
        >
          <img src="/nahla-logo.svg" alt="Nahla logo" className="w-9 h-9" />
          <span>Nahla</span>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`md:flex items-center gap-[clamp(1.2rem,3vw,2.5rem)] ${
            menuOpen
              ? "flex flex-col absolute top-[72px] left-0 right-0 bg-[#f9f6ef]/98 backdrop-blur-[20px] p-8 gap-6 border-b border-cream-border animate-[slideD_0.3s_ease]"
              : "hidden"
          }`}
          role="navigation"
        >
          <Link
            href="/#problem"
            className="text-[0.88rem] font-medium text-neutral-600 hover:text-forest-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-honey-500 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t("Ce qui coûte cher", "ما يكلّف غالياً")}
          </Link>
          <Link
            href="/#how-it-works"
            className="text-[0.88rem] font-medium text-neutral-600 hover:text-forest-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-honey-500 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t("Comment ça marche", "كيف يعمل")}
          </Link>
          <Link
            href="/#features"
            className="text-[0.88rem] font-medium text-neutral-600 hover:text-forest-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-honey-500 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t("Fonctionnalités", "المميزات")}
          </Link>
          <Link
            href="/#pricing"
            className="text-[0.88rem] font-medium text-neutral-600 hover:text-forest-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-honey-500 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t("Tarifs", "الأسعار")}
          </Link>
          <Link
            href="/about"
            className="text-[0.88rem] font-medium text-neutral-600 hover:text-forest-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-honey-500 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {t("À Propos", "من نحن")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex bg-cream-dark rounded-full p-[3px] border border-cream-border"
            role="group"
            aria-label="Langue"
          >
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full text-[0.78rem] font-semibold transition-all duration-250 ${
                language === "fr"
                  ? "bg-white text-forest-600 shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                  : "text-neutral-500 hover:text-forest-600"
              }`}
              aria-pressed={language === "fr"}
              aria-label="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-3 py-1 rounded-full text-[0.78rem] font-semibold transition-all duration-250 ${
                language === "ar"
                  ? "bg-white text-forest-600 shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                  : "text-neutral-500 hover:text-forest-600"
              }`}
              aria-pressed={language === "ar"}
              aria-label="العربية"
            >
              عربي
            </button>
          </div>
          <Link
            href="/#cta"
            className="hidden md:inline-block bg-forest-600 text-white px-5 py-2 rounded-full text-[0.85rem] font-semibold transition-all duration-250 hover:bg-forest-500 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(27,67,50,0.3)]"
          >
            {t("Demander une démo", "اطلب عرضاً")}
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className="block w-[22px] h-[2px] bg-forest-600 rounded-[2px] transition-all duration-300"></span>
          <span className="block w-[22px] h-[2px] bg-forest-600 rounded-[2px] transition-all duration-300"></span>
          <span className="block w-[22px] h-[2px] bg-forest-600 rounded-[2px] transition-all duration-300"></span>
        </button>
      </div>
    </nav>
  );
};

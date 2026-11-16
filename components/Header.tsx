"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLink } from "./SectionLink";
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
          aria-label="Nahla â€” retour Ã  l'accueil"
        >
          <Image src="/nahla-logo.svg" alt="Nahla logo" width={36} height={36} className="w-9 h-9" />
          <span>Nahla</span>
      ¶»§q«^
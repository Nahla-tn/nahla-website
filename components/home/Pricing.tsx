"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionLink } from "../SectionLink";
import { useLanguage } from "../LanguageProvider";

export const Pricing = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      className="py-[clamp(5rem,10vw,8rem)] relative overflow-hidden bg-forest-950 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,0.06)_0%,transparent_50%)]"
      ref={sectionRef}
    >
      <div className="max-w-[1140px] mx-auto w-full px-6 md:px-12">
        <div
          className={`text-center transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-light">
            {t("Tarifs apiculteurs", "أسعار النحّالين")}
          </span>
          <h2 className="section-title text-white">
            {t(
     ���q�^
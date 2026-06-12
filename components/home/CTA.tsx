"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export const CTA = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    status: "idle", // idle, loading, success, error
    errors: { name: false, email: false, phone: false, region: false },
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const region = formData.get("governorate") as string;

    const errors = {
      name: !name.trim(),
      email: !email || !/^\S+@\S+\.\S+$/.test(email),
      phone: !phone.trim(),
      region: !region.trim(),
    };

    setFormState((prev) => ({ ...prev, errors }));

    if (Object.values(errors).some(Boolean)) return;

    setFormState((prev) => ({ ...prev, status: "loading" }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState((prev) => ({ ...prev, status: "success" }));
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Server error");
      }
    } catch {
      setFormState((prev) => ({ ...prev, status: "error" }));
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, status: "idle" }));
      }, 3000);
    }
  };

  const handleInputChange = (field: string) => {
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [field]: false },
    }));
  };

  return (
    <section
      id="cta"
      className="py-[clamp(5rem,10vw,8rem)] bg-gradient-to-br from-forest-700 to-forest-900 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute -top-[50%] -right-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,160,23,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-[2] px-6 md:px-12">
        <div
          className={`transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label label-light">
            {t("Places limitées", "أماكن محدودة")}
          </span>
          <h2 className="text-white text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold mb-4 font-space">
            {t(
              <>
                Nous sélectionnons 50 apiculteurs
                <br />
                pour la saison 2026–2027.
              </>,
              <>
                نختار 50 نحّالاً
                <br />
                لموسم 2026–2027.
              </>,
            )}
          </h2>
          <p className="text-white/70 text-[1rem] leading-[1.7] mb-6">
            {t(
              "Le programme pilote est limité. Les 50 premiers inscrits bénéficient d'un accès gratuit jusqu'en décembre et d'un suivi personnel de l'équipe.",
              "البرنامج التجريبي محدود. أول 50 مسجّل يستفيدون من وصول مجاني حتى ديسمبر ومتابعة شخصية من الفريق.",
            )}
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <div className="flex items-center gap-2.5 text-white/75 text-[0.9rem] rtl:flex-row-reverse rtl:justify-end">
              <i className="ri-mail-line text-honey-400 text-[1.1rem]"></i>
              <a
                href="mailto:support@nahla.tn"
                className="hover:text-honey-400 transition-colors"
              >
                support@nahla.tn
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-white/75 text-[0.9rem] rtl:flex-row-reverse rtl:justify-end">
              <i className="ri-phone-line text-honey-400 text-[1.1rem]"></i>
              <a
                href="tel:+21658025694"
                className="hover:text-honey-400 transition-colors"
                dir="ltr"
              >
                +216 58 025 694
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-white/75 text-[0.9rem] rtl:flex-row-reverse rtl:justify-end">
              <i className="ri-map-pin-2-line text-honey-400 text-[1.1rem]"></i>
              <span>
                {t(
                  "Jendouba, Route du 9 Avril — Tunisie",
                  "جندوبة، نهج 9 أفريل — تونس",
                )}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-in-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-3xl p-10">
            <div className="text-white text-[1.2rem] font-bold mb-6 text-left rtl:text-right">
              {t(
                "📩 Rejoindre le programme pilote",
                "📩 انضم للبرنامج التجريبي",
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex flex-col gap-1.5 mb-4 text-left rtl:text-right">
                <label
                  htmlFor="form-name"
                  className="text-white/70 text-[0.78rem] font-medium"
                >
                  {t("Prénom et Nom", "الاسم الكامل")}
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Ahmed Ben Salah"
                  required
                  onChange={() => handleInputChange("name")}
                  className={`bg-white/5 border ${formState.errors.name ? "border-[#ef4444]" : "border-white/10"} rounded-xl px-4 py-3 text-white text-[0.9rem] outline-none transition-colors focus:border-honey-500 focus:bg-white/10 placeholder:text-white/30`}
                />
                {formState.errors.name && (
                  <div className="text-[0.72rem] text-[#ef4444] mt-1">
                    {t("Veuillez entrer votre nom.", "يرجى إدخال اسمك.")}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 mb-4 text-left rtl:text-right">
                <label
                  htmlFor="form-phone"
                  className="text-white/70 text-[0.78rem] font-medium"
                >
                  {t("Téléphone", "الهاتف")}
                </label>
                <input
                  type="tel"
                  id="form-phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+216 XX XXX XXX"
                  required
                  onChange={() => handleInputChange("phone")}
                  className={`bg-white/5 border ${formState.errors.phone ? "border-[#ef4444]" : "border-white/10"} rounded-xl px-4 py-3 text-white text-[0.9rem] outline-none transition-colors focus:border-honey-500 focus:bg-white/10 placeholder:text-white/30 text-left`}
                  dir="ltr"
                />
                {formState.errors.phone && (
                  <div className="text-[0.72rem] text-[#ef4444] mt-1">
                    {t("Veuillez entrer votre numéro.", "يرجى إدخال رقمك.")}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 mb-4 text-left rtl:text-right">
                <label
                  htmlFor="form-email"
                  className="text-white/70 text-[0.78rem] font-medium"
                >
                  {t("Adresse Email", "البريد الإلكتروني")}
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  autoComplete="email"
                  placeholder="ahmed@example.com"
                  required
                  onChange={() => handleInputChange("email")}
                  className={`bg-white/5 border ${formState.errors.email ? "border-[#ef4444]" : "border-white/10"} rounded-xl px-4 py-3 text-white text-[0.9rem] outline-none transition-colors focus:border-honey-500 focus:bg-white/10 placeholder:text-white/30 text-left`}
                  dir="ltr"
                />
                {formState.errors.email && (
                  <div className="text-[0.72rem] text-[#ef4444] mt-1">
                    {t("Veuillez entrer un email valide.", "يرجى إدخال بريد إلكتروني صالح.")}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 mb-4 text-left rtl:text-right">
                <label
                  htmlFor="form-region"
                  className="text-white/70 text-[0.78rem] font-medium"
                >
                  {t("Gouvernorat", "الولاية")}
                </label>
                <input
                  type="text"
                  id="form-region"
                  name="governorate"
                  autoComplete="address-level1"
                  placeholder="Jendouba, Béja…"
                  required
                  onChange={() => handleInputChange("region")}
                  className={`bg-white/5 border ${formState.errors.region ? "border-[#ef4444]" : "border-white/10"} rounded-xl px-4 py-3 text-white text-[0.9rem] outline-none transition-colors focus:border-honey-500 focus:bg-white/10 placeholder:text-white/30`}
                />
                {formState.errors.region && (
                  <div className="text-[0.72rem] text-[#ef4444] mt-1">
                    {t(
                      "Veuillez entrer votre gouvernorat.",
                      "يرجى إدخال ولايتك.",
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`btn btn-lg w-full justify-center mt-2 !whitespace-normal min-h-[3.5rem] leading-[1.4] ${
                  formState.status === "success"
                    ? "bg-forest-500 text-white"
                    : formState.status === "error"
                      ? "bg-[#dc2626] text-white"
                      : "btn-primary"
                } ${formState.status === "loading" ? "opacity-70 pointer-events-none" : ""}`}
                disabled={
                  formState.status === "loading" ||
                  formState.status === "success"
                }
              >
                {formState.status === "loading" ? (
                  <>
                    {t(
                      <>
                        <i className="ri-loader-4-line ri-spin"></i> Envoi en
                        cours...
                      </>,
                      <>
                        <i className="ri-loader-4-line ri-spin"></i> جاري
                        الإرسال...
                      </>,
                    )}
                  </>
                ) : formState.status === "success" ? (
                  <>
                    {t(
                      "✓ Merci ! Nous vous appellerons bientôt.",
                      "✓ شكراً! سنتواصل معك قريباً.",
                    )}
                  </>
                ) : formState.status === "error" ? (
                  <>{t("✗ Erreur. Réessayez.", "✗ خطأ. حاول مرة أخرى.")}</>
                ) : (
                  <>{t("Réserver ma place →", "→ احجز مكاني")}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

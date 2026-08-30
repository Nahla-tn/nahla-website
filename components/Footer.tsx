"use client";

import Link from "next/link";
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
                {t("Produit", "المنتج")}
              </h4>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/#features"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Fonctionnalités", "المميزات")}
                </Link>
                <Link
                  href="/#pricing"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Tarifs et abonnements", "الأسعار والاشتراكات")}
                </Link>
                <Link
                  href="/#how-it-works"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Comment ça marche", "كيف يعمل")}
                </Link>
                <Link
                  href="/#roadmap"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Feuille de route", "خارطة الطريق")}
                </Link>
                <Link
                  href="/#cta"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Programme pilote", "البرنامج التجريبي")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white/40 text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-4 font-inter">
                {t("Entreprise", "الشركة")}
              </h4>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/about"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("À Propos de Nahla", "عن نحلة")}
                </Link>
                <Link
                  href="/privacy"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Confidentialité", "الخصوصية")}
                </Link>
                <Link
                  href="/terms"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  {t("Conditions", "الشروط")}
                </Link>
                <a
                  href="mailto:support@nahla.tn"
                  className="text-neutral-400 text-[0.88rem] transition-colors hover:text-white"
                >
                  Contact — support@nahla.tn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 flex-wrap gap-4 text-center">
          <div className="text-neutral-600 text-[0.8rem]">
            © 2026 Nahla · Startup Act Tunisie ·{" "}
            {t("Tous droits réservés.", "جميع الحقوق محفوظة.")}
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/company/nahla-%D9%86%D8%AD%D9%84%D8%A9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nahla sur LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 text-base transition-all duration-250 hover:bg-honey-500 hover:text-forest-950"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590918741775"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nahla sur Facebook"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 text-base transition-all duration-250 hover:bg-honey-500 hover:text-forest-950"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/nahlatn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nahla sur Instagram"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 text-base transition-all duration-250 hover:bg-honey-500 hover:text-forest-950"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.youtube.com/@Nahla-tn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nahla sur YouTube"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 text-base transition-all duration-250 hover:bg-honey-500 hover:text-forest-950"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

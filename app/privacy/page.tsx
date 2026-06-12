"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  return (
    <>

      
      <Header />
      
      <main id="main" className="pt-[72px] min-h-[80vh]">
        <div className="max-w-[800px] mx-auto px-6 py-16 md:py-24">
          <h1 className="font-space text-[2.5rem] text-forest-600 mb-2 tracking-[-0.03em] font-bold">
            {t("Politique de Confidentialité", "سياسة الخصوصية")}
          </h1>
          <p className="text-[0.88rem] text-neutral-500 mb-12">
            {t("Dernière mise à jour : 1er juin 2026", "آخر تحديث: 1 يونيو 2026")}
          </p>

          <div className={`text-neutral-600 text-[0.95rem] leading-[1.75] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("1. Introduction", "1. مقدمة")}
            </h2>
            <p className="mb-4">
              {t(
                "Nahla (« nous », « notre », « nos ») s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez notre plateforme et notre application mobile.",
                "تلتزم نحلة (\"نحن\"، \"لنا\") بحماية خصوصية مستخدميها. تشرح سياسة الخصوصية هذه كيف نقوم بجمع، استخدام، تخزين وحماية بياناتك الشخصية عند استخدام منصتنا وتطبيقنا."
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("2. Données Collectées", "2. البيانات المجمعة")}
            </h2>
            <p className="mb-4">{t("Nous collectons les catégories de données suivantes :", "نقوم بجمع الفئات التالية من البيانات:")}</p>
            <ul className={`mb-6 ${language === 'ar' ? 'mr-6 list-disc' : 'ml-6 list-disc'}`}>
              <li className="mb-2"><strong>{t("Données d'identification :", "بيانات التعريف:")}</strong> {t("nom, prénom, adresse email, numéro de téléphone.", "الاسم، اللقب، البريد الإلكتروني، رقم الهاتف.")}</li>
              <li className="mb-2"><strong>{t("Données professionnelles :", "البيانات المهنية:")}</strong> {t("nombre de ruches, gouvernorat d'activité, type d'apiculture pratiquée.", "عدد الخلايا، ولاية النشاط، نوع التربية الممارسة.")}</li>
              <li className="mb-2"><strong>{t("Données de géolocalisation :", "بيانات الموقع الجغرافي:")}</strong> {t("position GPS pour le fonctionnement de la carte interactive (uniquement avec votre consentement explicite).", "موقع GPS لتشغيل الخريطة التفاعلية (فقط بموافقتك الصريحة).")}</li>
              <li className="mb-2"><strong>{t("Données d'utilisation :", "بيانات الاستخدام:")}</strong> {t("interactions avec l'application, zones consultées, recommandations utilisées.", "التفاعلات مع التطبيق، المناطق التي تم الرجوع إليها، التوصيات المستخدمة.")}</li>
              <li className="mb-2"><strong>{t("Données techniques :", "البيانات الفنية:")}</strong> {t("type d'appareil, version du système d'exploitation, identifiant unique de l'appareil.", "نوع الجهاز، إصدار نظام التشغيل، المعرف الفريد للجهاز.")}</li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("3. Utilisation des Données", "3. استخدام البيانات")}
            </h2>
            <p className="mb-4">{t("Vos données sont utilisées exclusivement pour :", "تستخدم بياناتك حصرياً من أجل:")}</p>
            <ul className={`mb-6 ${language === 'ar' ? 'mr-6 list-disc' : 'ml-6 list-disc'}`}>
              <li className="mb-2">{t("Fournir les services de recommandation et d'intelligence apicole.", "تقديم خدمات التوصية والذكاء النحلي.")}</li>
              <li className="mb-2">{t("Améliorer la précision de nos algorithmes de scoring NDVI.", "تحسين دقة خوارزميات التسجيل NDVI الخاصة بنا.")}</li>
              <li className="mb-2">{t("Personnaliser votre expérience sur la plateforme.", "تخصيص تجربتك على المنصة.")}</li>
              <li className="mb-2">{t("Vous envoyer des alertes météo et phytosanitaires pertinentes.", "إرسال تنبيهات الطقس والصحة النباتية ذات الصلة لك.")}</li>
              <li className="mb-2">{t("Communiquer avec vous concernant votre compte et nos services.", "التواصل معك بخصوص حسابك وخدماتنا.")}</li>
              <li className="mb-2">{t("Améliorer et développer notre plateforme.", "تحسين وتطوير منصتنا.")}</li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("4. Partage des Données", "4. مشاركة البيانات")}
            </h2>
            <p className="mb-4">{t("Nous ne vendons jamais vos données personnelles. Nous pouvons partager des données anonymisées et agrégées avec :", "نحن لا نبيع أبداً بياناتك الشخصية. يمكننا مشاركة بيانات مجهولة المصدر ومجمعة مع:")}</p>
            <ul className={`mb-6 ${language === 'ar' ? 'mr-6 list-disc' : 'ml-6 list-disc'}`}>
              <li className="mb-2">{t("Nos prestataires techniques (hébergement, infrastructure).", "مقدمي الخدمات الفنية لدينا (الاستضافة، البنية التحتية).")}</li>
              <li className="mb-2">{t("Des organismes de recherche agricole, uniquement sous forme anonymisée.", "منظمات البحوث الزراعية، فقط في شكل مجهول.")}</li>
              <li className="mb-2">{t("Les autorités compétentes, si la loi l'exige.", "السلطات المختصة، إذا طلب القانون ذلك.")}</li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("5. Sécurité des Données", "5. أمن البيانات")}
            </h2>
            <p className="mb-4">{t("Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement des données en transit (HTTPS/TLS), accès restreint aux données personnelles, sauvegarde régulière et sécurisée.", "نحن ننفذ تدابير فنية وتنظيمية مناسبة لحماية بياناتك: تشفير البيانات أثناء النقل (HTTPS/TLS)، وصول مقيد للبيانات الشخصية، نسخ احتياطي منتظم وآمن.")}</p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("6. Conservation des Données", "6. الاحتفاظ بالبيانات")}
            </h2>
            <p className="mb-4">{t("Vos données personnelles sont conservées aussi longtemps que votre compte est actif. Après suppression de votre compte, nous conservons les données anonymisées à des fins statistiques et de recherche.", "يتم الاحتفاظ ببياناتك الشخصية طالما حسابك نشط. بعد حذف حسابك، نحتفظ بالبيانات المجهولة لأغراض إحصائية وبحثية.")}</p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("7. Vos Droits", "7. حقوقك")}
            </h2>
            <p className="mb-4">{t("Conformément à la législation tunisienne sur la protection des données personnelles (Loi organique n° 2004-63), vous disposez des droits suivants :", "وفقاً للتشريعات التونسية المتعلقة بحماية البيانات الشخصية (القانون الأساسي عدد 2004-63)، تتمتع بالحقوق التالية:")}</p>
            <ul className={`mb-6 ${language === 'ar' ? 'mr-6 list-disc' : 'ml-6 list-disc'}`}>
              <li className="mb-2">{t("Droit d'accès à vos données personnelles.", "حق الوصول إلى بياناتك الشخصية.")}</li>
              <li className="mb-2">{t("Droit de rectification des données inexactes.", "حق تصحيح البيانات غير الدقيقة.")}</li>
              <li className="mb-2">{t("Droit de suppression de vos données.", "حق حذف بياناتك.")}</li>
              <li className="mb-2">{t("Droit d'opposition au traitement de vos données.", "حق الاعتراض على معالجة بياناتك.")}</li>
            </ul>
            <p className="mb-4">
              {t("Pour exercer ces droits, contactez-nous à : ", "لممارسة هذه الحقوق، اتصل بنا على: ")}
              <a href="mailto:support@nahla.tn" className="text-forest-500 hover:underline">support@nahla.tn</a>
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("8. Cookies", "8. ملفات تعريف الارتباط")}
            </h2>
            <p className="mb-4">{t("Notre site web utilise des cookies techniques essentiels au fonctionnement du service. Aucun cookie publicitaire ou de traçage n'est utilisé.", "يستخدم موقعنا ملفات تعريف ارتباط تقنية ضرورية لعمل الخدمة. لا يتم استخدام ملفات تعريف ارتباط إعلانية أو تتبعية.")}</p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("9. Modifications", "9. التعديلات")}
            </h2>
            <p className="mb-4">{t("Nous nous réservons le droit de modifier cette politique de confidentialité. Toute modification sera notifiée via l'application et publiée sur cette page.", "نحتفظ بالحق في تعديل سياسة الخصوصية هذه. سيتم الإخطار بأي تعديل عبر التطبيق ونشره في هذه الصفحة.")}</p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("10. Contact", "10. الاتصال")}
            </h2>
            <p className="mb-4">{t("Pour toute question relative à cette politique :", "لأي سؤال يتعلق بهذه السياسة:")}</p>
            <ul className={`mb-6 ${language === 'ar' ? 'mr-6 list-disc' : 'ml-6 list-disc'}`}>
              <li className="mb-2">{t("Email : ", "البريد الإلكتروني: ")}<a href="mailto:support@nahla.tn" className="text-forest-500 hover:underline">support@nahla.tn</a></li>
              <li className="mb-2">{t("Téléphone : +216 58 025 694", <>الهاتف: <span dir="ltr">+216 58 025 694</span></>)}</li>
              <li className="mb-2">{t("Adresse : Jendouba, Route 9 Avril, Tunisie", "العنوان: جندوبة، نهج 9 أفريل، تونس")}</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

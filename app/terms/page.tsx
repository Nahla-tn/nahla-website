"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function TermsOfService() {
  const { t, language } = useLanguage();

  return (
    <>


      <Header />

      <main id="main" className="pt-[72px] min-h-[80vh]">
        <div className="max-w-[800px] mx-auto px-6 py-16 md:py-24">
          <h1 className="font-space text-[2.5rem] text-forest-600 mb-2 tracking-[-0.03em] font-bold">
            {t("Conditions d'Utilisation", "شروط الاستخدام")}
          </h1>
          <p className="text-[0.88rem] text-neutral-500 mb-12">
            {t(
              "Dernière mise à jour : 1er juin 2026",
              "آخر تحديث: 1 يونيو 2026",
            )}
          </p>

          <div
            className={`text-neutral-600 text-[0.95rem] leading-[1.75] ${language === "ar" ? "text-right" : "text-left"}`}
          >
            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("1. Objet", "1. الغرض")}
            </h2>
            <p className="mb-4">
              {t(
                "Les présentes conditions générales d'utilisation (« CGU ») régissent l'accès et l'utilisation de la plateforme Nahla, incluant le site web et l'application mobile, éditée par Nahla, startup en cours de labellisation Startup Act, domiciliée à Jendouba, Route 9 Avril, Tunisie.",
                'تنظم هذه الشروط العامة للاستخدام ("الشروط") الوصول إلى منصة نحلة واستخدامها، بما في ذلك الموقع الإلكتروني وتطبيق الجوال، والتي تنشرها نحلة، وهي شركة ناشئة في طور الحصول على علامة Startup Act، مقرها في جندوبة، نهج 9 أفريل، تونس.',
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("2. Acceptation des Conditions", "2. قبول الشروط")}
            </h2>
            <p className="mb-4">
              {t(
                "L'utilisation de la plateforme Nahla implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.",
                "يعني استخدام منصة نحلة القبول الكامل والغير مشروط لهذه الشروط. إذا كنت لا تقبل هذه الشروط، يجب عليك ألا تستخدم خدماتنا.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("3. Description des Services", "3. وصف الخدمات")}
            </h2>
            <p className="mb-4">
              {t(
                "Nahla est une plateforme d'intelligence artificielle dédiée à l'apiculture qui fournit :",
                "نحلة هي منصة للذكاء الاصطناعي مخصصة لتربية النحل والتي توفر:",
              )}
            </p>
            <ul
              className={`mb-6 ${language === "ar" ? "mr-6 list-disc" : "ml-6 list-disc"}`}
            >
              <li className="mb-2">
                {t(
                  "Des recommandations de zones de transhumance basées sur l'analyse NDVI satellite.",
                  "توصيات بمناطق التنقل بناءً على تحليل NDVI بالأقمار الصناعية.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Des données météorologiques locales adaptées à l'apiculture.",
                  "بيانات طقس محلية مخصصة لتربية النحل.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Un scoring intelligent des emplacements potentiels pour les ruches.",
                  "تسجيل ذكي للمواقع المحتملة للخلايا.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Des alertes phytosanitaires et de floraison.",
                  "تنبيهات الصحة النباتية والإزهار.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Un réseau de partage communautaire entre apiculteurs.",
                  "شبكة مشاركة مجتمعية بين النحالين.",
                )}
              </li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t(
                "4. Inscription et Compte Utilisateur",
                "4. التسجيل وحساب المستخدم",
              )}
            </h2>
            <p className="mb-4">
              {t(
                "Pour accéder aux services, l'utilisateur doit créer un compte en fournissant des informations exactes et complètes. L'utilisateur est responsable de la confidentialité de ses identifiants et de toutes les activités effectuées sous son compte.",
                "للوصول إلى الخدمات، يجب على المستخدم إنشاء حساب من خلال تقديم معلومات دقيقة وكاملة. المستخدم مسؤول عن سرية معرفاته وعن جميع الأنشطة التي تتم تحت حسابه.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("5. Obligations de l'Utilisateur", "5. التزامات المستخدم")}
            </h2>
            <p className="mb-4">
              {t("L'utilisateur s'engage à :", "يلتزم المستخدم بـ:")}
            </p>
            <ul
              className={`mb-6 ${language === "ar" ? "mr-6 list-disc" : "ml-6 list-disc"}`}
            >
              <li className="mb-2">
                {t(
                  "Utiliser la plateforme conformément à sa destination et aux lois en vigueur.",
                  "استخدام المنصة وفقاً للغرض المخصص لها والقوانين المعمول بها.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Fournir des informations véridiques lors de l'inscription et des retours terrain.",
                  "تقديم معلومات صحيحة أثناء التسجيل والتقارير الميدانية.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Ne pas tenter de contourner les mesures de sécurité de la plateforme.",
                  "عدم محاولة التحايل على التدابير الأمنية للمنصة.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Ne pas reproduire, distribuer ou commercialiser les données et contenus de Nahla.",
                  "عدم نسخ أو توزيع أو تسويق بيانات ومحتوى نحلة.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Respecter les autres utilisateurs dans le cadre des fonctionnalités communautaires.",
                  "احترام المستخدمين الآخرين في إطار الميزات المجتمعية.",
                )}
              </li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("6. Nature des Recommandations", "6. طبيعة التوصيات")}
            </h2>
            <p className="mb-4">
              <strong>{t("Important : ", "مهم : ")}</strong>
              {t(
                "Les recommandations fournies par Nahla sont des outils d'aide à la décision basés sur des données environnementales et satellite. Elles ne constituent en aucun cas une garantie de rendement ou de résultat. L'apiculteur reste seul responsable de ses décisions de transhumance et de la gestion de ses ruches.",
                "التوصيات التي تقدمها نحلة هي أدوات لدعم القرار تعتمد على البيانات البيئية والأقمار الصناعية. لا تشكل بأي حال من الأحوال ضماناً للإنتاجية أو النتيجة. يظل النحال المسؤول الوحيد عن قرارات تنقله وإدارة خلاياه.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("7. Tarification et Paiement", "7. التسعير والدفع")}
            </h2>
            <p className="mb-4">
              {t(
                "L'accès aux fonctionnalités complètes de Nahla est proposé au tarif de 10 TND par mois. Le paiement peut être effectué :",
                "يُقترح الوصول إلى الميزات الكاملة لـ نحلة بسعر 10 دينار شهرياً. يمكن الدفع من خلال:",
              )}
            </p>
            <ul
              className={`mb-6 ${language === "ar" ? "mr-6 list-disc" : "ml-6 list-disc"}`}
            >
              <li className="mb-2">
                {t(
                  "Par paiement mobile (D17, Flouci).",
                  "عن طريق الدفع عبر الهاتف المحمول (D17, Flouci).",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Par carte prépayée (scratch) disponible dans les coopératives locales (30 TND / 3 mois).",
                  "عن طريق بطاقة الدفع المسبق (خدش) المتوفرة في التعاونيات المحلية (30 دينار / 3 أشهر).",
                )}
              </li>
              <li className="mb-2">
                {t("Par virement bancaire.", "عن طريق التحويل المصرفي.")}
              </li>
            </ul>
            <p className="mb-4">
              {t(
                "Nahla se réserve le droit de modifier ses tarifs avec un préavis de 30 jours communiqué aux utilisateurs.",
                "تحتفظ نحلة بالحق في تعديل أسعارها مع إشعار مسبق مدته 30 يوماً للمستخدمين.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("8. Propriété Intellectuelle", "8. الملكية الفكرية")}
            </h2>
            <p className="mb-4">
              {t(
                "L'ensemble des éléments de la plateforme Nahla (logiciel, algorithmes, interface, contenus, marques, logos) sont la propriété exclusive de Nahla et sont protégés par les lois tunisiennes et internationales relatives à la propriété intellectuelle.",
                "جميع عناصر منصة نحلة (البرمجيات، الخوارزميات، الواجهة، المحتوى، العلامات التجارية، الشعارات) هي ملكية حصرية لـ نحلة ومحمية بموجب القوانين التونسية والدولية المتعلقة بالملكية الفكرية.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("9. Données Personnelles", "9. البيانات الشخصية")}
            </h2>
            <p className="mb-4">
              {t(
                "Le traitement des données personnelles est régi par notre Politique de Confidentialité. En utilisant nos services, vous consentez à ce traitement.",
                "تخضع معالجة البيانات الشخصية لسياسة الخصوصية الخاصة بنا. باستخدامك لخدماتنا، فإنك توافق على هذه المعالجة.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("10. Limitation de Responsabilité", "10. حدود المسؤولية")}
            </h2>
            <p className="mb-4">
              {t(
                "Nahla met tout en œuvre pour fournir des données précises et à jour. Toutefois :",
                "تبذل نحلة قصارى جهدها لتوفير بيانات دقيقة ومحدثة. ومع ذلك:",
              )}
            </p>
            <ul
              className={`mb-6 ${language === "ar" ? "mr-6 list-disc" : "ml-6 list-disc"}`}
            >
              <li className="mb-2">
                {t(
                  "Les données satellitaires et météo proviennent de sources tierces (Sentinel-2, Open Meteo) et peuvent comporter des imprécisions.",
                  "البيانات الفضائية وبيانات الطقس تأتي من مصادر تابعة لجهات خارجية (Sentinel-2, Open Meteo) وقد تحتوي على أخطاء.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Nahla ne saurait être tenue responsable des décisions prises par l'utilisateur sur la base de ses recommandations.",
                  "لا يمكن تحميل نحلة مسؤولية القرارات التي يتخذها المستخدم بناءً على توصياتها.",
                )}
              </li>
              <li className="mb-2">
                {t(
                  "En cas de force majeure ou de défaillance technique, Nahla ne peut garantir la disponibilité continue de ses services.",
                  "في حالة القوة القاهرة أو الفشل الفني، لا تضمن نحلة استمرار توفر خدماتها.",
                )}
              </li>
            </ul>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("11. Résiliation", "11. الإنهاء")}
            </h2>
            <p className="mb-4">
              {t(
                "L'utilisateur peut résilier son compte à tout moment en contactant le support. Nahla se réserve le droit de suspendre ou supprimer un compte en cas de violation des présentes CGU, après notification préalable.",
                "يمكن للمستخدم إنهاء حسابه في أي وقت عن طريق الاتصال بالدعم. تحتفظ نحلة بالحق في تعليق أو حذف الحساب في حالة انتهاك هذه الشروط، بعد إشعار مسبق.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("12. Modification des CGU", "12. تعديل الشروط")}
            </h2>
            <p className="mb-4">
              {t(
                "Nahla se réserve le droit de modifier les présentes CGU. Les utilisateurs seront informés de toute modification par notification in-app et par email. L'utilisation continue de la plateforme après modification vaut acceptation des nouvelles conditions.",
                "تحتفظ نحلة بالحق في تعديل هذه الشروط. سيتم إبلاغ المستخدمين بأي تعديل من خلال إشعار داخل التطبيق وعبر البريد الإلكتروني. الاستخدام المستمر للمنصة بعد التعديل يعني قبول الشروط الجديدة.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t(
                "13. Droit Applicable et Juridiction",
                "13. القانون المعمول به والاختصاص القضائي",
              )}
            </h2>
            <p className="mb-4">
              {t(
                "Les présentes CGU sont régies par le droit tunisien. En cas de litige, les tribunaux de Jendouba seront seuls compétents, après tentative de résolution amiable.",
                "تخضع هذه الشروط للقانون التونسي. في حالة وجود نزاع، ستكون محاكم جندوبة هي المختصة الوحيدة، بعد محاولة التسوية الودية.",
              )}
            </p>

            <h2 className="font-space text-[1.4rem] text-forest-600 mt-10 mb-4 font-bold tracking-[-0.02em]">
              {t("14. Contact", "14. الاتصال")}
            </h2>
            <p className="mb-4">
              {t(
                "Pour toute question relative aux présentes conditions :",
                "لأي أسئلة تتعلق بهذه الشروط:",
              )}
            </p>
            <ul
              className={`mb-6 ${language === "ar" ? "mr-6 list-disc" : "ml-6 list-disc"}`}
            >
              <li className="mb-2">
                {t("Email : ", "البريد الإلكتروني: ")}
                <a
                  href="mailto:support@nahla.com"
                  className="text-forest-500 hover:underline"
                >
                  support@nahla.com
                </a>
              </li>
              <li className="mb-2">
                {t(
                  "Téléphone : +216 58 025 694",
                  <>
                    الهاتف: <span dir="ltr">+216 58 025 694</span>
                  </>,
                )}
              </li>
              <li className="mb-2">
                {t(
                  "Adresse : Jendouba, Route 9 Avril, Tunisie",
                  "العنوان: جندوبة، نهج 9 أفريل، تونس",
                )}
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

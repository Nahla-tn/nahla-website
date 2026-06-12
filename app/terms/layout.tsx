import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | Nahla",
  description: "Conditions générales d'utilisation de la plateforme Nahla, logiciel d'apiculture en Tunisie.",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

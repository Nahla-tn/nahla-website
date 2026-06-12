import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Nahla",
  description: "Politique de confidentialité de la plateforme Nahla, découvrez comment nous protégeons vos données.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

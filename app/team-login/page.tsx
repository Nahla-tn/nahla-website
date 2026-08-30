import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Nahla Team Gateway",
  description: "Accès restreint à l'administration interne Nahla.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function TeamLogin() {
  const adminUrl =
    process.env.NEXT_PUBLIC_ADMIN_PORTAL_URL ||
    process.env.ADMIN_PORTAL_URL ||
    "https://admin.nahla.tn";

  // Server-side permanent or temporary redirect to the admin portal
  redirect(adminUrl);
}

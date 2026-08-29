import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site vitrine Abderrahmane",
  description:
    "Site vitrine frontend moderne, préparé pour le référencement local et les moteurs de réponse.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}

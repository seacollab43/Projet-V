import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://site-vitrine-abderrahmane.nq88h8ydw2.chatgpt.site",
  ),
  title: "Clinique vétérinaire à Casablanca | Vet24",
  description:
    "Vet24 est une clinique vétérinaire Route de Taddart à Casablanca. Consultation, vaccination, chirurgie, imagerie, dentisterie et urgences.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "clinique vétérinaire Casablanca",
    "vétérinaire Casablanca",
    "vétérinaire Route de Taddart",
    "urgence vétérinaire Casablanca",
    "Vet24 Casablanca",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "Vet24",
    url: "/",
    title: "Clinique vétérinaire à Casablanca | Vet24",
    description:
      "Soins vétérinaires pour chiens et chats Route de Taddart à Casablanca.",
  },
  twitter: {
    card: "summary",
    title: "Clinique vétérinaire à Casablanca | Vet24",
    description:
      "Consultation, prévention, chirurgie, imagerie et urgences vétérinaires à Casablanca.",
  },
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
    <html lang="fr-MA">
      <body className="antialiased">{children}</body>
    </html>
  );
}

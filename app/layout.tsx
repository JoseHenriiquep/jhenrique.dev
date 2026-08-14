import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "jhenrique.dev — Desenvolvimento web",
    template: "%s | jhenrique.dev",
  },
  description: "Landing pages e sites institucionais para negócios que querem construir uma presença digital profissional.",
  keywords: ["desenvolvimento web", "landing page", "site institucional", "React", "Next.js", "José Henrique"],
  authors: [{ name: "José Henrique", url: siteUrl }],
  creator: "José Henrique",
  openGraph: {
    title: "jhenrique.dev — Desenvolvimento web",
    description: "Landing pages e sites institucionais para negócios que querem construir uma presença digital profissional.",
    url: siteUrl,
    siteName: "jhenrique.dev",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "jhenrique.dev — desenvolvimento web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "jhenrique.dev — Desenvolvimento web",
    description: "Landing pages e sites institucionais para negócios que querem construir uma presença digital profissional.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon-jh.png", shortcut: "/favicon-jh.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

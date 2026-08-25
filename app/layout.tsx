import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deniz Efe Karacakaya — AI & Data Engineering",
    template: "%s — Deniz Efe Karacakaya",
  },
  description:
    "Portfolio of Deniz Efe Karacakaya — AI Engineering Intern working on federated learning for fraud detection and the self-hosted Kubernetes MLOps platform beneath it.",
  keywords: [
    "Deniz Efe Karacakaya",
    "AI Engineer",
    "Machine Learning",
    "Data Engineering",
    "MLOps",
    "Portfolio",
    "Federated Learning",
    "Explainable AI",
    "SHAP",
    "XGBoost",
    "MLflow",
    "GitOps",
    "Kubernetes"
  ],
  authors: [{ name: "Deniz Efe Karacakaya" }],
  openGraph: {
    title: "Deniz Efe Karacakaya — AI & Data Engineering",
    description:
      "Federated learning, explainable fraud models, and the self-hosted Kubernetes MLOps platform underneath them.",
    url: siteUrl,
    siteName: "Deniz Efe Karacakaya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deniz Efe Karacakaya — AI & Data Engineering",
    description:
      "Federated learning, explainable fraud models, and the self-hosted Kubernetes MLOps platform underneath them.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased bg-canvas text-ink`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

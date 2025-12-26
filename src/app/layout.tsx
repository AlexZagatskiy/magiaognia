import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Ekskluzywne Kominki - Designerskie Rozwiązania dla Wyjątkowych Domów",
  description: "Projektujemy i instalujemy najwyższej jakości designerskie kominki dla ekskluzywnych nieruchomości w Polsce. Nowoczesne, klasyczne i rustykalne modele.",
  keywords: "kominki, designerskie kominki, luksusowe kominki, instalacja kominków, Polska",
  authors: [{ name: "Ekskluzywne Kominki" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-warm-white text-charcoal`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

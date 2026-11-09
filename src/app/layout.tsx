import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veysel Özçelik | Tarla, Arsa ve Arazi Yatırım Uzmanı",
  description: "Veysel Özçelik ile güvenilir arazi yatırımı. Sadece tarla, arsa, zeytinlik, bağ/bahçe ve sanayi imarlı arazi portföyü. Ada/parsel şeffaflığı ve müstakil tapu garantisi.",
  keywords: [
    "Veysel Özçelik",
    "Tarla Yatırımı",
    "Zeytinlik Alımı",
    "Sanayi İmarlı Arazi",
    "Balıkesir Tarla",
    "Çanakkale Arsa",
    "Kadastro Yolu Olan Tarla",
    "Müstakil Tapu Arazi",
    "Arazi Ekspertizi",
    "Ada Parsel Sorgulama"
  ],
  authors: [{ name: "Veysel Özçelik" }],
  openGraph: {
    title: "Veysel Özçelik | Tarla ve Arazi Portföyü",
    description: "Sadece toprak ve arazi. Konut yok! Müstakil tapulu, kadastro yollu tarla ve zeytinlik portföyü.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#faf7f4]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

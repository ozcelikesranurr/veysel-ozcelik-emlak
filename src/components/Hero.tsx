"use client";

import React from "react";
import { EXPERT_DATA } from "@/data/expert";
import { createWhatsAppUrl } from "@/lib/utils";
import { ShieldCheck, ArrowRight, MessageCircle, MapPin, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";

interface HeroProps {
  onSearchClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    "Merhaba Veysel Bey, arazi yatırımı yapmak istiyorum. Güncel portföyünüz ve fırsat araziler hakkında bilgi alabilir miyim?"
  );

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#081c15]">
      {/* Background with Dark Green & Earth Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081c15]/90 via-[#1b4332]/75 to-[#081c15]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2d6a4f]/30 via-transparent to-transparent" />

      {/* Decorative Gold & Leaf Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#52b788]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4332]/80 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold mb-6 shadow-lg backdrop-blur-md animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>Sadece Tarla, Arsa ve Arazi Yatırımı • Konut Yok</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight sm:leading-tight lg:leading-[1.15] max-w-4xl mx-auto">
          Toprak, Geleceğe Bırakılan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#eed591] to-[#e5bc5d]">
            En Sağlam Mirastır.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#d8f3dc]/90 max-w-3xl mx-auto font-light leading-relaxed">
          <strong className="text-white font-semibold">Veysel Özçelik</strong> güvencesiyle; 
          kadastrosu incelenmiş, resmi yolu bulunan, müstakil tapulu tarla, zeytinlik ve sanayi arazileri.
          Hukuki risk almadan, değer üreten toprağa yatırım yapın.
        </p>

        {/* Trust Points */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#d8f3dc]/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Müstakil Tapu Titizliği</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Resmi Kadastro Yolu Teyidi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>Açık Ada/Parsel Paylaşımı</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>16+ Yıl Bölgesel Saha Tecrübesi</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#portfoy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89025] hover:from-[#e5bc5d] hover:to-[#c59b27] text-[#081c15] font-bold text-base shadow-xl shadow-amber-900/30 transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Arazi Portföyünü İncele</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base shadow-xl shadow-green-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp&apos;tan Hızlı Bilgi Al</span>
          </a>

          <a
            href="#ekspertiz"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
          >
            <MapPin className="w-5 h-5 text-[#d4af37]" />
            <span>Arazimi Satmak İstiyorum</span>
          </a>
        </div>

        {/* Floating Stats Card Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {EXPERT_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#1b4332]/50 border border-[#2d6a4f]/60 backdrop-blur-md text-left hover:border-[#d4af37]/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#d4af37]">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#d8f3dc]/70 mt-1 line-clamp-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

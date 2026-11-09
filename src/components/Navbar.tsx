"use client";

import React, { useState, useEffect } from "react";
import { EXPERT_DATA } from "@/data/expert";
import { Phone, MessageCircle, Menu, X, Compass, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    `Merhaba Veysel Bey, arazi ve tarla portföyünüz hakkında bilgi almak istiyorum.`
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1b4332]/95 backdrop-blur-md shadow-lg border-b border-[#2d6a4f]/50 py-3"
          : "bg-gradient-to-b from-[#081c15]/90 via-[#081c15]/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b89025] flex items-center justify-center text-[#081c15] shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                  VEYSEL ÖZÇELİK
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 font-medium">
                  <ShieldCheck className="w-3 h-3" /> Lisanslı Uzman
                </span>
              </div>
              <p className="text-xs text-[#d8f3dc]/80 font-medium tracking-wider uppercase">
                Tarla & Arazi Yatırım Portföyü
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
            <a
              href="#portfoy"
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Arazi Portföyü
            </a>
            <a
              href="#hakkimda"
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Veysel Özçelik Kimdir?
            </a>
            <a
              href="#ekspertiz"
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Arazinizi Satın (Ekspertiz)
            </a>
            <a
              href="#rehber"
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              Yatırım Kriterleri
            </a>
            <a
              href="#iletisim"
              className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              İletişim
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${EXPERT_DATA.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{EXPERT_DATA.phoneFormatted}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white text-xs font-bold shadow-md hover:shadow-green-900/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Bilgi</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#22c55e] text-white sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081c15]/98 border-b border-[#2d6a4f] px-4 pt-3 pb-6 mt-2 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-3 text-white font-medium text-base mb-4">
            <a
              href="#portfoy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Arazi Portföyü
            </a>
            <a
              href="#hakkimda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Veysel Özçelik Kimdir?
            </a>
            <a
              href="#ekspertiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Arazinizi Satın (Ekspertiz)
            </a>
            <a
              href="#rehber"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Yatırım Kriterleri
            </a>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              İletişim
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
            <a
              href={`tel:${EXPERT_DATA.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              Hemen Ara: {EXPERT_DATA.phoneFormatted}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#22c55e] text-white font-bold text-sm shadow-lg shadow-green-950/40"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              WhatsApp&apos;tan Hızlı Bilgi Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

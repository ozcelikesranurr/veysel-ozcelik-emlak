"use client";

import React, { useState, useEffect } from "react";
import { EXPERT_DATA } from "@/data/expert";
import { createWhatsAppUrl } from "@/lib/utils";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    "Merhaba Veysel Bey, arazi ve tarla portföyünüz hakkında bilgi almak istiyorum."
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Hızlı İletişim Butonları" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Yukarı Çık"
          className="pointer-events-auto p-3 rounded-full bg-white/90 text-earth-800 hover:bg-white shadow-lg border border-earth-200 transition-all hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${EXPERT_DATA.phone}`}
        aria-label="Telefonla Ara"
        className="pointer-events-auto flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#1b4332] text-white shadow-xl hover:bg-[#2d6a4f] transition-all hover:scale-105 active:scale-95 border border-[#d4af37]/40 group"
      >
        <Phone className="w-5 h-5 text-[#d4af37] animate-pulse" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Hemen Ara
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp İletişim Hattı"
        className="pointer-events-auto flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-2xl hover:shadow-green-900/50 transition-all hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <div className="hidden sm:block text-left">
          <div className="text-[10px] uppercase font-bold text-green-100 leading-none">
            7/24 Danışma
          </div>
          <div className="text-xs font-extrabold tracking-wide leading-tight">
            WhatsApp Bilgi Al
          </div>
        </div>
      </a>
    </aside>
  );
};

"use client";

import React from "react";
import { EXPERT_DATA } from "@/data/expert";
import { Compass, ShieldCheck, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";

export const Footer: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    "Merhaba Veysel Bey, arazi portföyünüz hakkında görüşmek istiyorum."
  );

  return (
    <footer className="bg-[#081c15] text-[#d8f3dc] border-t border-[#1b4332] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37] flex items-center justify-center text-[#081c15] shadow">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-white block">
                  {EXPERT_DATA.name}
                </span>
                <span className="text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
                  Tarla & Arazi Yatırım Uzmanı
                </span>
              </div>
            </div>

            <p className="text-xs text-[#d8f3dc]/70 leading-relaxed">
              Yalnızca tarla, arsa, zeytinlik, bağ ve sanayi arazileri alanında uzmanlaşmış portföy danışmanlığı. Konut ve daire satışı yapmıyoruz.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1b4332] text-xs text-[#d4af37] border border-[#2d6a4f]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{EXPERT_DATA.ttbsNo}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfoy" className="hover:text-[#d4af37] transition-colors">
                  Güncel Arazi Portföyü
                </a>
              </li>
              <li>
                <a href="#hakkimda" className="hover:text-[#d4af37] transition-colors">
                  Veysel Özçelik Kimdir?
                </a>
              </li>
              <li>
                <a href="#ekspertiz" className="hover:text-[#d4af37] transition-colors">
                  Arazinizi Satın (Ada/Parsel Formu)
                </a>
              </li>
              <li>
                <a href="#rehber" className="hover:text-[#d4af37] transition-colors">
                  Arazi Yatırımında 4 Büyük Kural
                </a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-[#d4af37] transition-colors">
                  Ofis ve İletişim Bilgileri
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Arazi Türleri
            </h4>
            <ul className="space-y-2 text-xs text-[#d8f3dc]/80">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Sakarya & Geyve İmarlı Arsalar</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Kadastro Cepheli Müstakil Parseller</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Köy Yerleşik Alanı İçi Konut Arsaları</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Doğa & Bahçe Yaşamı Arazileri</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Yatırımlık Değerli Topraklar</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact Footer */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Doğrudan Hat
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${EXPERT_DATA.phone}`}
                className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{EXPERT_DATA.phoneFormatted}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>WhatsApp İletişim Hattı</span>
              </a>

              <div className="flex items-start gap-2 text-[#d8f3dc]/70 pt-1">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{EXPERT_DATA.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>
            © {new Date().getFullYear()} Veysel Özçelik - Tarla ve Arazi Portföyü. Tüm hakları saklıdır.
          </p>
          <p className="text-center sm:text-right">
            Sadece Tarla, Arsa, Zeytinlik ve Sanayi İmarlı Arazi satışı yapılmaktadır.
          </p>
        </div>
      </div>
    </footer>
  );
};

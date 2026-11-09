"use client";

import React, { useState } from "react";
import { EXPERT_DATA } from "@/data/expert";
import { createWhatsAppUrl } from "@/lib/utils";
import { ValuationFormData } from "@/types/property";
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Calculator,
  Compass
} from "lucide-react";

export const ValuationSection: React.FC = () => {
  const [formData, setFormData] = useState<ValuationFormData>({
    fullName: "",
    phone: "",
    city: "Sakarya",
    district: "",
    neighborhood: "",
    ada: "",
    parsel: "",
    area: "",
    propertyType: "Tarla",
    titleDeedType: "Müstakil Parsel",
    hasRoad: "Evet, Resmi Kadastro Yolu Var",
    hasElectricityWater: "Elektrik ve Su Mevcut",
    expectedPrice: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const valuationWhatsAppMessage = `Merhaba Veysel Bey, arazimi satmak/değerletmek istiyorum. Bilgileri:\n- Konum: ${formData.city} / ${formData.district} / ${formData.neighborhood}\n- Ada: ${formData.ada} / Parsel: ${formData.parsel}\n- Alan: ${formData.area} m²\n- Nitelik: ${formData.propertyType}\n- Tapu: ${formData.titleDeedType}\n- Yol Durumu: ${formData.hasRoad}\n- Altyapı: ${formData.hasElectricityWater}\n${formData.expectedPrice ? `- İstenen Fiyat: ${formData.expectedPrice} TL\n` : ""}- Ad Soyad: ${formData.fullName}\n- Tel: ${formData.phone}\n${formData.notes ? `- Not: ${formData.notes}` : ""}`;

  const whatsappDirectUrl = createWhatsAppUrl(EXPERT_DATA.whatsapp, valuationWhatsAppMessage);

  return (
    <section id="ekspertiz" className="py-24 bg-[#081c15] text-white relative overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1b4332]/60 via-[#081c15] to-[#040d0a] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4332] text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#d4af37]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ücretsiz Ada/Parsel Ön Değerlemesi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
            Arazinizi Değerinde Satmak Mı İstiyorsunuz?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#d8f3dc]/80 font-light leading-relaxed">
            Tarla, zeytinlik veya arsanızın Ada ve Parsel numarasını iletin; 24 saat içinde TKGM kadastro kayıtlarını, emsal rayiçleri ve satış potansiyelini ücretsiz analiz edip size raporlayalım.
          </p>
        </div>

        {submitted ? (
          /* Success Card */
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#1b4332] to-[#0d281e] p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 shadow-2xl text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto mb-5 border border-[#22c55e]/40">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Ekspertiz Talebiniz Alındı!
            </h3>
            <p className="text-sm text-[#d8f3dc] mb-6 leading-relaxed">
              Sayın <strong className="text-white">{formData.fullName}</strong>, {formData.city} / {formData.district} bölgesindeki Ada {formData.ada}, Parsel {formData.parsel} taşınmazınız için ön incelemeye başladık. En kısa sürede sizinle iletişime geçeceğiz.
            </p>

            <div className="space-y-3">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Bilgileri WhatsApp&apos;tan Veysel Bey&apos;e Hızlıca İlet</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-white/60 hover:text-white underline pt-2 block mx-auto"
              >
                Yeni bir arazi için form doldur
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Valuation Form */
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-[#0d281e]/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-[#2d6a4f]/70 shadow-2xl space-y-8"
          >
            {/* Step 1: Location & Cadastral Info */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-5">
                <Compass className="w-5 h-5 text-[#d4af37]" />
                <h3 className="text-lg font-serif font-bold text-white">
                  1. Arazi ve Ada/Parsel Bilgileri
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    İl *
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  >
                    <option value="Sakarya">Sakarya</option>
                    <option value="Kocaeli">Kocaeli</option>
                    <option value="Bilecik">Bilecik</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Balıkesir">Balıkesir</option>
                    <option value="Çanakkale">Çanakkale</option>
                    <option value="Diğer">Diğer İl</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    İlçe *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Geyve, Pamukova, Taraklı"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Köy / Mahalle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Güre, Geyikli, Hamidiye"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>

                {/* Ada & Parsel No (High Priority Fields) */}
                <div className="bg-[#1b4332]/90 p-3 rounded-2xl border border-[#d4af37]/40">
                  <label className="block text-xs font-bold text-[#d4af37] mb-1">
                    Ada No *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: 142"
                    value={formData.ada}
                    onChange={(e) => setFormData({ ...formData, ada: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white font-mono font-bold focus:outline-none focus:border-[#d4af37] text-sm"
                  />
                </div>

                <div className="bg-[#1b4332]/90 p-3 rounded-2xl border border-[#d4af37]/40">
                  <label className="block text-xs font-bold text-[#d4af37] mb-1">
                    Parsel No *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: 18"
                    value={formData.parsel}
                    onChange={(e) => setFormData({ ...formData, parsel: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white font-mono font-bold focus:outline-none focus:border-[#d4af37] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Yaklaşık Alan (m²) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Örn: 7500"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Quality & Infrastructure */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-5">
                <Building2 className="w-5 h-5 text-[#d4af37]" />
                <h3 className="text-lg font-serif font-bold text-white">
                  2. Arazi Niteliği ve Altyapı
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Arazi Cinsi
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  >
                    <option value="Tarla">Tarla</option>
                    <option value="Zeytinlik">Zeytinlik</option>
                    <option value="Arsa">Arsa</option>
                    <option value="Bağ / Bahçe">Bağ / Bahçe</option>
                    <option value="Sanayi İmarlı Arazi">Sanayi İmarlı Arazi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Tapu Durumu
                  </label>
                  <select
                    value={formData.titleDeedType}
                    onChange={(e) => setFormData({ ...formData, titleDeedType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  >
                    <option value="Müstakil Parsel">Müstakil Parsel (Tek Tapu)</option>
                    <option value="Hisseli Tapu">Hisseli Tapu</option>
                    <option value="Kooperatif Hisseli">Kooperatif Hissesi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Yol Durumu
                  </label>
                  <select
                    value={formData.hasRoad}
                    onChange={(e) => setFormData({ ...formData, hasRoad: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  >
                    <option value="Evet, Resmi Kadastro Yolu Var">Resmi Kadastro Yolu Var</option>
                    <option value="Asfalt Yola Cepheli">Asfalt Anayol Cepheli</option>
                    <option value="Stabilize / Toprak Yol">Stabilize Yol</option>
                    <option value="Resmi Yolu Yok">Resmi Yolu Yok</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Elektrik / Su
                  </label>
                  <select
                    value={formData.hasElectricityWater}
                    onChange={(e) => setFormData({ ...formData, hasElectricityWater: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  >
                    <option value="Elektrik ve Su Mevcut">Elektrik ve Su Mevcut</option>
                    <option value="Sadece Elektrik Var">Sadece Elektrik Var</option>
                    <option value="Sadece Su / Kuyu Var">Sadece Su Var</option>
                    <option value="İkisi de Yok">Altyapı Yok / Yakınında</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Owner Contact & Target Price */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-5">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                <h3 className="text-lg font-serif font-bold text-white">
                  3. İletişim & Beklenen Satış Fiyatı
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                    Düşündüğünüz Satış Fiyatı (TL)
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 4.500.000 TL (Opsiyonel)"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#d8f3dc] mb-1.5">
                  Eklemek İstediğiniz Notlar veya Ağaç Sayısı vb.
                </label>
                <textarea
                  rows={2}
                  placeholder="İçinde zeytin ağacı var mı, eğim durumu, acil satış isteği vb..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#1b4332]/60 border border-[#2d6a4f] text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/70 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#d4af37]" />
                <span>Bilgileriniz 3. şahıslarla paylaşılmaz, yalnızca ekspertiz amaçlıdır.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89025] hover:from-[#e5bc5d] hover:to-[#c59b27] text-[#081c15] font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Ücretsiz Ekspertiz Raporu İste</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EXPERT_DATA } from "@/data/expert";
import { createWhatsAppUrl } from "@/lib/utils";
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Scale, 
  Route, 
  FileCheck, 
  MessageCircle, 
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Quote,
  Phone,
  Sprout,
  ExternalLink,
  CheckCircle2,
  Lock
} from "lucide-react";

export const AboutExpert: React.FC = () => {
  // 0: Fotoğraf & Profil, 1: Özgeçmiş (Times New Roman), 2: Güvenli MYK Seviye 5 Belge Künyesi
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 3;

  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    "Merhaba Veysel Bey, arazi yatırımı ve danışmanlık hizmetleriniz hakkında sizinle görüşmek istiyorum."
  );

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section id="hakkimda" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b4332]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Slider (Fotoğraf <-> Times New Roman Metin <-> Güvenli MYK Belgesi) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Slider Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e6dacb] min-h-[540px] bg-[#081c15] flex flex-col justify-between">
                
                {/* SLIDE 0: Veysel Özçelik Fotoğrafı & Kimlik Kartı */}
                {currentSlide === 0 && (
                  <div className="relative w-full h-[540px] animate-fadeIn flex flex-col justify-end">
                    <Image
                      src="/images/veysel-ozcelik.jpg"
                      alt={EXPERT_DATA.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-black/25 to-transparent" />

                    {/* Overlaid Info on Photo */}
                    <div className="relative z-10 p-6 text-white">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37] text-[#081c15] text-xs font-extrabold uppercase mb-2 shadow">
                        <Award className="w-3.5 h-3.5" />
                        <span>{EXPERT_DATA.name}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {EXPERT_DATA.name}
                      </h3>
                      <p className="text-xs text-[#d8f3dc] font-medium tracking-wide">
                        {EXPERT_DATA.title}
                      </p>
                      <button
                        onClick={() => setCurrentSlide(2)}
                        className="text-[11px] text-[#eed591] hover:text-white mt-2 flex items-center gap-1.5 transition-colors underline cursor-pointer"
                      >
                        <FileCheck className="w-3.5 h-3.5 shrink-0 text-[#d4af37]" />
                        <span>MYK Seviye 5 Lisansı: {EXPERT_DATA.mykDetails.certificateNo}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* SLIDE 1: Times New Roman Siyah Yazılı Kişisel Biyografi */}
                {currentSlide === 1 && (
                  <div className="relative w-full min-h-[540px] bg-[#fdfbf7] p-8 text-black animate-fadeIn flex flex-col justify-between border-t-4 border-[#1b4332]">
                    <div className="space-y-4 font-['Times_New_Roman',Times,serif] text-black">
                      {/* Header with Quote Icon */}
                      <div className="flex items-center justify-between border-b border-black/15 pb-3">
                        <div className="flex items-center gap-2">
                          <Sprout className="w-5 h-5 text-[#1b4332]" />
                          <span className="text-base font-bold tracking-wide uppercase text-black font-['Times_New_Roman',Times,serif]">
                            Veysel Özçelik Hakkında
                          </span>
                        </div>
                        <Quote className="w-6 h-6 text-[#806044]/60" />
                      </div>

                      {/* Paragraph 1 */}
                      <p className="text-[15px] sm:text-[16px] leading-relaxed text-black font-normal text-justify">
                        1979 yılında Sakarya&apos;nın Geyve ilçesinde dünyaya geldim. Tarımsal faaliyetlere duyduğum ilgi ve bağlılık doğrultusunda çalışmalarımı sürdürüyorum. Ata tohumlarımızın taşıdığı kültürel ve tarımsal mirasın korunmasına büyük önem veriyor, toprağın bereketinin ve ziraat geleneğinin gelecek nesillere aktarılmasını temel bir sorumluluk olarak görüyorum.
                      </p>

                      {/* Paragraph 2 */}
                      <p className="text-[15px] sm:text-[16px] leading-relaxed text-black font-normal text-justify">
                        Tarım alanındaki çalışmalarımın yanı sıra özel sektördeki faaliyetlerime de devam ediyorum. Geleneksel değerleri geleceğe taşıma anlayışıyla üretmeye, çalışmaya ve katkı sunmaya gayret ediyorum.
                      </p>

                      {/* Direct Phone Highlight */}
                      <div className="pt-2">
                        <a
                          href={`tel:${EXPERT_DATA.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b4332] text-white hover:bg-[#2d6a4f] transition-colors text-sm font-semibold shadow"
                        >
                          <Phone className="w-4 h-4 text-[#d4af37]" />
                          <span>Bana Ulaşın: {EXPERT_DATA.phoneFormatted}</span>
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-black/10 text-[11px] text-gray-600 font-['Times_New_Roman',Times,serif] italic">
                      Sakarya / Geyve — Toprak & Arazi Portföyü
                    </div>
                  </div>
                )}

                {/* SLIDE 2: Güvenli & Resmi MYK Seviye 5 Belge Künyesi (KVKK Korumalı) */}
                {currentSlide === 2 && (
                  <div className="relative w-full min-h-[540px] bg-white p-7 text-earth-900 animate-fadeIn flex flex-col justify-between border-t-4 border-[#d4af37]">
                    <div className="space-y-4">
                      {/* Top Official Banner */}
                      <div className="flex items-center justify-between border-b border-earth-200 pb-3">
                        <div>
                          <span className="text-[11px] text-gray-500 font-bold block uppercase tracking-wider">
                            T.C. Mesleki Yeterlilik Kurumu
                          </span>
                          <h4 className="text-base font-serif font-bold text-[#1b4332]">
                            MYK Mesleki Yeterlilik Belgesi
                          </h4>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>GEÇERLİ</span>
                        </div>
                      </div>

                      {/* Certificate Details Grid */}
                      <div className="space-y-2.5 text-xs text-earth-800">
                        <div className="p-2.5 rounded-xl bg-[#faf7f4] border border-[#e6dacb]">
                          <span className="text-gray-500 block text-[10px]">Ulusal Yeterlilik & Seviye</span>
                          <span className="font-bold text-[#1b4332] text-sm">
                            {EXPERT_DATA.mykDetails.level}
                          </span>
                          <span className="text-[11px] text-gray-500 block mt-0.5">
                            Standart Kodu: {EXPERT_DATA.mykDetails.standard}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-xl bg-[#faf7f4] border border-[#e6dacb]">
                            <span className="text-gray-500 block text-[10px]">Belge Numarası</span>
                            <span className="font-mono font-bold text-earth-900 text-[11px]">
                              {EXPERT_DATA.mykDetails.certificateNo}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#faf7f4] border border-[#e6dacb]">
                            <span className="text-gray-500 block text-[10px]">Geçerlilik Tarihi</span>
                            <span className="font-semibold text-emerald-800 text-[11px]">
                              {EXPERT_DATA.mykDetails.validUntil}
                            </span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#faf7f4] border border-[#e6dacb]">
                          <span className="text-gray-500 block text-[10px]">Belgelendirme Kuruluşu</span>
                          <span className="font-medium text-earth-900 text-[11px]">
                            {EXPERT_DATA.mykDetails.issuer}
                          </span>
                        </div>

                        {/* Privacy / KVKK Protected ID */}
                        <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                          <div>
                            <span className="text-gray-500 block text-[10px]">T.C. Kimlik No (KVKK Maskeli)</span>
                            <span className="font-mono font-bold text-earth-900 text-xs">
                              {EXPERT_DATA.mykDetails.maskedTc}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-amber-800 font-medium">
                            <Lock className="w-3 h-3 text-amber-600" />
                            <span>Kişisel Veri Korumalı</span>
                          </div>
                        </div>
                      </div>

                      {/* e-Devlet Verification Button */}
                      <div className="pt-1">
                        <a
                          href={EXPERT_DATA.mykDetails.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow"
                        >
                          <span>e-Devlet Barkod ile Doğrula</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                        </a>
                        <span className="text-[10px] text-gray-500 text-center block mt-1">
                          Barkod No: {EXPERT_DATA.mykDetails.barcode}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-center text-[10px] text-gray-400">
                      T.C. Çalışma ve Sosyal Güvenlik Bakanlığı — MYK Lisanslı
                    </div>
                  </div>
                )}

                {/* Navigation Arrows (Ok İşaretleri) & Slide Indicator */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-lg">
                  <button
                    onClick={prevSlide}
                    aria-label="Önceki Slayt"
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-[11px] font-bold text-white px-2 select-none">
                    {currentSlide + 1} / {totalSlides}
                  </span>

                  <button
                    onClick={nextSlide}
                    aria-label="Sonraki Slayt"
                    className="p-1.5 rounded-full bg-[#d4af37] hover:bg-[#e5bc5d] text-[#081c15] font-bold transition-all shadow-md animate-pulse hover:animate-none"
                    title="Sonraki Sayfaya Geç"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Slider Switch Bar Pills (Fotoğraf - Özgeçmiş - MYK Belgesi) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <button
                    onClick={() => setCurrentSlide(0)}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all ${
                      currentSlide === 0 ? "bg-[#d4af37] text-black" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Fotoğraf
                  </button>
                  <button
                    onClick={() => setCurrentSlide(1)}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all ${
                      currentSlide === 1 ? "bg-[#d4af37] text-black" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Özgeçmiş
                  </button>
                  <button
                    onClick={() => setCurrentSlide(2)}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all ${
                      currentSlide === 2 ? "bg-[#d4af37] text-black" : "text-white/70 hover:text-white"
                    }`}
                  >
                    MYK Belgesi
                  </button>
                </div>

              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#e6dacb] flex items-center gap-3 z-30">
                <div className="w-12 h-12 rounded-xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-[#1b4332]">
                    %100 Güven
                  </div>
                  <div className="text-xs text-earth-700 font-medium">
                    Sıfır Hukuki Risk İlkesi
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#806044] block mb-2">
                Güven Veren Uzmanlık
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1b4332] leading-tight">
                Neden Sadece Arazi ve Neden Veysel Özçelik?
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-earth-800 leading-relaxed font-normal">
              {EXPERT_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#faf7f4] border border-[#e6dacb] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1b4332] text-[#d4af37] shrink-0 mt-0.5">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    Kadastro Yolu Olmayan Satılmaz
                  </h4>
                  <p className="text-xs text-earth-700 mt-1">
                    Fiili ve resmi kadastro yolu olmayan, geçit hakkı belirsiz tarlaları portföye almıyoruz.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f4] border border-[#e6dacb] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1b4332] text-[#d4af37] shrink-0 mt-0.5">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    5403 SK. ve Şufa Taraması
                  </h4>
                  <p className="text-xs text-earth-700 mt-1">
                    Bölünemez büyüklük, tarım il müdürlüğü kısıtları ve hisseli tapu ön alım risklerini baştan çözüyoruz.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f4] border border-[#e6dacb] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1b4332] text-[#d4af37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    Yerinde Zemin & Su Analizi
                  </h4>
                  <p className="text-xs text-earth-700 mt-1">
                    Toprağın humus yapısı, taban suyu derinliği ve elektrik trafo mesafesi bizzat yerinde ölçülür.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f4] border border-[#e6dacb] flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1b4332] text-[#d4af37] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    Açık Ada/Parsel Bilgisi
                  </h4>
                  <p className="text-xs text-earth-700 mt-1">
                    Konum saklama yok; müşterilerimiz bağımsız TKGM parsel sorgu üzerinden teyit yapabilir.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Veysel Özçelik ile WhatsApp&apos;tan Görüş</span>
              </a>

              <a
                href={`tel:${EXPERT_DATA.phone}`}
                className="px-6 py-3.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>Ofisi Ara: {EXPERT_DATA.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

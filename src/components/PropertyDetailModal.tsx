"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import { EXPERT_DATA } from "@/data/expert";
import { formatPrice, formatArea, formatPricePerM2, createWhatsAppUrl } from "@/lib/utils";
import { 
  X, 
  MapPin, 
  Route, 
  Zap, 
  Droplet, 
  FileText, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Compass, 
  CheckCircle2, 
  Share2,
  ExternalLink,
  Play,
  ChevronLeft,
  ChevronRight,
  Video
} from "lucide-react";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  if (!property) return null;

  // Build media list: photo 1, video (if exists), photo 2 (TKGM parsel)
  const mediaItems: { type: 'image' | 'video'; src: string; label: string }[] = [];
  if (property.images[0]) {
    mediaItems.push({ type: 'image', src: property.images[0], label: 'Arazi Görünümü' });
  }
  if (property.video) {
    mediaItems.push({ type: 'video', src: property.video, label: 'Canlı Video Turu' });
  }
  if (property.images[1]) {
    mediaItems.push({ type: 'image', src: property.images[1], label: 'TKGM Parsel Haritası' });
  }

  const currentMedia = mediaItems[activeMediaIndex] || mediaItems[0];

  const prevMedia = () => {
    setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
  };

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
  };

  const whatsappMessage = `Merhaba Veysel Bey, ${property.city} / ${property.district} mevkiindeki Ada: ${property.ada}, Parsel: ${property.parsel} numaralı "${property.title}" (${formatPrice(property.price)}) araziniz hakkında bilgi almak ve yerinde görmek istiyorum.`;
  const whatsappUrl = createWhatsAppUrl(EXPERT_DATA.whatsapp, whatsappMessage);

  const parselSorguUrl = `https://parselsorgu.tkgm.gov.tr/`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `${property.title} - Ada: ${property.ada}, Parsel: ${property.parsel} - Veysel Özçelik Arazi Portföyü`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("İlan linki panoya kopyalandı!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative bg-[#fcfbf9] w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl overflow-y-auto border border-[#e6dacb] flex flex-col">
        {/* Sticky Header with Title and Close Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#e6dacb] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#1b4332] text-white text-xs font-bold uppercase">
              {property.type}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#d4af37]/20 text-[#846342] border border-[#d4af37]/40 text-xs font-mono font-bold">
              Ada: {property.ada} / Parsel: {property.parsel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-earth-100 text-earth-700 transition-colors"
              title="Paylaş"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
              title="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Location */}
          <div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#1b4332] leading-snug">
              {property.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-earth-700">
              <span className="flex items-center gap-1 font-semibold text-[#1b4332]">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                {property.city} / {property.district} / {property.neighborhood}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Compass className="w-4 h-4 text-earth-600" />
                Mevki: Ada {property.ada}, Parsel {property.parsel}
              </span>
            </div>
          </div>

          {/* Media Slider Gallery (Fotoğraflar ve Video) */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-black shadow-lg flex items-center justify-center">
              {currentMedia.type === 'image' ? (
                <Image
                  src={currentMedia.src}
                  alt={property.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              ) : (
                <video
                  controls
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-contain"
                  src={currentMedia.src}
                >
                  <source src={currentMedia.src} type="video/quicktime" />
                  <source src={currentMedia.src} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              )}

              {/* Slider Arrows */}
              {mediaItems.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    aria-label="Önceki Görsel / Video"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMedia}
                    aria-label="Sonraki Görsel / Video"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Current Item Label Pill */}
              <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow">
                {currentMedia.type === 'video' ? (
                  <>
                    <Video className="w-3.5 h-3.5 text-rose-400" />
                    <span>Canlı Video Turu</span>
                  </>
                ) : (
                  <span>{currentMedia.label}</span>
                )}
              </div>
            </div>

            {/* Thumbnail selector */}
            {mediaItems.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {mediaItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMediaIndex(i)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all flex items-center justify-center ${
                      activeMediaIndex === i 
                        ? "border-[#1b4332] ring-2 ring-[#d4af37] scale-105 shadow-md" 
                        : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    {item.type === 'image' ? (
                      <Image src={item.src} alt={item.label} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-[#1b4332] text-white flex flex-col items-center justify-center p-1">
                        <Play className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
                        <span className="text-[10px] font-bold mt-0.5">Video İzle</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Official Data Grid (Tapu, Ada, Parsel, Kadastro, İmar, vb.) */}
          <div className="bg-white rounded-2xl p-6 border border-[#e6dacb] shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1b4332] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              Resmi Tapu ve Kadastro Künyesi
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Ada / Parsel No</span>
                <span className="font-mono font-bold text-[#1b4332] text-sm">
                  {property.ada} / {property.parsel}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Tapu Durumu</span>
                <span className="font-semibold text-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                  {property.titleDeedType}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Toplam Yüzölçümü</span>
                <span className="font-bold text-[#1b4332] text-sm">
                  {formatArea(property.area)}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Resmi Kadastro Yolu</span>
                <span className="font-semibold text-earth-800 flex items-center gap-1">
                  <Route className="w-4 h-4 text-[#1b4332]" />
                  {property.cadastralRoad ? property.roadType : "Resmi Yolu Yok"}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Elektrik Durumu</span>
                <span className="font-semibold text-earth-800 flex items-center gap-1">
                  <Zap className={`w-4 h-4 ${property.electricity ? 'text-amber-500' : 'text-gray-400'}`} />
                  {property.electricityDistance || (property.electricity ? "Mevcut" : "Yok")}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70">
                <span className="text-gray-500 block text-xs">Su Kaynağı</span>
                <span className="font-semibold text-earth-800 flex items-center gap-1">
                  <Droplet className={`w-4 h-4 ${property.water ? 'text-blue-500' : 'text-gray-400'}`} />
                  {property.waterSource || (property.water ? "Mevcut" : "Yok")}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/70 col-span-2 sm:col-span-3">
                <span className="text-gray-500 block text-xs">İmar ve Yapılaşma Durumu</span>
                <span className="font-semibold text-earth-800 flex items-center gap-1 mt-0.5">
                  <FileText className="w-4 h-4 text-[#806044]" />
                  {property.zoningStatus}
                </span>
              </div>
            </div>

            {/* TKGM Parsel Sorgu Link */}
            <div className="mt-4 pt-3 border-t border-[#e6dacb] flex items-center justify-between text-xs text-earth-700">
              <span>TKGM Parsel Sorgulama sisteminden teyit edilebilir:</span>
              <a
                href={parselSorguUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1b4332] font-semibold hover:text-[#2d6a4f] hover:underline"
              >
                <span>TKGM Parsel Sorgu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description & Expert Analysis */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#1b4332]">
              Uzman Açıklaması & Arazi Analizi
            </h3>
            <p className="text-sm sm:text-base text-earth-800 leading-relaxed bg-white p-5 rounded-2xl border border-[#e6dacb]/80">
              {property.description}
            </p>
          </div>

          {/* Highlights */}
          {property.highlights && property.highlights.length > 0 && (
            <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200">
              <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-3">
                Öne Çıkan Artı Yönler & Yatırım Avantajları
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-emerald-950 font-medium">
                {property.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Price Bar & Direct Communication Section */}
          <div className="bg-gradient-to-br from-[#1b4332] to-[#081c15] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#d8f3dc]/80 block font-medium">
                Pazarlıklı Satış Fiyatı
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#d4af37] mt-1">
                {formatPrice(property.price)}
              </div>
              <span className="text-xs text-white/70 block mt-1">
                m² Birim Maliyeti: {formatPricePerM2(property.price, property.area)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp&apos;tan Bilgi Al</span>
              </a>

              <a
                href={`tel:${EXPERT_DATA.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Veysel Özçelik&apos;i Ara</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import { formatPrice, formatArea, formatPricePerM2, createWhatsAppUrl } from "@/lib/utils";
import { EXPERT_DATA } from "@/data/expert";
import { 
  MapPin, 
  Zap, 
  Droplet, 
  Route, 
  FileText, 
  MessageCircle, 
  Maximize2, 
  Check, 
  X,
  Compass,
  Play,
  ChevronLeft,
  ChevronRight,
  Video
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
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

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
  };

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
  };

  const whatsappMessage = `Merhaba Veysel Bey, ${property.city} / ${property.district} bölgesindeki Ada: ${property.ada}, Parsel: ${property.parsel} numaralı "${property.title}" ilanınız hakkında detaylı bilgi almak istiyorum.`;
  const whatsappUrl = createWhatsAppUrl(EXPERT_DATA.whatsapp, whatsappMessage);

  const currentMedia = mediaItems[activeMediaIndex] || mediaItems[0];

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#e6dacb] shadow-md hover:shadow-2xl hover:border-[#1b4332]/50 transition-all duration-300 flex flex-col">
      {/* Media Slider Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black select-none">
        {currentMedia.type === 'image' ? (
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => onSelect(property)}
          >
            <Image
              src={currentMedia.src}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
          </div>
        ) : (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
              src={currentMedia.src}
            >
              <source src={currentMedia.src} type="video/quicktime" />
              <source src={currentMedia.src} type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider shadow">
            {property.type}
          </span>
          {property.video && (
            <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white text-xs font-bold shadow flex items-center gap-1 animate-pulse">
              <Video className="w-3.5 h-3.5" />
              <span>Canlı Video Turu</span>
            </span>
          )}
        </div>

        {/* Ada / Parsel Floating Ribbon */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <div className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold flex items-center gap-1.5 shadow">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Ada: {property.ada} / Parsel: {property.parsel}</span>
          </div>
        </div>

        {/* Slider Arrow Controls (Sağ - Sol Kaydıraç Butonları) */}
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              aria-label="Önceki Görsel"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMedia}
              aria-label="Sonraki Görsel"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/30 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Slider Dots / Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 pointer-events-auto">
              {mediaItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMediaIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    activeMediaIndex === idx
                      ? "w-5 bg-[#d4af37]"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                  title={item.label}
                />
              ))}
            </div>
          </>
        )}

        {/* Location & Title Deed on bottom of photo */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs z-10 pointer-events-none">
          <div className="flex items-center gap-1 font-medium bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{property.city}, {property.district}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#2d6a4f]/90 text-white font-medium text-[11px] backdrop-blur-sm border border-emerald-400/30">
            {property.titleDeedType}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 
            onClick={() => onSelect(property)}
            className="text-lg font-bold text-[#1b4332] group-hover:text-[#2d6a4f] transition-colors cursor-pointer leading-snug"
          >
            {property.title}
          </h3>

          {/* Zoning Information Box */}
          <div className="mt-3.5 p-3 rounded-xl bg-[#faf7f4] border border-[#e6dacb]/80 flex items-start gap-2.5">
            <FileText className="w-4 h-4 text-[#806044] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-earth-800">İmar Durumu: </span>
              <span className="text-earth-700 font-medium">{property.zoningStatus}</span>
            </div>
          </div>

          {/* Technical Features Grid (Kadastro Yolu, Elektrik, Su, m²) */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 text-xs text-earth-800">
            {/* Kadastro Yolu */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <Route className="w-4 h-4 text-[#1b4332] shrink-0" />
              <div className="truncate">
                <span className="text-gray-500 block text-[10px]">Kadastro Yolu</span>
                <span className="font-semibold flex items-center gap-1 text-[11px]">
                  <Check className="w-3.5 h-3.5 text-green-600 inline" />
                  Var (Asfalt)
                </span>
              </div>
            </div>

            {/* Area */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div>
                <span className="text-gray-500 block text-[10px]">Arsa Alanı</span>
                <span className="font-bold text-[#1b4332] text-xs">
                  {formatArea(property.area)}
                </span>
              </div>
            </div>

            {/* Elektrik */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="truncate">
                <span className="text-gray-500 block text-[10px]">Elektrik</span>
                <span className="font-semibold text-[11px] truncate">
                  Parsel Başında Aktif
                </span>
              </div>
            </div>

            {/* Su */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <Droplet className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="truncate">
                <span className="text-gray-500 block text-[10px]">Şebeke Suyu</span>
                <span className="font-semibold text-[11px] truncate">
                  Parsel Başında Hazır
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Per m² */}
        <div className="mt-5 pt-4 border-t border-[#e6dacb]">
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="text-[11px] text-gray-500 block font-medium">Toplam Satış Fiyatı</span>
              <span className="text-2xl font-serif font-black text-[#1b4332]">
                {formatPrice(property.price)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-400 block font-medium">Birim m² Fiyatı</span>
              <span className="text-xs font-semibold text-earth-700 bg-earth-100 px-2 py-1 rounded">
                {formatPricePerM2(property.price, property.area)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onSelect(property)}
              className="w-full py-3 px-3 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <Video className="w-4 h-4 text-[#d4af37]" />
              <span>Videoyu & Detayları Aç</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Sor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

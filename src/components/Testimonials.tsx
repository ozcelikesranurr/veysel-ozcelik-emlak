"use client";

import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Dr. Selim Yılmaz",
      title: "Genel Cerrahi Uzmanı / İstanbul",
      text: "Sakarya Geyve bölgesinde köy içi konut imarlı, müstakil bir arsa arıyordum. Karşılaştığım ilanların çoğunun yolu problemliydi. Veysel Bey ile tanıştığımızda kadastro sınırlarını, elektrik ve su durumunu bizzat yerinde gösterdi ve tapu devrini tertemiz tamamladık.",
      region: "Geyve / Sakarya",
      badge: "İmarlı Arsa Alımı",
    },
    {
      name: "Murat Demirkan",
      title: "Demirkan Lojistik YK Başkanı",
      text: "Bölgede depo ve arazi yatırımı konusunda Veysel Bey'in kadastro, zemin ve resmi yol konusundaki titizliği bize büyük güven verdi. Toprak ve arazi alanında derin bilgiye sahip, güvenle çalışabileceğiniz bir danışman.",
      region: "Sakarya / Bölge Yatırımı",
      badge: "Arazi Danışmanlığı",
    },
    {
      name: "Cahide & Kenan Öztürk",
      title: "Emekli Eğitimciler",
      text: "Geyve'deki arazimizin satış sürecinde Veysel Bey doğru piyasa değerini analiz etti ve kısa sürede güvenilir bir alıcıyla satışı sonuçlandırdı. Kendisine dürüstlüğü ve profesyonelliği için çok teşekkür ederiz.",
      region: "Geyve / Sakarya",
      badge: "Arazi Satış Ekspertizi",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#806044] block mb-2">
            Yatırımcı Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1b4332]">
            Toprak Sahibi Olan Yatırımcılarımızın Yorumları
          </h2>
          <p className="mt-3 text-sm sm:text-base text-earth-700">
            16 yıllık güven yolculuğumuzda yüzlerce ailenin ve kurumsal firmanın doğru toprakla buluşmasına vesile olduk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#faf7f4] rounded-3xl p-6 sm:p-8 border border-[#e6dacb] flex flex-col justify-between relative group hover:shadow-lg transition-all"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1b4332]/10 text-[#1b4332]">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-earth-800 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e6dacb]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1b4332]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-earth-600 block">
                    {rev.title}
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 font-mono">
                  {rev.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { 
  Route, 
  Scale, 
  Trees, 
  Building, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export const InvestmentGuide: React.FC = () => {
  const guideItems = [
    {
      icon: Route,
      title: "1. Kadastro Yolu Hayatidir",
      desc: "Yolu olmayan araziye helikopterle inemezsiniz. Fiilen kullanılan toprak yollar haritada resmi yol değilse komşu parsel yolu kapatabilir. Asla 'yolu var' lafına güvenmeyin; resmi kadastro paftasında yol olup olmadığını teyit edin.",
      bad: "Komşu araziden geçen geçici yol",
      good: "Kadastro paftasında tescilli resmi yol",
    },
    {
      icon: Scale,
      title: "2. Hisseli Tapuda 'Şufa' (Ön Alım) Tuzağı",
      desc: "Hisseli arazilerde diğer hissedarların habersiz yapılan satışları iptal ettirip noter bedeli üzerinden alma (şufa) hakkı bulunur. Müstakil tek tapu her zaman en güvenli seçenektir.",
      bad: "Rıza-i taksimi yapılmamış çoklu hisseler",
      good: "Müstakil (1/1 hisse) bağımsız parsel",
    },
    {
      icon: Trees,
      title: "3. Zeytinlik Kanunu (3573 SK.)",
      desc: "Zeytinlik vasfındaki arazilere sanayi veya lüks konut yapılamaz. Ancak belirli büyüklüğün üzerindeki zeytinliklerde tarımsal amaçlı bağ evi veya zeytinyağı sıkım tesisi izni alınabilir. Kanun sınırları net bilinmelidir.",
      bad: "Zeytinlik arazide imar vaat edenler",
      good: "Kanuna uygun bağ evi ve tarımsal kullanım",
    },
    {
      icon: Building,
      title: "4. 5403 Sayılı Toprak Koruma Kanunu",
      desc: "Tarım arazilerinde 5.000 m² altında bağ evi izni çıkmaz ve araziler bölünemez büyüklüğün altına bölünemez. İzinli çiftlik evi hayaliniz varsa asgari yüzölçümü şartlarını sağlamalısınız.",
      bad: "5.000 m² altı tarlaya ev ruhsatı aramak",
      good: "5 dönüm üstü, kadastro cepheli tarlalar",
    },
  ];

  return (
    <section id="rehber" className="py-24 bg-[#faf7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#806044] block mb-2">
            Yatırımcı Bilinçlendirme Rehberi
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1b4332]">
            Arazi Alırken Yapılan 4 Büyük Hata
          </h2>
          <p className="mt-3 text-sm sm:text-base text-earth-700">
            Toprak yatırımı en karlı yatırımdır ancak doğru hukuki ve kadastral bilgiyle yapıldığında. İşte paranızı ve geleceğinizi koruyacak altın kurallar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dacb] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1b4332]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-earth-800 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-earth-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-50 text-red-900 border border-red-100">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[11px] text-red-700">UZAK DURUN</span>
                      <span>{item.bad}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[11px] text-emerald-700">DOĞRU YAKLAŞIM</span>
                      <span>{item.good}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-serif font-bold text-[#d4af37]">
              Almayı düşündüğünüz bir arazi var mı?
            </h4>
            <p className="text-xs sm:text-sm text-[#d8f3dc] mt-1 max-w-xl">
              Başka bir emlakçıdan bulmuş olsanız dahi Ada ve Parsel bilgisini bize danışın; kadastrosunu ve hukuki durumunu sizin adınıza ücretsiz sorgulayalım.
            </p>
          </div>

          <a
            href="#ekspertiz"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#e5bc5d] text-[#081c15] font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md flex items-center gap-1.5"
          >
            <span>Ada / Parsel Danış</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

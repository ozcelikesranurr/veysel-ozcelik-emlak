"use client";

import React, { useState } from "react";
import { EXPERT_DATA } from "@/data/expert";
import { createWhatsAppUrl } from "@/lib/utils";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  FileBadge
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const whatsappUrl = createWhatsAppUrl(
    EXPERT_DATA.whatsapp,
    `Merhaba Veysel Bey, arazi portföyünüz ve yatırım danışmanlığı hakkında görüşmek istiyorum.`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="iletisim" className="py-24 bg-[#faf7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#806044] block mb-2">
            Doğrudan İletişim & Randevu
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1b4332]">
            Veysel Özçelik ile İletişime Geçin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-earth-700">
            Aklınızdaki araziyi sormak, yerinde inceleme randevusu almak veya arazinizi değerlendirmek için 7/24 mesaj bırakabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Call, WhatsApp & Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Action Buttons Card */}
            <div className="bg-[#1b4332] text-white p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-2">
                Hızlı İletişim Kanalları
              </h3>
              <p className="text-xs text-[#d8f3dc] mb-6">
                Doğrudan arayabilir veya WhatsApp üzerinden saniyeler içinde Ada/Parsel sorabilirsiniz.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${EXPERT_DATA.phone}`}
                  className="w-full py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <span>Hemen Ara: {EXPERT_DATA.phoneFormatted}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm shadow-lg shadow-green-950/40 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp&apos;tan Hızlı Bilgi Al</span>
                </a>
              </div>
            </div>

            {/* Office & License Info */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dacb] shadow-sm space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-earth-100 text-[#1b4332] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Bölge Ofisi
                  </h4>
                  <p className="text-sm font-semibold text-earth-900 mt-1">
                    {EXPERT_DATA.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-earth-100 text-[#1b4332] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    E-Posta
                  </h4>
                  <a
                    href={`mailto:${EXPERT_DATA.email}`}
                    className="text-sm font-semibold text-[#1b4332] hover:underline mt-1 block"
                  >
                    {EXPERT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-earth-100 text-[#1b4332] shrink-0">
                  <FileBadge className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Resmi Belge
                  </h4>
                  <p className="text-xs font-semibold text-earth-800 mt-1">
                    {EXPERT_DATA.ttbsNo}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-earth-100 text-[#1b4332] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Çalışma & Arazi Keşif Saatleri
                  </h4>
                  <p className="text-xs text-earth-800 mt-1">
                    Pazartesi - Cumartesi: 09:00 - 19:00 (Pazar günleri randevulu arazi keşifleri)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#e6dacb] shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#1b4332] mb-2">
              Bize Mesaj Gönderin
            </h3>
            <p className="text-xs sm:text-sm text-earth-700 mb-6">
              Aradığınız bölgeyi veya satmayı planladığınız parseli yazın, en geç 2 saat içerisinde dönüş yapalım.
            </p>

            {formSent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-950">
                  Mesajınız Başarıyla İletildi!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-2">
                  Sayın {name}, Veysel Özçelik en kısa sürede {phone} numaranız üzerinden sizinle irtibata geçecektir.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-5 px-5 py-2 rounded-xl bg-[#1b4332] text-white text-xs font-semibold"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-800 mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-800 mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-800 mb-1">
                    İlgilendiğiniz Arazi Türü veya Bölge
                  </label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-xs sm:text-sm text-earth-800 bg-white">
                    <option>Zeytinlik Almak İstiyorum</option>
                    <option>Müstakil Tarla Almak İstiyorum</option>
                    <option>Sanayi / Depolama Arazisi Arıyorum</option>
                    <option>Köy İçi İmarlı Arsa Arıyorum</option>
                    <option>Mevcut Arazimi Satmak İstiyorum</option>
                    <option>Genel Yatırım Danışmanlığı İstiyorum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-800 mb-1">
                    Mesajınız veya Sorunuz
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Bütçeniz, aradığınız asgari dönüm, tercih ettiğiniz ilçe veya sormak istediğiniz soruları buraya yazabilirsiniz..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-xs sm:text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 text-[#d4af37]" />
                    <span>Mesajı Gönder</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

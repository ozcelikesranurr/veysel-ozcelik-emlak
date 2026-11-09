export interface ExpertProfile {
  name: string;
  title: string;
  subtitle: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  ttbsNo: string; // Belge özeti
  mykDetails: {
    title: string;
    level: string;
    standard: string;
    certificateNo: string;
    validUntil: string;
    issuedDate: string;
    issuer: string;
    status: string;
    barcode: string;
    maskedTc: string;
    verifyUrl: string;
  };
  experienceYears: number;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  bio: string[];
  principles: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export const EXPERT_DATA: ExpertProfile = {
  name: "Veysel Özçelik",
  title: "Tarla & Arazi Yatırım Uzmanı",
  subtitle: "Sadece toprak ve arazi. Konut ve daire satışı yapmıyoruz.",
  phone: "+905373635763",
  phoneFormatted: "0 (537) 363 57 63",
  whatsapp: "905373635763",
  email: "veyselozcelik054@gmail.com",
  address: "Kepekli Sk. No:53, Geyve / Sakarya",
  city: "Sakarya / Geyve ve Çevre Bölgeler",
  ttbsNo: "MYK Seviye 5 Belge No: YB0217/17UY0333-5/00/7656",
  mykDetails: {
    title: "MYK Mesleki Yeterlilik Belgesi",
    level: "Sorumlu Emlak Danışmanı (Seviye 5)",
    standard: "17UY0333-5/00",
    certificateNo: "YB0217/17UY0333-5/00/7656",
    validUntil: "24.02.2030",
    issuedDate: "25.02.2025",
    issuer: "Altın Gayrimenkul Emlak İnş. Tur. Paz. Tic. A.Ş.",
    status: "GEÇERLİ",
    barcode: "MYK0117721164983578931",
    maskedTc: "159******52",
    verifyUrl: "https://www.turkiye.gov.tr/belge-dogrulama",
  },
  experienceYears: 10,
  stats: [
    {
      label: "İşlem Gören Arazi",
      value: "500+ Dönüm",
      sublabel: "Müstakil ve hukuken sorunsuz tapu",
    },
    {
      label: "Bölgesel Tecrübe",
      value: "Sakarya & Geyve",
      sublabel: "Yerinde kadastro ve zemin uzmanlığı",
    },
    {
      label: "Yatırımcı Portföyü",
      value: "350+ Müşteri",
      sublabel: "Geleceğine güvenle yatırım yapanlar",
    },
    {
      label: "Hukuki Sıfır Hata",
      value: "%100",
      sublabel: "Şufa, hisse ve kadastro yolu kontrolü",
    },
  ],
  bio: [
    "Sakarya, Geyve ve çevre bölgelerde yalnızca 'Toprak, Tarla ve Arazi' yatırımları üzerine odaklanmış bir gayrimenkul danışmanıyım. Daire ve konut satışı yapmıyor; tüm mesaimizi, saha araştırmalarımızı ve uzmanlığımızı gerçek değer üreten toprağa ayırıyoruz.",
    "Bir arazinin sadece bugünkü fiyatını değil; resmi kadastro yolu olup olmadığını, 5403 Sayılı Toprak Koruma Kanunu'na uygunluğunu, su ve elektrik imkanlarını, eğimini ve şufa (ön alım) riskini bizzat yerinde inceliyorum.",
    "Müşterilerimize sunduğumuz veya ekspertizini yaptığımız her parsel; sınırları netleştirilmiş, tapu ve kadastro kayıtları incelenmiş güvenilir arazilerden oluşur.",
  ],
  principles: [
    {
      title: "Resmi Kadastro Yolu Önceliği",
      desc: "Yolu olmayan araziye yatırım yapılmaz kuralıyla; tüm portföyümüzün fiili ve hukuki ulaşım durumunu belgeleriz.",
      icon: "Route",
    },
    {
      title: "Müstakil Tapu Titizliği",
      desc: "Hisseli tapularda doğabilecek şufa hakkı ve ortaklık giderilmesi davaları riskine karşı şeffaf hukuki analiz.",
      icon: "ShieldCheck",
    },
    {
      title: "Ada / Parsel Şeffaflığı",
      desc: "Gizli kapaklı konum yok. Her ilanımızda açıkça Ada ve Parsel bilgisini paylaşıyor, Parsel Sorgu teyidi sağlıyoruz.",
      icon: "MapPin",
    },
    {
      title: "Tarımsal & Gelecek Projeksiyonu",
      desc: "Toprak yapısı, taban suyu, meyve verimi veya lojistik aksları bölgenin dinamiklerine göre inceleriz.",
      icon: "TrendingUp",
    },
  ],
};

import { Property } from '@/types/property';

export const PROPERTIES: Property[] = [
  {
    id: "prop-sakarya-geyve-akdogan-163-62",
    title: "Sakarya Geyve Akdoğan'da Asfalt Yola Sıfır Elektrik & Su Mevcut İmarlı Arsa",
    slug: "sakarya-geyve-akdogan-asfalt-cepheli-imarli-arsa",
    type: "Arsa",
    price: 1250000,
    area: 291,
    city: "Sakarya",
    district: "Geyve",
    neighborhood: "Akdoğan Mahallesi",
    ada: "163",
    parsel: "62",
    zoningStatus: "Köy Yerleşik Alanı İçi Konut İmarlı",
    titleDeedType: "Müstakil Parsel",
    cadastralRoad: true,
    roadType: "Asfalt Cephe",
    electricity: true,
    electricityDistance: "Parsel başında / Köy şebekesi aktif",
    water: true,
    waterSource: "Köy şebeke suyu parsel başında hazır",
    featured: true,
    slope: "Düz",
    suitableFor: [
      "Müstakil Köy Evi",
      "Prefabrik / Çelik Ev",
      "Yatırımlık Arsa",
      "Hobi Bahçeli Yaşam"
    ],
    images: [
      "/images/akdogan-163-62-1.jpg",
      "/images/akdogan-163-62-2.jpg"
    ],
    video: "/images/video.mov",
    description: "Sakarya ili, Geyve ilçesi, Akdoğan Mahallesi sınırları içerisinde yer alan 291 m² büyüklüğünde, müstakil tek tapulu arsa. Akdoğan Köyü resmi iç yoluna sıfır asfalt cepheli olup elektrik ve şebeke suyu parsel sınırındadır. Düz arazi yapısına sahip, etrafı tel çitle çevrili, hemen yapılaşmaya uygun çok kıymetli fırsat gayrimenkulüdür.",
    highlights: [
      "291 m² Müstakil Parsel, Tek Tapu (Sorunsuz devir)",
      "Akdoğan Köy İçi resmi yoluna sıfır asfalt cephe",
      "Elektrik ve şebeke suyu parsel sınırında hazır",
      "Köy yerleşik alanı içerisinde konut yapımına uygun",
      "Etrafında müstakil yerleşimler ve komşuluk mevcut",
      "Geyve merkeze ve ana ulaşım akslarına hızlı erişim"
    ],
    coordinates: {
      lat: 40.4820,
      lng: 30.2950
    },
    createdAt: "2026-11-09"
  }
];

export const CITIES = ["Tüm Bölgeler", "Sakarya"];

export const PROPERTY_TYPES = [
  "Tüm Arazi Türleri",
  "Arsa"
];

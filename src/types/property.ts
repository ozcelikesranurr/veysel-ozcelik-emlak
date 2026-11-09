export type PropertyType = 
  | 'Tarla' 
  | 'Arsa' 
  | 'Zeytinlik' 
  | 'Bağ / Bahçe' 
  | 'Sanayi İmarlı Arazi';

export type TitleDeedType = 'Müstakil Parsel' | 'Hisseli Tapu' | 'Kooperatif Hisseli';

export type RoadType = 'Resmi Kadastro Yolu' | 'Asfalt Cephe' | 'Stabilize Yol' | 'Yolu Yok' | 'Orman Yolu';

export interface Property {
  id: string;
  title: string;
  slug: string;
  type: PropertyType;
  price: number; // TL
  area: number; // m²
  city: string;
  district: string;
  neighborhood: string;
  ada: string | number;
  parsel: string | number;
  zoningStatus: string; // e.g. "Köy Yerleşik Alanı", "Tarımsal Nitelikli", "Sanayi & Depolama", "%5 Bağ Evi İmarlı"
  titleDeedType: TitleDeedType;
  cadastralRoad: boolean;
  roadType: RoadType;
  electricity: boolean;
  electricityDistance?: string; // e.g. "Başında", "100m mesafede", "Trafo yakın"
  water: boolean;
  waterSource?: string; // e.g. "Artezyen Kuyusu", "Şebeke Suyu", "Kanal Boyu Sulama"
  featured: boolean;
  slope: 'Düz' | 'Hafif Eğimli' | 'Eğimli' | 'Hakim Tepe Manzaralı';
  suitableFor: string[];
  images: string[];
  video?: string;
  description: string;
  highlights: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
}

export interface ValuationFormData {
  fullName: string;
  phone: string;
  city: string;
  district: string;
  neighborhood: string;
  ada: string;
  parsel: string;
  area: string;
  propertyType: PropertyType;
  titleDeedType: TitleDeedType;
  hasRoad: string;
  hasElectricityWater: string;
  expectedPrice?: string;
  notes?: string;
}

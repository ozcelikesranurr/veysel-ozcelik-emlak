"use client";

import React from "react";
import { CITIES, PROPERTY_TYPES } from "@/data/properties";
import { Search, Filter, Check, RotateCcw } from "lucide-react";

interface FilterState {
  searchTerm: string;
  selectedCity: string;
  selectedType: string;
  onlyCadastralRoad: boolean;
  onlyDirectTitle: boolean;
  sortBy: string;
}

interface PropertyFilterProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalCount: number;
}

export const PropertyFilter: React.FC<PropertyFilterProps> = ({
  filters,
  onChange,
  totalCount,
}) => {
  const handleReset = () => {
    onChange({
      searchTerm: "",
      selectedCity: "Tüm Bölgeler",
      selectedType: "Tüm Arazi Türleri",
      onlyCadastralRoad: false,
      onlyDirectTitle: false,
      sortBy: "default",
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e6dacb] shadow-sm mb-10">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-[#e6dacb]">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1b4332] flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#d4af37]" />
            Arazi ve Tarla Portföyü
          </h2>
          <p className="text-xs sm:text-sm text-earth-700 mt-1">
            Toplam <span className="font-bold text-[#1b4332]">{totalCount}</span> adet incelenmiş ve doğrulanmış arazi listeleniyor.
          </p>
        </div>

        {/* Quick Type Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {PROPERTY_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => onChange({ ...filters, selectedType: type })}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filters.selectedType === type
                  ? "bg-[#1b4332] text-white shadow-sm"
                  : "bg-earth-100 hover:bg-earth-200 text-earth-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Controls Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Search Input (Ada/Parsel/Köy) */}
        <div className="relative">
          <label className="block text-xs font-semibold text-earth-800 mb-1">
            Ada, Parsel, Köy veya Anahtar Kelime
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Örn: 142 ada, Kaz Dağları, Geyikli..."
              value={filters.searchTerm}
              onChange={(e) => onChange({ ...filters, searchTerm: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:border-transparent text-xs sm:text-sm text-earth-900 placeholder-gray-400"
            />
          </div>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-xs font-semibold text-earth-800 mb-1">
            Bölge / İl
          </label>
          <select
            value={filters.selectedCity}
            onChange={(e) => onChange({ ...filters, selectedCity: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:border-transparent text-xs sm:text-sm text-earth-900 bg-white"
          >
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-xs font-semibold text-earth-800 mb-1">
            Sıralama
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-earth-300 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:border-transparent text-xs sm:text-sm text-earth-900 bg-white"
          >
            <option value="default">Önerilen Sıralama</option>
            <option value="price-asc">Fiyat (Önce En Düşük)</option>
            <option value="price-desc">Fiyat (Önce En Yüksek)</option>
            <option value="area-desc">Arazi m² (Büyükten Küçüğe)</option>
            <option value="area-asc">Arazi m² (Küçükten Büyüğe)</option>
          </select>
        </div>

        {/* Reset Filter Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full py-2.5 px-3 rounded-xl border border-earth-300 hover:bg-earth-100 text-earth-700 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Filtreleri Temizle</span>
          </button>
        </div>
      </div>

      {/* Toggle Checkboxes (Kadastro Yolu & Müstakil Tapu) */}
      <div className="mt-5 pt-4 border-t border-earth-200/60 flex flex-wrap items-center gap-4 text-xs font-medium text-earth-900">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.onlyCadastralRoad}
            onChange={(e) => onChange({ ...filters, onlyCadastralRoad: e.target.checked })}
            className="w-4 h-4 text-[#1b4332] rounded border-earth-300 focus:ring-[#1b4332]"
          />
          <span>Yalnızca Resmi Kadastro Yolu Olanlar</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.onlyDirectTitle}
            onChange={(e) => onChange({ ...filters, onlyDirectTitle: e.target.checked })}
            className="w-4 h-4 text-[#1b4332] rounded border-earth-300 focus:ring-[#1b4332]"
          />
          <span>Yalnızca Müstakil Tek Tapu (Hissesiz)</span>
        </label>
      </div>
    </div>
  );
};

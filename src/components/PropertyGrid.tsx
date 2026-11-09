"use client";

import React, { useState, useMemo } from "react";
import { Property } from "@/types/property";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";
import { PropertyFilter } from "./PropertyFilter";
import { PropertyDetailModal } from "./PropertyDetailModal";
import { AlertCircle } from "lucide-react";

export const PropertyGrid: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCity: "Tüm Bölgeler",
    selectedType: "Tüm Arazi Türleri",
    onlyCadastralRoad: false,
    onlyDirectTitle: false,
    sortBy: "default",
  });

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Search term filter
      if (filters.searchTerm.trim() !== "") {
        const term = filters.searchTerm.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(term);
        const matchesDistrict = prop.district.toLowerCase().includes(term);
        const matchesNeighborhood = prop.neighborhood.toLowerCase().includes(term);
        const matchesAda = prop.ada.toString().includes(term);
        const matchesParsel = prop.parsel.toString().includes(term);
        if (!matchesTitle && !matchesDistrict && !matchesNeighborhood && !matchesAda && !matchesParsel) {
          return false;
        }
      }

      // City filter
      if (filters.selectedCity !== "Tüm Bölgeler" && prop.city !== filters.selectedCity) {
        return false;
      }

      // Type filter
      if (filters.selectedType !== "Tüm Arazi Türleri" && prop.type !== filters.selectedType) {
        return false;
      }

      // Cadastral road filter
      if (filters.onlyCadastralRoad && !prop.cadastralRoad) {
        return false;
      }

      // Direct title filter
      if (filters.onlyDirectTitle && prop.titleDeedType !== "Müstakil Parsel") {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") return a.price - b.price;
      if (filters.sortBy === "price-desc") return b.price - a.price;
      if (filters.sortBy === "area-desc") return b.area - a.area;
      if (filters.sortBy === "area-asc") return a.area - b.area;
      return 0;
    });
  }, [filters]);

  return (
    <section id="portfoy" className="py-20 bg-[#faf7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#806044] block mb-2">
            Özenle Seçilmiş Gayrimenkuller
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1b4332]">
            Güncel Tarla, Arsa ve Arazi Portföyü
          </h2>
          <p className="mt-3 text-sm sm:text-base text-earth-700">
            Ada ve parsel numaraları şeffaf olarak belirtilmiş, yerinde zemin ve kadastro kontrolü yapılmış arazilerimiz.
          </p>
        </div>

        {/* Filter Bar */}
        <PropertyFilter
          filters={filters}
          onChange={setFilters}
          totalCount={filteredProperties.length}
        />

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className={filteredProperties.length === 1 ? "max-w-xl mx-auto w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"}>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={(p) => setSelectedProperty(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-earth-200 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-earth-900">
              Kriterlere Uygun Arazi Bulunamadı
            </h3>
            <p className="text-sm text-earth-600 mt-2">
              Arama kriterlerinizi genişletebilir veya aradığınız bölge için bize doğrudan danışabilirsiniz.
            </p>
            <button
              onClick={() =>
                setFilters({
                  searchTerm: "",
                  selectedCity: "Tüm Bölgeler",
                  selectedType: "Tüm Arazi Türleri",
                  onlyCadastralRoad: false,
                  onlyDirectTitle: false,
                  sortBy: "default",
                })
              }
              className="mt-5 px-5 py-2.5 rounded-xl bg-[#1b4332] text-white text-xs font-semibold hover:bg-[#2d6a4f] transition-colors"
            >
              Tüm Portföyü Göster
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};

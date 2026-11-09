import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(area: number): string {
  return new Intl.NumberFormat("tr-TR").format(area) + " m²";
}

export function formatPricePerM2(price: number, area: number): string {
  if (!area || area <= 0) return "0 ₺/m²";
  const perM2 = Math.round(price / area);
  return new Intl.NumberFormat("tr-TR").format(perM2) + " ₺/m²";
}

export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

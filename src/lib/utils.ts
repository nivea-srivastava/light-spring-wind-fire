import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatMoneyExact(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return startOfDay(d);
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBefore(a: Date, b: Date) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfter(a: Date, b: Date) {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function nightsBetween(start: Date, end: Date) {
  const ms = startOfDay(end).getTime() - startOfDay(start).getTime();
  return Math.max(0, Math.round(ms / 86_400_000));
}

export function formatShortDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatMdY(date: Date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function monthLabel(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

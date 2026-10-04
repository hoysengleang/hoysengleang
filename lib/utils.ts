import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const ONE_DAY_MS = 86_400_000;

/** Config uses `new Date()` as the end date of ongoing work. */
export function isOngoing(endDate: Date): boolean {
  return endDate.getTime() > Date.now() - ONE_DAY_MS;
}

/** "2026", "2023 – 2025" or "2024 – now". */
export function formatYearRange(startDate: Date, endDate: Date | "Present"): string {
  const start = startDate.getFullYear();
  if (endDate === "Present" || isOngoing(endDate)) {
    return `${start} – now`;
  }
  const end = endDate.getFullYear();
  return start === end ? `${start}` : `${start} – ${end}`;
}

export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes logically
export function cn(...inputs: ClassValue[]) {
  // Since we don't have external libs clsx/tailwind-merge installed in this env, 
  // we use a simple join fallback, but in a real app use: return twMerge(clsx(inputs));
  return inputs.filter(Boolean).join(" ");
}
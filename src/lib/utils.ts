import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertNumberToAsciiLetters = (number: number) => {
  return String.fromCharCode(97 + number);
};

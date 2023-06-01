import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeWhiteSpace = (str: string) => {
  return str.replace(/\s/g, "-");
};

export const addWhiteSpace = (str: string) => {
  return str.replace(/-/g, " ");
};

export const getPathname = (url: string) => {
  return new URL(url).pathname.slice(1);
};

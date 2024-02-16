import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// convert english number to persian
export function toPersianNumber(input) {
  return input.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
}

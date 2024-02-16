import "./globals.css";
import { Vazirmatn as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

export const metadata = {
  title: "شبیه‌ساز تقویم ترم",
  description: "شبیه ساز تقویم ترم تحصیلی دانشگاه جهت بررسی تداخل دروس و انتخاب واحد",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

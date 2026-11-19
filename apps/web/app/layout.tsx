import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// Ubah path import ini agar menunjuk ke dalam folder components
import GlobalBGM from "./components/GlobalBGM"; 

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MMA Learning",
  description: "A playful learning platform for curious minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning ditambahkan di sini untuk mencegah error dari ekstensi browser */}
      <body className={`${nunito.className} min-h-full`} suppressHydrationWarning>
        {/* Komponen BGM dipanggil di sini */}
        <GlobalBGM />
        
        {children}
      </body>
    </html>
  );
}
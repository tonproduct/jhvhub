import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JHV Pack Tools — Ferramentas para Máquinas de Embalagem",
  description: "Fabricação nacional de ferramentas de selagem e corte para embaladoras Flow Pack, Verticais e Sachê. Qualidade com padrões internacionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <ScrollToTop />
          <FloatingWhatsApp />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

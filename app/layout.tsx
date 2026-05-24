// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css"; // Pastikan Tailwind sudah terkonfigurasi di sini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomi Firdaus | UI/UX Designer & Software Engineer Portfolio",
  description: "Portfolio profesional Tomi Firdaus - XI RPL 6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 flex min-h-screen overflow-x-hidden`}>
        {/* Sidebar Navigasi */}
        <Sidebar />

        {/* Konten Utama */}
        <main className="flex-1 min-h-screen md:pl-72 p-6 md:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
          <div className="max-w-5xl mx-auto backdrop-blur-sm bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60 shadow-xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
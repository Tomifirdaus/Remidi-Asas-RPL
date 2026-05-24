// src/components/Sidebar.tsx
"use strict";
import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { name: "Profile & Dashboard", href: "/" },
    { name: "Keahlian & Skills", href: "/skill" },
    { name: "Pengalaman Kerja", href: "/experience" },
    { name: "Riwayat Edukasi", href: "/education" },
    { name: "Hubungi Saya", href: "/contact" },
  ];

  return (
    <aside className="w-72 bg-slate-950/80 border-r border-slate-800 h-screen fixed top-0 left-0 hidden md:flex flex-col justify-between p-6 z-50 backdrop-blur-md">
      <div>
        {/* Header Sidebar */}
        <div className="mb-10 px-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            TOMI FIRDAUS
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-mono">Absen 32 • XI RPL 6</p>
        </div>

        {/* Menu Navigasi */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all duration-200 border border-transparent hover:border-slate-700/50 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer Sidebar */}
      <div className="border-t border-slate-800 pt-4 px-2">
        <p className="text-xs text-slate-500">© 2026 Tomi Firdaus.</p>
        <p className="text-[10px] text-indigo-400 font-mono mt-0.5">Software Engineering & Design</p>
      </div>
    </aside>
  );
}
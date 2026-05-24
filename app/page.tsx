// src/app/page.tsx
export default function ProfilePage() {
  return (
    <section className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="border-b border-slate-800 pb-8">
        <span className="px-3 py-1 text-xs font-mono bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
          UI/UX Designer & Web Developer
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Halo, Saya <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tomi Firdaus</span>
        </h1>
        <p className="text-lg text-slate-300 mt-4 leading-relaxed max-w-3xl">
          Seorang siswa SMK jurusan **Rekayasa Perangkat Lunak (RPL)** yang memiliki privilese memadukan logika pemrograman yang presisi dengan estetika desain yang memikat. Fokus saya adalah menciptakan antarmuka digital yang tidak hanya berfungsi baik, tapi juga memberikan pengalaman pengguna yang tak terlupakan.
        </p>
      </div>

      {/* Grid Informasi Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identitas Sekolah */}
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Informasi Akademik
          </h3>
          <table className="w-full text-sm text-slate-300 space-y-2">
            <tbody>
              <tr className="border-b border-slate-800/50"><td className="py-2 font-medium text-slate-400">Nama Lengkap</td><td className="py-2 text-right">Tomi Firdaus</td></tr>
              <tr className="border-b border-slate-800/50"><td className="py-2 font-medium text-slate-400">Kelas</td><td className="py-2 text-right">XI RPL 6</td></tr>
              <tr className="border-b border-slate-800/50"><td className="py-2 font-medium text-slate-400">Nomor Absen</td><td className="py-2 text-right font-mono">32</td></tr>
              <tr><td className="py-2 font-medium text-slate-400">Spesialisasi</td><td className="py-2 text-right text-indigo-400 font-medium">Frontend & UI/UX</td></tr>
            </tbody>
          </table>
        </div>

        {/* Fokus Hobi: Desain */}
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span> Passion & Hobi: Desain
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bagi saya, desain bukan sekadar hobi, melainkan cara berkomunikasi visual. Saya aktif mengeksplorasi desain antarmuka aplikasi (UI/UX), ilustrasi vektor, serta penataan tipografi moderen. Keahlian ini membuat kode program yang saya bangun jauh lebih hidup dan berorientasi pada kenyamanan pengguna.
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Figma</span>
            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Wireframing</span>
            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400">Design System</span>
          </div>
        </div>
      </div>
    </section>
  );
}
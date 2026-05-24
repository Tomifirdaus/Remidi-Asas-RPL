export default function ProfilePage() {
  return (
    <section className="py-20 bg-slate-950 text-white px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase block mb-2">01 / About Me</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">Profil Profesional</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 self-start">
            <div className="w-24 h-24 rounded-2xl bg-indigo-600 mb-6 flex items-center justify-center font-bold text-2xl">TF</div>
            <h3 className="text-lg font-bold">Tomi Firdaus</h3>
            <p className="text-sm text-slate-400 font-mono mb-4">Software Engineering Student</p>
            <hr className="border-slate-800 my-4" />
            <table className="w-full text-xs text-slate-400 border-separate border-spacing-y-2">
              <tbody>
                <tr><td className="font-semibold text-slate-500">Kelas:</td><td className="text-slate-200">XI RPL 6</td></tr>
                <tr><td className="font-semibold text-slate-500">No. Absen:</td><td className="text-slate-200">32</td></tr>
                <tr><td className="font-semibold text-slate-500">Hobi Utama:</td><td className="text-slate-200 text-indigo-400">Digital & UI/UX Design</td></tr>
                <tr><td className="font-semibold text-slate-500">Fokus:</td><td className="text-slate-200">Frontend Engineering</td></tr>
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed">
            <h4 className="text-xl font-bold text-slate-100">Harmonisasi Logika Pemrograman dan Estetika Seni Visual</h4>
            <p>
              Sebagai siswa SMK jurusan <strong>Rekayasa Perangkat Lunak</strong>, saya tidak hanya memandang kode sebagai barisan instruksi kaku untuk mesin. Didorong oleh hobi mendalam di bidang <strong>Desain Grafis dan UI/UX</strong>, saya melihat setiap antarmuka digital sebagai kanvas kosong yang menuntut keseimbangan sempurna antara kegunaan (*usability*) dan keindahan (*aesthetic*).
            </p>
            <p>
              Saya aktif mengasah kemampuan analisis kebutuhan pengguna, membuat struktur arsitektur informasi melalui *wireframing*, menyusun palet warna yang inklusif, hingga akhirnya menuangkan semua konsep visual tersebut ke dalam kode web modern yang responsif dan berkinerja tinggi memakai ekosistem React dan Next.js.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 bg-indigo-950/20 border border-indigo-500/20 rounded-xl">
                <h5 className="font-bold text-indigo-400 text-sm mb-2">📌 Visi Belajar</h5>
                <p className="text-xs text-slate-400">Menjadi seorang Full-Stack Designer yang mampu mengarsiteki aplikasi berskala industri dengan UX kelas dunia tanpa mengorbankan performa kode.</p>
              </div>
              <div className="p-5 bg-purple-950/20 border border-purple-500/20 rounded-xl">
                <h5 className="font-bold text-purple-400 text-sm mb-2">🚀 Misi Sekarang</h5>
                <p className="text-xs text-slate-400">Mengeksplorasi optimasi performa Next.js, menerapkan prinsip Clean Code pada TypeScript, dan berkontribusi aktif pada proyek-proyek open-source.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
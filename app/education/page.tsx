// src/app/education/page.tsx
export default function EducationPage() {
  const educations = [
    {
      institution: "SMK Telkom Malang  (Jurusan RPL)",
      degree: "Kompetensi Keahlian: Rekayasa Perangkat Lunak",
      period: "2024 - Sekarang",
      details: "Mempelajari algoritma terstruktur, pemrograman berorientasi objek (PBO), basis data relasional, serta siklus pengembangan perangkat lunak (SDLC)."
    },
     {
      institution: "SMPN 2 Wagir",
      degree: "Edukasi Dasar: Sekolah Menengah Pertama",
      period: "2021 - 2024",
      details: "  Membangun fondasi akademik yang kuat dengan fokus pada matematika, ilmu pengetahuan, dan teknologi. Aktif dalam klub komputer dan mengikuti lomba coding tingkat sekolah."
    },
      {
      institution: "SDN 2 Putungsewu, Codo  Wagir  ",
      degree: "Edukasi Dasar: Sekolah Dasar",
      period: "2015 - 2021",
      details: "  Menanamkan nilai-nilai dasar pendidikan dan membangun rasa ingin tahu yang tinggi terhadap teknologi sejak dini. Aktif dalam kegiatan ekstrakurikuler seperti robotika dan seni digital."
    },
    
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Riwayat Pendidikan</h2>
        <p className="text-sm text-slate-400 mt-1">Edukasi formal dan sertifikasi profesional yang telah ditempuh.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {educations.map((edu, idx) => (
          <div key={idx} className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
              <div>
                <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                <p className="text-sm text-indigo-400 font-medium">{edu.degree}</p>
              </div>
              <span className="text-xs font-mono bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700 w-fit">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
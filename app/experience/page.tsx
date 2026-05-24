// src/app/experience/page.tsx
export default function ExperiencePage() {
  const experiences = [
    {
      role: "Lead UI/UX & Frontend Designer",
      company: "Proyek Mandiri & Kontrak Freelance",
      period: "2025 - Sekarang",
      desc: "Merancang arsitektur informasi, wireframe hi-fi di Figma, dan mentransasikannya menjadi komponen web interaktif berbasis Next.js untuk klien UMKM lokal."
    },
    {
      role: "Frontend Developer - Proyek Akhir Sekolah",
      company: "SMK Software Lab",
      period: "2025",
      desc: "Membangun sistem informasi inventaris internal sekolah. Bertanggung jawab penuh atas responsivitas antarmuka dan integrasi API backend."
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Pengalaman Kerja & Proyek</h2>
        <p className="text-sm text-slate-400 mt-1">Rekam jejak kontribusi dalam rekayasa perangkat lunak.</p>
      </div>

      <div className="relative border-l border-slate-800 pl-6 ml-2 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Titik Timeline */}
            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow"></span>
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400">{exp.period}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-sm text-slate-400 font-medium">{exp.company}</h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
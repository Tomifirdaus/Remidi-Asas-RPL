export default function ProjectsPage() {
  const projects = [
    {
      title: "UI/UX Case Study: EduLearn Mobile Platform",
      category: "Design (Hobi)",
      desc: "Perancangan end-to-end aplikasi bimbingan belajar online. Meliputi user research, wireframing, high-fidelity UI design, hingga interaktif prototipe di Figma.",
      stack: ["Figma", "UI/UX Research", "Prototyping"]
    },
    {
      title: "Personal Landing Page Architecture",
      category: "Development",
      desc: "Implementasi desain portofolio performa tinggi menggunakan Next.js dengan pemanfaatan Tailwind CSS untuk visual modern.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono tracking-widest text-indigo-500 uppercase block mb-2">05 / Showcase</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Karya & Proyek Pilihan</h2>
        <p className="text-slate-400 max-w-2xl text-sm mb-16">Eksperimen desain dan pengembangan aplikasi web yang saya selesaikan secara mandiri maupun tim.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono border ${
                    proj.category.includes('Design') ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {proj.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">{proj.desc}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {proj.stack.map((st, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 rounded text-slate-500">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
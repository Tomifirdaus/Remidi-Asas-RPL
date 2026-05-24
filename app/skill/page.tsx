// src/app/skills/page.tsx
export default function SkillsPage() {
  const technicalSkills = [
    { name: "HTML5 & CSS3 / Tailwind CSS", level: "90%" },
    { name: "JavaScript / TypeScript", level: "80%" },
    { name: "React.js / Next.js", level: "75%" },
    { name: "PHP / Laravel", level: "70%" },
  ];

  const designSkills = [
    { name: "UI/UX Design (Figma)", level: "95%" },
    { name: "Wireframing & Prototyping", level: "88%" },
    { name: "Design System & Branding", level: "80%" },
    { name: "Vector Illustration", level: "75%" },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Keahlian & Kapabilitas</h2>
        <p className="text-sm text-slate-400 mt-1">Kombinasi teknologi terkini dan fundamental desain yang kuat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Desain */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-pink-400 border-b border-slate-800 pb-2">Design Suite</h3>
          {designSkills.map((skill, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-sm"><span className="text-slate-300">{skill.name}</span><span className="text-slate-400 font-mono">{skill.level}</span></div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-full transition-all duration-500" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Development */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-indigo-400 border-b border-slate-800 pb-2">Development Stack</h3>
          {technicalSkills.map((skill, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-sm"><span className="text-slate-300">{skill.name}</span><span className="text-slate-400 font-mono">{skill.level}</span></div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full transition-all duration-500" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
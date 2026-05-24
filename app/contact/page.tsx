// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Mari Berkolaborasi</h2>
        <p className="text-sm text-slate-400 mt-1">Punya ide proyek menarik atau ingin berdiskusi seputar desain? Hubungi saya.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Info Detail */}
        <div className="md:col-span-2 space-y-4 text-sm text-slate-300">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-500 font-mono uppercase">Email</p>
            <p className="font-medium text-white mt-0.5">tomi.firdaus@example.com</p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-500 font-mono uppercase">Lokasi</p>
            <p className="font-medium text-white mt-0.5">Indonesia, Kelas XI RPL 6</p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-500 font-mono uppercase">Sosial Media</p>
            <p className="font-medium text-indigo-400 mt-0.5">@tomifirdaus_ (Instagram / GitHub)</p>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="md:col-span-3 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Nama Anda</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" required />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Surel / Email</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" required />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Pesan</label>
            <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tulis rencana hebat proyekmu disini..." required></textarea>
          </div>
          <button type="button" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium text-sm py-2.5 rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
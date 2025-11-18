export default function CTA() {
  return (
    <section className="py-20" id="faq">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 p-1">
          <div className="rounded-[22px] bg-slate-950 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to launch your NFT marketplace?</h2>
                <p className="mt-3 text-slate-300">Start with this modern React template and customize it to fit your brand. Smooth animations, responsive UI, and clean code structure.</p>
              </div>
              <div className="flex items-center gap-4 md:justify-end">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow">Get Template</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/50 px-6 py-3 text-slate-200 hover:bg-slate-800/70 transition-colors">View Docs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

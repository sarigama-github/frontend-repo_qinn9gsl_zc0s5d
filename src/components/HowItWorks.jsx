export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect your wallet',
      desc: 'Use MetaMask or any supported wallet to sign in securely.'
    },
    {
      title: 'Create your collection',
      desc: 'Upload artwork, add details, and hit mint to create NFTs.'
    },
    {
      title: 'List and sell',
      desc: 'Put items on the marketplace with fixed price or auction.'
    },
    {
      title: 'Grow your community',
      desc: 'Share drops, run bids, and reward loyal collectors.'
    }
  ]

  return (
    <section className="py-20" id="how">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How it works</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Follow a simple flow to mint, showcase, and trade your digital creations.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white font-semibold flex items-center justify-center">{i+1}</div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

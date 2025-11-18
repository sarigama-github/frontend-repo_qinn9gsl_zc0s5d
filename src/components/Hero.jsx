import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36" id="discover">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-white"
            >
              Collect, Create, and Trade Digital Art
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300"
            >
              A modern NFT marketplace template built with React and Tailwind. Smooth animations, responsive design, and sleek components ready to customize.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#collections" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow">
                Explore Collections
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/50 px-6 py-3 text-slate-200 hover:bg-slate-800/70 transition-colors">
                How it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="mt-10 flex items-center gap-6 text-slate-400"
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/60?img=${i+10}`} alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <span>10k+ creators are minting</span>
            </motion.div>
          </div>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1523318840068-3e8c0f998509?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxmZWF0dXJlZHxlbnwwfDB8fHwxNzYzNTAzMTUwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="featured" className="h-80 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 text-sm">Featured Drop</p>
                    <h3 className="text-white text-2xl font-semibold mt-1">Neon Dreams #142</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300 text-sm">Current Bid</p>
                    <p className="text-white text-xl font-semibold">2.1 ETH</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="rounded-xl bg-white/10 text-white px-4 py-2 hover:bg-white/20 transition">Place Bid</button>
                  <button className="rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white px-4 py-2">View Artwork</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

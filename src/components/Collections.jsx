import { Star } from 'lucide-react'

const sample = [
  {
    id: 1,
    title: 'Cyber City',
    author: 'Ava Stone',
    price: '0.65 ETH',
    image: 'https://images.unsplash.com/photo-1600998837340-4887228e311f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDeWJlciUyMENpdHl8ZW58MHwwfHx8MTc2MzUwMzE1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Astral Waves',
    author: 'Liam Hart',
    price: '0.42 ETH',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Neon Samurai',
    author: 'Kai Ono',
    price: '0.88 ETH',
    image: 'https://images.unsplash.com/photo-1600297485496-4d5f07d8adb9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwU2FtdXJhaXxlbnwwfDB8fHwxNzYzNTAzMTUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Dream Fragments',
    author: 'Mina Park',
    price: '0.25 ETH',
    image: 'https://images.unsplash.com/photo-1641035853125-39e469f3ace7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcmVhbSUyMEZyYWdtZW50c3xlbnwwfDB8fHwxNzYzNTAzMTUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

function Card({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
      <div className="relative">
        <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
        <button className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1 text-xs text-white backdrop-blur hover:bg-white/20">
          <Star className="h-3.5 w-3.5 text-yellow-400" /> 1.2k
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-medium">{item.title}</h4>
            <p className="text-slate-400 text-sm mt-1">by {item.author}</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs">Price</p>
            <p className="text-white font-semibold">{item.price}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="rounded-xl bg-white/10 text-white px-3 py-2 hover:bg-white/20 transition">Bid</button>
          <button className="rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white px-3 py-2">Details</button>
        </div>
      </div>
    </div>
  )
}

export default function Collections() {
  return (
    <section className="py-20" id="collections">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Trending Collections</h2>
            <p className="mt-2 text-slate-300">Curated picks from top creators</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-xl border border-white/10 bg-slate-900/50 px-4 py-2 text-slate-200 hover:bg-slate-800/70">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sample.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

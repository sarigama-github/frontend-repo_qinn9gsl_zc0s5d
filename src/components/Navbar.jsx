import { useState } from 'react'
import { Menu, X, Wallet2, Search } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 p-[1px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950 group-hover:bg-slate-900 transition-colors" />
              </div>
              <span className="text-white font-semibold tracking-tight">NovaNFT</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#discover">Discover</NavLink>
              <NavLink href="#collections">Collections</NavLink>
              <NavLink href="#how">How it works</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input placeholder="Search items, collections..." className="pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow">
                <Wallet2 className="h-4 w-4" />
                Connect
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800/70 border border-white/10 text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile nav */}
          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-4 text-sm">
                <NavLink href="#discover">Discover</NavLink>
                <NavLink href="#collections">Collections</NavLink>
                <NavLink href="#how">How it works</NavLink>
                <NavLink href="#faq">FAQ</NavLink>
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-lg shadow-indigo-500/20">
                  <Wallet2 className="h-4 w-4" />
                  Connect
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

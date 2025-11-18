import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-400 p-[1px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight">Auralens</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Product</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Showcase</NavLink>
            <NavLink>Docs</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-slate-300 hover:text-white">Sign in</button>
            <button className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">
              Get started
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <div className="grid gap-3">
              <NavLink>Product</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Showcase</NavLink>
              <NavLink>Docs</NavLink>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">
                Get started
              </button>
              <button className="flex-1 px-4 py-2 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

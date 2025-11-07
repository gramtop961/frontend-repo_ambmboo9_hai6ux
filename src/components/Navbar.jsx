import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Vibe Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#showcase" className="hover:text-slate-900">Showcase</a>
            <a href="#cta" className="hover:text-slate-900">Get started</a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#features" className="py-1">Features</a>
            <a href="#showcase" className="py-1">Showcase</a>
            <a href="#cta" className="py-1">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}

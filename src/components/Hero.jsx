import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-rose-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs ring-1 ring-black/10 backdrop-blur">
            <Sparkles size={14} className="text-indigo-600" />
            <span>AI-powered dev environment</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Build full apps in minutes, not weeks
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Spin up frontends, backends, and databases in a live sandbox. Design, code, and ship without leaving the browser.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">Start building</a>
            <a href="#features" className="inline-flex justify-center rounded-md px-5 py-3 ring-1 ring-slate-200 hover:bg-slate-50">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  );
}

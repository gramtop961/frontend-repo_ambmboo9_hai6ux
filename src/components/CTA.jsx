export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to build something great?</h3>
          <p className="mt-2 text-slate-300">Launch your next idea with an AI pair-programmer and a production-ready sandbox.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-slate-900 hover:bg-slate-100">Create a project</a>
            <a href="#features" className="inline-flex justify-center rounded-md px-5 py-3 ring-1 ring-white/20 hover:bg-white/10">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Rocket, Zap, Database, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Instant setup',
    desc: 'Frontend and backend spin up together with hot reload and live preview.'
  },
  {
    icon: Database,
    title: 'Built-in database',
    desc: 'Start with a ready-to-use MongoDB layer for real persistence.'
  },
  {
    icon: Zap,
    title: 'Rapid iteration',
    desc: 'Change code, see results, and iterate fast with zero config.'
  },
  {
    icon: Shield,
    title: 'Safe sandbox',
    desc: 'Everything runs in an isolated environment so you can experiment freely.'
  }
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to ship</h2>
        <p className="mt-3 text-slate-600">A complete toolkit for building real apps—UI, API, and data—without the setup hassle.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

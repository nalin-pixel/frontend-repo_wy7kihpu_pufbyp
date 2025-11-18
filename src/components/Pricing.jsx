import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    features: ['50 generations / mo', 'Lite quality', 'Community support'],
    cta: 'Start free'
  },
  {
    name: 'Creator',
    price: '$19',
    period: '/mo',
    features: ['1,000 generations / mo', 'Pro quality', 'Background removal', 'Priority queue'],
    highlighted: true,
    cta: 'Upgrade'
  },
  {
    name: 'Studio',
    price: '$49',
    period: '/mo',
    features: ['Unlimited projects', '4K renders', 'Style library', 'Commercial license'],
    cta: 'Contact sales'
  }
]

export default function Pricing() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Start free, grow as your creative needs expand. No hidden fees.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${t.highlighted ? 'bg-white text-slate-900' : 'bg-white/[0.04] text-white'} rounded-2xl border ${t.highlighted ? 'border-white' : 'border-white/10'} p-6 backdrop-blur-sm`}
            >
              <div className="flex items-baseline gap-2">
                <h3 className={`text-lg font-medium ${t.highlighted ? 'text-slate-900' : 'text-white'}`}>{t.name}</h3>
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className={`text-4xl font-semibold ${t.highlighted ? 'text-slate-900' : 'text-white'}`}>{t.price}</span>
                <span className={`text-sm ${t.highlighted ? 'text-slate-600' : 'text-white/60'}`}>{t.period}</span>
              </div>
              <ul className={`mt-6 space-y-2 text-sm ${t.highlighted ? 'text-slate-700' : 'text-white/70'}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.highlighted ? 'bg-slate-800' : 'bg-white'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium transition-colors ${t.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-200'}`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

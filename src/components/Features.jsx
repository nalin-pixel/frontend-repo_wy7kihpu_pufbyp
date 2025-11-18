import { motion } from 'framer-motion'
import { Sparkles, Zap, Wand2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Prompt-to-Photo',
    desc: 'Describe your idea and watch as crisp, cinematic images appear in seconds.'
  },
  {
    icon: Zap,
    title: 'Real-time Renders',
    desc: 'Streamed previews update as you type. Iterate without waiting.'
  },
  {
    icon: Wand2,
    title: 'Smart Styles',
    desc: 'Attach mood boards and Auralens learns your aesthetic automatically.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Ready',
    desc: 'SOC2 controls, SSO, and private models for teams that ship.'
  }
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em]">Designed for the way you create</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A focused toolset that blends speed with taste. Make better images, faster.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

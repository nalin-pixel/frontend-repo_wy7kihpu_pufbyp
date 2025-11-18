import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-sm"
        >
          <h3 className="text-3xl font-semibold text-white">Create images that feel like tomorrow</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Join the waitlist to get early access, feature updates, and a seat in our feedback sessions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <input className="w-full sm:w-80 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your email" />
            <button className="w-full sm:w-auto rounded-xl bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-200 transition-colors">Join waitlist</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

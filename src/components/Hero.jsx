import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now in private beta
            </div>
            <h1 className="mt-6 text-5xl/tight md:text-6xl/tight font-semibold tracking-[-0.02em] text-white">
              The future of image generation is delightfully simple
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Auralens turns ideas into stunning visuals with one sentence. Ultra-fast diffusion, crisp lighting, and human-friendly controls.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">
                Start free trial
              </button>
              <button className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
                View gallery
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/60 text-sm">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border border-white/20 bg-white/20" />
                ))}
              </div>
              <span>Trusted by designers at 300+ teams</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20 border border-white/10" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-blue-500/10 to-cyan-400/10 blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

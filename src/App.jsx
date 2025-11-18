import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Auralens, Inc.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

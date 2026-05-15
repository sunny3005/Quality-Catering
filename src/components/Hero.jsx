import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0603] via-[#1e0d07] to-[#2c1a0e]" />

      {/* Warm radial accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-700/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gold/8 blur-2xl" />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 pt-24 pb-16 md:pt-32">
        <motion.p
          {...fadeUp(0)}
          className="text-[0.75rem] font-semibold tracking-[0.28em] uppercase text-gold-light mb-5"
        >
          Chennai's Premier Event Catering
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-playfair font-bold text-white leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Chennai's Finest
          <br />
          <em className="text-gold-light not-italic">Catering Experience</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-white/75 max-w-lg mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          From intimate gatherings to grand celebrations — we bring the feast to you.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
          <a href="#packages" className="btn-gold" onClick={(e) => { e.preventDefault(); document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Explore Packages
          </a>
          <a href="tel:8148236067" className="btn-outline-white">
            <FiPhone className="text-base" /> Call Us Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <span
          className="block w-0.5 bg-gradient-to-b from-gold to-transparent animate-scrollPulse"
          style={{ height: '50px' }}
        />
      </div>

      {/* Decorative corner flourish */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  )
}

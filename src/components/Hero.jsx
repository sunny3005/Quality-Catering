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
      {/* Background photo — biryani/food */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Gold warm accent at bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
      </div>

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

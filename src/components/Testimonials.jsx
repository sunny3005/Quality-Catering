import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  /* Touch swipe */
  let touchX = 0
  const onTouchStart = (e) => { touchX = e.changedTouches[0].screenX }
  const onTouchEnd = (e) => {
    const diff = touchX - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
  }

  const t = testimonials[current]

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">
            What Chennai <em className="text-gold italic">Says About Us</em>
          </h2>
        </motion.div>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border-b-4 border-gold"
              >
                <FaQuoteLeft className="text-gold/40 text-2xl mb-5" />
                <p className="font-playfair text-charcoal text-lg leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="font-playfair text-charcoal block">{t.name}</strong>
                    <span className="text-sm text-gray-400">{t.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={() => { prev(); setPaused(false) }}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(false) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setPaused(false) }}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

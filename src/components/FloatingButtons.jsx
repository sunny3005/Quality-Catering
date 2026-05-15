import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronUp, FiPhone } from 'react-icons/fi'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Sticky mobile CTA bar (hidden on md+) ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:8148236067"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-charcoal font-semibold text-sm active:bg-gray-50 transition-colors"
        >
          <FiPhone className="text-base" /> Call Now
        </a>
        <div className="w-px bg-gray-100" />
        <a
          href="https://wa.me/918148236067"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold text-charcoal font-semibold text-sm active:bg-gold-light transition-colors"
        >
          <FaWhatsapp className="text-base" /> WhatsApp
        </a>
      </div>

      {/* ── Floating WhatsApp (desktop only — mobile has sticky bar) ── */}
      <a
        href="https://wa.me/918148236067"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-24 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center text-2xl shadow-lg animate-waPulse hover:bg-[#20b958] hover:scale-110 hover:[animation:none] transition-transform duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed z-50 w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center shadow-md hover:bg-gold hover:-translate-y-0.5 transition-all duration-300
              bottom-[72px] right-4
              md:bottom-7 md:right-7 md:w-11 md:h-11"
          >
            <FiChevronUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronUp } from 'react-icons/fi'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/918148236067"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-lg animate-waPulse hover:bg-[#20b958] hover:scale-110 hover:[animation:none] transition-transform duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-7 right-7 z-50 w-11 h-11 rounded-full bg-charcoal text-white flex items-center justify-center shadow-md hover:bg-gold hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiChevronUp className="text-base" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function CustomizationBanner() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-cream-dark via-cream to-[#f0e8d0] border-y border-gold/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            className="font-playfair font-bold text-charcoal mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
          >
            Can't find the perfect match?{' '}
            <em className="text-gold italic">We customize for you.</em>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-9 text-[1.05rem]">
            Mix and match items across packages. Add starters, change desserts, request regional
            specialties. Just give us a call — we'll craft your perfect menu.
          </p>
          <a
            href="https://wa.me/918148236067"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="text-lg" /> Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

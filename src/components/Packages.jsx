import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { packages } from '../data/packages'

function PackageCard({ pkg, index }) {
  const isBasic = pkg.id === 'basic'
  const isMid = pkg.id === 'mid'
  const isSig = pkg.id === 'signature'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: index * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative flex flex-col rounded-2xl p-8 overflow-hidden transition-shadow duration-300 ${
        isBasic
          ? 'bg-white border border-gray-200 shadow-sm hover:shadow-xl'
          : isMid
          ? 'bg-white border-2 border-gold shadow-[0_8px_40px_rgba(201,168,76,0.15)] hover:shadow-[0_16px_50px_rgba(201,168,76,0.25)]'
          : 'bg-gradient-to-b from-charcoal to-[#2c1a08] border-2 border-gold shadow-[0_8px_40px_rgba(201,168,76,0.2)] hover:shadow-[0_16px_60px_rgba(201,168,76,0.35)] signature-glow'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div
          className={`absolute top-5 right-5 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
            pkg.badge === 'Popular'
              ? 'bg-gold text-charcoal'
              : 'bg-gradient-to-r from-gold-light to-gold text-charcoal'
          }`}
        >
          {pkg.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-7">
        <h3
          className={`font-playfair font-semibold text-xl mb-2 ${
            isSig ? 'text-gold-light' : isMid ? 'text-gold-dark' : 'text-gray-500'
          }`}
        >
          {pkg.name}
        </h3>
        <p className={`text-lg font-semibold font-inter ${isSig ? 'text-white/50' : 'text-gray-400'}`}>
          Rs. ___/plate
        </p>
      </div>

      {/* Items */}
      <ul className="flex flex-col gap-2.5 flex-1 mb-8">
        {pkg.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <FiCheck
              className={`text-sm mt-0.5 flex-shrink-0 ${
                isSig ? 'text-gold' : isMid ? 'text-gold' : 'text-gray-400'
              }`}
            />
            <span
              className={`text-sm leading-snug ${
                isSig ? 'text-white/75' : 'text-gray-600'
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        className={`w-full text-center py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
          isSig
            ? 'bg-[length:200%_200%] bg-gradient-to-r from-gold via-gold-light to-gold text-charcoal animate-shine hover:shadow-[0_6px_25px_rgba(201,168,76,0.5)] hover:-translate-y-0.5'
            : isMid
            ? 'bg-gold text-charcoal hover:bg-gold-light hover:shadow-[0_6px_25px_rgba(201,168,76,0.4)] hover:-translate-y-0.5'
            : 'border-2 border-gray-300 text-gray-600 hover:border-charcoal hover:text-charcoal hover:-translate-y-0.5'
        }`}
      >
        Get Quote
      </a>
    </motion.div>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-tag">Our Offerings</span>
          <h2 className="section-title mb-4">
            Choose Your <em className="text-gold italic">Perfect Package</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Three thoughtfully crafted packages to suit every occasion and budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

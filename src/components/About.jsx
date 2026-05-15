import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { target: 500, suffix: '+', label: 'Events Catered' },
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 10000, suffix: '+', label: 'Happy Guests' },
  { target: 3, suffix: '', label: 'Premium Packages' },
]

function StatCard({ stat, start }) {
  const count = useCountUp(stat.target, 2000, start)
  return (
    <div className="bg-white rounded-xl p-8 text-center shadow-sm border-b-4 border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-end justify-center gap-0.5">
        <span className="font-playfair font-bold text-gold-dark leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)' }}>
          {count.toLocaleString('en-IN')}
        </span>
        {stat.suffix && (
          <span className="font-playfair font-bold text-gold text-2xl leading-none mb-0.5">{stat.suffix}</span>
        )}
      </div>
      <p className="text-gray-500 text-sm font-medium mt-2">{stat.label}</p>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="section-tag">Our Story</span>
            <h2 className="section-title mb-5">
              A Legacy of <em className="text-gold italic">Flavor & Excellence</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Quality Catering has been serving Chennai's most memorable events since our founding.
              Our Biryani is made with the finest meat and aged basmati, our desserts are crafted
              fresh, and our service team ensures every guest feels like royalty.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From intimate family celebrations to grand corporate banquets, we bring the same
              passion and precision to every plate we serve. Chennai trusts us — and we never let
              them down.
            </p>
            <a
              href="#contact"
              className="btn-gold"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Book Your Event
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} start={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const reasons = [
  {
    emoji: '🍖',
    title: 'Premium Ingredients',
    desc: 'Only the freshest meat, vegetables, and spices. No compromise, ever.',
  },
  {
    emoji: '👨‍🍳',
    title: 'Experienced Chefs',
    desc: 'Our chefs have over a decade of Biryani and South Indian cuisine expertise.',
  },
  {
    emoji: '🎪',
    title: 'Full Setup Included',
    desc: 'We bring everything — banana leaf, water bottles, service staff, and counters.',
  },
  {
    emoji: '📞',
    title: 'Responsive Service',
    desc: 'Call us anytime. We respond fast and deliver on every commitment.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-14 md:py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-light bg-gold/10 px-4 py-1 rounded-full border border-gold/20 mb-4">
            Why Quality Catering
          </span>
          <h2
            className="font-playfair font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            The Difference You <em className="text-gold italic">Taste & Feel</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-8 text-center transition-all duration-300 hover:bg-gold/8 hover:border-gold/25"
            >
              <div className="text-4xl mb-4">{r.emoji}</div>
              <h3 className="font-playfair text-white font-semibold text-lg mb-3">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

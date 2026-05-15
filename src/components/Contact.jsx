import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const initialForm = {
  name: '', phone: '', eventType: '', eventDate: '',
  guests: '', package: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const packageLabels = {
    basic: 'Basic Package',
    mid: 'Mid-Level Package',
    signature: 'Signature Package',
    custom: 'Custom Package',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const lines = [
      '🍽️ *New Catering Enquiry*',
      '─────────────────────',
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `🎉 *Event:* ${form.eventType}`,
      `📅 *Date:* ${form.eventDate || 'Not specified'}`,
      `👥 *Guests:* ${form.guests}`,
      `📦 *Package:* ${packageLabels[form.package] || 'Not selected'}`,
      form.message ? `💬 *Message:* ${form.message}` : '',
      '─────────────────────',
      '_Sent via Quality Catering website_',
    ].filter(Boolean).join('\n')

    const waUrl = `https://wa.me/919014760259?text=${encodeURIComponent(lines)}`

    // Must open synchronously — mobile browsers block window.open inside setTimeout
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const inputCls =
    'w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-lg font-inter text-[0.95rem] text-charcoal bg-white outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] placeholder-gray-300'

  return (
    <section id="contact" className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title mb-4">
            Book Your <em className="text-gold italic">Dream Event</em>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Tell us about your event and we'll get back to you within hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-playfair text-charcoal text-2xl mb-8">Contact Us Directly</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiPhone className="text-gold text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:8148236067" className="text-charcoal font-medium hover:text-gold transition-colors text-[1rem]">
                    8148236067
                  </a>
                  <a href="tel:9543067600" className="text-charcoal font-medium hover:text-gold transition-colors text-[1rem]">
                    9543067600
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-gold text-sm" />
                </div>
                <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiClock className="text-gold text-sm" />
                </div>
                <div>
                  <p className="text-gray-600">Available 7 days a week</p>
                  <p className="text-gray-400 text-sm">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918148236067"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 inline-flex"
            >
              <FaWhatsapp className="text-lg" /> Message on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-10 bg-cream rounded-2xl border border-gold/25"
              >
                <FiCheckCircle className="text-gold text-5xl mx-auto mb-4" />
                <h3 className="font-playfair text-charcoal text-2xl mb-3">Thank You!</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your enquiry has been sent to us on WhatsApp! We'll reply shortly.
                  For urgent bookings, call us directly at{' '}
                  <a href="tel:8148236067" className="text-gold font-semibold">
                    8148236067
                  </a>
                  .
                </p>
                <a
                  href="https://wa.me/918148236067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-6 inline-flex"
                >
                  <FaWhatsapp className="text-lg" /> Open WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Phone Number *</label>
                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="Your phone" className={inputCls} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Event Type *</label>
                    <input name="eventType" required value={form.eventType} onChange={handleChange} placeholder="Wedding, Birthday, etc." className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Event Date *</label>
                    <input name="eventDate" type="date" required value={form.eventDate} onChange={handleChange} className={inputCls} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Number of Guests *</label>
                    <input name="guests" type="number" min="1" required value={form.guests} onChange={handleChange} placeholder="Expected guest count" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Package Interest</label>
                    <select name="package" value={form.package} onChange={handleChange} className={inputCls}>
                      <option value="">Select a package</option>
                      <option value="basic">Basic Package</option>
                      <option value="mid">Mid-Level Package</option>
                      <option value="signature">Signature Package</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.82rem] font-semibold text-charcoal tracking-wide">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your event, special requirements, etc."
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <><FiSend /> Send Enquiry</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

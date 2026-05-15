import { RiLeafLine } from 'react-icons/ri'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Packages', id: 'packages' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

const packageLinks = [
  'Basic Package', 'Mid-Level Package', 'Signature Package', 'Custom Package',
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/918148236067', label: 'WhatsApp' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-charcoal pt-20 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <RiLeafLine className="text-gold text-2xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-playfair font-bold text-xl text-white tracking-wide">
                Quality Catering
              </span>
            </button>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-[260px]">
              Chennai's finest catering experience for weddings, corporate events, and all celebrations.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/7 flex items-center justify-center text-white/55 text-sm hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/80 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-sm text-white/45 hover:text-gold-light hover:pl-1 transition-all duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/80 mb-5">
              Packages
            </h4>
            <ul className="space-y-3">
              {packageLinks.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo(p === 'Custom Package' ? 'contact' : 'packages')}
                    className="text-sm text-white/45 hover:text-gold-light hover:pl-1 transition-all duration-200"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-white/80 mb-5">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:8148236067" className="flex items-center gap-3 text-sm text-white/45 hover:text-gold-light transition-colors">
                <FiPhone className="text-gold flex-shrink-0" /> 8148236067
              </a>
              <a href="tel:9543067600" className="flex items-center gap-3 text-sm text-white/45 hover:text-gold-light transition-colors">
                <FiPhone className="text-gold flex-shrink-0" /> 9543067600
              </a>
              <p className="flex items-center gap-3 text-sm text-white/45">
                <FiMapPin className="text-gold flex-shrink-0" /> Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        <div className="py-5 text-center">
          <p className="text-white/25 text-sm">
            © 2025 Quality Catering, Chennai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

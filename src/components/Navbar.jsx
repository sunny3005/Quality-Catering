import { useState, useEffect } from 'react'
import { RiLeafLine } from 'react-icons/ri'

const links = ['Home', 'About', 'Packages', 'Gallery', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'packages', 'gallery', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group">
            <RiLeafLine
              className={`text-2xl text-gold transition-transform duration-300 group-hover:rotate-12`}
            />
            <span
              className={`font-playfair font-bold text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              Quality Catering
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((link) => {
              const id = link.toLowerCase()
              return (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 ${
                      active === id ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    } ${
                      scrolled
                        ? active === id ? 'text-gold' : 'text-charcoal hover:text-gold'
                        : active === id ? 'text-gold-light' : 'text-white/90 hover:text-gold-light'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-400 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col justify-center px-10 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const id = link.toLowerCase()
              return (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left text-lg font-medium py-3.5 border-b border-gray-100 transition-colors duration-200 ${
                      active === id ? 'text-gold' : 'text-charcoal hover:text-gold'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              )
            })}
          </ul>
          <a
            href="tel:8148236067"
            className="mt-8 btn-gold text-center justify-center"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </>
  )
}

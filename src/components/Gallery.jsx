import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdPhotoLibrary } from 'react-icons/md'
import { FiPlay, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const allImages = [
  '/images/IMG-20260516-WA0027.jpg',
  '/images/IMG-20260516-WA0043.jpg',
  '/images/IMG-20260516-WA0040.jpg',
  '/images/IMG-20260516-WA0028.jpg',
  '/images/IMG-20260516-WA0029.jpg',
  '/images/IMG-20260516-WA0031.jpg',
  '/images/IMG-20260516-WA0032.jpg',
  '/images/IMG-20260516-WA0033.jpg',
  '/images/IMG-20260516-WA0034.jpg',
  '/images/IMG-20260516-WA0035.jpg',
  '/images/IMG-20260516-WA0038.jpg',
  '/images/IMG-20260516-WA0039.jpg',
  
  '/images/IMG-20260516-WA0041.jpg',
  
  '/images/IMG-20260516-WA0045.jpg',
  '/images/IMG-20260516-WA0046.jpg',
  '/images/IMG-20260516-WA0047.jpg',
  '/images/IMG-20260516-WA0048.jpg',
]

// First 6 in masonry — reorder here to pick best photos first
const featuredImages = allImages.slice(0, 6)

// Masonry spans: tall item at index 1, wide item at index 3
const spanCls = [
  'row-span-1 col-span-1',
  'row-span-2 col-span-1',
  'row-span-1 col-span-1',
  'row-span-1 col-span-2',
  'row-span-1 col-span-1',
  'row-span-1 col-span-1',
]

const DRIVE_FILE_ID = '1wpQo3W0rd3__MgsNj_Zfq85gJ0sH1sO5'
const driveEmbedUrl = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`

const allItems = allImages.map((src) => ({ type: 'image', src }))

export default function Gallery() {
  const [showAll, setShowAll]         = useState(false)
  const [videoActive, setVideoActive] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const openLightbox = (idx) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const moveLightbox = (dir) =>
    setLightboxIdx((i) => (i + dir + allItems.length) % allItems.length)

  const current = lightboxIdx !== null ? allItems[lightboxIdx] : null

  return (
    <section id="gallery" className="py-14 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-title mb-4">
            Moments We've <em className="text-gold italic">Crafted</em>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base">
            Every event tells a story — here are some of ours.
          </p>
        </motion.div>

        {/* ── Masonry grid: 6 featured photos ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 mb-8 md:mb-10"
          style={{ height: 'clamp(320px, 50vw, 540px)' }}
        >
          {featuredImages.map((src, i) => (
            <div
              key={src}
              onClick={() => openLightbox(i)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${spanCls[i]}`}
            >
              {/* image fills border completely */}
              <img
                src={src}
                alt={`Quality Catering event ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiPlay className="text-white text-sm ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Drive video ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden aspect-video mb-8 md:mb-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1280&q=80')` }}
          />
          <div className="absolute inset-0 bg-black/55" />

          {videoActive ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={driveEmbedUrl}
              title="Quality Catering Event Video"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer"
              onClick={() => setVideoActive(true)}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />
                <button className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_0_10px_rgba(201,168,76,0.2)] hover:bg-gold-light hover:scale-110 transition-all duration-300">
                  <FiPlay className="text-xl md:text-2xl text-charcoal ml-1" />
                </button>
              </div>
              <p className="text-white/80 text-xs md:text-sm font-semibold tracking-wider uppercase">
                Watch Our Events in Action
              </p>
            </div>
          )}
        </motion.div>

        {/* ── View All expanded ── */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden mb-8"
            >
              {/* All photos */}
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4 mt-2">
                All Photos — {allImages.length}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {allImages.map((src, i) => (
                  <div
                    key={src}
                    onClick={() => openLightbox(i)}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    style={{ paddingBottom: '75%' }} /* 4:3 ratio */
                  >
                    <img
                      src={src}
                      alt={`Event ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="btn-outline-dark inline-flex items-center gap-2 text-sm md:text-base"
          >
            <MdPhotoLibrary />
            {showAll
              ? 'Show Less'
              : `View All Photos (${allImages.length})`}
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIdx !== null && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/93 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={closeLightbox}
            >
              <FiX />
            </button>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); moveLightbox(-1) }}
            >
              <FiChevronLeft />
            </button>

            {/* Media */}
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full max-h-[88vh] px-14 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {current.type === 'image' ? (
                <img
                  src={current.src}
                  alt="Event"
                  className="max-w-full max-h-[88vh] rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <video
                  src={current.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[88vh] rounded-xl shadow-2xl"
                />
              )}
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); moveLightbox(1) }}
            >
              <FiChevronRight />
            </button>

            {/* Counter */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-sm tabular-nums">
              {lightboxIdx + 1} / {allItems.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

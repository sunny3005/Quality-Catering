import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCamera, FiPlay } from 'react-icons/fi'
import { MdPhotoLibrary } from 'react-icons/md'
import { FaGoogleDrive } from 'react-icons/fa'

// Mobile: 2-col equal grid | Desktop: 3-col masonry with spanning
const placeholders = [
  { spanCls: '',              delay: 0   },
  { spanCls: 'md:row-span-2',delay: 0.1 },
  { spanCls: '',              delay: 0.2 },
  { spanCls: 'md:col-span-2',delay: 0.3 },
  { spanCls: '',              delay: 0.4 },
  { spanCls: '',              delay: 0.5 },
]

// ─── PASTE YOUR GOOGLE DRIVE FILE ID HERE ────────────────────────────────────
// Share link: drive.google.com/file/d/ >>>FILE_ID<<< /view?usp=sharing
const DRIVE_FILE_ID = '1wpQo3W0rd3__MgsNj_Zfq85gJ0sH1sO5'
// ─────────────────────────────────────────────────────────────────────────────

const driveEmbedUrl = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`
const hasVideo = DRIVE_FILE_ID !== 'YOUR_DRIVE_FILE_ID'

export default function Gallery() {
  const [videoActive, setVideoActive] = useState(false)

  return (
    <section id="gallery" className="py-14 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
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

        {/* Gallery grid — 2 col mobile / 3 col masonry desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 auto-rows-[140px] md:grid-cols-3 md:grid-rows-3 md:auto-rows-auto md:h-[520px] gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`shimmer-card rounded-xl overflow-hidden cursor-pointer group ${p.spanCls}`}
              style={{ animationDelay: `${p.delay}s` }}
            >
              {/* REPLACE WITH CLIENT PHOTO */}
              <div className="w-full h-full flex items-center justify-center bg-[#e0d5c8]">
                <FiCamera className="text-[#b5a090] text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video — Google Drive embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-charcoal to-[#2c1a08] mb-8 md:mb-10"
        >
          {videoActive && hasVideo ? (
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
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer px-4"
              onClick={() => hasVideo && setVideoActive(true)}
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-full bg-gold/20 ${hasVideo ? 'animate-ping' : ''}`} />
                <button
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_0_10px_rgba(201,168,76,0.2)] hover:bg-gold-light hover:scale-110 transition-all duration-300"
                  aria-label="Play event video"
                  disabled={!hasVideo}
                >
                  <FiPlay className="text-xl md:text-2xl text-charcoal ml-1" />
                </button>
              </div>
              <p className="text-white/70 text-xs md:text-sm font-medium tracking-wider uppercase text-center">
                Watch Our Events in Action
              </p>
              {!hasVideo && (
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <FaGoogleDrive className="text-[#4285F4] text-sm" />
                  <span className="text-white/60 text-[11px]">Paste your Drive File ID in Gallery.jsx</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <div className="text-center">
          <a
            href="https://wa.me/918148236067"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex items-center gap-2 text-sm md:text-base"
          >
            <MdPhotoLibrary /> View More Photos
          </a>
        </div>
      </div>
    </section>
  )
}

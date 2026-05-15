import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCamera, FiPlay } from 'react-icons/fi'
import { MdPhotoLibrary } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const placeholders = [
  { cls: 'row-span-1 col-span-1', delay: 0 },
  { cls: 'row-span-2 col-span-1', delay: 0.1 },
  { cls: 'row-span-1 col-span-1', delay: 0.2 },
  { cls: 'row-span-1 col-span-2', delay: 0.3 },
  { cls: 'row-span-1 col-span-1', delay: 0.4 },
  { cls: 'row-span-1 col-span-1', delay: 0.5 },
]

export default function Gallery() {
  const [videoActive, setVideoActive] = useState(false)

  /* REPLACE 'YOUR_YOUTUBE_VIDEO_ID' with the actual YouTube video ID */
  const YOUTUBE_ID = 'YOUR_YOUTUBE_VIDEO_ID'

  const handlePlay = () => {
    if (YOUTUBE_ID !== 'YOUR_YOUTUBE_VIDEO_ID') {
      setVideoActive(true)
    } else {
      alert(
        'Video coming soon! Our event video will be embedded here.\nContact us on WhatsApp to see more event footage.'
      )
    }
  }

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-title mb-4">
            Moments We've <em className="text-gold italic">Crafted</em>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Every event tells a story — here are some of ours.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 grid-rows-3 gap-4 mb-12 h-[520px]"
        >
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`shimmer-card rounded-xl overflow-hidden cursor-pointer group ${p.cls}`}
              style={{ animationDelay: `${p.delay}s` }}
            >
              {/* REPLACE WITH CLIENT PHOTO */}
              <div className="w-full h-full min-h-[120px] flex items-center justify-center bg-[#e0d5c8]">
                <FiCamera className="text-[#b5a090] text-3xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video section */}
        {/* REPLACE src WITH YOUR YOUTUBE/DRIVE EMBED LINK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-charcoal to-[#2c1a08] mb-10 cursor-pointer"
          onClick={!videoActive ? handlePlay : undefined}
        >
          {videoActive ? (
            /* REPLACE YOUR_YOUTUBE_VIDEO_ID with actual ID */
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Quality Catering Event Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />
                <button
                  className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-[0_0_0_12px_rgba(201,168,76,0.2)] hover:bg-gold-light hover:scale-110 transition-all duration-300"
                  aria-label="Play event video"
                >
                  <FiPlay className="text-2xl text-charcoal ml-1" />
                </button>
              </div>
              <p className="text-white/70 text-sm font-medium tracking-wider uppercase">
                Watch Our Events in Action
              </p>
              <p className="text-white/30 text-xs">
                {/* Video hosted on YouTube — 1.3 GB event footage */}
                Upload your 1.3 GB video to YouTube and replace the video ID above
              </p>
            </div>
          )}
        </motion.div>

        <div className="text-center">
          <a
            href="https://wa.me/918148236067"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex items-center gap-2"
          >
            <MdPhotoLibrary /> View More Photos
          </a>
        </div>
      </div>
    </section>
  )
}

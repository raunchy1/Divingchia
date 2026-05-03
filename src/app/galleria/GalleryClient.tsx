'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery/dive-1.jpg', alt: 'Guided dive in Chia', category: 'Diving' },
  { src: '/images/gallery/snorkel-1.jpg', alt: 'Snorkeling in crystal waters', category: 'Snorkeling' },
  { src: '/images/gallery/boat-1.jpg', alt: 'Inflatable boat in Chia cove', category: 'Boat' },
  { src: '/images/gallery/dive-2.jpg', alt: 'Diver exploring reef', category: 'Diving' },
  { src: '/images/gallery/snorkel-2.jpg', alt: 'Family snorkeling in Chia', category: 'Snorkeling' },
  { src: '/images/gallery/equipment-1.jpg', alt: 'Diving equipment on deck', category: 'Equipment' },
  { src: '/images/gallery/sunset-1.jpg', alt: 'Sunset boat experience', category: 'Boat' },
  { src: '/images/gallery/team-1.jpg', alt: 'Diving Chia team', category: 'Team' },
  { src: '/images/gallery/dive-3.jpg', alt: 'Underwater marine life in Sardinia', category: 'Diving' },
  { src: '/images/gallery/snorkel-3.jpg', alt: 'Snorkeling from boat in secret cove', category: 'Snorkeling' },
  { src: '/images/gallery/boat-2.jpg', alt: 'Sardinian coastline by boat', category: 'Boat' },
  { src: '/images/gallery/dive-4.jpg', alt: 'Try scuba first dive', category: 'Diving' },
]

const categories = ['All', 'Diving', 'Snorkeling', 'Boat', 'Equipment', 'Team']

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const prev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const next = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-aqua">
            Gallery
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white mt-3">
            The Sea of Chia
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-gray-500 border-sand hover:border-navy hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden bg-gradient-to-br from-navy to-aqua"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="font-inter">No images in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/60 text-center mt-3 text-sm font-inter">
              {filtered[lightboxIndex].alt}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/40">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  )
}

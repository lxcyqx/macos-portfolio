'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const images = [
  '/images/proud-house/proudhouse_logo.png',
  '/images/proud-house/proudhouse1.png',
  '/images/proud-house/proudhouse2.png',
  '/images/proud-house/proudhouse3.png',
  '/images/proud-house/proudhouse_circle1.png',
  '/images/proud-house/proudhouse_circle2.png',
  '/images/proud-house/proudhouse_circle3.png',
  '/images/proud-house/ph_hearts1.png',
  '/images/proud-house/ph_hearts2.png',
  '/images/proud-house/ph_hearts3.png',
  '/images/proud-house/ph_hearts4.png',
  '/images/proud-house/hearts_walking1.png',
  '/images/proud-house/hearts_walking2.png',
  '/images/proud-house/hearts_walking3.png',
  '/images/proud-house/ph_1.png',
  '/images/proud-house/ph_2.png',
  '/images/proud-house/ph_3.png',
  '/images/proud-house/ph_4.png',
  '/images/proud-house/Screenshot%202025-09-25%20at%202.33.11%20PM.png',
  '/images/proud-house/Screenshot%202025-09-25%20at%202.33.17%20PM.png',
  '/images/proud-house/Screenshot%202025-09-25%20at%202.33.27%20PM.png',
  '/images/proud-house/Screenshot%202025-09-25%20at%202.34.04%20PM.png',
  '/images/proud-house/screenshot.png',
]

export default function ProudHousePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [])
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">design</span>
            <span className="text-xs text-gray-400">2023</span>
            <span className="text-xs text-gray-400">· designer</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Proud House</h1>
          <p className="text-gray-500 mb-6">Merch Design Concept</p>
          <p className="text-gray-700 leading-relaxed">
            Proud House is a concept merch brand celebrating LGBTQ+ identity and community. The project explores
            a playful visual language built around a cast of expressive heart characters — each design capturing
            a sense of joy, pride, and belonging. The work spans brand identity, illustration, and product design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div
              key={src}
              className="cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={src}
                  alt={`Proud House design ${i + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-2xl"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="flex flex-col items-center max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightboxIndex]}
              alt={`Proud House design ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[88vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/40 text-xs mt-3">{lightboxIndex + 1} / {images.length}</p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-2xl"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            ›
          </button>

          <button
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-lg"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}

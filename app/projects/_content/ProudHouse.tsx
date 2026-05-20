'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// Ordered to match display order exactly — lightbox index = position in this array
const images = [
  '/images/proud-house/proudhouse_logo.png',      // 0  — full width
  '/images/proud-house/hearts_walking1.png',       // 1  — row of 3
  '/images/proud-house/hearts_walking2.png',       // 2
  '/images/proud-house/hearts_walking3.png',       // 3
  '/images/proud-house/ph_hearts1.png',            // 4  — row of 4
  '/images/proud-house/ph_hearts2.png',            // 5
  '/images/proud-house/ph_hearts3.png',            // 6
  '/images/proud-house/ph_hearts4.png',            // 7
  '/images/proud-house/proudhouse1.png',           // 8  — row of 3
  '/images/proud-house/proudhouse2.png',           // 9
  '/images/proud-house/proudhouse3.png',           // 10
  '/images/proud-house/proudhouse_circle1.png',    // 11 — row of 3
  '/images/proud-house/proudhouse_circle2.png',    // 12
  '/images/proud-house/proudhouse_circle3.png',    // 13
  '/images/proud-house/ph_1.png',                  // 14 — row of 4
  '/images/proud-house/ph_2.png',                  // 15
  '/images/proud-house/ph_3.png',                  // 16
  '/images/proud-house/ph_4.png',                  // 17
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

  const Img = ({ index }: { index: number }) => (
    <div
      className="cursor-pointer group relative overflow-hidden rounded-xl bg-gray-100"
      onClick={() => setLightboxIndex(index)}
    >
      <Image
        src={images[index]}
        alt={`Proud House — image ${index + 1}`}
        width={600}
        height={600}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  )

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

        {/* Row 1: logo — full width */}
        <div className="mb-3">
          <Img index={0} />
        </div>

        {/* Row 2: hearts_walking — 3 columns */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <Img index={1} />
          <Img index={2} />
          <Img index={3} />
        </div>

        {/* Row 3: ph_hearts — 4 columns */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <Img index={4} />
          <Img index={5} />
          <Img index={6} />
          <Img index={7} />
        </div>

        {/* Row 4: proudhouse — 3 columns */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <Img index={8} />
          <Img index={9} />
          <Img index={10} />
        </div>

        {/* Row 5: proudhouse_circle — 3 columns */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <Img index={11} />
          <Img index={12} />
          <Img index={13} />
        </div>

        {/* Row 6: ph — 4 columns */}
        <div className="grid grid-cols-4 gap-3">
          <Img index={14} />
          <Img index={15} />
          <Img index={16} />
          <Img index={17} />
        </div>
      </div>

      {/* Lightbox — white background */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
          onClick={close}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-gray-700 transition-colors text-2xl"
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
              alt={`Proud House — image ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[88vw] w-auto h-auto object-contain"
            />
            <p className="text-gray-300 text-xs mt-3">{lightboxIndex + 1} / {images.length}</p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-gray-700 transition-colors text-2xl"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            ›
          </button>

          <button
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-gray-600 transition-colors text-lg"
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

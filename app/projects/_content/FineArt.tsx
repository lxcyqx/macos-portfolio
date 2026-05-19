'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Artwork = {
  title: string
  medium: string
  year: string
  thumbnail: string
  full: string
}

const artworks: Artwork[] = [
  // 2024
  { title: 'Just Do It',                            medium: 'Screenprint · 13 × 13 in',        year: '2024', thumbnail: '/images/fine-art/thumbnails/just-do-it.jpg',        full: '/images/fine-art/just-do-it.jpg' },
  { title: 'Hydrangeas',                            medium: 'Screenprint · 16 × 12 in',        year: '2024', thumbnail: '/images/fine-art/thumbnails/hydrangeas.jpg',         full: '/images/fine-art/hydrangeas.jpg' },
  // 2022
  { title: 'Process',                               medium: 'Oil on Canvas · 3 × 4 ft',         year: '2022', thumbnail: '/images/fine-art/thumbnails/organic.jpg',            full: '/images/fine-art/organic.jpg' },
  { title: 'Meeting Me at Central Park',            medium: 'Oil on Canvas · 4 × 5 ft',         year: '2022', thumbnail: '/images/fine-art/thumbnails/park.jpg',               full: '/images/fine-art/park.jpg' },
  { title: 'Baggage',                               medium: 'Oil on Canvas · 3 × 4 ft',         year: '2022', thumbnail: '/images/fine-art/thumbnails/hanging.jpg',            full: '/images/fine-art/hanging.jpg' },
  // 2020
  { title: 'The Coming',                            medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/pagan.jpg',              full: '/images/fine-art/pagan.jpg' },
  { title: 'Beyond',                                medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/person.jpg',             full: '/images/fine-art/person.jpg' },
  { title: 'Transition',                            medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/face.jpg',               full: '/images/fine-art/face.jpg' },
  { title: 'From the Woods',                        medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/forest.jpg',             full: '/images/fine-art/forest.jpg' },
  { title: 'Sky',                                   medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/sky_monotype.jpg',       full: '/images/fine-art/sky_monotype.jpg' },
  { title: 'Persistence',                           medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/persistence.jpg',        full: '/images/fine-art/persistence.jpg' },
  { title: 'Woods',                                 medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/woods.jpg',              full: '/images/fine-art/woods.jpg' },
  { title: 'Mountains',                             medium: 'Monotype, Ink on Rives BFK',       year: '2020', thumbnail: '/images/fine-art/thumbnails/mountain_monotype.jpg',  full: '/images/fine-art/mountain_monotype.jpg' },
  { title: 'Splash',                                medium: 'Watercolor Monotype',              year: '2020', thumbnail: '/images/fine-art/thumbnails/splash_monotype.jpg',    full: '/images/fine-art/splash_monotype.jpg' },
  // 2019
  { title: 'Where Did We Come From Where Do We Go', medium: 'Acrylic on Paper',                 year: '2019', thumbnail: '/images/fine-art/thumbnails/house.jpg',              full: '/images/fine-art/house.JPG' },
  { title: 'Plants',                                medium: 'Charcoal on Paper',                year: '2019', thumbnail: '/images/fine-art/thumbnails/plant.jpg',              full: '/images/fine-art/plant.JPG' },
  { title: 'Corn',                                  medium: 'Pencil on Paper',                  year: '2019', thumbnail: '/images/fine-art/thumbnails/corn.jpg',               full: '/images/fine-art/corn.JPG' },
  // 2018
  { title: 'Workspace',                             medium: 'Colored Pencil on Paper',          year: '2018', thumbnail: '/images/fine-art/thumbnails/workspace.jpg',          full: '/images/fine-art/workspace.jpg' },
  { title: 'Self Portrait',                         medium: 'Pencil on Paper',                  year: '2018', thumbnail: '/images/fine-art/thumbnails/self-portrait.jpg',      full: '/images/fine-art/self-portrait.jpg' },
  { title: 'Subway',                                medium: 'Scratchboard',                     year: '2018', thumbnail: '/images/fine-art/thumbnails/scratchboard.jpg',       full: '/images/fine-art/scratchboard.jpg' },
  { title: 'Man on Subway',                         medium: 'Acrylic on Cardboard',             year: '2018', thumbnail: '/images/fine-art/thumbnails/business man.jpg',       full: '/images/fine-art/business man.jpg' },
  { title: 'Sweater',                               medium: 'Pencil on Paper',                  year: '2018', thumbnail: '/images/fine-art/thumbnails/Sweater.jpg',            full: '/images/fine-art/Sweater.jpg' },
  { title: 'Red Bags',                              medium: 'Acrylic on Cardboard',             year: '2018', thumbnail: '/images/fine-art/thumbnails/red-bags.jpg',           full: '/images/fine-art/red-bags.jpg' },
  { title: 'Woman With Bike',                       medium: 'Acrylic on Cardboard',             year: '2018', thumbnail: '/images/fine-art/thumbnails/woman-with-bike.jpg',    full: '/images/fine-art/woman-with-bike.jpg' },
]

export default function FineArtPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + artworks.length) % artworks.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % artworks.length))
  }, [])

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

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const current = lightboxIndex !== null ? artworks[lightboxIndex] : null

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-700">art</span>
            <span className="text-xs text-gray-400">2018–2024</span>
            <span className="text-xs text-gray-400">· artist</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fine Art</h1>
          <p className="text-gray-500">Oil, Monotype &amp; Drawing</p>
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {artworks.map((art, i) => (
            <div
              key={art.title}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={art.thumbnail}
                  alt={art.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  unoptimized
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
              </div>
              <div className="mt-1.5 mb-3 px-0.5">
                <p className="text-xs font-medium text-gray-700 leading-tight">{art.title}</p>
                <p className="text-xs text-gray-400">{art.medium} · {art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current !== null && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image + caption */}
          <div
            className="flex flex-col items-center max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.full}
              alt={current.title}
              className="max-h-[78vh] max-w-[88vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-sm">{current.title}</p>
              <p className="text-white/60 text-xs mt-0.5">{current.medium} · {current.year}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {artworks.length}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            ›
          </button>

          {/* Close button */}
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

'use client'

import MacWindow from '@/components/MacWindow'

export default function SpotifyWindow() {
  return (
    <MacWindow
      id="spotify"
      title="Spotify"
      defaultPosition={{ x: 160, y: 100 }}
      minWidth={400}
      minHeight={500}
    >
      <div className="h-full min-h-[500px] bg-[#121212] overflow-hidden">
        <iframe
          src="https://open.spotify.com/embed/playlist/18GcsaMIBzJ8K6fOOrv7Io?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          style={{ minHeight: 500 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="border-0"
        />
      </div>
    </MacWindow>
  )
}

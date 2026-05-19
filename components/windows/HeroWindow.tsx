'use client'

import Image from 'next/image'
import MacWindow from '@/components/MacWindow'

export default function HeroWindow() {
  return (
    <MacWindow
      id="hero"
      title="lucy qu — home"
      defaultPosition={{ x: typeof window !== 'undefined' ? window.innerWidth / 2 - 280 : 300, y: 60 }}
      minWidth={520}
      minHeight={360}
    >
      <div className="flex flex-col items-center justify-center h-full min-h-[360px] px-10 py-10 text-center bg-gradient-to-br from-purple-50/80 via-white/90 to-blue-50/80">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl mb-5">
          <Image
            src="/images/garden.jpg"
            alt="Lucy"
            fill
            className="object-cover"
            unoptimized
            onError={() => {}}
          />
          {/* Gradient fallback overlay — hidden if image loads */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 -z-10" />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          hi, i&apos;m lucy! 👋
        </h1>

        {/* Bio */}
        <p className="mt-2 text-gray-500 text-sm leading-relaxed max-w-xs">
          software engineer at <span className="font-semibold text-gray-700">Google</span>
        </p>
        <p className="mt-1 text-gray-400 text-xs max-w-xs">
          Brown &apos;22
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/lucyqu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={14} height={14} unoptimized />
            LinkedIn
          </a>
          <a
            href="https://github.com/lxcyqx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Image src="/icons/github-sign.png" alt="GitHub" width={14} height={14} unoptimized />
            GitHub
          </a>
          <a
            href="mailto:lucyqu28@gmail.com"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-rose-500 transition-colors"
          >
            <Image src="/icons/gmail.png" alt="Email" width={14} height={14} unoptimized />
            Email
          </a>
        </div>
      </div>
    </MacWindow>
  )
}

'use client'

import Link from 'next/link'

interface WindowChromeProps {
  title: string
  children: React.ReactNode
}

export default function WindowChrome({ title, children }: WindowChromeProps) {
  return (
    <div className="min-h-screen bg-gray-100/50">
      {/* Decorative title bar */}
      <div className="sticky top-0 z-50 flex items-center h-9 px-3 bg-gray-100/95 backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
        {/* Traffic lights (decorative + back) */}
        <div className="flex items-center gap-1.5">
          <Link href="/">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all" title="Back to desktop" />
          </Link>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 truncate max-w-sm">
          {title}
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="ml-auto text-xs text-blue-500 hover:text-blue-600 transition-colors"
        >
          ← Desktop
        </Link>
      </div>

      {/* Page content */}
      <div className="bg-white min-h-[calc(100vh-36px)]">
        {children}
      </div>
    </div>
  )
}

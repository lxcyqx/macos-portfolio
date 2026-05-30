'use client'

import Link from 'next/link'
import { useLayoutEffect } from 'react'
import Dock from '@/components/Dock'
import ProjectsWindow from '@/components/windows/ProjectsWindow'
import AboutWindow from '@/components/windows/AboutWindow'
import { useWindowStore } from '@/store/windowStore'

interface WindowChromeProps {
  title: string
  children: React.ReactNode
}

export default function WindowChrome({ title, children }: WindowChromeProps) {
  const { pageZ, initProjectPage, bringPageToFront } = useWindowStore()

  // Runs synchronously before the browser paints, so there is no visible flash
  // even if the store has stale state from prior desktop interactions.
  useLayoutEffect(() => {
    initProjectPage()
  }, [initProjectPage])

  return (
    <div className="min-h-screen bg-white md:bg-gray-100/50">
      {/* Mobile Notes header */}
      <div className="md:hidden sticky top-0 z-50 flex items-center h-14 px-4 bg-white border-b border-gray-100">
        <Link
          href="/"
          className="flex items-center gap-0.5 z-10"
          style={{ color: '#007AFF', textDecoration: 'none', fontSize: 15 }}
        >
          <span style={{ fontSize: 22, lineHeight: 1, marginRight: 2 }}>‹</span>
          Notes
        </Link>
        <div className="absolute inset-x-0 flex justify-center pointer-events-none">
          <span className="truncate px-24 text-sm font-semibold" style={{ color: '#1C1C1E' }}>
            {title.split(' — ')[0]}
          </span>
        </div>
      </div>

      {/* Desktop macOS title bar */}
      <div className="hidden md:flex sticky top-0 z-50 items-center h-9 px-3 bg-gray-100/95 backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
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

      {/* Page content — pb-28 ensures content clears the fixed dock.
          zIndex tracks pageZ from the store:
            - initProjectPage sets it above every current window on mount
            - openWindow/focusWindow leapfrog it for one specific window
            - bringPageToFront (onMouseDown) reclaims the top */}
      <div
        className="relative bg-white min-h-[calc(100vh-36px)] md:pb-28"
        style={{ zIndex: pageZ }}
        onMouseDown={() => bringPageToFront()}
      >
        {children}
      </div>

      <ProjectsWindow />
      <AboutWindow />
      <div className="hidden md:block">
        <Dock context="project-page" />
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'

export default function MenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-7 z-[9999] flex items-center justify-between px-4 bg-black/30 backdrop-blur-xl border-b border-white/10">
      {/* Left side */}
      <div className="flex items-center gap-4 text-white text-xs font-medium">
        <img src="icons/apple-white-logo.svg" alt="Apple" width={12} height={12} className="object-contain" />        <span className="font-semibold">Finder</span>
        <span className="opacity-80">File</span>
        <span className="opacity-80">Edit</span>
        <span className="opacity-80">View</span>
        <span className="opacity-80">Window</span>
        <span className="opacity-80">Help</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 text-white text-xs">
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 20 15" fill="white" opacity="0.9">
          <path d="M10 12.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path d="M6.5 9.5a4.97 4.97 0 017 0" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" />
          <path d="M3 6.5a9 9 0 0114 0" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" />
          <path d="M0 3.5a13 13 0 0120 0" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" />
        </svg>

        {/* Battery */}
        <div className="flex items-center gap-1">
          <div className="relative w-7 h-3.5 border border-white/70 rounded-[3px] flex items-center px-0.5">
            <div className="h-2 w-5 bg-white/80 rounded-[2px]" />
            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/60 rounded-r-[1px]" />
          </div>
        </div>

        <span className="font-medium tabular-nums">{time}</span>
      </div>
    </div>
  )
}

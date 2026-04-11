'use client'

import { useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowStore, WindowId } from '@/store/windowStore'

interface MacWindowProps {
  id: WindowId
  title: string
  children: React.ReactNode
  defaultPosition?: { x: number; y: number }
  minWidth?: number
  minHeight?: number
  className?: string
}

export default function MacWindow({
  id,
  title,
  children,
  defaultPosition = { x: 0, y: 0 },
  minWidth = 680,
  minHeight = 400,
  className = '',
}: MacWindowProps) {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindowStore()
  const win = windows[id]
  const constraintsRef = useRef<HTMLDivElement>(null)

  const handleFocus = useCallback(() => {
    focusWindow(id)
  }, [id, focusWindow])

  const isMaximized = win.isMaximized

  return (
    <AnimatePresence>
      {win.isOpen && !win.isMinimized && (
        <motion.div
          key={id}
          drag={!isMaximized}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{
            left: 0,
            right: typeof window !== 'undefined' ? window.innerWidth - minWidth : 800,
            top: 28,
            bottom: typeof window !== 'undefined' ? window.innerHeight - 60 : 700,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onMouseDown={handleFocus}
          style={{
            position: 'fixed',
            x: isMaximized ? 0 : defaultPosition.x,
            y: isMaximized ? 28 : defaultPosition.y,
            zIndex: win.zIndex,
            width: isMaximized ? '100vw' : undefined,
            height: isMaximized ? 'calc(100vh - 28px)' : undefined,
            minWidth: isMaximized ? undefined : minWidth,
            minHeight: isMaximized ? undefined : minHeight,
          }}
          className={`flex flex-col rounded-xl shadow-2xl overflow-hidden border border-white/20 ${
            isMaximized ? 'rounded-none' : ''
          } ${className}`}
        >
          {/* Title Bar */}
          <div
            className="flex items-center h-9 px-3 bg-gray-100/90 backdrop-blur-xl border-b border-gray-200/60 flex-shrink-0 select-none"
            style={{ cursor: isMaximized ? 'default' : 'grab' }}
            onMouseDown={(e) => {
              if ((e.target as HTMLElement).closest('.traffic-lights')) {
                e.stopPropagation()
              }
            }}
          >
            {/* Traffic Lights */}
            <div className="traffic-lights flex items-center gap-1.5 z-10">
              <button
                onClick={(e) => { e.stopPropagation(); closeWindow(id) }}
                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all group flex items-center justify-center"
                title="Close"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#9a1107]">✕</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); minimizeWindow(id) }}
                className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-90 transition-all group flex items-center justify-center"
                title="Minimize"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#9a6402]">−</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); maximizeWindow(id) }}
                className="w-3 h-3 rounded-full bg-[#28C840] hover:brightness-90 transition-all group flex items-center justify-center"
                title="Maximize"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#0a6624]">+</span>
              </button>
            </div>

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 truncate max-w-xs">
              {title}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white/85 backdrop-blur-xl overflow-auto">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

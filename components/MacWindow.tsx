'use client'

import { useCallback, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useDragControls } from 'framer-motion'
import { useWindowStore, WindowId } from '@/store/windowStore'

type ResizeDir = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'

interface MacWindowProps {
  id: WindowId
  title: string
  children: React.ReactNode
  defaultPosition?: { x: number; y: number }
  minWidth?: number
  minHeight?: number
  className?: string
}

const HANDLES: { dir: ResizeDir; className: string; cursor: string }[] = [
  { dir: 'n',  className: 'top-0 left-3 right-3 h-1',    cursor: 'ns-resize'   },
  { dir: 'ne', className: 'top-0 right-0 w-3 h-3',       cursor: 'nesw-resize' },
  { dir: 'e',  className: 'top-3 bottom-3 right-0 w-1',  cursor: 'ew-resize'   },
  { dir: 'se', className: 'bottom-0 right-0 w-3 h-3',    cursor: 'nwse-resize' },
  { dir: 's',  className: 'bottom-0 left-3 right-3 h-1', cursor: 'ns-resize'   },
  { dir: 'sw', className: 'bottom-0 left-0 w-3 h-3',     cursor: 'nesw-resize' },
  { dir: 'w',  className: 'top-3 bottom-3 left-0 w-1',   cursor: 'ew-resize'   },
  { dir: 'nw', className: 'top-0 left-0 w-3 h-3',        cursor: 'nwse-resize' },
]

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
  const dragControls = useDragControls()

  const posX = useMotionValue(defaultPosition.x)
  const posY = useMotionValue(defaultPosition.y)
  const [size, setSize] = useState({ width: minWidth, height: minHeight })

  const handleFocus = useCallback(() => {
    focusWindow(id)
  }, [id, focusWindow])

  const isMaximized = win.isMaximized

  const handleResizeStart = useCallback((e: React.MouseEvent, dir: ResizeDir) => {
    e.preventDefault()
    e.stopPropagation()
    focusWindow(id)

    const startMouseX = e.clientX
    const startMouseY = e.clientY
    const startW = size.width
    const startH = size.height
    const startPX = posX.get()
    const startPY = posY.get()

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startMouseX
      const dy = ev.clientY - startMouseY

      let newW = startW
      let newH = startH
      let newX = startPX
      let newY = startPY

      if (dir.includes('e')) newW = Math.max(minWidth, startW + dx)
      if (dir.includes('s')) newH = Math.max(minHeight, startH + dy)
      if (dir.includes('w')) {
        newW = Math.max(minWidth, startW - dx)
        newX = newW === minWidth ? startPX + startW - minWidth : startPX + dx
      }
      if (dir.includes('n')) {
        newH = Math.max(minHeight, startH - dy)
        newY = newH === minHeight ? startPY + startH - minHeight : startPY + dy
      }

      setSize({ width: newW, height: newH })
      posX.set(newX)
      posY.set(newY)
    }

    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [size, posX, posY, minWidth, minHeight, focusWindow, id])

  return (
    <AnimatePresence>
      {win.isOpen && !win.isMinimized && (
        <motion.div
          key={id}
          drag={!isMaximized}
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{
            left: 0,
            right: typeof window !== 'undefined' ? window.innerWidth - size.width : 800,
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
            x: isMaximized ? 0 : posX,
            y: isMaximized ? 28 : posY,
            zIndex: win.zIndex,
            width: isMaximized ? '100vw' : size.width,
            height: isMaximized ? 'calc(100vh - 28px)' : size.height,
          }}
          className={`flex flex-col rounded-xl shadow-2xl overflow-hidden border border-white/20 ${
            isMaximized ? 'rounded-none' : ''
          } ${className}`}
        >
          {/* Title Bar — drag initiates here only */}
          <div
            className="flex items-center h-9 px-3 bg-gray-100/90 backdrop-blur-xl border-b border-gray-200/60 flex-shrink-0 select-none"
            style={{ cursor: isMaximized ? 'default' : 'grab' }}
            onPointerDown={(e) => {
              if (!(e.target as HTMLElement).closest('.traffic-lights') && !isMaximized) {
                dragControls.start(e)
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

          {/* Resize handles — hidden when maximized */}
          {!isMaximized && HANDLES.map(({ dir, className: cls, cursor }) => (
            <div
              key={dir}
              className={`absolute ${cls}`}
              style={{ cursor, zIndex: 50 }}
              onMouseDown={(e) => handleResizeStart(e, dir)}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

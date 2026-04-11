'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useWindowStore, WindowId } from '@/store/windowStore'

interface DockItemProps {
  icon: string
  label: string
  onClick: () => void
  mouseX: ReturnType<typeof useMotionValue<number>>
  href?: string
  showDot?: boolean
}

function DockItem({ icon, label, onClick, mouseX, href, showDot }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return 999
    return Math.abs(val - (bounds.left + bounds.width / 2))
  })

  const scaleRaw = useTransform(distance, [0, 60, 120], [1.6, 1.25, 1])
  const scale = useSpring(scaleRaw, { stiffness: 300, damping: 25 })
  const yRaw = useTransform(distance, [0, 60, 120], [-12, -6, 0])
  const y = useSpring(yRaw, { stiffness: 300, damping: 25 })

  const content = (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="relative flex flex-col items-center group cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 flex items-center justify-center text-3xl drop-shadow-lg select-none">
        {icon}
      </div>
      {/* Tooltip label */}
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
        <div className="bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap backdrop-blur-sm shadow">
          {label}
        </div>
      </div>
      {/* Minimized dot */}
      {showDot && (
        <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-white/80" />
      )}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}

export default function Dock() {
  const mouseX = useMotionValue(Infinity)
  const { windows, openWindow, setProjectsFilter } = useWindowStore()

  const items = [
    {
      icon: '🚀',
      label: 'Launchpad',
      onClick: () => openWindow('hero'),
      showDot: windows.hero.isMinimized,
    },
    {
      icon: '🗂️',
      label: 'Projects',
      onClick: () => { setProjectsFilter('all'); openWindow('projects') },
      showDot: windows.projects.isMinimized,
    },
    {
      icon: '💬',
      label: 'About Me',
      onClick: () => openWindow('about'),
      showDot: windows.about.isMinimized,
    },
    {
      icon: '🧭',
      label: 'GitHub',
      onClick: () => window.open('https://github.com/lxcyqx', '_blank'),
      href: undefined,
    },
    {
      icon: '✉️',
      label: 'Mail',
      onClick: () => { window.location.href = 'mailto:lucyqu_@alumni.brown.edu' },
    },
    {
      icon: '🗑️',
      label: 'Trash',
      onClick: () => {},
    },
  ]

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9998]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-4 py-2 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl"
      >
        {items.map((item, i) => (
          <DockItem
            key={i}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            mouseX={mouseX}
            showDot={item.showDot}
          />
        ))}
      </motion.div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import MenuBar from '@/components/MenuBar'
import Dock from '@/components/Dock'
import FolderIcon from '@/components/FolderIcon'
import HeroWindow from '@/components/windows/HeroWindow'
import ProjectsWindow from '@/components/windows/ProjectsWindow'
import AboutWindow from '@/components/windows/AboutWindow'
import ResumeWindow from '@/components/windows/ResumeWindow'
import { useWindowStore } from '@/store/windowStore'
import { projects } from '@/data/projects'

export default function Desktop() {
  const { openWindow, setProjectsFilter } = useWindowStore()

  const folderIcons = [
    {
      label: 'Engineering & Design',
      position: { top: '18%', left: '75%' },
      previewImages: [
        '/images/projects/cover/trees.png',
        '/images/projects/cover/groupple-cover.png',
        '/images/projects/cover/iterative-cover.gif',
      ],
      onClick: () => { setProjectsFilter('engineering'); openWindow('projects') },
    },
    {
      label: 'Art & Illustration',
      position: { top: '33%', left: '78%' },
      previewImages: [
        '/images/digital/landscape.jpg',
        '/images/fine-art/thumbnails/pagan.jpg',
        '/images/animation/character.png',
      ],
      onClick: () => { setProjectsFilter('art'); openWindow('projects') },
    },
    {
      label: 'About Me',
      position: { top: '62%', left: '80%' },
      previewImages: ['/images/garden.jpg'],
      onClick: () => openWindow('about'),
    },
  ]

  return (
    <>
      {/* Desktop background gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 25%, #c3a7f7 45%, #8ec5fc 70%, #b8d8f8 100%)',
        }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop folder icons — hidden on mobile */}
      <div className="hidden md:block fixed inset-0 pt-7 pb-20 overflow-hidden">
        {folderIcons.map((folder) => (
          <div
            key={folder.label}
            className="absolute"
            style={{ top: folder.position.top, left: folder.position.left }}
          >
            <FolderIcon
              label={folder.label}
              onClick={folder.onClick}
              previewImages={folder.previewImages}
            />
          </div>
        ))}
      </div>

      {/* Windows — outside the overflow-hidden container so they share the body
          stacking context with SpotifyWindow in the layout, enabling correct z-index ordering */}
      <div className="hidden md:block">
        <HeroWindow />
        <ProjectsWindow />
        <AboutWindow />
        <ResumeWindow />
      </div>

      {/* Dock — hidden on mobile */}
      <div className="hidden md:block">
        <Dock />
      </div>

      {/* Mobile fallback */}
      <MobileFallback />
    </>
  )
}

const PROJECT_EMOJIS: Record<string, string> = {
  'computer-graphics': '🌲',
  'step-internship': '💼',
  'proud-house': '🏠',
  'iterative-design': '✏️',
  'book-depository-redesign': '📚',
  'ab-testing': '📊',
  'personas': '🎭',
  'fine-art': '🎨',
  'digital-illustration': '🖼️',
  'animation': '🎬',
  'architecture': '🏛️',
}

function NoteRow({ href, emoji, title, year, subtitle }: {
  href: string; emoji: string; title: string; year: string; subtitle: string
}) {
  return (
    <a href={href} className="flex items-start gap-3 px-4 py-3" style={{ textDecoration: 'none' }}>
      <span className="mt-0.5 text-base leading-none">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm truncate" style={{ color: '#1C1C1E' }}>{title}</p>
        <p className="text-xs mt-0.5 truncate">
          <span style={{ color: '#1C1C1E' }}>{year}</span>
          <span style={{ color: '#8E8E93' }}>{'  '}{subtitle}</span>
        </p>
      </div>
    </a>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="px-4 pt-5 pb-1 text-xs font-semibold" style={{ color: '#8E8E93' }}>{label}</p>
  )
}

function AboutDetail({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100000] flex flex-col bg-white"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
    >
      {/* Header */}
      <div className="flex-none flex items-center justify-between px-4 h-14 border-b border-gray-100">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm"
          style={{ color: '#007AFF', background: 'none', border: 'none', padding: 0 }}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" style={{ marginRight: 2 }}>
            <path d="M7 1L1 7L7 13" stroke="#007AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Notes
        </button>
        <span className="text-sm font-semibold" style={{ color: '#1C1C1E' }}>Note</span>
        <div className="w-14" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5">
        <p className="text-xs mb-4" style={{ color: '#8E8E93' }}>
          Today at {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
        </p>
        <h2 className="text-xl font-bold mb-4" style={{ color: '#1C1C1E' }}>about me</h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#1C1C1E' }}>
          Hi! I&apos;m Lucy, a software engineer at Google on the Display Ads team, where I work on client-side rendering of ad formats. I graduated from Brown University in 2022, where I was a CS TA for three semesters and took studio art classes — including courses at RISD. Before joining Google full-time, I completed two SWE internships at Google and one at GivePulse.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#1C1C1E' }}>
          Outside of work I&apos;m usually at the gym, taking pilates or yoga, exploring new restaurants, traveling, and completing art courses at SVA (so far I have taken silkscreen and ceramics. next up: stained glass).
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#1C1C1E' }}>
        </p>
        <div className="flex gap-5 pt-2 border-t border-gray-100">
          <a href="https://www.linkedin.com/in/lucyqu/" target="_blank" rel="noopener noreferrer"
             className="text-sm font-medium" style={{ color: '#007AFF', textDecoration: 'none' }}>LinkedIn</a>
          <a href="https://github.com/lxcyqx" target="_blank" rel="noopener noreferrer"
             className="text-sm font-medium" style={{ color: '#007AFF', textDecoration: 'none' }}>GitHub</a>
          <a href="mailto:lucyqu28@gmail.com"
             className="text-sm font-medium" style={{ color: '#007AFF', textDecoration: 'none' }}>Email</a>
        </div>
      </div>
    </div>
  )
}

function MobileFallback() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const engineeringDesign = projects.filter((p) => p.category !== 'art')
  const art = projects.filter((p) => p.category === 'art')

  if (aboutOpen) return <AboutDetail onBack={() => setAboutOpen(false)} />

  return (
    <div
      className="md:hidden fixed inset-0 z-[99999] flex flex-col bg-white"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
    >
      {/* Header — traffic lights + title */}
      <div className="flex-none flex items-center justify-between px-4 h-14 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-sm font-semibold" style={{ color: '#1C1C1E' }}>Notes</span>
        <div className="w-12" />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">

        {/* Pinned */}
        <SectionLabel label="Pinned" />
        <button
          onClick={() => setAboutOpen(true)}
          className="w-full text-left border-b border-gray-100 px-4 py-3 flex items-start gap-3 active:bg-gray-50"
          style={{ background: 'none' }}
        >
          <span className="mt-0.5 text-base leading-none">📌</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm" style={{ color: '#1C1C1E' }}>lucy qu - about me</p>
            <p className="text-xs mt-0.5" style={{ color: '#8E8E93' }}>
              software engineer at Google · Brown &apos;22
            </p>
          </div>
        </button>

        {/* Engineering & Design */}
        <SectionLabel label="Engineering & Design" />
        {engineeringDesign.map((project, i) => (
          <div key={project.slug} className={i < engineeringDesign.length - 1 ? 'border-b border-gray-100' : ''}>
            <NoteRow
              href={`/projects/${project.slug}`}
              emoji={PROJECT_EMOJIS[project.slug] ?? '📄'}
              title={project.displayTitle}
              year={project.year}
              subtitle={project.subtitle}
            />
          </div>
        ))}

        {/* Art & Illustration */}
        <SectionLabel label="Art & Illustration" />
        {art.map((project, i) => (
          <div key={project.slug} className={i < art.length - 1 ? 'border-b border-gray-100' : ''}>
            <NoteRow
              href={`/projects/${project.slug}`}
              emoji={PROJECT_EMOJIS[project.slug] ?? '📄'}
              title={project.displayTitle}
              year={project.year}
              subtitle={project.subtitle}
            />
          </div>
        ))}

        <div className="pb-12" />
      </div>
    </div>
  )
}

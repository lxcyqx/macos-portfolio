'use client'

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

function MobileFallback() {
  const engineeringDesign = projects.filter((p) => p.category !== 'art')
  const art = projects.filter((p) => p.category === 'art')

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
        <div className="border-b border-gray-100 px-4 py-3 flex items-start gap-3">
          <span className="mt-0.5 text-base leading-none">📌</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm" style={{ color: '#1C1C1E' }}>about me</p>
            <p className="text-xs mt-0.5" style={{ color: '#8E8E93' }}>
              software engineer at Google · Brown &apos;22
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/lucyqu/" target="_blank" rel="noopener noreferrer"
                 className="text-xs" style={{ color: '#007AFF', textDecoration: 'none' }}>LinkedIn</a>
              <a href="https://github.com/lxcyqx" target="_blank" rel="noopener noreferrer"
                 className="text-xs" style={{ color: '#007AFF', textDecoration: 'none' }}>GitHub</a>
              <a href="mailto:lucyqu28@gmail.com"
                 className="text-xs" style={{ color: '#007AFF', textDecoration: 'none' }}>Email</a>
            </div>
          </div>
        </div>

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

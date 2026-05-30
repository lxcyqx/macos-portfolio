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

function MobileFallback() {
  const engineeringDesign = projects.filter((p) => p.category !== 'art')
  const art = projects.filter((p) => p.category === 'art')

  return (
    <div
      className="md:hidden fixed inset-0 z-[99999] flex flex-col"
      style={{
        background: '#FAF9F4',
        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      }}
    >
      {/* Notes yellow header */}
      <div
        className="flex-none flex items-center justify-center h-12 shadow-sm"
        style={{ background: 'linear-gradient(180deg, #FFD60A 0%, #F5C400 100%)' }}
      >
        <span className="text-base font-bold" style={{ color: '#1C1C1E' }}>Lucy Qu</span>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#FAF9F4' }}>
        <div className="py-6 px-5">

          {/* Name + role */}
          <h1 className="font-semibold mb-0.5" style={{ fontSize: 20, color: '#1C1C1E' }}>Lucy Qu</h1>
          <p className="mb-4" style={{ fontSize: 12, color: '#8E8E93' }}>
            Software Engineer · Google · Brown &apos;22
          </p>

          {/* Social links */}
          <div className="flex gap-5 mb-6">
            <a
              href="https://www.linkedin.com/in/lucyqu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007AFF', fontSize: 14, textDecoration: 'none' }}
            >LinkedIn</a>
            <a
              href="https://github.com/lxcyqx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007AFF', fontSize: 14, textDecoration: 'none' }}
            >GitHub</a>
            <a
              href="mailto:lucyqu28@gmail.com"
              style={{ color: '#007AFF', fontSize: 14, textDecoration: 'none' }}
            >Email</a>
          </div>

          <hr style={{ borderColor: '#E5E5EA', marginBottom: 20 }} />

          {/* About */}
          <h2 className="font-semibold mb-2" style={{ fontSize: 18, color: '#1C1C1E' }}>About</h2>
          <p className="mb-6" style={{ fontSize: 15, color: '#3C3C43', lineHeight: 1.7 }}>
            I&apos;m a software engineer at Google on the Display Ads team. I studied CS &amp; Visual Arts
            at Brown, was a CS TA for three semesters, and took many studio art classes, including some
            at RISD. Outside work: gym, pilates, yoga, traveling, restaurants, art events.
          </p>

          <hr style={{ borderColor: '#E5E5EA', marginBottom: 20 }} />

          {/* Engineering & Design */}
          <h2 className="font-semibold mb-3" style={{ fontSize: 18, color: '#1C1C1E' }}>
            Engineering &amp; Design
          </h2>
          <div className="overflow-hidden" style={{ borderRadius: 12, background: '#F2F2F7' }}>
            {engineeringDesign.map((project, i) => (
              <div key={project.slug}>
                <a
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="flex-1" style={{ fontSize: 15, color: '#1C1C1E' }}>
                    {project.displayTitle}
                  </span>
                  <span style={{ fontSize: 20, color: '#C7C7CC' }}>›</span>
                </a>
                {i < engineeringDesign.length - 1 && (
                  <div style={{ height: 1, background: '#E5E5EA', marginLeft: 44 }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ height: 24 }} />
          <hr style={{ borderColor: '#E5E5EA', marginBottom: 20 }} />

          {/* Art & Illustration */}
          <h2 className="font-semibold mb-3" style={{ fontSize: 18, color: '#1C1C1E' }}>
            Art &amp; Illustration
          </h2>
          <div className="overflow-hidden" style={{ borderRadius: 12, background: '#F2F2F7' }}>
            {art.map((project, i) => (
              <div key={project.slug}>
                <a
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="flex-1" style={{ fontSize: 15, color: '#1C1C1E' }}>
                    {project.displayTitle}
                  </span>
                  <span style={{ fontSize: 20, color: '#C7C7CC' }}>›</span>
                </a>
                {i < art.length - 1 && (
                  <div style={{ height: 1, background: '#E5E5EA', marginLeft: 44 }} />
                )}
              </div>
            ))}
          </div>

          <p className="text-center pb-8" style={{ fontSize: 12, color: '#8E8E93' }}>
            Open on desktop for the full experience ✦
          </p>
        </div>
      </div>
    </div>
  )
}

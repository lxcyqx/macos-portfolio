'use client'

import MenuBar from '@/components/MenuBar'
import Dock from '@/components/Dock'
import FolderIcon from '@/components/FolderIcon'
import HeroWindow from '@/components/windows/HeroWindow'
import ProjectsWindow from '@/components/windows/ProjectsWindow'
import AboutWindow from '@/components/windows/AboutWindow'
import ResumeWindow from '@/components/windows/ResumeWindow'
import { useWindowStore } from '@/store/windowStore'

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
      label: 'Resume',
      position: { top: '50%', left: '76%' },
      previewImages: [],
      onClick: () => openWindow('resume'),
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

      {/* Desktop area — hidden on mobile */}
      <div className="hidden md:block fixed inset-0 pt-7 pb-20 overflow-hidden">
        {/* Folder Icons */}
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

        {/* Windows */}
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
  return (
    <div className="md:hidden fixed inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 overflow-y-auto z-[99999]">
      <div className="max-w-md mx-auto px-5 py-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile.jpg"
            alt="Lucy"
            className="w-24 h-24 rounded-full object-cover shadow-xl ring-4 ring-white mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
            hi, i&apos;m lucy! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">software engineer & designer at Google</p>
          <p className="text-gray-400 text-xs mt-0.5">Brown &apos;22 · Display Ads · part-time artist</p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/lucyqu/" target="_blank" rel="noopener noreferrer"
               className="text-sm text-blue-600 hover:underline font-medium">LinkedIn</a>
            <a href="https://github.com/lxcyqx" target="_blank" rel="noopener noreferrer"
               className="text-sm text-gray-700 hover:underline font-medium">GitHub</a>
            <a href="mailto:lucyqu_@alumni.brown.edu"
               className="text-sm text-rose-500 hover:underline font-medium">Email</a>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold text-gray-700 mb-3">About</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I&apos;m a software engineer at Google on the Display Ads team. I studied CS & (almost) Visual Arts at Brown,
            was Head TA for Data Structures & Algorithms, and took studio art classes at RISD.
            Outside work: gym, pilates, yoga, traveling, restaurants, art events.
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Projects</h2>
          <div className="flex flex-col gap-3">
            {[
              { slug: 'computer-graphics', label: 'Computer Graphics' },
              { slug: 'step-internship', label: 'STEP Capstone: Groupple' },
              { slug: 'iterative-design', label: 'Iterative Design & User Testing' },
              { slug: 'book-depository-redesign', label: 'Book Depository Redesign' },
              { slug: 'ab-testing', label: 'A/B Testing & Eye Tracking' },
              { slug: 'personas', label: 'Personas & Storyboarding' },
              { slug: 'fine-art', label: 'Fine Art' },
              { slug: 'digital-illustration', label: 'Digital Illustration' },
              { slug: 'animation', label: 'Animation' },
              { slug: 'architecture', label: 'Architecture' },
            ].map(({ slug, label }) => (
              <a key={slug} href={`/projects/${slug}`}
                 className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow flex items-center gap-3">
                <span className="text-lg">📁</span>
                <p className="text-sm font-medium text-gray-800">{label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

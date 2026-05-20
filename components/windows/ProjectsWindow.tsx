'use client'

import MacWindow from '@/components/MacWindow'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { useWindowStore } from '@/store/windowStore'

const sidebar = [
  { label: 'All Projects', filter: 'all', icon: '📂' },
  { label: 'Engineering & Design', filter: 'engineering', icon: '⚙️' },
  { label: 'Art & Illustration', filter: 'art', icon: '🖼️' },
]

export default function ProjectsWindow() {
  const { projectsFilter, setProjectsFilter } = useWindowStore()

  const filtered = projects.filter((p) => {
    if (projectsFilter === 'all') return true
    if (projectsFilter === 'engineering') return p.category === 'engineering' || p.category === 'design'
    return p.category === projectsFilter
  })

  return (
    <MacWindow
      id="projects"
      title="Projects — Finder"
      defaultPosition={{ x: 80, y: 80 }}
      minWidth={720}
      minHeight={480}
    >
      <div className="flex min-h-[480px]">
        {/* Sidebar */}
        <div className="w-44 flex-shrink-0 bg-gray-50/90 border-r border-gray-200/60 pt-3 pb-4 px-2 sticky top-0 self-start">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 mb-2">
            Favorites
          </p>
          {sidebar.map((item) => (
            <button
              key={item.filter}
              onClick={() => setProjectsFilter(item.filter)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-left transition-colors
                ${projectsFilter === item.filter
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-200/70'}`}
            >
              <span>{item.icon}</span>
              <span className="leading-tight">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center text-gray-400 text-sm mt-12">No projects in this category yet.</div>
          )}
        </div>
      </div>
    </MacWindow>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'

const categoryColors: Record<string, string> = {
  engineering: 'bg-blue-100 text-blue-700',
  design: 'bg-purple-100 text-purple-700',
  art: 'bg-rose-100 text-rose-700',
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-xl overflow-hidden border border-gray-200/60 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
        {/* Cover image */}
        <div className="relative h-36 bg-gray-100 overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.displayTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => {}}
            unoptimized
          />
        </div>

        {/* Info */}
        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-gray-800 leading-tight">
              {project.displayTitle}
            </h3>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">{project.subtitle}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${categoryColors[project.category]}`}>
              {project.category}
            </span>
            <span className="text-[10px] text-gray-400">{project.year}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

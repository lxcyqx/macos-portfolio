import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import WindowChrome from '@/components/WindowChrome'
import Image from 'next/image'
import IterativeDesignPage from '@/app/projects/_content/IterativeDesign'
import StepInternshipPage from '@/app/projects/_content/StepInternship'
import ComputerGraphicsPage from '@/app/projects/_content/ComputerGraphics'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  if (slug === 'computer-graphics') {
    return (
      <WindowChrome title={`${project.displayTitle} — ${project.subtitle}`}>
        <ComputerGraphicsPage />
      </WindowChrome>
    )
  }

  if (slug === 'iterative-design') {
    return (
      <WindowChrome title={`${project.displayTitle} — ${project.subtitle}`}>
        <IterativeDesignPage />
      </WindowChrome>
    )
  }

  if (slug === 'step-internship') {
    return (
      <WindowChrome title={`${project.displayTitle} — ${project.subtitle}`}>
        <StepInternshipPage />
      </WindowChrome>
    )
  }

  // Placeholder for other projects
  return (
    <WindowChrome title={`${project.displayTitle} — ${project.subtitle}`}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Cover image */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8 bg-gray-100">
          <Image
            src={project.coverImage}
            alt={project.displayTitle}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700 capitalize">
            {project.category}
          </span>
          <span className="text-xs text-gray-400">{project.year}</span>
          <span className="text-xs text-gray-400">· {project.role}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.displayTitle}</h1>
        <p className="text-gray-500 mb-10">{project.subtitle}</p>

        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-200 rounded-2xl">
          <div className="text-4xl mb-4">🚧</div>
          <p className="text-gray-600 font-medium">Content for this project is coming soon.</p>
          <p className="text-gray-400 text-sm mt-1">Check back later!</p>
        </div>
      </div>
    </WindowChrome>
  )
}

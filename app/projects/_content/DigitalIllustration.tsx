import Image from 'next/image'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </section>
  )
}

function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-4">
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        <Image src={src} alt={alt} width={900} height={600} className="w-full h-auto object-contain" unoptimized />
      </div>
      {caption && <figcaption className="text-center text-xs text-gray-400 mt-2">{caption}</figcaption>}
    </figure>
  )
}

export default function DigitalIllustrationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-700">art</span>
          <span className="text-xs text-gray-400">2020–2022</span>
          <span className="text-xs text-gray-400">· artist</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Illustration</h1>
        <p className="text-gray-500">Digital Art</p>
      </div>

      {/* Top two images side by side */}
      <div className="flex flex-col gap-4">
        <figure>
          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
            <Image src="/images/digital/animation.gif" alt="Chinatown pixel art animation" width={450} height={450} className="w-full h-auto object-contain" unoptimized />
          </div>
          <figcaption className="text-center text-xs text-gray-400 mt-2">Chinatown pixel art animation</figcaption>
        </figure>
        <figure>
          <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
            <Image src="/images/digital/landscape.jpg" alt="Landscape vector art" width={450} height={450} className="w-full h-auto object-contain" unoptimized />
          </div>
          <figcaption className="text-center text-xs text-gray-400 mt-2">Landscape vector art</figcaption>
        </figure>
      </div>

      <Section title="Japan Infographic">
        <p className="text-gray-700 leading-relaxed mb-6">
          This project was made for VISA 0150: 2D Foundation. The assignment was to make an infographic, so I
          chose to make a brochure covering various aspects of Japan such as its history, population, and economy.
        </p>
        <ProjectImage src="/images/digital/infographic-brochure.gif" alt="Infographic brochure horizontal view" caption="Infographic brochure — horizontal view" />
        <ProjectImage src="/images/digital/infographic.gif" alt="Infographic brochure horizontal view" caption="Infographic brochure" />
      </Section>
    </div>
  )
}

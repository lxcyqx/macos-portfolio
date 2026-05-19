export default function ArchitecturePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-700">art</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· designer</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Experiments in Living</h1>
        <p className="text-gray-500">Spatial Design</p>
      </div>

      {/* Body text */}
      <div className="max-w-3xl mx-auto space-y-4 mb-10">
        <p className="text-gray-700 leading-relaxed">
          As part of a semester-long project for HIAA 0100: Introduction to Architectural Design Studio, I iterated
          upon a series of spatial concepts to emphasize the relationship between abstract architectural ideas and
          the lived experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This project is an investigation of how the house fundamentally constructs the interactions of those
          living together, transforming the way we live in how we navigate through social, work, and sleeping spaces.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From the starting point of Frank Lloyd Wright&apos;s Willits House, I reimagined and transformed its
          spatial concepts to the context of Providence in 2020. The precedent house is taken out of its original
          intent for the idealized nuclear family as more people in modern day are straying away from traditional
          gender roles and the notion of domesticity.
        </p>
        <p className="text-gray-700 leading-relaxed">
          New configurations of living are emerging, namely in the idea of the co-op. With the advent of new
          technology, there is a blur between the private and public space, as people are more connected to the
          outside world than ever before.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These shifts in our interactions with the world thereby lead to an evolution of the relationship between
          leisure and work space, where the two now sit in between a space of being separate and being one.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The house goes far beyond Le Corbusier&apos;s assertion that the &ldquo;house is a machine for
          living.&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed">
          To further explore the house as something more than a structure that only fulfills the basic requirements
          of shelter, I visualized the Willits House as a series of volumes and took the relationships between these
          volumes to produce a new prototypical architecture designed for a group of five artists living together.
        </p>
      </div>

      {/* PDF embed */}
      <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          src="/Architecture.pdf"
          className="w-full"
          style={{ height: '90vh' }}
          title="Experiments in Living — Architecture PDF"
        >
          <p className="p-4 text-gray-500 text-sm">
            This browser does not support PDFs.{' '}
            <a href="/Architecture.pdf" className="text-blue-500 hover:underline" download>
              Download the PDF
            </a>{' '}
            to view it.
          </p>
        </iframe>
      </div>
    </div>
  )
}
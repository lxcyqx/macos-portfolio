export default function ComputerGraphicsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">engineering</span>
          <span className="text-xs text-gray-400">2022</span>
          <span className="text-xs text-gray-400">· developer</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Computer Graphics</h1>
        <p className="text-gray-500">Rendering &amp; Simulation</p>
      </div>

      {/* Vimeo embed */}
      <div className="relative w-full mb-10" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://player.vimeo.com/video/611054435?h=1f828377ff&badge=0&autopause=0&player_id=0&app_id=58479"
          className="absolute inset-0 w-full h-full rounded-2xl"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Computer Graphics"
        />
      </div>
    </div>
  )
}

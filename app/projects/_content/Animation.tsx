function VimeoEmbed({ id }: { id: string }) {
  return (
    <div className="relative w-full mb-8" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={`https://player.vimeo.com/video/${id}`}
        className="absolute inset-0 w-full h-full rounded-2xl"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title={`Vimeo ${id}`}
      />
    </div>
  )
}

export default function AnimationPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-700">art</span>
          <span className="text-xs text-gray-400">2021</span>
          <span className="text-xs text-gray-400">· animator</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Animation</h1>
        <p className="text-gray-500">Motion &amp; Character</p>
      </div>

      <VimeoEmbed id="544847787" />
      <VimeoEmbed id="544848207" />
      <VimeoEmbed id="503729423" />
      <VimeoEmbed id="643797763" />
      <VimeoEmbed id="649243383" />
      <VimeoEmbed id="661824919" />
    </div>
  )
}

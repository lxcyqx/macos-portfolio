'use client'

interface FolderIconProps {
  label: string
  onClick: () => void
  previewImages?: string[]
}

export default function FolderIcon({ label, onClick, previewImages = [] }: FolderIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 group select-none focus:outline-none"
    >
      <div className="relative w-16 h-16">
        {/* Fanned preview images */}
        {previewImages[1] && (
          <div
            className="absolute inset-1 rounded-lg overflow-hidden border border-white/30 shadow-sm"
            style={{ transform: 'rotate(-8deg) translateY(4px)', zIndex: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImages[1]}
              alt=""
              className="w-full h-full object-cover opacity-80"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        )}
        {previewImages[2] && (
          <div
            className="absolute inset-1 rounded-lg overflow-hidden border border-white/30 shadow-sm"
            style={{ transform: 'rotate(6deg) translateY(4px)', zIndex: 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImages[2]}
              alt=""
              className="w-full h-full object-cover opacity-80"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        )}
        {/* Main folder */}
        <div
          className="absolute inset-0 flex items-center justify-center text-5xl z-10
                     group-hover:scale-110 transition-transform duration-150"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
        >
          📁
        </div>
      </div>
      <span
        className="text-white text-xs font-medium text-center leading-tight px-1 py-0.5
                   bg-blue-600/70 rounded max-w-[80px] break-words shadow
                   group-hover:bg-blue-600/90 transition-colors backdrop-blur-sm"
      >
        {label}
      </span>
    </button>
  )
}

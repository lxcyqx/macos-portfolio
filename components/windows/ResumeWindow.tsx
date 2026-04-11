'use client'

import MacWindow from '@/components/MacWindow'

export default function ResumeWindow() {
  const pdfPath = '/images/resume.pdf'

  return (
    <MacWindow
      id="resume"
      title="Resume — Preview"
      defaultPosition={{ x: 160, y: 70 }}
      minWidth={680}
      minHeight={500}
    >
      <div className="flex flex-col h-full min-h-[500px]">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50/80 border-b border-gray-200/50 flex-shrink-0">
          <span className="text-xs text-gray-500 font-medium">resume.pdf</span>
          <a
            href={pdfPath}
            download="lucy-qu-resume.pdf"
            className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors shadow-sm"
          >
            ↓ Download
          </a>
        </div>

        {/* PDF embed */}
        <div className="flex-1 overflow-hidden">
          <object
            data={pdfPath}
            type="application/pdf"
            className="w-full h-full"
            style={{ minHeight: '440px' }}
          >
            <div className="flex flex-col items-center justify-center h-full min-h-[440px] text-center text-gray-400 px-6">
              <div className="text-5xl mb-4">📄</div>
              <p className="text-sm font-medium text-gray-600 mb-1">Resume coming soon</p>
              <p className="text-xs text-gray-400">
                Drop your file at <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-600">/public/images/resume.pdf</code>
              </p>
            </div>
          </object>
        </div>
      </div>
    </MacWindow>
  )
}

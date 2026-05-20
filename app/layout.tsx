import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SpotifyWindow from '@/components/windows/SpotifyWindow'
import AboutWindow from '@/components/windows/AboutWindow'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: "lucy qu — portfolio",
  description: "Software engineer at Google. Brown '22.",
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-[var(--font-inter)]">
        {children}
        <SpotifyWindow />
      </body>
    </html>
  )
}

'use client'

import MacWindow from '@/components/MacWindow'
import { motion } from 'framer-motion'

const messages = [
  { text: "hi! i'm lucy 👋", delay: 0 },
  { text: "i'm a software engineer at Google on the Display Ads team, where I work on client-side rendering of ad formats 💻", delay: 0.15 },
  { text: "previously i did two SWE internships at Google and one at GivePulse 💼", delay: 0.3 },
  { text: "at Brown, i was CS TA for three semesters and also took a lot of studio art classes including some at RISD 🎨", delay: 0.45 },
  { text: "outside of work: gym, pilates, yoga, taking an art course, trying new restaurants, and traveling 🌍", delay: 0.6 },
]

export default function AboutWindow() {
  return (
    <MacWindow
      id="about"
      title="About Me — Messages"
      defaultPosition={{ x: 120, y: 90 }}
      minWidth={500}
      minHeight={460}
    >
      <div className="flex flex-col min-h-[460px] bg-gray-50/80">
        {/* Messages header */}
        <div className="flex flex-col items-center py-5 border-b border-gray-200/60 bg-white/60 flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-md mb-2">
            L
          </div>
          <p className="text-sm font-semibold text-gray-800">lucy</p>
          <p className="text-xs text-gray-400">software engineer · brown &apos;22</p>
        </div>

        {/* Chat bubbles */}
        <div className="px-4 py-4 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: msg.delay, duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
              className="flex justify-end"
            >
              <div className="max-w-[78%] bg-[#1D7CF2] text-white text-sm px-4 py-2 rounded-2xl rounded-tr-md shadow-sm leading-relaxed">
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social links bar */}
        <div className="flex items-center justify-center gap-5 py-3 border-t border-gray-200/60 bg-white/50 flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/lucyqu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline font-medium"
          >
            LinkedIn
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="mailto:lucyqu28@gmail.com"
            className="text-xs text-blue-600 hover:underline font-medium"
          >
            Email
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="https://github.com/lxcyqx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </MacWindow>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MacWindow from '@/components/MacWindow'

const QA = [
  {
    question: "What do you like to do outside of work?",
    answer: "outside of work I'm usually at the gym, pilates, yoga, taking art classes, trying new restaurants, and traveling 🌍",
  },
  {
    question: "What's something most people wouldn't guess about you?",
    answer: "I grew up in NYC, and throughout middle school and high school I had this insanely long commute of nearly two hours just to get to school. This meant I spent four hours commuting every day, transferring from a bus to four different subways.",
  },
  {
    question: "What are you reading or watching right now?",
    answer: "I read a lot of psychology books and I also watch a lot of reality tv haha. I find it very interesting to observe how humans behave and also learn about why people are the way they are 📺",
  },
]

type Message = { type: 'question' | 'answer'; index: number }

// Shared spring config for all chat bubbles
const spring = { type: 'spring' as const, stiffness: 340, damping: 28 }
const bubbleInit = { opacity: 0, y: 10, scale: 0.97 }
const bubbleShow = { opacity: 1, y: 0, scale: 1 }

const Avatar = () => (
  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
    L
  </div>
)

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <Avatar />
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 block"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  // pendingAnswer: true from question click until question buttons should reappear.
  // showTyping: true only for the typing-indicator window (delayed after question).
  // Keeping them separate lets the question bubble animate in before the typing
  // indicator appears, avoiding the "everything at once" jumpiness.
  const [pendingAnswer, setPendingAnswer] = useState(false)
  const [showTyping, setShowTyping] = useState(false)
  const [askedIndices, setAskedIndices] = useState<Set<number>>(new Set())
  const bottomRef = useRef<HTMLDivElement>(null)

  const remainingIndices = QA.map((_, i) => i).filter((i) => !askedIndices.has(i))
  const allAnswered = remainingIndices.length === 0
  const allAnswersShown = messages.filter((m) => m.type === 'answer').length === QA.length
  const showQuestions = !pendingAnswer && !allAnswered

  const handleSelect = (index: number) => {
    if (pendingAnswer) return

    // Step 1 (t=0): question bubble in, question buttons out
    setMessages((prev) => [...prev, { type: 'question', index }])
    setAskedIndices((prev) => new Set([...prev, index]))
    setPendingAnswer(true)

    // Step 2 (t=280ms): typing indicator in — question bubble has finished animating
    const t1 = setTimeout(() => setShowTyping(true), 280)

    // Step 3 (t=1050ms): typing out, answer in
    const t2 = setTimeout(() => {
      setShowTyping(false)
      setMessages((prev) => [...prev, { type: 'answer', index }])
    }, 1050)

    // Step 4 (t=1220ms): remaining question buttons in — slight pause after answer
    const t3 = setTimeout(() => setPendingAnswer(false), 1220)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }

  useEffect(() => {
    const t = setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
      60,
    )
    return () => clearTimeout(t)
  }, [messages, showTyping, pendingAnswer])

  return (
    <MacWindow
      id="about"
      title="About Me — Messages"
      defaultPosition={{ x: 120, y: 90 }}
      minWidth={500}
      minHeight={500}
    >
      <div className="flex flex-col h-full bg-gray-50/80">
        {/* Header */}
        <div className="flex flex-col items-center py-5 border-b border-gray-200/60 bg-white/60 flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-md mb-2">
            L
          </div>
          <p className="text-sm font-semibold text-gray-800">lucy</p>
          <p className="text-xs text-gray-400">software engineer · brown &apos;22</p>
        </div>

        {/* Chat area */}
        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-3">
          {/* Intro bubbles */}
          {[
            "hi! i'm lucy 👋",
            "i'm a software engineer at Google on the Display Ads team, where I work on client-side rendering of ad formats 💻",
            "previously i did two SWE internships at Google and one at GivePulse 💼",
            "at Brown, i was CS TA for three semesters and also took a lot of studio art classes including some at RISD 🎨",
          ].map((text, i, arr) => (
            <motion.div
              key={i}
              initial={bubbleInit}
              animate={bubbleShow}
              transition={{ ...spring, delay: i * 0.12 }}
              className="flex items-end gap-2"
            >
              {i === arr.length - 1 ? <Avatar /> : <div className="w-6 h-6 flex-shrink-0" />}
              <div className="max-w-[80%] bg-white text-gray-800 text-sm px-3 py-2 rounded-2xl rounded-bl-md shadow-sm leading-relaxed border border-gray-100">
                {text}
              </div>
            </motion.div>
          ))}

          {/* Conversation */}
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={bubbleInit}
              animate={bubbleShow}
              transition={spring}
              className={`flex items-end gap-2 ${msg.type === 'question' ? 'justify-end' : ''}`}
            >
              {msg.type === 'answer' && <Avatar />}
              <div
                className={`max-w-[80%] text-sm px-3 py-2 rounded-2xl shadow-sm leading-relaxed ${
                  msg.type === 'question'
                    ? 'bg-[#1D7CF2] text-white rounded-tr-md'
                    : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
                }`}
              >
                {msg.type === 'question' ? QA[msg.index].question : QA[msg.index].answer}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {showTyping && (
              <motion.div
                initial={bubbleInit}
                animate={bubbleShow}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                transition={spring}
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>

          {/* All questions answered */}
          <AnimatePresence>
            {allAnswersShown && (
              <motion.div
                initial={bubbleInit}
                animate={bubbleShow}
                transition={spring}
                className="flex items-end gap-2"
              >
                <Avatar />
                <div className="max-w-[80%] bg-white text-gray-800 text-sm px-3 py-2 rounded-2xl rounded-bl-md shadow-sm leading-relaxed border border-gray-100">
                  that&apos;s all for now! feel free to reach out 💌
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question options */}
          <AnimatePresence>
            {showQuestions && (
              <motion.div
                key={`q-${askedIndices.size}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.18 } }}
                transition={{ ...spring, delay: askedIndices.size > 0 ? 0.05 : 0 }}
                className="flex flex-col gap-2 mt-1"
              >
                <p className="text-xs text-gray-400 text-center">choose a question</p>
                {remainingIndices.map((i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="self-end text-right text-sm text-[#1D7CF2] border border-[#1D7CF2]/40 rounded-full px-4 py-2 hover:bg-[#1D7CF2]/5 transition-colors leading-snug"
                  >
                    {QA[i].question}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={bottomRef} />
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 py-3 border-t border-gray-200/60 bg-white/50 flex-shrink-0">
          <a href="https://www.linkedin.com/in/lucyqu/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">
            LinkedIn
          </a>
          <span className="text-gray-300">·</span>
          <a href="mailto:lucyqu28@gmail.com" className="text-xs text-blue-600 hover:underline font-medium">
            Email
          </a>
          <span className="text-gray-300">·</span>
          <a href="https://github.com/lxcyqx" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline font-medium">
            GitHub
          </a>
        </div>
      </div>
    </MacWindow>
  )
}

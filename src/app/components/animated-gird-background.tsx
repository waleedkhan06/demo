"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import type React from "react"

interface Dot {
  id: number
  size: number
  x: number
  y: number
  delay: number
  duration: number
  xMove1: number
  yMove1: number
  xMove2: number
  yMove2: number
  xMove3: number
  yMove3: number
}

export default function DotBackground() {
  const [backgroundDots, setBackgroundDots] = useState<Dot[]>([])

  useEffect(() => {
    const dots = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5, // 5 to 15px
      x: Math.random() * 100, // 0 to 100vw
      y: Math.random() * 100, // 0 to 100vh
      delay: Math.random() * 5, // 0 to 5s
      duration: Math.random() * 10 + 5, // 5 to 15s
      xMove1: (Math.random() - 0.5) * 50, // -25 to 25vw
      yMove1: (Math.random() - 0.5) * 50, // -25 to 25vh
      xMove2: (Math.random() - 0.5) * 50,
      yMove2: (Math.random() - 0.5) * 50,
      xMove3: (Math.random() - 0.5) * 50,
      yMove3: (Math.random() - 0.5) * 50,
    }))
    setBackgroundDots(dots)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {backgroundDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-purple-800 opacity-100 animate-dot-move"
            style={
              {
                width: dot.size,
                height: dot.size,
                left: `${dot.x}vw`,
                top: `${dot.y}vh`,
                "--duration": `${dot.duration}s`,
                "--x-move-1": `${dot.xMove1}vw`,
                "--y-move-1": `${dot.yMove1}vh`,
                "--x-move-2": `${dot.xMove2}vw`,
                "--y-move-2": `${dot.yMove2}vh`,
                "--x-move-3": `${dot.xMove3}vw`,
                "--y-move-3": `${dot.yMove3}vh`,
              } as React.CSSProperties
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: dot.delay, duration: 1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

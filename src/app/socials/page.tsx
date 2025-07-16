"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6" 

import type React from "react"

export default function SocialsPage() {
  const [backgroundDots, setBackgroundDots] = useState<
    {
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
    }[]
  >([])

  useEffect(() => {
    const dots = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
      xMove1: (Math.random() - 0.5) * 50,
      yMove1: (Math.random() - 0.5) * 50,
      xMove2: (Math.random() - 0.5) * 50,
      yMove2: (Math.random() - 0.5) * 50,
      xMove3: (Math.random() - 0.5) * 50,
      yMove3: (Math.random() - 0.5) * 50,
    }))
    setBackgroundDots(dots)
  }, [])

  const socialLinks = [
    {
      name: "Twitch",
      icon: FaTwitch,
      url: "#",
      description: "Live streams, gameplay, and community events.",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "#",
      description: "Highlights, VODs, documentaries, and more.",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "#",
      description: "Latest news, updates, and quick announcements.",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "#",
      description: "Join our community, chat with players, and find teammates.",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "#",
      description: "Short-form content, behind-the-scenes, and fun clips.",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      description: "Photos, stories, and visual updates from the team.",
    },
  ]

  return (
    <div className="relative z-10 py-12">
      <AnimatePresence>
        {backgroundDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-purple-600 opacity-30 animate-dot-move"
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

      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Us
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/70 p-6 rounded-lg shadow-xl glass flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            >
              <social.icon className="w-16 h-16 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-white mb-2">{social.name}</h2>
              <p className="text-gray-300 text-sm flex-grow">{social.description}</p>
            </motion.a>
          ))}
        </motion.section>
      </div>
    </div>
  )
}

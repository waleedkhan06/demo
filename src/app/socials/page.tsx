"use client"

import { motion } from "framer-motion"

import { FaDiscord, FaTwitch, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function SocialsPage() {
  
  const socialLinks = [
    { name: "Twitch", icon: FaTwitch, url: "#", description: "Live streams, gameplay, and community events." },
    { name: "YouTube", icon: FaYoutube, url: "#", description: "Highlights, VODs, documentaries, and more." },
    { name: "X (Twitter)", icon: FaXTwitter, url: "#", description: "Latest news, updates, and quick announcements." },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "#",
      description: "Join our community, chat with players, and find teammates.",
    },
    { name: "TikTok", icon: FaTiktok, url: "#", description: "Short-form content, behind-the-scenes, and fun clips." },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      description: "Photos, stories, and visual updates from the team.",
    },
  ]

  return (
    <div className="relative z-10 py-12">
      

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
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                transition: { duration: 0.2, ease: "easeOut" }, 
              }}
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

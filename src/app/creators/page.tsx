"use client"

import { motion } from "framer-motion"
import { Twitch, Youtube, X } from "lucide-react"
import Image from "next/image"

export default function CreatorsPage() {
  

  const creators = [
    {
      name: "Faultless",
      game: "critical ops",
      image:"/3D.webp",
      description: "Known for high-skill gameplay and engaging streams.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "ContentKing",
      game: "League of Legends",
      image: "/3D.webp",
      description: "Creates epic montages and in-depth game guides.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "EsportsAnalyst",
      game: "CS2",
      image: "/3D.webp",
      description: "Provides insightful analysis and commentary on competitive matches.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "CommunityHero",
      game: "Multi-game",
      image: "/3D.webp",
      description: "Engages with fans and organizes community events.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "TacticalGuru",
      game: "Strategy Games",
      image: "/3D.webp",
      description: "Master strategist, sharing advanced tactics and tips.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "LoreMaster",
      game: "RPG/Story Games",
      image: "/3D.webp",
      description: "Deep dives into game lore and narrative analysis.",
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
  ]

  return (
    <div className="relative z-10 py-12">
      {/* Background handled by app/layout.tsx */}

      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-10 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Amazing Creators
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              className="bg-gray-900/70 p-6 rounded-lg shadow-xl glass flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            >
              <Image
                src={creator.image || "/placeholder.svg"}
                alt={`${creator.name} Profile`}
                width={112}
                height={112}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-purple-600"
              />
              <h2 className="text-2xl font-bold text-white mb-1">{creator.name}</h2>
              <p className="text-purple-400 text-md mb-3">{creator.game}</p>
              <p className="text-gray-300 text-sm mb-4 flex-grow">{creator.description}</p>
              <div className="flex gap-4 mt-auto">
                {creator.socials.twitch && (
                  <a href={creator.socials.twitch} aria-label={`${creator.name} Twitch`}>
                    <Twitch className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {creator.socials.youtube && (
                  <a href={creator.socials.youtube} aria-label={`${creator.name} YouTube`}>
                    <Youtube className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {creator.socials.twitter && (
                  <a href={creator.socials.twitter} aria-label={`${creator.name} X (Twitter)`}>
                    <X className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}

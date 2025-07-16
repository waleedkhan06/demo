"use client"

import { motion } from "framer-motion"
import { Twitch, Youtube, X } from "lucide-react"
import Image from "next/image"

export default function TeamsPage() {
  

  const teams = [
    {
      name: "Valorant Squad",
      game: "Valorant",
      image: "/3D.webp",
      members: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "League Legends",
      game: "League of Legends",
      image: "/3D.webp",
      members: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "CS2 Elite",
      game: "Counter-Strike 2",
      image: "/3D.webp",
      members: ["Player X", "Player Y", "Player Z", "Player W", "Player V"],
      socials: { twitch: "#", youtube: "#", twitter: "#" },
    },
    {
      name: "Apex Legends",
      game: "Apex Legends",
      image: "/3D.webp",
      members: ["Player Alpha", "Player Beta", "Player Gamma"],
      socials: { twitch: "#", youtube: "#", twitter: "#" },
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
          Our Professional Teams
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              className="bg-gray-900/70 p-6 rounded-lg shadow-xl glass flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            >
              <Image
                src={team.image || "/placeholder.svg"}
                alt={`${team.name} Logo`}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-600"
              />
              <h2 className="text-3xl font-bold text-white mb-2">{team.name}</h2>
              <p className="text-purple-400 text-lg mb-4">{team.game}</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">Roster:</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  {team.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-auto">
                {team.socials.twitch && (
                  <a href={team.socials.twitch} aria-label={`${team.name} Twitch`}>
                    <Twitch className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {team.socials.youtube && (
                  <a href={team.socials.youtube} aria-label={`${team.name} YouTube`}>
                    <Youtube className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                  </a>
                )}
                {team.socials.twitter && (
                  <a href={team.socials.twitter} aria-label={`${team.name} X (Twitter)`}>
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

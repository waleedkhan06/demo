"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react" 
export default function SchedulePage() {
  

  const upcomingMatches = [
    {
      id: 1,
      team1: "Reign Esports",
      team2: "Phoenix Rising",
      game: "Valorant",
      date: "July 25, 2025",
      time: "7:00 PM PST",
      stream: "#",
    },
    {
      id: 2,
      team1: "Reign Esports",
      team2: "Cyber Knights",
      game: "League of Legends",
      date: "July 28, 2025",
      time: "6:00 PM PST",
      stream: "#",
    },
    {
      id: 3,
      team1: "Reign Esports",
      team2: "Cosmic Destroyers",
      game: "CS2",
      date: "August 1, 2025",
      time: "8:00 PM PST",
      stream: "#",
    },
  ]

  return (
    <div className="relative z-10 py-12">
      {/* Background handled by app/layout.tsx */}

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Match Schedule
        </motion.h1>

        <motion.section
          className="bg-gray-900/70 p-8 rounded-lg shadow-xl glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Upcoming Matches</h2>
          <div className="space-y-6">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                className="bg-gray-800/70 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between text-left border border-purple-700/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <div className="mb-4 md:mb-0 md:w-1/3">
                  <p className="text-lg font-bold text-purple-300">{match.game}</p>
                  <p className="text-sm text-gray-400">
                    {match.date} at {match.time}
                  </p>
                </div>
                <div className="flex items-center justify-center md:w-1/3 mb-4 md:mb-0">
                  <span className="text-xl font-bold text-white">{match.team1}</span>
                  <span className="mx-4 text-gray-500">vs</span>
                  <span className="text-xl font-bold text-white">{match.team2}</span>
                </div>
                <div className="md:w-1/3 text-right">
                  <a
                    href={match.stream}
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" /> Watch Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-12 bg-gray-900/70 p-8 rounded-lg shadow-xl glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Past Results</h2>
          <p className="text-lg text-gray-300">
            Details about our past match results and tournament performances will be displayed here.
          </p>
        </motion.section>
      </div>
    </div>
  )
}

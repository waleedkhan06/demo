"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Trophy, Star } from "lucide-react"

export default function ReignEsports() {
  const yourLogoPath = "/3D.webp"
  const mainAnimationVideoId = "GztU1TQsWho"

  const youtubeVideos = [
    { id: "FU0DfREZiSI", time: "4:15", title: "Reign Esports Official Trailer" },
    { id: "ohkcP8hXBI8", time: "7:30", title: "Behind the Scenes: Team Training" },
    { id: "tTAkYnZthh8", time: "2:40", title: "Top Plays of the Season" },
    { id: "kvM_MZ0sS_o", time: "10:00", title: "Player Spotlight: Our Star ADC" },
  ]

  return (
    <div className="relative z-10 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-xl md:text-2xl tracking-[0.3em] text-white font-light uppercase mb-4">
            WELCOME TO <span className="text-purple-400 font-bold">REIGN ESPORTS</span>
          </h1>
          <motion.div
            className="mx-auto w-48 h-48 md:w-64 md:h-64 relative animate-float"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src={yourLogoPath || "/placeholder.svg"}
              alt="Reign Esports Main Emblem"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-wider uppercase mt-8">
            <span className="text-purple-400">REIGN</span>
            <br />
            <span className="text-white">ESPORTS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Dominating the competitive scene and building a legacy of champions. Join our journey to greatness.
          </p>
          <motion.a
            href="/about"
            className="mt-8 inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg uppercase shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.a>
        </motion.div>

        {/* Featured Video Section */}
        <motion.div
          className="mb-12 w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center gradient-text">Featured Highlight</h3>
          <div className="bg-gray-900/50 border border-purple-600/30 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${mainAnimationVideoId}?autoplay=0&modestbranding=1&rel=0`}
                title="Reign Esports Animation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Key Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {[
            { icon: Trophy, label: "Tournaments Won", value: "25+" },
            { icon: Users, label: "Team Members", value: "50+" },
            { icon: Star, label: "Championships", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-900/70 p-6 rounded-lg shadow-xl glass"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                transition: { duration: 0.2, ease: "easeOut" }, 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: index }}
              >
                <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-purple-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* More Videos Section */}
        <motion.div
          className="text-center mb-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className="text-3xl font-bold text-purple-400 mb-6 gradient-text">More Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-purple-600/30 rounded-lg overflow-hidden shadow-lg" // Updated styling
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <div className="aspect-video relative">
                  <iframe
                    className="absolute inset-0 w-full h-full" // Removed pointer-events-none
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&modestbranding=1&rel=0`} // Updated src parameters
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

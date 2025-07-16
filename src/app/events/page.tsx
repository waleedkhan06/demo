"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function EventsPage() {
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Reign Fan Meetup 2025",
      date: "September 15, 2025",
      location: "Online / Virtual",
      description: "Join us for an exclusive online fan meetup with your favorite players and creators!",
      image: "/3D.webp",
    },
    {
      id: 2,
      title: "Charity Stream Marathon",
      date: "October 5-7, 2025",
      location: "Twitch.tv/ReignEsports",
      description: "A 48-hour charity stream featuring all our teams and creators, raising funds for a good cause.",
      image: "/3D.webp",
    },
    {
      id: 3,
      title: "Esports Bootcamp Open Day",
      date: "November 20, 2025",
      location: "Reign HQ, Cityville",
      description: "Visit our state-of-the-art training facility and meet the pros in person!",
      image: "/3D.webp",
    },
  ]

  return (
    <div className="relative z-10 py-12">
      

      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-10 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-gray-900/70 rounded-lg shadow-xl glass overflow-hidden text-left"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={300}
                height={150}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                <p className="text-purple-400 text-sm mb-1">{event.date}</p>
                <p className="text-gray-300 text-sm mb-3">{event.location}</p>
                <p className="text-gray-300 text-base mb-4 line-clamp-3">{event.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View All Events
          </a>
        </motion.div>
      </div>
    </div>
  )
}

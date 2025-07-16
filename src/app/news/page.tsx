"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function NewsPage() {
  
  const newsArticles = [
    {
      id: 1,
      title: "Reign Esports Dominates Summer Championship",
      date: "July 10, 2025",
      image: "/3D.webp",
      excerpt: "Our Valorant squad secured a decisive victory in the highly anticipated Summer Championship...",
    },
    {
      id: 2,
      title: "New Creator Joins the Reign Family!",
      date: "July 5, 2025",
      image: "/3D.webp",
      excerpt: "We are thrilled to announce the addition of StreamerPro to our content creator lineup...",
    },
    {
      id: 3,
      title: "Partnership Announcement: Gaming Gear Pro",
      date: "June 28, 2025",
      image: "/3D.webp",
      excerpt: "Reign Esports is excited to reveal our new partnership with Gaming Gear Pro...",
    },
    {
      id: 4,
      title: "Behind the Scenes: Team Training Camp",
      date: "June 20, 2025",
      image: "/3D.webp",
      excerpt: "Get an exclusive look into how our teams prepare for major tournaments...",
    },
  ]

  return (
    <div className="relative z-10 py-12">
      {/* Background handled by app/layout.tsx */}

      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest News
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-gray-900/70 rounded-lg shadow-xl glass overflow-hidden text-left"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
            >
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={300}
                height={150}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{article.title}</h2>
                <p className="text-purple-400 text-sm mb-3">{article.date}</p>
                <p className="text-gray-300 text-base mb-4 line-clamp-3">{article.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 hover:text-purple-400 font-semibold transition-colors"
                >
                  Read More
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
            View All News
          </a>
        </motion.div>
      </div>
    </div>
  )
}

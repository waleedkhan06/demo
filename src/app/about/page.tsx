"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="relative z-10 py-12">
      <div className="bg-black container mx-auto px-8 max-w-4xl text-center overflow-visible">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Reign Esports
        </motion.h1>
      </div>

      <motion.section
        className="bg-gray-900/70 p-8 rounded-lg shadow-xl mb-12 glass max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Reign Esports is dedicated to fostering top-tier talent and building a community where passion meets
          professionalism. We strive for excellence in every game, pushing the boundaries of competitive gaming while
          inspiring the next generation of esports athletes.
        </p>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="bg-gray-900/70 p-8 rounded-lg shadow-xl glass">
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">Our Vision</h3>
          <p className="text-gray-300">
            To be a leading force in the global esports arena, recognized for our competitive success, innovative
            strategies, and unwavering commitment to our players and fans.
          </p>
        </div>
        <div className="bg-gray-900/70 p-8 rounded-lg shadow-xl glass">
          <h3 className="text-2xl font-semibold text-purple-500 mb-3">Our Values</h3>
          <ul className="list-disc list-inside text-gray-300 text-left mx-auto max-w-xs">
            <li>Integrity & Fair Play</li>
            <li>Teamwork & Collaboration</li>
            <li>Innovation & Adaptability</li>
            <li>Community & Inclusivity</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="bg-gray-900/70 p-8 rounded-lg shadow-xl glass max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Our History</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Founded in [Year], Reign Esports quickly rose through the ranks, achieving significant milestones in various
          titles. From humble beginnings to championship victories, our journey is a testament to hard work,
          dedication, and the relentless pursuit of greatness.
        </p>
      </motion.section>
    </div>
  )
}

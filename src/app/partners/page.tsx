"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PartnersPage() {
  

  const partners = [
    { name: "Gaming Gear Pro", logo: "/3D.webp", },
    { name: "Energy Drink X", logo: "/3D.webp", },
    { name: "Streaming Platform Z", logo: "/3D.webp", },
    { name: "Apparel Co.", logo: "/3D.webp", },
    { name: "Tech Solutions Inc.", logo: "/3D.webp",  },
    { name: "Community Hub", logo: "/3D.webp", },
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
          Our Valued Partners
        </motion.h1>

        <motion.section
          className="bg-gray-900/70 p-8 rounded-lg shadow-xl glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We are proud to collaborate with industry-leading brands that share our vision for excellence in esports.
            Our partnerships are crucial to our success and enable us to provide the best for our teams and community.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/70 rounded-lg border border-purple-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)" }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} Logo`}
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain mb-2"
                />
                <p className="text-white font-semibold text-sm">{partner.name}</p>
              </motion.div>
            ))}
          </div>
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
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}

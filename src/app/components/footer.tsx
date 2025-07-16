"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // Ensure next/image is imported
import { FaDiscord, FaTwitch, FaYoutube, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

interface FooterProps {
  logoPath: string
}

export default function Footer({ logoPath }: FooterProps) {
  return (
    <motion.footer
      className="relative z-10 bg-black py-8 px-6 mt-16 border-t-2 border-purple-600" // Added purple top border
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section - #BADOMEN (Re-added) */}
        <div className="mb-4 md:mb-0 md:w-1/3 text-center md:text-left">
          <p className="text-gray-400 text-lg font-bold tracking-widest">#ABOODY</p>
        </div>

        {/* Center Section - Logo */}
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center">
          <Link href="/">
            <Image // Using next/image as requested
              src={logoPath || "/placeholder.svg"}
              alt="Reign Esports Logo"
              width={48} // Added width
              height={48} // Added height
              className="object-contain"
            />
            <span className="sr-only">Reign Esports Home</span>
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 md:w-1/3 justify-center md:justify-end">
          <a href="#" aria-label="Discord">
            <FaDiscord className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="Twitch">
            <FaTwitch className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        <p>© {new Date().getFullYear()} Reign Esports. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

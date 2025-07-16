"use client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image" 
import { FaYoutube, FaDiscord, FaTiktok, FaTelegramPlane, FaTwitch, FaBars, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useState } from "react"

interface HeaderProps {
  logoPath: string
}

export default function Header({ logoPath }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "TEAMS", href: "/team" }, 
    { name: "NEWS", href: "/news" },
    { name: "EVENTS", href: "/events" },
    { name: "CREATORS", href: "/creators" },
    { name: "SCHEDULE", href: "/schedule" },
    { name: "PARTNERS", href: "/partners" },
    { name: "SOCIALS", href: "/socials" },
    { name: "JERSEY SALE", href: "/shop" },
  ]

  return (
    <header className="relative z-20 w-full">
      {/* Top Header Row - Social Icons (Desktop Only) */}
      <motion.div
        className="bg-black py-2 px-6 flex justify-between items-center border-b-2 border-purple-600" // Added purple bottom border
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link 
          href="#"
          className="hidden md:inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors uppercase text-sm"
        >
          JOIN TODAY!
        </Link>
        <div className="flex gap-4">
          <a href="#" aria-label="Discord">
            <FaDiscord className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="Telegram">
            <FaTelegramPlane className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="Twitch">
            <FaTwitch className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="w-5 h-5 text-white hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </motion.div>

      {/* Main Header Row - Logo, Nav, Button */}
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto border-b-2 border-purple-600">
        {" "}
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/">
            <Image
              src={logoPath || "/3D.webp"}
              alt="Reign Esports Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="sr-only">Reign Esports Home</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <Link href={item.href} className="hover:text-purple-400 transition-colors uppercase">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white focus:outline-none"
              aria-label="Close mobile menu"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-xl font-bold text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-purple-400 transition-colors uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.05 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  JOIN TODAY!
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

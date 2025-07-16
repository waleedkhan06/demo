import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import AnimatedGridBackground from "./components/animated-gird-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reign Esports - Professional Gaming Organization",
  description: "Official website for Reign Esports. Competing at the highest level.",
  icons: {
    icon: "/3D.webp", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const yourLogoPath = "/3D.webp" 

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedGridBackground />
        <div className="absolute inset-0 bg-black opacity-80 z-0" />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header logoPath={yourLogoPath} />
          <main className="flex-grow">{children}</main>
          <Footer logoPath={yourLogoPath} />
        </div>
      </body>
    </html>
  )
}

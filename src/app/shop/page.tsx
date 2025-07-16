"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function ShopPage() {
  const allProducts = [
    {
      id: "reign-jersey-1",
      name: "Reign Esports Jersey 1",
      price: "$64.99",
      frontImage: "/jerseys/jerseyf.png",
      backImage: "/jerseys/jerseyf.png",
      images: ["/jerseys/jerseyf.png", "/jerseys/jerseyb.png", "/jerseys/jerseyb.png", "/jerseys/jerseyf.png"],
      description: "The official Reign Esports home jersey, designed for comfort and style. Show your support!",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "reign-jersey-2",
      name: "Reign Esports Jersey 2",
      price: "$59.99",
      frontImage: "/jerseys/jersey2f.png",
      backImage:  "/jerseys/jersey2b.png",
      images: ["/jerseys/jersey2f.png", "/jerseys/jersey2b.png", ],
      description: "The official Reign Esports away jersey, featuring a sleek design and breathable fabric.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: "reign-hoddie",
      name: "Reign Esports hoddie gold",
      price: "$34.99",
      frontImage: "/jerseys/hod1.png",
      backImage: "/jerseys/hod2.png",
      images: ["/jerseys/hod1.png", "/jerseys/hod1.png"],
      description: "Comfortable and stylish fan tee, perfect for everyday wear. Features the Reign Esports logo.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "reign-hoodie",
      name: "Reign Esports Hoodie purple",
      price: "$79.99",
      frontImage: "/jerseys/hod2.png",
      backImage: "/jerseys/hod2.png",
      images: ["/jerseys/hod2.png", "/jerseys/hod2.png"],
      description: "Warm and cozy hoodie with Reign Esports branding. Ideal for cooler weather.",
      sizes: ["M", "L", "XL"],
    },
  ]

  const productsToDisplay = allProducts

  return (
    <div className="relative z-10 py-12">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-purple-400 mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Official Shop
        </motion.h1>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {productsToDisplay.map((product,) => (
            <motion.div
              key={product.id}
              className="relative w-full bg-gray-900/70 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div>
                  <Image
                    src={product.frontImage || "/placeholder.svg"}
                    alt={`${product.name} Front`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-purple-400 text-lg font-semibold">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}

"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, PinIcon as Pinterest, PhoneIcon as Whatsapp } from "lucide-react"
import Image from "next/image"


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
    frontImage: "/placeholder.svg?height=300&width=300&text=Jersey+2+Front",
    backImage: "/placeholder.svg?height=300&width=300&text=Jersey+2+Back",
    images: ["/jerseys/jersey2f.png", "/jerseys/jersey2b.png", "/jerseys/jersey2f.png", "/jerseys/jersey2b.png"],
    description: "The official Reign Esports away jersey, featuring a sleek design and breathable fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "reign-fan-tee",
    name: "Reign Esports Fan Tee",
    price: "$34.99",
    frontImage: "/placeholder.svg?height=300&width=300&text=Fan+Tee+Front",
    backImage: "/placeholder.svg?height=300&width=300&text=Fan+Tee+Back",
    images: ["/jerseys/hod1.png", "/jerseys/hod1.png"],
    description: "Comfortable and stylish fan tee, perfect for everyday wear. Features the Reign Esports logo.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "reign-hoodie",
    name: "Reign Esports Hoodie",
    price: "$79.99",
    frontImage: "/placeholder.svg?height=300&width=300&text=Hoodie+Front",
    backImage: "/placeholder.svg?height=300&width=300&text=Hoodie+Back",
    images: ["/jerseys/hod2.png", "/jerseys/hod2.png"],
    description: "Warm and cozy hoodie with Reign Esports branding. Ideal for cooler weather.",
    sizes: ["M", "L", "XL"],
  },
]


type ProductDetailPageProps = {
  params: Promise<{ productId: string }>
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
 
  const resolvedParams = React.use(params)
  const { productId } = resolvedParams

  const normalizedProductId = (productId || "").toLowerCase()
  const product = allProducts.find((p) => p.id.toLowerCase() === normalizedProductId)

  const [selectedImage, setSelectedImage] = useState(product?.images[0])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0])
      setSelectedSize(null) }
  }, [product])

  if (!product) {
    return (
      <div className="relative z-10 py-12 container mx-auto px-6 max-w-6xl text-center min-h-[calc(100vh-200px)] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-gray-400 mt-4">
          The product ID &apos;{productId}&apos; was not found. Please check the URL.
        </p>
      </div>
    )
  }

  return (
    <div className="relative z-10 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-sm text-gray-400 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Home / Shop / {product.name}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900/70 p-8 rounded-lg shadow-xl glass">
          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center mb-4">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
             
              {product.images.slice(0, 3).map((image, index) => (
                <motion.div key={index} className="w-20 h-20 relative">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className={`object-contain cursor-pointer rounded-md border-2 ${
                      selectedImage === image ? "border-purple-600" : "border-transparent"
                    } hover:border-purple-400 transition-colors`}
                    onClick={() => setSelectedImage(image)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-purple-400 text-3xl font-semibold mb-6">{product.price}</p>

            <div className="mb-6">
              <label htmlFor="size-select" className="block text-gray-300 text-sm font-medium mb-2">
                Size *
              </label>
              <div className="relative">
                <select
                  id="size-select"
                  className="block w-full bg-gray-800 border border-purple-700/50 text-white py-2 px-4 pr-8 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={selectedSize || ""}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="quantity-input" className="block text-gray-300 text-sm font-medium mb-2">
                Quantity *
              </label>
              <div className="flex items-center bg-gray-800 border border-purple-700/50 rounded-md overflow-hidden w-32">
                <button
                  className="px-3 py-2 text-white hover:bg-purple-700 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  className="w-full text-center bg-transparent text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button
                  className="px-3 py-2 text-white hover:bg-purple-700 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg mb-6">
              Add to Cart
            </button>

            <div className="text-gray-300 text-sm leading-relaxed mb-6">{product.description}</div>

            <div className="flex items-center gap-4 mt-auto">
              <span className="text-gray-300 text-sm">Share:</span>
              <a href="#" aria-label="Share on Facebook">
                <Facebook className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" aria-label="Share on X (Twitter)">
                <Twitter className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" aria-label="Share on Pinterest">
                <Pinterest className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" aria-label="Share on WhatsApp">
                <Whatsapp className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

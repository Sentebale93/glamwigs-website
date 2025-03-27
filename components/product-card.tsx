"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Product, CartItem } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const addToCart = () => {
    setIsAdding(true)

    // Get current cart from localStorage
    const currentCart = localStorage.getItem("cart")
    const cart: CartItem[] = currentCart ? JSON.parse(currentCart) : []

    // Check if product is already in cart
    const existingItemIndex = cart.findIndex((item) => item.productId === product.id)

    if (existingItemIndex >= 0) {
      // Increment quantity if product already exists
      cart[existingItemIndex].quantity += 1
    } else {
      // Add new item to cart
      cart.push({
        productId: product.id,
        quantity: 1,
      })
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))

    // Update cart count in header
    const cartCountElement = document.querySelector(".cart-count")
    if (cartCountElement) {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
      cartCountElement.textContent = totalItems.toString()
    }

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <Button
          variant="ghost"
          className="w-full mb-2 flex justify-between items-center"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>View Specifications</span>
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
        <div className={`mb-4 overflow-hidden transition-all duration-200 ${showDetails ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.specifications.length && (
              <li>Length: {product.specifications.length}</li>
            )}
            {product.specifications.material && (
              <li>Material: {product.specifications.material}</li>
            )}
            {product.specifications.color && (
              <li>Color: {product.specifications.color}</li>
            )}
            {product.specifications.capSize && (
              <li>Cap Size: {product.specifications.capSize}</li>
            )}
            {product.specifications.heatResistant !== undefined && (
              <li>Heat Resistant: {product.specifications.heatResistant ? 'Yes' : 'No'}</li>
            )}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex flex-col space-y-2">
        <Button
          onClick={addToCart}
          disabled={isAdding || !product.inStock}
          className="w-full"
          size="lg"
        >
          {isAdding ? (
            "Adding to Cart..."
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </>
          )}
        </Button>
        <Button
          onClick={() => {
            const message = `Hi, I'm interested in the ${product.name} (${product.specifications.color}) - ${formatPrice(product.price)}`
            window.open(`https://wa.me/+27659876543?text=${encodeURIComponent(message)}`, '_blank')
          }}
          variant="outline"
          className="w-full"
          size="lg"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}


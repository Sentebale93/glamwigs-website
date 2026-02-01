"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Scissors, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import type { CartItem } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { config } from "@/lib/config"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      // Update cart count in header
      const cartCountElement = document.querySelector(".cart-count")
      if (cartCountElement) {
        cartCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0).toString()
      }
    }
  }, [cartItems, isClient])

  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item,
    )
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const getProductDetails = (productId: string) => {
    return products.find((product) => product.id === productId)
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.productId)
      return total + (product?.price || 0) * item.quantity
    }, 0)
  }

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    whatsapp: "",
    email: "",
    address: ""
  })

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.whatsapp || !customerInfo.address) {
      alert("Please fill in your name, WhatsApp number, and delivery address")
      return
    }

    const orderDetails = cartItems
      .map((item) => {
        const product = getProductDetails(item.productId)
        return `${product?.name} x ${item.quantity}`
      })
      .join("\n")

    const message = encodeURIComponent(
      `*New Order*\n\n` +
      `*Customer Details*\n` +
      `Name: ${customerInfo.name}\n` +
      `Address: ${customerInfo.address}\n` +
      `Email: ${customerInfo.email}\n\n` +
      `*Order Items*\n${orderDetails}\n\n` +
      `*Total: ${formatPrice(calculateTotal())}*`
    )

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${config.contact.whatsapp.replace(/[^0-9+]/g, '')}?text=${message}`, '_blank')

    // Clear cart
    setCartItems([])
    localStorage.setItem("cart", JSON.stringify([]))
  }

  if (!isClient) {
    return <div className="container py-12">Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Scissors className="h-5 w-5" />
            <span>GlamWigs</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to shopping
          </Link>
          <h1 className="text-3xl font-bold tracking-tight ml-auto">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <Scissors className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link href="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg border shadow-sm">
                <div className="p-6 space-y-4">
                  {cartItems.map((item) => {
                    const product = getProductDetails(item.productId)
                    if (!product) return null

                    return (
                      <div key={item.productId} className="flex items-center gap-4 py-4 border-b last:border-0">
                        <div className="w-20 h-20 rounded-md overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <div className="text-right min-w-[80px] font-medium">
                          {formatPrice(product.price * item.quantity)}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.productId)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border shadow-sm p-6 space-y-4 mb-6">
                <h2 className="font-semibold text-lg">Customer Information</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-name">Full Name *</Label>
                    <Input
                      id="customer-name"
                      placeholder="Enter your full name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="customer-whatsapp"
                      type="tel"
                      placeholder="+27 XX XXX XXXX"
                      value={customerInfo.whatsapp}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, whatsapp: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email (Optional)</Label>
                    <Input
                      id="customer-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-address">Delivery Address *</Label>
                    <Textarea
                      id="customer-address"
                      placeholder="Enter your full delivery address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border shadow-sm p-6 space-y-4 sticky top-20">
                <h2 className="font-semibold text-lg">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                    <span>Total</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  This is a demo store. No real orders will be processed.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 GlamWigs. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="underline underline-offset-4 hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


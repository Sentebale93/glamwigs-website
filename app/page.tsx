import Link from "next/link"
import { ArrowRight, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Scissors className="h-5 w-5" />
            <span>GlamWigs</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#products" className="text-sm font-medium">
              Wigs
            </Link>
            <Link href="#contact" className="text-sm font-medium">
              Contact
            </Link>
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <Scissors className="h-4 w-4" />
                <span className="sr-only">Cart</span>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground cart-count">
                  0
                </span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transform Your Look with Premium Wigs
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our collection of high-quality wigs for every style, occasion, and personality. From natural
                  looks to bold statements.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#products">
                    <Button>
                      Shop Wigs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/hero-image.jpeg"
                  alt="Stylish woman wearing a wig"
                  width={600}
                  height={600}
                  className="aspect-square w-full max-w-[600px] rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Wig Collection</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of premium wigs for every style and occasion
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
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


"use client"

import { MessageCircle, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { config } from "@/lib/config"

export default function ContactSection() {
  const whatsappNumber = config.contact.whatsapp.replace(/[^0-9+]/g, '')
  const generalMessage = encodeURIComponent("Hi! I'm interested in learning more about your wigs.")
  const consultationMessage = encodeURIComponent("I'm interested in a wig consultation")
  const preOrderMessage = encodeURIComponent("I'd like to place a pre-order for a wig")

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about our wigs or need styling advice? We're just a message away!
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <WhatsApp className="h-6 w-6 text-primary" />
                Get in Touch via WhatsApp
              </CardTitle>
              <CardDescription>
                Chat with us directly for instant responses and personalized assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${generalMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full h-auto py-6 flex flex-col items-center gap-2" size="lg">
                    <MessageCircle className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-semibold">General Inquiry</div>
                      <div className="text-xs opacity-90">Ask about our products</div>
                    </div>
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${consultationMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full h-auto py-6 flex flex-col items-center gap-2" size="lg">
                    <WhatsApp className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-semibold">Wig Consultation</div>
                      <div className="text-xs opacity-90">Get personalized advice</div>
                    </div>
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${preOrderMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full h-auto py-6 flex flex-col items-center gap-2" size="lg" variant="default">
                    <WhatsApp className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-semibold">Pre-Order</div>
                      <div className="text-xs opacity-90">Reserve your wig now</div>
                    </div>
                  </Button>
                </a>
              </div>
              <div className="border-t pt-6 space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold">Our Contact Details</h3>
                  <p className="text-sm text-muted-foreground">{config.hours.description}</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${config.contact.whatsapp}`} className="text-sm hover:underline">
                      {config.contact.phone}
                    </a>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-2"
                  >
                    <WhatsApp className="h-4 w-4" />
                    {config.contact.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-lg">Why WhatsApp?</h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                  Get instant responses, share photos of styles you like, and receive personalized recommendations directly in your chat. It's the fastest way to find your perfect wig!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

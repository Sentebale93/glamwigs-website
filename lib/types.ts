export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  inStock: boolean
  category: string
  specifications: {
    length?: string
    material?: string
    color?: string
    capSize?: string
    heatResistant?: boolean
  }
}

export interface OrderStatus {
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered"
  estimatedDelivery?: string
  trackingNumber?: string
  lastUpdated: string
}

export interface CustomerContact {
  name: string
  whatsapp: string
  email?: string
  address: string
}

export interface Order {
  id: string
  items: CartItem[]
  customer: CustomerContact
  status: OrderStatus
  totalAmount: number
  createdAt: string
  notes?: string
}

export interface CartItem {
  productId: string
  quantity: number
}


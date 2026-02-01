// Mock data for admin dashboard

export type Product = {
    id: string
    name: string
    price: number
    stock: number
    category: string
    image: string
    description: string
}

export type OrderStatus = "pending" | "processing" | "completed" | "cancelled"

export type OrderItem = {
    productId: string
    productName: string
    quantity: number
    price: number
}

export type Order = {
    id: string
    customerName: string
    customerEmail: string
    customerWhatsApp: string
    items: OrderItem[]
    total: number
    status: OrderStatus
    date: string
}

// Mock Products Data
export const mockProducts: Product[] = [
    {
        id: "1",
        name: "Classic Bob Wig",
        price: 1299,
        stock: 15,
        category: "Short Wigs",
        image: "/images/image1.jpeg",
        description: "Elegant short bob style"
    },
    {
        id: "2",
        name: "Long Wavy Wig",
        price: 1899,
        stock: 8,
        category: "Long Wigs",
        image: "/images/image2.jpeg",
        description: "Beautiful long wavy hair"
    },
    {
        id: "3",
        name: "Curly Afro Wig",
        price: 1599,
        stock: 12,
        category: "Curly Wigs",
        image: "/images/image3.jpeg",
        description: "Natural curly afro style"
    },
    {
        id: "4",
        name: "Straight Lace Front",
        price: 2299,
        stock: 5,
        category: "Lace Front",
        image: "/images/image4.jpeg",
        description: "Premium lace front wig"
    },
    {
        id: "5",
        name: "Pixie Cut Wig",
        price: 999,
        stock: 20,
        category: "Short Wigs",
        image: "/images/image5.jpeg",
        description: "Trendy pixie cut style"
    }
]

// Mock Orders Data
export const mockOrders: Order[] = [
    {
        id: "ORD-001",
        customerName: "Thandi Khumalo",
        customerEmail: "thandi@example.com",
        customerWhatsApp: "+27821234567",
        items: [
            { productId: "1", productName: "Classic Bob Wig", quantity: 1, price: 1299 }
        ],
        total: 1299,
        status: "completed",
        date: "2026-01-28"
    },
    {
        id: "ORD-002",
        customerName: "Naledi Mokoena",
        customerEmail: "naledi@example.com",
        customerWhatsApp: "+27837654321",
        items: [
            { productId: "2", productName: "Long Wavy Wig", quantity: 2, price: 1899 },
            { productId: "5", productName: "Pixie Cut Wig", quantity: 1, price: 999 }
        ],
        total: 4797,
        status: "processing",
        date: "2026-01-30"
    },
    {
        id: "ORD-003",
        customerName: "Zinhle Dlamini",
        customerEmail: "zinhle@example.com",
        customerWhatsApp: "+27844567890",
        items: [
            { productId: "4", productName: "Straight Lace Front", quantity: 1, price: 2299 }
        ],
        total: 2299,
        status: "pending",
        date: "2026-02-01"
    },
    {
        id: "ORD-004",
        customerName: "Lebohang Sithole",
        customerEmail: "lebohang@example.com",
        customerWhatsApp: "+27769876543",
        items: [
            { productId: "3", productName: "Curly Afro Wig", quantity: 1, price: 1599 }
        ],
        total: 1599,
        status: "pending",
        date: "2026-02-01"
    },
    {
        id: "ORD-005",
        customerName: "Ayanda Nkosi",
        customerEmail: "ayanda@example.com",
        customerWhatsApp: "+27713456789",
        items: [
            { productId: "1", productName: "Classic Bob Wig", quantity: 1, price: 1299 },
            { productId: "3", productName: "Curly Afro Wig", quantity: 1, price: 1599 }
        ],
        total: 2898,
        status: "completed",
        date: "2026-01-27"
    }
]

// Statistics
export const getStats = () => {
    const totalRevenue = mockOrders
        .filter(order => order.status === "completed")
        .reduce((sum, order) => sum + order.total, 0)

    const totalOrders = mockOrders.length
    const totalProducts = mockProducts.length
    const pendingOrders = mockOrders.filter(order => order.status === "pending").length

    return {
        totalRevenue,
        totalOrders,
        totalProducts,
        pendingOrders
    }
}

// Get recent orders
export const getRecentOrders = (limit: number = 5) => {
    return [...mockOrders]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
}

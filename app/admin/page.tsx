import { StatCard } from "@/components/stat-card"
import { getStats, getRecentOrders } from "@/lib/admin-data"
import { DollarSign, Package, ShoppingCart, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = getStats()
  const recentOrders = getRecentOrders(5)

  // Format currency
  const formatCurrency = (amount: number) => {
    return `R${(amount / 100).toFixed(2)}`
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your GlamWigs admin dashboard
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          icon={DollarSign}
          description="From completed orders"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingCart}
          description="All time orders"
        />
        <StatCard
          title="Products"
          value={stats.totalProducts}
          icon={Package}
          description="In inventory"
        />
        <StatCard
          title="Pending Orders"
          value={stats.pendingOrders}
          icon={Clock}
          description="Awaiting processing"
        />
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Link href="/admin/products">
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Manage Products
          </Button>
        </Link>
        <Link href="/admin/orders">
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Orders
          </Button>
        </Link>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest orders placed on your store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.items.length} item(s) • {order.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{formatCurrency(order.total)}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "processing"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/admin/orders">
              <Button variant="outline" className="w-full">
                View All Orders
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Receipt, ExternalLink } from "lucide-react"

const transactions = [
  {
    id: 1,
    patientId: "P00123",
    patientName: "John Smith",
    amount: 1500,
    method: "Cash",
    collectedBy: "Dr. Patel",
    timestamp: "10:30 AM",
    status: "completed",
  },
  {
    id: 2,
    patientId: "P00124",
    patientName: "Sarah Johnson",
    amount: 2200,
    method: "Online",
    collectedBy: "System",
    timestamp: "09:15 AM",
    status: "completed",
  },
  {
    id: 3,
    patientId: "P00125",
    patientName: "Mike Wilson",
    amount: 800,
    method: "Insurance",
    collectedBy: "Staff A",
    timestamp: "08:45 AM",
    status: "pending",
  },
]

export function RecentTransactionsWidget() {
  const todayTotal = transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)

  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <Receipt className="h-4 w-4 flex-shrink-0" />
          <span>Recent Transactions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xl font-bold text-green-600">₹{todayTotal.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Today's Collection</p>
          </div>

          <div className="space-y-2">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-2 border rounded-lg min-h-[55px]"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <p className="font-medium text-sm">{transaction.patientName}</p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.method} • {transaction.collectedBy}
                  </p>
                  <p className="text-xs text-muted-foreground">{transaction.timestamp}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-medium text-sm">₹{transaction.amount}</p>
                  <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full bg-transparent" size="sm">
            <ExternalLink className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
            <span className="text-sm">View All</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

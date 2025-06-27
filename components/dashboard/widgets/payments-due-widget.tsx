"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, ExternalLink } from "lucide-react"

const paymentsDue = [
  {
    id: 1,
    patientId: "P00123",
    patientName: "John Smith",
    amount: 2500,
    dueDate: "2024-01-15",
    testType: "Full Body Checkup",
    status: "overdue",
  },
  {
    id: 2,
    patientId: "P00124",
    patientName: "Sarah Johnson",
    amount: 1200,
    dueDate: "2024-01-18",
    testType: "Blood Test",
    status: "due_soon",
  },
  {
    id: 3,
    patientId: "P00125",
    patientName: "Mike Wilson",
    amount: 800,
    dueDate: "2024-01-20",
    testType: "X-Ray",
    status: "pending",
  },
]

export function PaymentsDueWidget() {
  const totalDue = paymentsDue.reduce((sum, payment) => sum + payment.amount, 0)

  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <CreditCard className="h-4 w-4 flex-shrink-0" />
          <span>Payments Due</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="text-xl font-bold text-destructive">₹{totalDue.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total Outstanding</p>
          </div>

          <div className="space-y-2">
            {paymentsDue.slice(0, 3).map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-2 border rounded-lg min-h-[55px]">
                <div className="flex-1 min-w-0 pr-2">
                  <p className="font-medium text-sm">{payment.patientName}</p>
                  <p className="text-xs text-muted-foreground">#{payment.patientId}</p>
                  <p className="text-xs text-muted-foreground truncate">{payment.testType}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-medium text-sm">₹{payment.amount}</p>
                  <Badge variant={payment.status === "overdue" ? "destructive" : "secondary"} className="text-xs">
                    {payment.status.replace("_", " ")}
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

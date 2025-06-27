"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ExternalLink } from "lucide-react"

const pendingDues = [
  {
    id: 1,
    caseNumber: "C00123",
    patientName: "John Smith",
    originalAmount: 2500,
    paidAmount: 1500,
    dueAmount: 1000,
    date: "2024-01-10",
    status: "Report Ready",
  },
  {
    id: 2,
    caseNumber: "C00124",
    patientName: "Sarah Johnson",
    originalAmount: 1800,
    paidAmount: 800,
    dueAmount: 1000,
    date: "2024-01-12",
    status: "Processing",
  },
  {
    id: 3,
    caseNumber: "C00125",
    patientName: "Mike Wilson",
    originalAmount: 1200,
    paidAmount: 700,
    dueAmount: 500,
    date: "2024-01-14",
    status: "Report Ready",
  },
]

export function PendingDuesWidget() {
  const totalPendingDues = pendingDues.reduce((sum, due) => sum + due.dueAmount, 0)

  return (
    <Card className="w-full min-w-[320px] max-w-[400px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>Pending Dues</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <p className="text-xl font-bold text-yellow-600">₹{totalPendingDues.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total Pending Amount</p>
          </div>

          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {pendingDues.map((due) => (
              <div key={due.id} className="p-2 border rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{due.patientName}</span>
                  <span className="font-bold text-sm text-yellow-600">₹{due.dueAmount}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {due.caseNumber} • {due.date}
                  </span>
                  <Badge variant={due.status === "Report Ready" ? "default" : "secondary"} className="text-xs">
                    {due.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Paid: ₹{due.paidAmount} / ₹{due.originalAmount}
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full bg-transparent" size="sm">
            <ExternalLink className="h-3 w-3 mr-2" />
            <span className="text-sm">Manage Pending Payments</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

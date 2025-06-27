"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const oldDuesCollected = [
  {
    id: 1,
    caseNumber: "C00098",
    patientName: "Emma Davis",
    amount: 1500,
    originalDate: "2024-01-05",
    collectedBy: "John Doe",
    paymentMode: "Cash",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    caseNumber: "C00102",
    patientName: "Robert Brown",
    amount: 800,
    originalDate: "2024-01-08",
    collectedBy: "Sarah Johnson",
    paymentMode: "UPI",
    timestamp: "02:15 PM",
  },
  {
    id: 3,
    caseNumber: "C00115",
    patientName: "Lisa Wilson",
    amount: 600,
    originalDate: "2024-01-11",
    collectedBy: "Mike Wilson",
    paymentMode: "Card",
    timestamp: "04:45 PM",
  },
]

export function OldDuesCollectedWidget() {
  const totalCollected = oldDuesCollected.reduce((sum, due) => sum + due.amount, 0)

  return (
    <Card className="w-full min-w-[320px] max-w-[400px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
          <span>Old Dues Collected</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xl font-bold text-blue-600">₹{totalCollected.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Collected Today</p>
          </div>

          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {oldDuesCollected.map((due) => (
              <div key={due.id} className="p-2 border rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{due.patientName}</span>
                  <span className="font-bold text-sm text-blue-600">₹{due.amount}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>
                    {due.caseNumber} • Original: {due.originalDate}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {due.paymentMode}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Collected by {due.collectedBy} at {due.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

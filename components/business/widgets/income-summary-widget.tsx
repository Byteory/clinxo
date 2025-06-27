"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Calculator } from "lucide-react"

const summaryData = {
  totalIncome: 45200,
  oldDuesCollected: 8500,
  collectionCharges: 1200,
  expenses: 2800,
  dueAmount: 3200,
  netIncome: 46500,
}

export function IncomeSummaryWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[550px] h-fit" style={{ gridColumn: "span 2" }}>
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <Calculator className="h-4 w-4 flex-shrink-0" />
          <span>Income Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg border bg-green-50">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-green-600">₹{summaryData.totalIncome.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Total Income</p>
                <p className="text-xs text-green-600">New cases today</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-blue-50">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-blue-600">₹{summaryData.oldDuesCollected.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Old Dues Collected</p>
                <p className="text-xs text-blue-600">Previous pending</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-orange-50">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-orange-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-orange-600">₹{summaryData.collectionCharges.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Collection Charges</p>
                <p className="text-xs text-orange-600">Home visits, courier</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-red-50">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-red-600">₹{summaryData.expenses.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Expenses</p>
                <p className="text-xs text-red-600">Operational costs</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-yellow-50">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-yellow-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-yellow-600">₹{summaryData.dueAmount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Due Amount</p>
                <p className="text-xs text-yellow-600">Pending payments</p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg border bg-purple-50">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-purple-600" />
              <div className="flex-1">
                <p className="text-lg font-bold text-purple-600">₹{summaryData.netIncome.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Net Income</p>
                <p className="text-xs text-purple-600">After all deductions</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

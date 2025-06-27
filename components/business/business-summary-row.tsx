"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Plus, HelpCircle, Lock } from "lucide-react"
import { useBusiness } from "./business-context"
import { AddExpenseDialog } from "./add-expense-dialog"
import { useState } from "react"

export function BusinessSummaryRow() {
  const { adjustIncomeByExpenses, setAdjustIncomeByExpenses, isDayLocked } = useBusiness()
  const [showAddExpense, setShowAddExpense] = useState(false)

  const summaryData = {
    totalIncome: 45200,
    collectionCharges: 1200,
    expenses: 2800,
    netIncome: 46500,
  }

  const incomeData = [
    { mode: "Cash", amount: 23500, color: "bg-amber-100 text-amber-800" },
    { mode: "Card", amount: 11800, color: "bg-blue-100 text-blue-800" },
    { mode: "UPI", amount: 18000, color: "bg-green-100 text-green-800" },
    { mode: "Insurance", amount: 8000, color: "bg-purple-100 text-purple-800" },
  ]

  return (
    <div className="space-y-4">
      {/* Main Financial Summary */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm font-medium text-muted-foreground">Total Income</span>
                <HelpCircle className="h-3 w-3 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold text-green-600">₹{summaryData.totalIncome.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">New cases today</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm font-medium text-muted-foreground">Collection Charge</span>
                <HelpCircle className="h-3 w-3 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold text-orange-600">₹{summaryData.collectionCharges.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Home visits, courier</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm font-medium text-muted-foreground">Expenses</span>
                <Button size="sm" variant="ghost" className="h-4 w-4 p-0 ml-1" onClick={() => setShowAddExpense(true)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-2xl font-bold text-red-600">₹{summaryData.expenses.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Operational costs</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-sm font-medium text-muted-foreground">Net Income</span>
                {isDayLocked && <Lock className="h-3 w-3 text-muted-foreground" />}
              </div>
              <p className="text-2xl font-bold text-purple-600">₹{summaryData.netIncome.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">After deductions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Income Split */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Total Income Split</h3>
            <div className="flex items-center space-x-2">
              <Switch
                id="adjust-expenses"
                checked={adjustIncomeByExpenses}
                onCheckedChange={setAdjustIncomeByExpenses}
                size="sm"
              />
              <Label htmlFor="adjust-expenses" className="text-xs">
                Adjust by expenses
              </Label>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {incomeData.map((item) => (
              <div key={item.mode} className="text-center">
                <Badge variant="secondary" className={`${item.color} mb-1`}>
                  {item.mode}
                </Badge>
                <p className="text-lg font-bold">₹{item.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddExpenseDialog open={showAddExpense} onOpenChange={setShowAddExpense} />
    </div>
  )
}

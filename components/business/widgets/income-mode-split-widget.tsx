"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CreditCard, Banknote } from "lucide-react"
import { useBusiness } from "../business-context"

const incomeData = [
  { mode: "Cash", total: 25000, expenses: 1500, net: 23500, color: "text-green-600" },
  { mode: "UPI", total: 18000, expenses: 0, net: 18000, color: "text-blue-600" },
  { mode: "Card", total: 12000, expenses: 200, net: 11800, color: "text-purple-600" },
  { mode: "Insurance", total: 8000, expenses: 0, net: 8000, color: "text-orange-600" },
]

export function IncomeModeSplitWidget() {
  const { adjustIncomeByExpenses, setAdjustIncomeByExpenses } = useBusiness()

  return (
    <Card className="w-full min-w-[320px] max-w-[400px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <CreditCard className="h-4 w-4 flex-shrink-0" />
          <span>Income Mode Split</span>
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Switch id="adjust-expenses" checked={adjustIncomeByExpenses} onCheckedChange={setAdjustIncomeByExpenses} />
          <Label htmlFor="adjust-expenses" className="text-xs">
            Adjust income by expenses
          </Label>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          {incomeData.map((item) => (
            <div key={item.mode} className="p-3 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Banknote className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-sm">{item.mode}</span>
                </div>
                <span className={`font-bold text-sm ${item.color}`}>
                  ₹{adjustIncomeByExpenses ? item.net.toLocaleString() : item.total.toLocaleString()}
                </span>
              </div>
              {adjustIncomeByExpenses && item.expenses > 0 && (
                <div className="text-xs text-muted-foreground">
                  ₹{item.total.toLocaleString()} - ₹{item.expenses.toLocaleString()} = ₹{item.net.toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

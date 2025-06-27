"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Receipt, Plus, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const expenses = [
  {
    id: 1,
    amount: 500,
    description: "Urgent printing for reports",
    mode: "Cash",
    addedBy: "John Doe",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    amount: 200,
    description: "Courier charges",
    mode: "UPI",
    addedBy: "Sarah Johnson",
    timestamp: "02:15 PM",
  },
  {
    id: 3,
    amount: 150,
    description: "Office supplies",
    mode: "Cash",
    addedBy: "Mike Wilson",
    timestamp: "04:45 PM",
  },
]

export function ExpensesWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    mode: "",
  })

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const handleAddExpense = () => {
    // Add expense logic here
    console.log("Adding expense:", newExpense)
    setNewExpense({ amount: "", description: "", mode: "" })
    setIsOpen(false)
  }

  return (
    <Card className="w-full min-w-[320px] max-w-[400px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4 flex-shrink-0" />
            <span>Expenses</span>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="bg-transparent">
                <Plus className="h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Expense</DialogTitle>
                <DialogDescription>Record an operational expense for today.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Reason for expense"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="mode">Payment Mode</Label>
                  <Select
                    value={newExpense.mode}
                    onValueChange={(value) => setNewExpense({ ...newExpense, mode: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="card">Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleAddExpense} className="w-full">
                  Add Expense
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <p className="text-xl font-bold text-red-600">₹{totalExpenses.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total Expenses Today</p>
          </div>

          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-2 border rounded-lg">
                <div className="flex-1 min-w-0 pr-2">
                  <p className="font-medium text-sm">₹{expense.amount}</p>
                  <p className="text-xs text-muted-foreground truncate">{expense.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {expense.addedBy} • {expense.timestamp}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {expense.mode}
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

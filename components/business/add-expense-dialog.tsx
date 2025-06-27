"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AddExpenseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddExpenseDialog({ open, onOpenChange }: AddExpenseDialogProps) {
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    mode: "",
  })

  const handleAddExpense = () => {
    // Add expense logic here
    console.log("Adding expense:", newExpense)
    setNewExpense({ amount: "", description: "", mode: "" })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            <Select value={newExpense.mode} onValueChange={(value) => setNewExpense({ ...newExpense, mode: value })}>
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
  )
}

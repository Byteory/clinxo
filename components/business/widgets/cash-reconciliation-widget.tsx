"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Lock, CheckCircle } from "lucide-react"
import { useBusiness } from "../business-context"

export function CashReconciliationWidget() {
  const { isDayLocked, setIsDayLocked } = useBusiness()

  const cashData = {
    newPatientsCash: 23500,
    oldDuesCash: 3200,
    expensesInCash: 1500,
    netCashToDeposit: 25200,
  }

  const handleLockDay = () => {
    setIsDayLocked(true)
    // Add lock day logic here
    console.log("Day summary locked")
  }

  return (
    <Card className="w-full min-w-[320px] max-w-[400px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <Wallet className="h-4 w-4 flex-shrink-0" />
          <span>Cash Reconciliation</span>
          {isDayLocked && (
            <Badge variant="secondary" className="text-xs">
              <Lock className="h-3 w-3 mr-1" />
              Locked
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-3">
          <div className="p-3 rounded-lg border bg-green-50">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-green-600" />
              <span className="font-medium text-sm">Cash to be deposited</span>
            </div>
            <p className="text-2xl font-bold text-green-600">₹{cashData.netCashToDeposit.toLocaleString()}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cash from new patients:</span>
              <span className="font-medium">₹{cashData.newPatientsCash.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cash from old dues:</span>
              <span className="font-medium">₹{cashData.oldDuesCash.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Expenses in cash:</span>
              <span className="font-medium text-red-600">-₹{cashData.expensesInCash.toLocaleString()}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-sm font-medium">
              <span>Net cash for deposit:</span>
              <span className="text-green-600">₹{cashData.netCashToDeposit.toLocaleString()}</span>
            </div>
          </div>

          {!isDayLocked ? (
            <Button onClick={handleLockDay} className="w-full" size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Confirm & Lock Day Summary
            </Button>
          ) : (
            <div className="text-center p-2 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Day summary is locked</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { useDashboard } from "@/components/dashboard/dashboard-context"

const availableWidgets = [
  { id: "recent-activities", name: "Recent Activities", description: "Staff login attempts, patient management" },
  { id: "payments-due", name: "Payments Due", description: "Pending payments from patients" },
  { id: "recent-transactions", name: "Recent Transactions", description: "Latest payment transactions" },
  { id: "todays-summary", name: "Today's Summary", description: "Daily metrics and KPIs" },
  { id: "appointments", name: "Appointments", description: "Next 5 scheduled tests" },
  { id: "revenue-chart", name: "Revenue Chart", description: "Revenue breakdown visualization" },
  { id: "test-categories-chart", name: "Test Categories", description: "Test distribution pie chart" },
  { id: "patient-trend-chart", name: "Patient Trends", description: "7-day patient trend line" },
  { id: "recent-reports", name: "Recent Reports", description: "Latest report activities" },
]

export function DashboardCustomizer() {
  const { enabledWidgets, toggleWidget } = useDashboard()
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
          <Settings className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
          <span className="hidden sm:inline">Customize</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Customize Dashboard</DialogTitle>
          <DialogDescription className="text-sm">
            Select which widgets you want to display on your dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto">
          {availableWidgets.map((widget) => (
            <div key={widget.id} className="flex items-start space-x-3 p-2 sm:p-0">
              <Checkbox
                id={widget.id}
                checked={enabledWidgets.includes(widget.id)}
                onCheckedChange={() => toggleWidget(widget.id)}
                className="mt-1"
              />
              <div className="grid gap-1.5 leading-none flex-1">
                <label
                  htmlFor={widget.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {widget.name}
                </label>
                <p className="text-xs text-muted-foreground">{widget.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface DashboardContextType {
  enabledWidgets: string[]
  toggleWidget: (widgetId: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [enabledWidgets, setEnabledWidgets] = useState([
    "recent-activities",
    "payments-due",
    "recent-transactions",
    "todays-summary",
    "appointments",
    "revenue-chart",
  ])

  const toggleWidget = (widgetId: string) => {
    setEnabledWidgets((prev) => (prev.includes(widgetId) ? prev.filter((id) => id !== widgetId) : [...prev, widgetId]))
  }

  return <DashboardContext.Provider value={{ enabledWidgets, toggleWidget }}>{children}</DashboardContext.Provider>
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}

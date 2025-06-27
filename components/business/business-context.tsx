"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface BusinessContextType {
  selectedDate: Date
  setSelectedDate: (date: Date) => void
  dateRange: { from: Date; to: Date } | null
  setDateRange: (range: { from: Date; to: Date } | null) => void
  adjustIncomeByExpenses: boolean
  setAdjustIncomeByExpenses: (adjust: boolean) => void
  isDayLocked: boolean
  setIsDayLocked: (locked: boolean) => void
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined)

export function BusinessProvider({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | null>(null)
  const [adjustIncomeByExpenses, setAdjustIncomeByExpenses] = useState(true)
  const [isDayLocked, setIsDayLocked] = useState(false)

  return (
    <BusinessContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        dateRange,
        setDateRange,
        adjustIncomeByExpenses,
        setAdjustIncomeByExpenses,
        isDayLocked,
        setIsDayLocked,
      }}
    >
      {children}
    </BusinessContext.Provider>
  )
}

export function useBusiness() {
  const context = useContext(BusinessContext)
  if (context === undefined) {
    throw new Error("useBusiness must be used within a BusinessProvider")
  }
  return context
}

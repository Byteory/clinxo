"use client"

import { useState } from "react"
import { CalendarDays, Download, Mail, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useBusiness } from "./business-context"
import { format } from "date-fns"

export function BusinessDateSelector() {
  const { selectedDate, setSelectedDate, dateRange, setDateRange } = useBusiness()
  const [isOpen, setIsOpen] = useState(false)

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      setDateRange(null) // Clear range when single date is selected
      setIsOpen(false)
    }
  }

  const handleRangeSelect = (range: { from: Date; to: Date } | null) => {
    setDateRange(range)
    if (range?.from) {
      setSelectedDate(range.from)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
            <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {dateRange
              ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
              : format(selectedDate, "MMM dd, yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar mode="single" selected={selectedDate} onSelect={handleDateSelect} initialFocus />
          <div className="p-3 border-t">
            <p className="text-sm font-medium mb-2">Quick Periods</p>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => {
                  const today = new Date()
                  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
                  handleRangeSelect({ from: weekAgo, to: today })
                  setIsOpen(false)
                }}
              >
                Last 7 days
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => {
                  const today = new Date()
                  const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
                  handleRangeSelect({ from: monthAgo, to: today })
                  setIsOpen(false)
                }}
              >
                Last 30 days
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
            <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Printer className="h-4 w-4 mr-2" />
            Print Report
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="h-4 w-4 mr-2" />
            Email Report
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const trendData = [
  { day: "Mon", patients: 32 },
  { day: "Tue", patients: 45 },
  { day: "Wed", patients: 38 },
  { day: "Thu", patients: 52 },
  { day: "Fri", patients: 47 },
  { day: "Sat", patients: 35 },
  { day: "Sun", patients: 28 },
]

export function PatientTrendChartWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <TrendingUp className="h-4 w-4 flex-shrink-0" />
          <span>7-Day Patient Trend</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="w-full h-[200px]">
          <ChartContainer
            config={{
              patients: { label: "Patients", color: "#8884d8" },
            }}
            className="w-full h-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ fill: "#8884d8", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

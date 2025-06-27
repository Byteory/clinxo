"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const revenueData = [
  { name: "Cash", value: 45000, color: "#0088FE" },
  { name: "Online", value: 32000, color: "#00C49F" },
  { name: "Insurance", value: 18000, color: "#FFBB28" },
]

export function RevenueChartWidget() {
  const total = revenueData.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <TrendingUp className="h-4 w-4 flex-shrink-0" />
          <span>Revenue Breakdown</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="w-full h-[200px] flex items-center justify-center">
          <ChartContainer
            config={{
              cash: { label: "Cash", color: "#0088FE" },
              online: { label: "Online", color: "#00C49F" },
              insurance: { label: "Insurance", color: "#FFBB28" },
            }}
            className="w-full h-full max-w-[160px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="70%"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-3 space-y-1.5">
          {revenueData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span className="font-medium">₹{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

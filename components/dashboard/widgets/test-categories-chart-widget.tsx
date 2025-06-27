"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { TestTube } from "lucide-react"

const testData = [
  { name: "Blood Tests", value: 35, color: "#8884d8" },
  { name: "Radiology", value: 25, color: "#82ca9d" },
  { name: "USG", value: 20, color: "#ffc658" },
  { name: "ECG", value: 12, color: "#ff7300" },
  { name: "Others", value: 8, color: "#00ff00" },
]

export function TestCategoriesChartWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <TestTube className="h-4 w-4 flex-shrink-0" />
          <span>Test Categories</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="w-full h-[200px] flex items-center justify-center">
          <ChartContainer
            config={{
              blood: { label: "Blood Tests", color: "#8884d8" },
              radiology: { label: "Radiology", color: "#82ca9d" },
              usg: { label: "USG", color: "#ffc658" },
              ecg: { label: "ECG", color: "#ff7300" },
              others: { label: "Others", color: "#00ff00" },
            }}
            className="w-full h-full max-w-[160px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={testData}
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  dataKey="value"
                  label={({ name, percent }) => `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {testData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

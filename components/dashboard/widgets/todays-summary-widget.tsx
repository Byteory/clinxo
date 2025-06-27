"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, TrendingUp, Clock, CheckCircle } from "lucide-react"

const metrics = [
  {
    title: "Total Patients",
    value: "47",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Tests Completed",
    value: "32",
    change: "+8%",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Pending Reports",
    value: "15",
    change: "-5%",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Revenue Generated",
    value: "₹45,200",
    change: "+15%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function TodaysSummaryWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[550px] h-fit" style={{ gridColumn: "span 2" }}>
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 flex-shrink-0" />
          <span>Today's Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric) => (
            <div key={metric.title} className="p-3 rounded-lg border min-h-[80px] flex items-center">
              <div className="flex items-center gap-2 w-full">
                <div className={`p-1.5 rounded-lg ${metric.bgColor} shrink-0`}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground truncate">{metric.title}</p>
                  <p
                    className={`text-xs font-medium ${
                      metric.change.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

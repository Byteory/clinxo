"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, CheckCircle, XCircle } from "lucide-react"

const reports = [
  {
    id: 1,
    patientId: "P00123",
    patientName: "John Smith",
    test: "CBC",
    action: "Uploaded by Lab A",
    status: "uploaded",
    timestamp: "10 mins ago",
  },
  {
    id: 2,
    patientId: "P00124",
    patientName: "Sarah Johnson",
    test: "X-Ray Chest",
    action: "Approved by Dr. Y",
    status: "approved",
    timestamp: "25 mins ago",
  },
  {
    id: 3,
    patientId: "P00125",
    patientName: "Mike Wilson",
    test: "USG",
    action: "Rejected (missing image)",
    status: "rejected",
    timestamp: "1 hour ago",
  },
  {
    id: 4,
    patientId: "P00126",
    patientName: "Emma Davis",
    test: "Blood Sugar",
    action: "Uploaded by Lab B",
    status: "uploaded",
    timestamp: "2 hours ago",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "uploaded":
      return <Upload className="h-3.5 w-3.5" />
    case "approved":
      return <CheckCircle className="h-3.5 w-3.5" />
    case "rejected":
      return <XCircle className="h-3.5 w-3.5" />
    default:
      return <FileText className="h-3.5 w-3.5" />
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "approved":
      return "default" as const
    case "rejected":
      return "destructive" as const
    default:
      return "secondary" as const
  }
}

export function RecentReportsWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[550px] h-fit" style={{ gridColumn: "span 2" }}>
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 flex-shrink-0" />
          <span>Recent Report Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-2">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center gap-2 p-2 border rounded-lg min-h-[60px]">
              <div className="flex-shrink-0">{getStatusIcon(report.status)}</div>
              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">#{report.patientId}</span>
                  <span className="text-sm">{report.patientName}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {report.test} • {report.action}
                </p>
              </div>
              <div className="text-right shrink-0">
                <Badge variant={getStatusVariant(report.status)} className="text-xs mb-1">
                  {report.status}
                </Badge>
                <p className="text-xs text-muted-foreground">{report.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

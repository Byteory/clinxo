"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Shield, UserPlus, Edit, Share } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "login_success",
    message: "Staff John Doe logged in from new device",
    timestamp: "2 minutes ago",
    icon: Shield,
    variant: "success" as const,
  },
  {
    id: 2,
    type: "patient_added",
    message: "Dr. Smith created patient #P00092",
    timestamp: "5 minutes ago",
    icon: UserPlus,
    variant: "default" as const,
  },
  {
    id: 3,
    type: "report_shared",
    message: "Staff XYZ shared Report of Patient John #P00092 via WhatsApp",
    timestamp: "10 minutes ago",
    icon: Share,
    variant: "default" as const,
  },
  {
    id: 4,
    type: "login_failed",
    message: "Failed login attempt from IP 192.168.1.100",
    timestamp: "15 minutes ago",
    icon: Shield,
    variant: "destructive" as const,
  },
  {
    id: 5,
    type: "patient_edited",
    message: "Patient #P00091 details updated by Dr. Johnson",
    timestamp: "20 minutes ago",
    icon: Edit,
    variant: "default" as const,
  },
]

export function RecentActivitiesWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[550px] h-fit" style={{ gridColumn: "span 2" }}>
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>Recent Activities</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <ScrollArea className="h-[280px] w-full">
          <div className="space-y-2 pr-2">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-2 p-2 rounded-lg border min-h-[60px]">
                <div className="flex-shrink-0 mt-0.5">
                  <activity.icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground leading-tight">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                </div>
                <Badge variant={activity.variant} className="text-xs shrink-0">
                  {activity.type.replace("_", " ")}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

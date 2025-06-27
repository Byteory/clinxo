"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const appointments = [
  {
    id: 1,
    patientId: "P00126",
    patientName: "Emma Davis",
    testType: "Blood Test",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    patientId: "P00127",
    patientName: "Robert Brown",
    testType: "X-Ray Chest",
    time: "11:30 AM",
    status: "confirmed",
  },
  {
    id: 3,
    patientId: "P00128",
    patientName: "Lisa Wilson",
    testType: "USG Abdomen",
    time: "02:00 PM",
    status: "pending",
  },
  {
    id: 4,
    patientId: "P00129",
    patientName: "David Miller",
    testType: "ECG",
    time: "03:30 PM",
    status: "confirmed",
  },
  {
    id: 5,
    patientId: "P00130",
    patientName: "Anna Taylor",
    testType: "MRI Brain",
    time: "04:00 PM",
    status: "pending",
  },
]

export function AppointmentsWidget() {
  return (
    <Card className="w-full min-w-[320px] max-w-[360px] h-fit">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center gap-2 text-base">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span>Next Appointments</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-2">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center gap-2 p-2 border rounded-lg min-h-[55px]">
              <div className="flex-shrink-0">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <p className="font-medium text-sm">{appointment.patientName}</p>
                <p className="text-xs text-muted-foreground">#{appointment.patientId}</p>
                <p className="text-xs text-muted-foreground truncate">{appointment.testType}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-medium text-sm">{appointment.time}</p>
                <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                  {appointment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MoreHorizontal, Eye, Printer, Edit, Trash2, FileText } from "lucide-react"

const transactionData = [
  {
    id: 1,
    caseNumber: "C00123",
    date: "2024-01-15",
    patientName: "John Smith",
    referredBy: "Dr. Patel",
    totalBill: 2500,
    paidAmount: 2500,
    discount: 0,
    paymentMode: "Cash",
    status: "No Due",
    reportStatus: "Ready",
  },
  {
    id: 2,
    caseNumber: "C00124",
    date: "2024-01-15",
    patientName: "Sarah Johnson",
    referredBy: "Dr. Kumar",
    totalBill: 1800,
    paidAmount: 1200,
    discount: 100,
    paymentMode: "UPI",
    status: "Due ₹500",
    reportStatus: "Processing",
  },
  {
    id: 3,
    caseNumber: "C00125",
    date: "2024-01-15",
    patientName: "Mike Wilson",
    referredBy: "Self",
    totalBill: 1200,
    paidAmount: 1200,
    discount: 200,
    paymentMode: "Card",
    status: "No Due",
    reportStatus: "Ready",
  },
  {
    id: 4,
    caseNumber: "C00126",
    date: "2024-01-15",
    patientName: "Emma Davis",
    referredBy: "Dr. Singh",
    totalBill: 3200,
    paidAmount: 2000,
    discount: 0,
    paymentMode: "Insurance",
    status: "Due ₹1200",
    reportStatus: "Pending",
  },
]

export function BusinessTransactionTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredData = transactionData.filter((transaction) => {
    const matchesSearch =
      transaction.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.referredBy.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "no-due" && transaction.status === "No Due") ||
      (statusFilter === "due" && transaction.status.includes("Due"))

    return matchesSearch && matchesStatus
  })

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 flex-shrink-0" />
          <span>Transaction Logs</span>
        </CardTitle>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by patient, case number, or referred by..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="no-due">No Due</SelectItem>
              <SelectItem value="due">Has Due</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Referred By</TableHead>
                <TableHead>Total Bill</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Report</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.caseNumber}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.patientName}</TableCell>
                  <TableCell>{transaction.referredBy}</TableCell>
                  <TableCell>₹{transaction.totalBill.toLocaleString()}</TableCell>
                  <TableCell>₹{transaction.paidAmount.toLocaleString()}</TableCell>
                  <TableCell>{transaction.discount > 0 ? `₹${transaction.discount}` : "-"}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.paymentMode}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === "No Due" ? "default" : "destructive"} className="text-xs">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.reportStatus === "Ready"
                          ? "default"
                          : transaction.reportStatus === "Processing"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {transaction.reportStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Printer className="h-4 w-4 mr-2" />
                          Print Bill
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

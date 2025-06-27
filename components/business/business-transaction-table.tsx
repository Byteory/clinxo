"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MoreHorizontal, Eye, Printer, Edit, Trash2, FileText, Receipt, Clock, AlertCircle } from "lucide-react"

const transactionData = [
  {
    id: 1,
    regNo: "REG001",
    date: "2024-01-15",
    patientName: "John Smith",
    referredBy: "Dr. Patel",
    total: 2500,
    paid: 2500,
    discount: 0,
    status: "Completed",
    paymentMode: "Cash",
  },
  {
    id: 2,
    regNo: "REG002",
    date: "2024-01-15",
    patientName: "Sarah Johnson",
    referredBy: "Dr. Kumar",
    total: 1800,
    paid: 1200,
    discount: 100,
    status: "Due ₹500",
    paymentMode: "UPI",
  },
  {
    id: 3,
    regNo: "REG003",
    date: "2024-01-15",
    patientName: "Mike Wilson",
    referredBy: "Self",
    total: 1200,
    paid: 1200,
    discount: 200,
    status: "Completed",
    paymentMode: "Card",
  },
]

const expenseData = [
  {
    id: 1,
    amount: 500,
    description: "Urgent printing for reports",
    mode: "Cash",
    addedBy: "John Doe",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    amount: 200,
    description: "Courier charges",
    mode: "UPI",
    addedBy: "Sarah Johnson",
    timestamp: "02:15 PM",
  },
]

export function BusinessTransactionTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = transactionData.filter(
    (transaction) =>
      transaction.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.referredBy.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="flex-1">
      <CardContent className="p-0">
        <Tabs defaultValue="transactions" className="w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="transactions" className="text-xs">
                <FileText className="h-4 w-4 mr-1" />
                Transactions
                <Badge variant="secondary" className="ml-1 text-xs">
                  {transactionData.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="previous" className="text-xs">
                <Clock className="h-4 w-4 mr-1" />
                Previous
                <Badge variant="secondary" className="ml-1 text-xs">
                  0
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="cases" className="text-xs">
                <AlertCircle className="h-4 w-4 mr-1" />
                Cases
                <Badge variant="secondary" className="ml-1 text-xs">
                  0
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="expenses" className="text-xs">
                <Receipt className="h-4 w-4 mr-1" />
                Expenses
                <Badge variant="secondary" className="ml-1 text-xs">
                  {expenseData.length}
                </Badge>
              </TabsTrigger>
            </TabsList>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search in page"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <TabsContent value="transactions" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>REG. NO.</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>PATIENT</TableHead>
                    <TableHead>REFERRED BY</TableHead>
                    <TableHead>TOTAL</TableHead>
                    <TableHead>PAID</TableHead>
                    <TableHead>DISCOUNT</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.regNo}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.patientName}</TableCell>
                      <TableCell>{transaction.referredBy}</TableCell>
                      <TableCell>₹{transaction.total.toLocaleString()}</TableCell>
                      <TableCell>₹{transaction.paid.toLocaleString()}</TableCell>
                      <TableCell>{transaction.discount > 0 ? `₹${transaction.discount}` : "-"}</TableCell>
                      <TableCell>
                        <Badge
                          variant={transaction.status === "Completed" ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {transaction.status}
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
          </TabsContent>

          <TabsContent value="previous" className="mt-0">
            <div className="p-8 text-center text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No previous day transactions found</p>
            </div>
          </TabsContent>

          <TabsContent value="cases" className="mt-0">
            <div className="p-8 text-center text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No cases found for selected date</p>
            </div>
          </TabsContent>

          <TabsContent value="expenses" className="mt-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AMOUNT</TableHead>
                    <TableHead>DESCRIPTION</TableHead>
                    <TableHead>MODE</TableHead>
                    <TableHead>ADDED BY</TableHead>
                    <TableHead>TIME</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseData.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">₹{expense.amount}</TableCell>
                      <TableCell>{expense.description}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs">
                          {expense.mode}
                        </Badge>
                      </TableCell>
                      <TableCell>{expense.addedBy}</TableCell>
                      <TableCell>{expense.timestamp}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

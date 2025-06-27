"use client"

import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { BusinessDateSelector } from "@/components/business/business-date-selector"
import { BusinessSummaryRow } from "@/components/business/business-summary-row"
import { BusinessTransactionTable } from "@/components/business/business-transaction-table"
import { BusinessProvider } from "@/components/business/business-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BusinessPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BusinessProvider>
          <header className="flex h-14 sm:h-16 shrink-0 items-center gap-2 border-b px-3 sm:px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb className="hidden sm:block">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Business</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto">
              <BusinessDateSelector />
            </div>
          </header>
          <div className="flex-1 p-3 sm:p-4 space-y-4">
            <BusinessSummaryRow />
            <BusinessTransactionTable />
          </div>
        </BusinessProvider>
      </SidebarInset>
    </SidebarProvider>
  )
}

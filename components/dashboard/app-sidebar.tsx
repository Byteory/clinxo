"use client"

import type * as React from "react"
import { BarChart3, Building2, Calendar, Home, Inbox, Settings, Users, FileText, CreditCard, Bell } from "lucide-react"

import { BranchSwitcher } from "@/components/dashboard/branch-switcher"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data for branches (centers/chains)
const data = {
  branches: [
    {
      name: "Downtown Center",
      logo: Building2,
      plan: "Premium",
    },
    {
      name: "Uptown Branch",
      logo: Building2,
      plan: "Standard",
    },
    {
      name: "Mall Location",
      logo: Building2,
      plan: "Basic",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: false,
    },
    {
      title: "Business",
      url: "/dashboard/business",
      icon: BarChart3,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      items: [
        {
          title: "Revenue",
          url: "/dashboard/analytics/revenue",
        },
        {
          title: "Customers",
          url: "/dashboard/analytics/customers",
        },
        {
          title: "Performance",
          url: "/dashboard/analytics/performance",
        },
      ],
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: Users,
      items: [
        {
          title: "All Customers",
          url: "/dashboard/customers/all",
        },
        {
          title: "New Customers",
          url: "/dashboard/customers/new",
        },
        {
          title: "VIP Customers",
          url: "/dashboard/customers/vip",
        },
      ],
    },
    {
      title: "Appointments",
      url: "/dashboard/appointments",
      icon: Calendar,
      items: [
        {
          title: "Today",
          url: "/dashboard/appointments/today",
        },
        {
          title: "This Week",
          url: "/dashboard/appointments/week",
        },
        {
          title: "Calendar View",
          url: "/dashboard/appointments/calendar",
        },
      ],
    },
    {
      title: "Services",
      url: "/dashboard/services",
      icon: FileText,
      items: [
        {
          title: "All Services",
          url: "/dashboard/services/all",
        },
        {
          title: "Popular Services",
          url: "/dashboard/services/popular",
        },
        {
          title: "Service Packages",
          url: "/dashboard/services/packages",
        },
      ],
    },
    {
      title: "Billing",
      url: "/dashboard/billing",
      icon: CreditCard,
      items: [
        {
          title: "Invoices",
          url: "/dashboard/billing/invoices",
        },
        {
          title: "Payments",
          url: "/dashboard/billing/payments",
        },
        {
          title: "Reports",
          url: "/dashboard/billing/reports",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Notifications",
      url: "/dashboard/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Support",
      url: "/dashboard/support",
      icon: Inbox,
    },
  ],
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BranchSwitcher branches={data.branches} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

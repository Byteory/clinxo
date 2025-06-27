import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DashboardProvider } from "@/components/dashboard/dashboard-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auth App",
  description: "Authentication application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <DashboardProvider>{children}</DashboardProvider>
      </body>
    </html>
  )
}

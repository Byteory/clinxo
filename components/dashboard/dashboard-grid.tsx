"use client"

import { useDashboard } from "./dashboard-context"
import { RecentActivitiesWidget } from "./widgets/recent-activities-widget"
import { PaymentsDueWidget } from "./widgets/payments-due-widget"
import { RecentTransactionsWidget } from "./widgets/recent-transactions-widget"
import { TodaysSummaryWidget } from "./widgets/todays-summary-widget"
import { AppointmentsWidget } from "./widgets/appointments-widget"
import { RevenueChartWidget } from "./widgets/revenue-chart-widget"
import { TestCategoriesChartWidget } from "./widgets/test-categories-chart-widget"
import { PatientTrendChartWidget } from "./widgets/patient-trend-chart-widget"
import { RecentReportsWidget } from "./widgets/recent-reports-widget"

const widgetComponents = {
  "recent-activities": RecentActivitiesWidget,
  "payments-due": PaymentsDueWidget,
  "recent-transactions": RecentTransactionsWidget,
  "todays-summary": TodaysSummaryWidget,
  appointments: AppointmentsWidget,
  "revenue-chart": RevenueChartWidget,
  "test-categories-chart": TestCategoriesChartWidget,
  "patient-trend-chart": PatientTrendChartWidget,
  "recent-reports": RecentReportsWidget,
}

export function DashboardGrid() {
  const { enabledWidgets } = useDashboard()

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {enabledWidgets.map((widgetId: string) => {
          const WidgetComponent = widgetComponents[widgetId as keyof typeof widgetComponents]
          return WidgetComponent ? <WidgetComponent key={widgetId} /> : null
        })}
      </div>
    </div>
  )
}

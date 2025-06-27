"use client"

import { IncomeSummaryWidget } from "./widgets/income-summary-widget"
import { IncomeModeSplitWidget } from "./widgets/income-mode-split-widget"
import { ExpensesWidget } from "./widgets/expenses-widget"
import { CashReconciliationWidget } from "./widgets/cash-reconciliation-widget"
import { PendingDuesWidget } from "./widgets/pending-dues-widget"
import { OldDuesCollectedWidget } from "./widgets/old-dues-collected-widget"

export function BusinessSummaryGrid() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1100px] max-w-[1400px] mx-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gridAutoRows: "min-content",
          }}
        >
          <IncomeSummaryWidget />
          <IncomeModeSplitWidget />
          <ExpensesWidget />
          <CashReconciliationWidget />
          <PendingDuesWidget />
          <OldDuesCollectedWidget />
        </div>
      </div>
    </div>
  )
}

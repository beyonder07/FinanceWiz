import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { FallbackMonthlyExpensesChart, FallbackCategoryBreakdownChart } from "@/components/charts/fallback-charts"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { BudgetOverview } from "@/components/dashboard/budget-overview"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2">
        <FallbackMonthlyExpensesChart />
        <FallbackCategoryBreakdownChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecentTransactions />
        <BudgetOverview />
      </div>
    </div>
  )
}

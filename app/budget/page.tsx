import { BudgetList } from "@/components/budget/budget-list"
import { AddBudgetDialog } from "@/components/budget/add-budget-dialog"
import { FallbackBudgetVsActualChart } from "@/components/charts/fallback-charts"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { BarChart3, Receipt } from "lucide-react"

export default function BudgetPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Page Actions */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Budget Management</h2>
            <p className="text-muted-foreground">Track your spending against your budget goals</p>
          </div>

          {/* Navigation and Add Budget Buttons */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/transactions">
                  <Receipt className="mr-2 h-4 w-4" />
                  Transactions
                </Link>
              </Button>
            </div>
            {/* Add Budget Button: below nav on mobile, next to nav on desktop */}
            <div className="w-full sm:w-auto">
              <AddBudgetDialog>
                <Button className="w-full sm:w-auto" variant="secondary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Budget
                </Button>
              </AddBudgetDialog>
            </div>
          </div>
        </div>

        <FallbackBudgetVsActualChart />
        <BudgetList />
      </div>
    </div>
  )
}

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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Budget Management</h2>
            <p className="text-muted-foreground">Track your spending against your budget goals</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Navigation Buttons */}
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

            {/* Add Budget Button */}
            <AddBudgetDialog>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Budget
              </Button>
            </AddBudgetDialog>
          </div>
        </div>

        <FallbackBudgetVsActualChart />
        <BudgetList />
      </div>
    </div>
  )
}

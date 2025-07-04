"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mockTransactions, mockBudgets } from "@/lib/mock-data"
import { getMonthlyExpenses, getCategoryBreakdown, getBudgetVsActual } from "@/lib/utils"

export function DebugChartTest() {
  const monthlyData = getMonthlyExpenses(mockTransactions)
  const categoryData = getCategoryBreakdown(mockTransactions)
  const budgetData = getBudgetVsActual(mockBudgets, mockTransactions)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Debug: Chart Data</CardTitle>
          <CardDescription>Verify that data is being processed correctly</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Monthly Expenses Data:</h3>
            <pre className="text-xs bg-muted p-2 rounded overflow-auto">{JSON.stringify(monthlyData, null, 2)}</pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Category Breakdown Data:</h3>
            <pre className="text-xs bg-muted p-2 rounded overflow-auto">{JSON.stringify(categoryData, null, 2)}</pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Budget vs Actual Data:</h3>
            <pre className="text-xs bg-muted p-2 rounded overflow-auto">{JSON.stringify(budgetData, null, 2)}</pre>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Mock Transactions Count:</h3>
            <p>{mockTransactions.length} transactions</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Mock Budgets Count:</h3>
            <p>{mockBudgets.length} budgets</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

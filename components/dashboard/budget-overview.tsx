"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { mockBudgets, mockTransactions } from "@/lib/mock-data"
import { getBudgetProgress } from "@/lib/utils"

export function BudgetOverview() {
  const budgetProgress = getBudgetProgress(mockBudgets, mockTransactions)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {budgetProgress.slice(0, 4).map((budget) => (
            <div key={budget.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{budget.category}</span>
                <span className="text-muted-foreground">
                  {budget.spent} / {budget.amount}
                </span>
              </div>
              <Progress value={budget.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">{budget.percentage}% used</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

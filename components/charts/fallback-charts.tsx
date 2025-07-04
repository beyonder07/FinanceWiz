"use client"

import { SimpleBarChart } from "./simple-bar-chart"
import { SimplePieChart } from "./simple-pie-chart"
import { BudgetProgressChart } from "./budget-progress-chart"
import { mockTransactions, mockBudgets } from "@/lib/mock-data"
import { getMonthlyExpenses, getCategoryBreakdown, getBudgetVsActual } from "@/lib/utils"

export function FallbackMonthlyExpensesChart() {
  const monthlyData = getMonthlyExpenses(mockTransactions)

  return (
    <SimpleBarChart
      data={monthlyData}
      title="Monthly Expenses"
      description="Your spending patterns over the last 6 months"
    />
  )
}

export function FallbackCategoryBreakdownChart() {
  const categoryData = getCategoryBreakdown(mockTransactions)

  return (
    <SimplePieChart
      data={categoryData}
      title="Category Breakdown"
      description="Distribution of expenses by category this month"
    />
  )
}

export function FallbackBudgetVsActualChart() {
  const budgetData = getBudgetVsActual(mockBudgets, mockTransactions)

  return (
    <BudgetProgressChart
      data={budgetData}
      title="Budget vs Actual"
      description="Compare your planned budget with actual spending"
    />
  )
}

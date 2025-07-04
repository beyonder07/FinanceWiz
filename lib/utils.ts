import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Transaction, Budget } from "./mock-data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date))
}

export function getCurrentMonthStats(transactions: Transaction[]) {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const currentMonthTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date)
    return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear
  })

  const income = currentMonthTransactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)
  const expenses = currentMonthTransactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expenses
  const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0

  return {
    income,
    expenses,
    balance,
    savingsRate,
  }
}

export function getMonthlyExpenses(transactions: Transaction[]) {
  // Generate last 6 months of data
  const months = []
  const now = new Date()

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const monthKey = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
    months.push(monthKey)
  }

  const monthlyData: { [key: string]: number } = {}

  // Initialize all months with 0
  months.forEach((month) => {
    monthlyData[month] = 0
  })

  // Add actual transaction data
  transactions
    .filter((t) => t.type === "expense")
    .forEach((transaction) => {
      const date = new Date(transaction.date)
      const monthKey = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })

      if (monthlyData.hasOwnProperty(monthKey)) {
        monthlyData[monthKey] += transaction.amount
      }
    })

  const result = months.map((month) => ({
    month,
    expenses: monthlyData[month] || 0,
  }))

  console.log("Monthly expenses data:", result)
  return result
}

export function getCategoryBreakdown(transactions: Transaction[]) {
  const categoryData: { [key: string]: number } = {}

  transactions
    .filter((t) => t.type === "expense")
    .forEach((transaction) => {
      categoryData[transaction.category] = (categoryData[transaction.category] || 0) + transaction.amount
    })

  const result = Object.entries(categoryData)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount)
    .filter((item) => item.amount > 0) // Only include categories with expenses

  console.log("Category breakdown data:", result)
  return result
}

export function getBudgetProgress(budgets: Budget[], transactions: Transaction[]) {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const currentMonthExpenses = transactions
    .filter((t) => {
      const transactionDate = new Date(t.date)
      return (
        t.type === "expense" &&
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      )
    })
    .reduce(
      (acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount
        return acc
      },
      {} as { [key: string]: number },
    )

  return budgets.map((budget) => {
    const spent = currentMonthExpenses[budget.category] || 0
    const percentage = Math.round((spent / budget.amount) * 100)

    return {
      ...budget,
      spent,
      percentage: Math.min(percentage, 100),
    }
  })
}

export function getBudgetVsActual(budgets: Budget[], transactions: Transaction[]) {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const currentMonthExpenses = transactions
    .filter((t) => {
      const transactionDate = new Date(t.date)
      return (
        t.type === "expense" &&
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      )
    })
    .reduce(
      (acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount
        return acc
      },
      {} as { [key: string]: number },
    )

  const result = budgets.map((budget) => ({
    category: budget.category,
    budget: budget.amount,
    actual: currentMonthExpenses[budget.category] || 0,
  }))

  console.log("Budget vs actual data:", result)
  return result
}

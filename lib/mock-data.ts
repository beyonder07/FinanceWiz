export interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  type: "income" | "expense"
  date: string
}

export interface Budget {
  id: string
  category: string
  amount: number
  period: "monthly" | "yearly"
}

// Helper to get a date string for N months ago
function monthsAgo(months: number) {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return d.toISOString().slice(0, 10);
}

export const mockTransactions: Transaction[] = [
  // Recent months data for better chart display
  {
    id: "1",
    description: "Grocery shopping at Whole Foods",
    amount: 125.5,
    category: "Food & Dining",
    type: "expense",
    date: monthsAgo(0), // this month
  },
  {
    id: "2",
    description: "Salary deposit",
    amount: 5000.0,
    category: "Income",
    type: "income",
    date: monthsAgo(0),
  },
  {
    id: "3",
    description: "Gas station fill-up",
    amount: 65.0,
    category: "Transportation",
    type: "expense",
    date: monthsAgo(1),
  },
  {
    id: "4",
    description: "Netflix subscription",
    amount: 15.99,
    category: "Entertainment",
    type: "expense",
    date: monthsAgo(1),
  },
  {
    id: "5",
    description: "Electric bill",
    amount: 120.0,
    category: "Bills & Utilities",
    type: "expense",
    date: monthsAgo(2),
  },
  {
    id: "6",
    description: "Coffee shop",
    amount: 4.5,
    category: "Food & Dining",
    type: "expense",
    date: monthsAgo(2),
  },
  {
    id: "7",
    description: "Online course",
    amount: 99.0,
    category: "Education",
    type: "expense",
    date: monthsAgo(3),
  },
  {
    id: "8",
    description: "Freelance project payment",
    amount: 800.0,
    category: "Income",
    type: "income",
    date: monthsAgo(3),
  },
  {
    id: "9",
    description: "Restaurant dinner",
    amount: 85.0,
    category: "Food & Dining",
    type: "expense",
    date: monthsAgo(4),
  },
  {
    id: "10",
    description: "Uber ride",
    amount: 25.0,
    category: "Transportation",
    type: "expense",
    date: monthsAgo(4),
  },
  {
    id: "11",
    description: "Amazon purchase",
    amount: 150.0,
    category: "Shopping",
    type: "expense",
    date: monthsAgo(5),
  },
  {
    id: "12",
    description: "Gym membership",
    amount: 50.0,
    category: "Healthcare",
    type: "expense",
    date: monthsAgo(5),
  },
  {
    id: "13",
    description: "Movie tickets",
    amount: 30.0,
    category: "Entertainment",
    type: "expense",
    date: "2024-09-04",
  },
  {
    id: "14",
    description: "Phone bill",
    amount: 75.0,
    category: "Bills & Utilities",
    type: "expense",
    date: "2024-09-03",
  },
  {
    id: "15",
    description: "Haircut",
    amount: 40.0,
    category: "Personal Care",
    type: "expense",
    date: "2024-08-02",
  },
  // Additional transactions for more realistic data
  {
    id: "16",
    description: "Grocery shopping",
    amount: 89.5,
    category: "Food & Dining",
    type: "expense",
    date: "2024-12-20",
  },
  {
    id: "17",
    description: "Internet bill",
    amount: 75.0,
    category: "Bills & Utilities",
    type: "expense",
    date: "2024-11-25",
  },
  {
    id: "18",
    description: "Clothing purchase",
    amount: 120.0,
    category: "Shopping",
    type: "expense",
    date: "2024-10-15",
  },
  {
    id: "19",
    description: "Doctor visit",
    amount: 150.0,
    category: "Healthcare",
    type: "expense",
    date: "2024-09-20",
  },
  {
    id: "20",
    description: "Concert tickets",
    amount: 80.0,
    category: "Entertainment",
    type: "expense",
    date: "2024-08-18",
  },
]

export const mockBudgets: Budget[] = [
  {
    id: "1",
    category: "Food & Dining",
    amount: 500.0,
    period: "monthly",
  },
  {
    id: "2",
    category: "Transportation",
    amount: 200.0,
    period: "monthly",
  },
  {
    id: "3",
    category: "Entertainment",
    amount: 100.0,
    period: "monthly",
  },
  {
    id: "4",
    category: "Bills & Utilities",
    amount: 300.0,
    period: "monthly",
  },
  {
    id: "5",
    category: "Shopping",
    amount: 250.0,
    period: "monthly",
  },
  {
    id: "6",
    category: "Healthcare",
    amount: 150.0,
    period: "monthly",
  },
]

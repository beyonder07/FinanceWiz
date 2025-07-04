import { TransactionsList } from "@/components/transactions/transactions-list"
import { AddTransactionDialog } from "@/components/transactions/add-transaction-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { BarChart3, PiggyBank } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Page Actions */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">All Transactions</h2>
            <p className="text-muted-foreground">View and manage all your financial transactions</p>
          </div>

          {/* Navigation and Add Transaction Buttons */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/budget">
                  <PiggyBank className="mr-2 h-4 w-4" />
                  Budget
                </Link>
              </Button>
            </div>
            {/* Add Transaction Button: below nav on mobile, next to nav on desktop */}
            <div className="w-full sm:w-auto">
              <AddTransactionDialog>
                <Button className="w-full sm:w-auto" variant="default">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Transaction
                </Button>
              </AddTransactionDialog>
            </div>
          </div>
        </div>

        <TransactionsList />
      </div>
    </div>
  )
}

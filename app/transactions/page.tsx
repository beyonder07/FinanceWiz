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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">All Transactions</h2>
            <p className="text-muted-foreground">View and manage all your financial transactions</p>
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
              <Link href="/budget">
                <PiggyBank className="mr-2 h-4 w-4" />
                Budget
              </Link>
            </Button>

            {/* Add Transaction Button */}
            <AddTransactionDialog>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </AddTransactionDialog>
          </div>
        </div>

        <TransactionsList />
      </div>
    </div>
  )
}

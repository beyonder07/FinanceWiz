"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, PiggyBank } from "lucide-react"
import { mockBudgets, mockTransactions } from "@/lib/mock-data"
import { getBudgetProgress, formatCurrency } from "@/lib/utils"
import { EditBudgetDialog } from "./edit-budget-dialog"
import { DeleteBudgetDialog } from "./delete-budget-dialog"
import { EmptyState } from "@/components/ui/empty-state"

export function BudgetList() {
  const [editingBudget, setEditingBudget] = useState<any>(null)
  const [deletingBudget, setDeletingBudget] = useState<any>(null)

  const budgetProgress = getBudgetProgress(mockBudgets, mockTransactions)

  const getStatusColor = (percentage: number) => {
    if (percentage >= 100) return "text-red-600"
    if (percentage >= 80) return "text-yellow-600"
    return "text-green-600"
  }

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 100) return <Badge variant="destructive">Over Budget</Badge>
    if (percentage >= 80) return <Badge variant="secondary">Near Limit</Badge>
    return <Badge variant="default">On Track</Badge>
  }

  if (mockBudgets.length === 0) {
    return (
      <EmptyState
        icon={<PiggyBank className="h-6 w-6" />}
        title="No budgets set"
        description="Create your first budget to start tracking your spending limits and financial goals."
        action={{
          label: "Add Budget",
          onClick: () => {
            // This would trigger the add budget dialog
            console.log("Add budget clicked")
          },
        }}
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetProgress.map((budget) => (
                <TableRow key={budget.id}>
                  <TableCell className="font-medium">{budget.category}</TableCell>
                  <TableCell>{formatCurrency(budget.amount)}</TableCell>
                  <TableCell className="text-red-600">{formatCurrency(budget.spent)}</TableCell>
                  <TableCell className={getStatusColor(budget.percentage)}>
                    {formatCurrency(Math.max(0, budget.amount - budget.spent))}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={budget.percentage} className="w-20" />
                      <span className="text-sm text-muted-foreground">{budget.percentage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(budget.percentage)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setEditingBudget(budget)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDeletingBudget(budget)} className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {editingBudget && (
        <EditBudgetDialog
          budget={editingBudget}
          open={!!editingBudget}
          onOpenChange={(open) => !open && setEditingBudget(null)}
        />
      )}

      {deletingBudget && (
        <DeleteBudgetDialog
          budget={deletingBudget}
          open={!!deletingBudget}
          onOpenChange={(open) => !open && setDeletingBudget(null)}
        />
      )}
    </Card>
  )
}

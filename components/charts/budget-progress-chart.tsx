"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

interface BudgetProgressChartProps {
  data: Array<{ category: string; budget: number; actual: number }>
  title: string
  description: string
}

export function BudgetProgressChart({ data, title, description }: BudgetProgressChartProps) {
  const getStatusIcon = (percentage: number) => {
    if (percentage >= 100) return <AlertTriangle className="h-4 w-4 text-destructive" />
    if (percentage >= 80) return <TrendingUp className="h-4 w-4 text-yellow-600" />
    return <TrendingDown className="h-4 w-4 text-green-600" />
  }

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 100) return <Badge variant="destructive">Over Budget</Badge>
    if (percentage >= 80) return <Badge variant="secondary">Near Limit</Badge>
    return <Badge variant="default">On Track</Badge>
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return "bg-destructive"
    if (percentage >= 80) return "bg-yellow-500"
    return "bg-primary"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {data.map((item, index) => {
            const percentage = Math.min((item.actual / item.budget) * 100, 100)
            const remaining = Math.max(item.budget - item.actual, 0)

            return (
              <div key={index} className="space-y-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(percentage)}
                    <h3 className="font-semibold">{item.category}</h3>
                  </div>
                  {getStatusBadge(percentage)}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={percentage} className="h-3" />
                    <div
                      className={`absolute top-0 left-0 h-3 rounded-full transition-all ${getProgressColor(percentage)}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Financial Details */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-2 rounded bg-muted/50">
                    <div className="font-semibold text-primary">{formatCurrency(item.budget)}</div>
                    <div className="text-muted-foreground">Budget</div>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/50">
                    <div className="font-semibold text-destructive">{formatCurrency(item.actual)}</div>
                    <div className="text-muted-foreground">Spent</div>
                  </div>
                  <div className="text-center p-2 rounded bg-muted/50">
                    <div className={`font-semibold ${remaining > 0 ? "text-green-600" : "text-destructive"}`}>{formatCurrency(remaining)}</div>
                    <div className="text-muted-foreground">Remaining</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

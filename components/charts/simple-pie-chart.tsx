"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend as ChartLegend } from 'chart.js';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

ChartJS.register(ArcElement, Tooltip, ChartLegend);

interface SimplePieChartProps {
  data: Array<{ name: string; amount: number }>
  title: string
  description: string
}

export function SimplePieChart({ data, title, description }: SimplePieChartProps) {
  const total = data.reduce((sum, item) => sum + item.amount, 0)
  const chartRef = useRef(null);

  // GSAP animation on mount
  useEffect(() => {
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  const COLORS = [
    'rgba(59,130,246,0.7)', // Tailwind primary-500
    'rgba(16,185,129,0.7)', // Tailwind emerald-500
    'rgba(251,191,36,0.7)', // Tailwind yellow-400
    'rgba(239,68,68,0.7)', // Tailwind red-500
    'rgba(168,85,247,0.7)', // Tailwind purple-500
    '#8884D8',
  ];

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        data: data.map((d) => d.amount),
        backgroundColor: COLORS,
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.label}: ₹${ctx.parsed.toLocaleString('en-IN')}`,
        },
      },
    },
  };

  if (total === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="text-lg mb-2">📊</div>
              <div>No expense data available</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex flex-col lg:flex-row items-center gap-6">
          {/* Pie Chart */}
          <div className="flex-shrink-0">
            <div ref={chartRef} className="relative w-48 h-48 flex items-center justify-center">
              <Pie data={chartData} options={options} style={{ maxHeight: 192, maxWidth: 192 }} />
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center bg-background/80 rounded-full p-3">
                  <div className="text-lg font-bold">₹{total.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 w-full">
            <div className="grid gap-2 max-h-[240px] overflow-y-auto">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm font-medium truncate" title={item.name}>
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm font-semibold">
                      <span className="ml-2 mr-1">₹</span>{item.amount.toLocaleString('en-IN')}
                    </span>
                    <Badge variant="outline" className="text-xs min-w-[45px] justify-center">
                      {((item.amount / total) * 100).toFixed(1)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

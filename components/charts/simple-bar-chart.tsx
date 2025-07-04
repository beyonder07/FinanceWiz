"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getMonthlyExpenses } from '@/lib/utils';
import { mockTransactions } from '@/lib/mock-data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SimpleBarChartProps {
  data: Array<{ month: string; expenses: number }>
  title: string
  description: string
}

export function SimpleBarChart({ data, title, description }: SimpleBarChartProps) {
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

  // Use mock data if no data prop is provided
  const chartDataRaw = data && data.length > 0 ? data : getMonthlyExpenses(mockTransactions);

  const chartData = {
    labels: chartDataRaw.map((d) => d.month),
    datasets: [
      {
        label: 'Expenses',
        data: chartDataRaw.map((d) => d.expenses),
        backgroundColor: 'rgba(59,130,246,0.7)', // Tailwind primary-500
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: 'rgba(59,130,246,1)',
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `₹${ctx.parsed.y.toLocaleString('en-IN')}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `₹${value.toLocaleString('en-IN')}`,
          color: '#64748b', // Tailwind slate-500
        },
        grid: { color: 'rgba(100,116,139,0.1)' },
      },
      x: {
        ticks: { color: '#64748b' },
        grid: { display: false },
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={chartRef} className="h-[300px] flex items-center justify-center">
          <Bar data={chartData} options={options} style={{ maxHeight: 240, width: '100%' }} />
        </div>
      </CardContent>
    </Card>
  )
}

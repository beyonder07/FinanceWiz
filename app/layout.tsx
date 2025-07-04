import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ClientLayout } from "@/components/layout/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinanceViz - Personal Finance Visualizer",
  description:
    "Track your expenses, manage budgets, and visualize your financial data with beautiful charts and insights.",
  keywords: ["finance", "budget", "expense tracker", "personal finance", "money management"],
  authors: [{ name: "FinanceViz Team" }],
  creator: "FinanceViz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://financeviz.vercel.app",
    title: "FinanceViz - Personal Finance Visualizer",
    description: "Track your expenses, manage budgets, and visualize your financial data",
    siteName: "FinanceViz",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceViz - Personal Finance Visualizer",
    description: "Track your expenses, manage budgets, and visualize your financial data",
    creator: "@financeviz",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

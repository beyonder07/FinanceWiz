"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import {
  TrendingUp,
  PieChart,
  Target,
  Shield,
  Smartphone,
  BarChart3,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Calendar,
  Bell,
} from "lucide-react"

export function LandingPage() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Interactive Charts",
      description: "Visualize your spending patterns with beautiful, interactive charts and graphs.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Budget Tracking",
      description: "Set budgets by category and track your progress with real-time updates.",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Expense Categories",
      description: "Organize transactions into categories for better financial insights.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Alerts",
      description: "Get notified when you're approaching your budget limits.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Responsive",
      description: "Access your finances anywhere with our fully responsive design.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your financial data is encrypted and stored securely.",
    },
  ]

  const benefits = [
    "Track income and expenses effortlessly",
    "Set and monitor budgets by category",
    "Visualize spending patterns with charts",
    "Get insights into your financial habits",
    "Export data for tax preparation",
    "Dark/light mode for comfortable viewing",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">FinanceViz</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 mt-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Free & Open Source
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Take Control of Your
            <span className="text-primary block">Financial Future</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track expenses, manage budgets, and visualize your financial data with our comprehensive personal finance
            management tool. Built with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Start Managing Finances
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Manage Your Money</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to give you complete control over your personal finances.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose FinanceViz?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines powerful analytics with an intuitive interface to help you make better financial
                decisions and achieve your money goals.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold">{formatCurrency(12450)}</div>
                    <div className="text-sm text-muted-foreground">Total Saved</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="h-8 w-8 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-muted-foreground">Months Tracked</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 col-span-2">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-purple-500" />
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm text-muted-foreground">Budget Goals Achieved</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start managing your finances today. No hidden fees, no complicated plans.
          </p>
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Free Forever</CardTitle>
              <div className="text-4xl font-bold">{formatCurrency(0)}</div>
              <CardDescription className="text-base">All features included, no credit card required</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Unlimited transactions",
                  "Budget tracking",
                  "Interactive charts",
                  "Data export",
                  "Mobile responsive",
                  "Dark/light mode",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/dashboard">Start Using FinanceViz</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Finances?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their financial future with FinanceViz.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">FinanceViz</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 FinanceViz. Built with Next.js, React, and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  )
}

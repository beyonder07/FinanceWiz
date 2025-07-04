"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Moon, Sun, Menu, Receipt, PiggyBank, BarChart3, User, Settings, LogOut, Home, X, Plus } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import gsap from 'gsap'
import { AddTransactionDialog } from "@/components/transactions/add-transaction-dialog"
import { AddBudgetDialog } from "@/components/budget/add-budget-dialog"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Transactions", href: "/transactions", icon: Receipt },
  { name: "Budget", href: "/budget", icon: PiggyBank },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  // Check if current page has sidebar (dashboard pages)
  const hasSidebar = pathname.startsWith("/dashboard")

  // Only show navigation on pages without sidebar
  const showNavigation = !hasSidebar

  // Check if current page is transactions or budget
  const isTransactionsPage = pathname.startsWith("/transactions")
  const isBudgetPage = pathname.startsWith("/budget")

  const getCurrentPageInfo = () => {
    const currentPath = pathname
    if (currentPath === "/dashboard") return { title: "Dashboard", subtitle: "Overview of your financial activity" }
    if (currentPath === "/transactions") return { title: "Transactions", subtitle: "Manage your income and expenses" }
    if (currentPath === "/budget") return { title: "Budget", subtitle: "Set and track your spending limits" }
    return { title: "FinanceViz", subtitle: "Personal Finance Management" }
  }

  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ name: "Home", href: "/" }]

    segments.forEach((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      breadcrumbs.push({ name, href })
    })

    return breadcrumbs
  }

  const currentPage = getCurrentPageInfo()
  const breadcrumbs = getBreadcrumbs()

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-lg transition-all">
      <div className="container flex h-16 items-center justify-between px-4 gap-4">
        {/* Left side - Logo and Navigation (only on non-dashboard pages) */}
        <div className="flex items-center space-x-4">
          {showNavigation && (
            <>
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden active:scale-90 transition-transform duration-150"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
                <Menu className="h-5 w-5 transition-all duration-300" />
              </Button>

              {/* Logo - visible on mobile */}
              <Link href="/" className="flex items-center space-x-2 md:hidden">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span className="font-bold">FinanceViz</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/" className="flex items-center space-x-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </Button>
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Button
                      key={item.name}
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      asChild
                      className="relative"
                    >
                      <Link href={item.href} className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                        {isActive && (
                          <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                            Active
                          </Badge>
                        )}
                      </Link>
                    </Button>
                  )
                })}
              </nav>
            </>
          )}

          {/* Dashboard pages - just show breadcrumbs area */}
          {hasSidebar && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Dashboard</span>
            </div>
          )}
        </div>

        {/* Right side - Theme toggle and User menu */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-9 w-9 active:scale-90 transition-transform duration-150"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-4 w-4" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/transactions" className="flex items-center">
                  <Receipt className="mr-2 h-4 w-4" />
                  Transactions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/budget" className="flex items-center">
                  <PiggyBank className="mr-2 h-4 w-4" />
                  Budget
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation Menu (only on non-dashboard pages) */}
      {showNavigation && isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container px-4 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <Badge variant="secondary" className="ml-auto">
                        Active
                      </Badge>
                    )}
                  </Link>
                </Button>
              )
            })}
          </nav>
        </div>
      )}

      {/* Page Header Section (only on non-dashboard pages) */}
      {showNavigation && (
        <div className="border-b bg-muted/30">
          <div className="container px-4 py-4">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-2">
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center">
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={crumb.href}>{crumb.name}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            {/* Page Title and Description */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{currentPage.title}</h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">{currentPage.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

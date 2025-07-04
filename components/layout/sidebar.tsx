"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Receipt, PiggyBank, TrendingUp, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import gsap from 'gsap'
import { useIsMobile } from "@/hooks/use-mobile"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: Receipt },
  { name: "Budget", href: "/budget", icon: PiggyBank },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isMobile = useIsMobile();

  // Animate sidebar and overlay
  useEffect(() => {
    if (isMobileMenuOpen && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      }
      // Stagger menu items
      if (menuItemsRef.current.length) {
        gsap.fromTo(
          menuItemsRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, delay: 0.1, ease: 'power2.out' }
        );
      }
    }
  }, [isMobileMenuOpen]);

  // Hamburger icon morph animation
  useEffect(() => {
    // Optionally animate icon morph here if desired
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-card/80 backdrop-blur-md border-r shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          "max-w-full md:w-64"
        )}
        tabIndex={-1}
        aria-modal={isMobileMenuOpen}
        role="dialog"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center px-6 py-4 border-b">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">FinanceViz</span>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={el => menuItemsRef.current[idx] = el}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                  )}
                  tabIndex={0}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-30 bg-black/50 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
    </>
  )
}

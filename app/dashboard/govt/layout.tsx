"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Activity, AlertTriangle, User, MapPin, TrendingUp, Settings, Download, Bell, LogOut, Menu, FileText } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

export default function GovtDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      id: "population-overview",
      label: "Population Overview",
      icon: Users,
      path: "/dashboard/govt",
      badge: { text: "Active", color: "bg-green-600 text-white" },
    },
    {
      id: "disease-surveillance",
      label: "Disease Surveillance",
      icon: Activity,
      path: "/dashboard/govt/disease-surveillance",
      badge: { text: "12", color: "bg-red-500 text-white text-xs" },
      badgeLabel: "Alerts",
    },
    {
      id: "high-risk-camps",
      label: "High-Risk Camps",
      icon: AlertTriangle,
      path: "/dashboard/govt/high-risk-camps",
      badge: { text: "8", color: "bg-yellow-500 text-white text-xs" },
      badgeLabel: "Flagged",
    },
    {
      id: "health-records",
      label: "Health Records",
      icon: User,
      path: "/dashboard/govt/health-records",
    },
    {
      id: "emergency-response",
      label: "Emergency Response",
      icon: AlertTriangle,
      path: "/dashboard/govt/emergency-response",
      badge: { text: "LIVE", color: "bg-red-600 text-white text-xs" },
    },
  ]

  type Action = "Export Report" | "Generate Report" | "PDF" | "Excel"

  const headerConfig: Record<string, { title: string; subtitle: string; actions: Action[] }> = {
    "/dashboard/govt": {
      title: "Migrant Population Overview",
      subtitle: "Real-time health monitoring across Kerala migrant camps",
      actions: ["Export Report"],
    },
    "/dashboard/govt/disease-surveillance": {
      title: "Disease Surveillance Dashboard",
      subtitle: "Real-time monitoring and analysis of disease patterns",
      actions: ["Export Report"],
    },
    "/dashboard/govt/high-risk-camps": {
      title: "High-Risk Camp Monitoring",
      subtitle: "Monitor migrant camps with active health risks. Quickly identify and act on outbreaks.",
      actions: ["Export Report", "Generate Report"],
    },
    "/dashboard/govt/health-records": {
      title: "Migrant Health Registry",
      subtitle: "Anonymous Health Records Management",
      actions: ["Export Report", "Generate Report"],
    },
    "/dashboard/govt/emergency-response": {
      title: "Emergency Response",
      subtitle: "Real-time outbreak alerts, hotspot monitoring, and action tracking",
      actions: ["PDF", "Excel"],
    },
  }

  const currentConfig = headerConfig[pathname] || headerConfig["/dashboard/govt"]

  const handleLogout = () => {
    router.push("/")
  }

  const isActive = (path: string) => {
    if (path === "/dashboard/govt") {
      return pathname === "/dashboard/govt"
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar Navigation */}
      <div className="govt-sidebar hidden md:flex w-60 bg-white border-r border-gray-200 p-4 flex-col flex-shrink-0">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            KHM
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Kerala Health</h1>
            <h2 className="text-lg font-semibold text-gray-900">Monitor</h2>
            <p className="text-sm text-gray-600">Migrant Health Dashboard</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search dashboard..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute right-2 top-2 text-xs text-gray-400">⌘ K</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <div
                key={item.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                  active
                    ? "bg-green-100 text-green-800 shadow-sm"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
                onClick={() => router.push(item.path)}
              >
                <Icon className="h-4 w-4" />
                <span className={`text-sm font-medium ${active ? "text-green-800" : ""}`}>{item.label}</span>
                {item.badge && (
                  <Badge className={`${item.badge.color} ml-auto text-xs`} aria-label={item.badgeLabel}>
                    {item.badge.text}
                  </Badge>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Profile */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Dr. Rajesh Kumar</p>
              <p className="text-xs text-gray-600">Health Officer</p>
            </div>
            <Settings className="h-4 w-4 text-gray-400 ml-auto cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Navigation Drawer Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Navigation Drawer */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        router.push(item.path)
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left hover:bg-gray-50 transition-colors"
                    >
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="p-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleLogout()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Header - Only visible on mobile */}
        <header className="flex h-14 md:hidden items-center gap-2 border-b px-4 bg-white shadow-sm">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <h1 className="text-base font-semibold text-gray-900 truncate">{currentConfig.title}</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="px-2">
            <LogOut className="h-4 w-4" />
          </Button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-semibold text-gray-900">{currentConfig.title}</h1>
              <p className="text-sm text-gray-600">{currentConfig.subtitle}</p>
            </div>
          </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">System Online</span>
              </div>
              {currentConfig.actions.includes("Export Report") && (
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-1" />
                  Export Report
                </Button>
              )}
              {currentConfig.actions.includes("Generate Report") && (
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <FileText className="h-4 w-4 mr-1" />
                  Generate Report
                </Button>
              )}
              {currentConfig.actions.includes("PDF") && (
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  PDF
                </Button>
              )}
              {currentConfig.actions.includes("Excel") && (
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Excel
                </Button>
              )}
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
              <Settings className="h-5 w-5 text-gray-600 cursor-pointer" />
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  )
}

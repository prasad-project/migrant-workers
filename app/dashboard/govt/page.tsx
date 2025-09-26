"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Users,
  Heart,
  Flag,
  Activity,
  Download,
  Settings,
  Bell,
  LogOut,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Menu,
  User,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function GovernmentDashboard() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/")
  }

  const menuItems = [
    { label: "Population Overview", path: "/dashboard/govt", icon: Users },
    { label: "Disease Surveillance", path: "/dashboard/govt/disease-surveillance", icon: Activity },
    { label: "High-Risk Camps", path: "/dashboard/govt/high-risk-camps", icon: AlertTriangle },
    { label: "Health Records", path: "/dashboard/govt/health-records", icon: Users },
    { label: "Emergency Response", path: "/dashboard/govt/emergency-response", icon: AlertTriangle },
  ]

  return (
    <div className="flex-1 flex flex-col">
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
            <h1 className="text-base font-semibold text-gray-900 truncate">Govt Dashboard</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="px-2">
            <LogOut className="h-4 w-4" />
          </Button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-semibold text-gray-900">Migrant Population Overview</h1>
              <p className="text-sm text-gray-600">Real-time health monitoring across Kerala migrant camps</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">System Online</span>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-1" />
              Export Report
            </Button>
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

        {/* Main Content */}
        <div className="govt-dashboard-mobile flex-1 p-3 sm:p-4 md:p-6 bg-gray-50 overflow-y-auto">
          {/* Stats Cards */}
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Registered Migrants</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">2,47,892</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600 truncate">+2.4% from last month</span>
                    </div>
                  </div>
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 flex-shrink-0 ml-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Healthy Camps</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">156</p>
                    <div className="flex items-center gap-1 mt-1">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600 truncate">87% of total camps</span>
                    </div>
                  </div>
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 flex-shrink-0 ml-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Risk Flagged Camps</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">23</p>
                    <div className="flex items-center gap-1 mt-1">
                      <AlertTriangle className="h-3 w-3 text-yellow-600" />
                      <span className="text-xs text-yellow-600 truncate">Requires attention</span>
                    </div>
                  </div>
                  <Flag className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 flex-shrink-0 ml-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Active Disease Cases</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">1,247</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Activity className="h-3 w-3 text-red-600" />
                      <span className="text-xs text-red-600 truncate">Under treatment</span>
                    </div>
                  </div>
                  <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 flex-shrink-0 ml-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Kerala Health Status Map */}
            <Card className="map-section lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex flex-col gap-2">
                  <span className="text-sm sm:text-base">Kerala Health Status Map</span>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Healthy</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs">Rising Cases</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs">Conditions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-sm"></div>
                      <span className="text-xs">Thriving</span>
                    </div>
                    <div className="flex items-center gap-1 hidden xs:flex">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-sm"></div>
                      <span className="text-xs">Excellent</span>
                    </div>
                    <div className="flex items-center gap-1 hidden sm:flex">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-sm"></div>
                      <span className="text-xs">Healthy</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-sm"></div>
                      <span className="text-xs">Health Camp</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img
                    src="/kerala-show-map.png"
                    alt="Kerala Health Status Map"
                    className="w-full h-48 sm:h-64 lg:h-96 object-contain"
                    data-slot="image"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Filter and Quick Stats */}
            <div className="filter-section space-y-4 sm:space-y-6">
              <Card className="filter-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Filter by District</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="All Districts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Districts</SelectItem>
                      <SelectItem value="thiruvananthapuram">Thiruvananthapuram</SelectItem>
                      <SelectItem value="kochi">Kochi</SelectItem>
                      <SelectItem value="kozhikode">Kozhikode</SelectItem>
                      <SelectItem value="thrissur">Thrissur</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Origin State - All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      <SelectItem value="odisha">Odisha</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="jharkhand">Jharkhand</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" placeholder="dd-mm-yyyy" className="text-sm" />
                    <Input type="date" placeholder="dd-mm-yyyy" className="text-sm" />
                  </div>
                </CardContent>
              </Card>

              <Card className="filter-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Quick Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">New Registrations Today</span>
                    <span className="font-semibold text-green-600 text-sm">+127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Health Checkups Today</span>
                    <span className="font-semibold text-blue-600 text-sm">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Vaccination Coverage</span>
                    <span className="font-semibold text-purple-600 text-sm">78.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Emergency Cases</span>
                    <span className="font-semibold text-red-600 text-sm">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Medicine Distribution</span>
                    <span className="font-semibold text-orange-600 text-sm">89.2%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </div>
  )
}

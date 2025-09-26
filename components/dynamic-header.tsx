"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Bell,
  ChevronDown,
  Building2,
  Heart,
  Syringe,
  Pill,
  AlertTriangle,
  Medal,
  Mic,
  Cross,
  BarChart3,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ProfileSidebar } from "@/components/profile-sidebar"

interface Worker {
  name: string
  phone: string
  age: number
  gender: string
  bloodGroup: string
  location: string
  healthId: string
}

const featureConfig = {
   "/": {
     icon: BarChart3,
     title: "Dashboard",
     subtitle: "Government of India",
   },
   "/dashboard/worker": {
     icon: BarChart3,
     title: "Dashboard",
     subtitle: "Government of India",
   },
   "/health-id": {
     icon: Heart,
     title: "Health ID",
     subtitle: "Government of India",
   },
   "/vaccinations": {
     icon: Syringe,
     title: "Vaccinations",
     subtitle: "Government of India",
   },
   "/alerts": {
     icon: AlertTriangle,
     title: "Disease Alerts",
     subtitle: "Government of India",
   },
   "/rewards": {
     icon: Medal,
     title: "Rewards",
     subtitle: "Government of India",
   },
   "/benefits": {
     icon: Building2,
     title: "Gov Benefits",
     subtitle: "Government of India",
   },
   "/voice-talk": {
     icon: Mic,
     title: "Voice Talk",
     subtitle: "Government of India",
   },
   "/emergency": {
     icon: Cross,
     title: "Emergency",
     subtitle: "Government of India",
   },
 }

export function DynamicHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const matchingKey = Object.keys(featureConfig)
    .sort((a, b) => b.length - a.length)
    .find(key => pathname.startsWith(key)) || "/"
  const config = featureConfig[matchingKey as keyof typeof featureConfig]
  const IconComponent = config.icon
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [worker, setWorker] = useState<Worker | null>(null)

  useEffect(() => {
    const workerData = localStorage.getItem('worker')
    if (workerData) {
      setWorker(JSON.parse(workerData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('worker')
    router.push("/")
  }

  return (
    <>
      <header className="bg-blue-900 text-white px-6 py-3 flex items-center justify-between shadow-lg ml-64 md:ml-64">
        {/* Left Side - Feature Info */}
        <div className="flex items-center gap-3">
          <IconComponent className="h-6 w-6 text-white" />
          <div>
            <h1 className="text-lg font-bold text-white">{config.title}</h1>
            <p className="text-blue-200 text-xs">{config.subtitle}</p>
          </div>
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                English
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>हिंदी (Hindi)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Citizen Info - Now clickable */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:bg-white/10 rounded-lg p-2 transition-colors"
            onClick={() => setIsProfileOpen(true)}
          >
            <div className="text-right">
              <p className="text-white font-medium text-sm">{worker?.name || "Priya Sharma"}</p>
              <p className="text-blue-200 text-xs">Citizen ID: {worker?.healthId || "123456789"}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img src="/placeholder-user.jpg" alt={worker?.name || "User"} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>

          {/* Logout Button */}
          <Button variant="outline" size="sm" onClick={handleLogout} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </div>
      </header>

      {/* Profile Sidebar */}
      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Stethoscope,
  Calendar,
  Download,
  Share,
  CheckCircle,
  User,
  Heart,
  MapPin,
  Pill,
  Syringe,
  AlertTriangle,
  FileText,
  Bell,
  Building2,
  Phone,
  Gift,
  Video,
  LogOut,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface Worker {
  name: string
  phone: string
  age: number
  gender: string
  bloodGroup: string
  location: string
  healthId: string
}

export default function WorkerDashboard() {
  const router = useRouter()
  const [worker, setWorker] = useState<Worker | null>(null)

  useEffect(() => {
    const workerData = localStorage.getItem('worker')
    if (workerData) {
      setWorker(JSON.parse(workerData))
    }
  }, [])

  const handleLogout = () => {
    router.push("/")
  }

  if (!worker) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <SidebarInset>
      <div className="worker-dashboard p-4 space-y-6 sm:space-y-8">
        {/* Profile Header */}
        <Card className="profile-header bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0 shadow-xl">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Profile Info and Badge Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Profile Info */}
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <User className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                  <h1 className="profile-name text-xl sm:text-2xl font-bold mb-2 truncate">{worker.name}</h1>
                  <div className="profile-details flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm opacity-90">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        Age: {worker.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                        {worker.gender}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                        {worker.bloodGroup}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{worker.phone}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">{worker.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="flex justify-center sm:justify-start w-full sm:w-auto sm:flex-1">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Verified by Government of India
                  </Badge>
                </div>
              </div>

              {/* Health ID Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 w-full sm:min-w-[200px] sm:max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Health ID</span>
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/40 rounded-sm"></div>
                  </div>
                </div>
                <div className="text-sm opacity-80 mb-1 truncate">{worker.name}</div>
                <div className="text-base sm:text-lg font-mono mb-3 break-all sm:break-normal">{worker.healthId}</div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    <Share className="h-3 w-3 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>



        {/* Health Overview Cards */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Health Overview</h2>
          <div className="health-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Card className="bg-gradient-to-br from-pink-400 to-pink-600 text-white border-0 shadow-lg">
              <CardContent className="card-content p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8" />
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 opacity-70" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Last Check-up</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-1">15 Dec 2024</p>
                <p className="text-xs opacity-80">Dr. Priya Sharma</p>
                <p className="text-xs opacity-80">General Health Check</p>
              </CardContent>
            </Card>


            <Card className="bg-gradient-to-br from-green-400 to-emerald-600 text-white border-0 shadow-lg">
              <CardContent className="card-content p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Syringe className="h-6 w-6 sm:h-8 sm:w-8" />
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 opacity-70" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Vaccination</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-1">✓ COVID-19 Booster</p>
                <p className="text-xs opacity-80">Completed: 20 Nov 2024</p>
                <p className="text-xs opacity-80">Blood Group: {worker.bloodGroup}</p>
                <p className="text-xs opacity-80">Next due: Flu Shot</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white border-0 shadow-lg">
              <CardContent className="card-content p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8" />
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6 opacity-70" />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Health Alerts</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-1">1 Hypertension</p>
                <p className="text-xs opacity-80">Monitor BP daily</p>
                <p className="text-xs opacity-80">Next check: 25 Dec</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Government Announcements */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2 text-lg sm:text-xl">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              Government Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="announcements-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="announcement-card p-3 sm:p-4 bg-white rounded-lg border">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  <h3 className="announcement-title font-semibold text-sm sm:text-base">Free Health Camp</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Complete health check-up at Bandra Community Center</p>
                <p className="text-xs text-gray-500 mb-2 sm:mb-3">25 Dec 2024 • 9:00 AM - 5:00 PM</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full text-xs sm:text-sm">
                  Register Now
                </Button>
              </div>

              <div className="announcement-card p-3 sm:p-4 bg-white rounded-lg border">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                  <h3 className="announcement-title font-semibold text-sm sm:text-base">Telemedicine Service</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">24/7 doctor consultation now available</p>
                <p className="text-xs text-gray-500 mb-2 sm:mb-3">Call 104 for immediate assistance</p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full text-xs sm:text-sm">
                  Learn More
                </Button>
              </div>

              <div className="announcement-card p-3 sm:p-4 bg-white rounded-lg border sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                  </div>
                  <h3 className="announcement-title font-semibold text-sm sm:text-base">Reward Program</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Earn points for health compliance</p>
                <p className="text-xs text-gray-500 mb-2 sm:mb-3">Redeem for medicines & services</p>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full text-xs sm:text-sm">
                  View Rewards
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Quick Actions</h2>
          <div className="quick-actions-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <Card className="action-card hover:shadow-lg transition-shadow cursor-pointer bg-blue-50 border-blue-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h3 className="action-title font-medium text-xs sm:text-sm">Book Appointment</h3>
              </CardContent>
            </Card>

            <Card className="action-card hover:shadow-lg transition-shadow cursor-pointer bg-green-50 border-green-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h3 className="action-title font-medium text-xs sm:text-sm">Download Reports</h3>
              </CardContent>
            </Card>

            <Card className="action-card hover:shadow-lg transition-shadow cursor-pointer bg-purple-50 border-purple-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Video className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h3 className="action-title font-medium text-xs sm:text-sm">Video Consult</h3>
              </CardContent>
            </Card>


            <Card className="action-card hover:shadow-lg transition-shadow cursor-pointer bg-red-50 border-red-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
                <h3 className="action-title font-medium text-xs sm:text-sm">Health Monitor</h3>
              </CardContent>
            </Card>

            <Card className="action-card hover:shadow-lg transition-shadow cursor-pointer bg-indigo-50 border-indigo-200 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Share className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                </div>
                <h3 className="action-title font-medium text-xs sm:text-sm">Share Health ID</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}

"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, User, Syringe, Pill, Calendar, FileText, TestTube, Activity } from "lucide-react"
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

export default function HealthID() {
  const [worker, setWorker] = useState<Worker | null>(null)

  useEffect(() => {
    const workerData = localStorage.getItem('worker')
    if (workerData) {
      setWorker(JSON.parse(workerData))
    }
  }, [])

  if (!worker) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Worker Data Found</h2>
          <p className="text-gray-600">Please login first to view your Health ID card.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen">
      {/* Digital Health ID Card Section */}
      <div className="bg-gray-50 p-8 text-center w-full">
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Digital Health Identity Card</h1>
          <p className="text-gray-600">
            Official government-issued digital health ID card with secure verification and comprehensive health
            information
          </p>
        </div>

        {/* Health ID Card */}
        <div className="flex justify-center w-full">
          <div className="w-full px-4">
            <Card className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white border-0 shadow-2xl overflow-hidden relative">
              <CardContent className="p-8 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-left">
                    <h2 className="font-bold text-lg uppercase tracking-wide">GOVERNMENT OF INDIA</h2>
                    <p className="text-xl font-semibold">Digital Health ID Card</p>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 px-3 py-1">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>

                {/* Profile Section */}
                <div className="flex items-start justify-between gap-8">
                  {/* Left side - Profile info */}
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-1">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                          <User className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    <div className="text-left">
                      <h1 className="text-2xl font-bold mb-4">{worker.name}</h1>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{worker.age} Years</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{worker.gender}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{worker.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🩸</span>
                          <span>Blood Group: {worker.bloodGroup}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center - Health ID Number */}
                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2 uppercase tracking-wide">HEALTH ID NUMBER</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-2xl font-bold tracking-wider">{worker.healthId}</p>
                    </div>
                  </div>

                  {/* Right side - QR Code */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-2">
                      <div className="w-16 h-16 bg-gray-800 rounded grid grid-cols-6 gap-px p-1">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div
                            key={i}
                            className={`${Math.random() > 0.5 ? "bg-white" : "bg-gray-800"} rounded-sm`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs opacity-90">Scan for Records</p>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Valid Until: Dec 2029</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">Blockchain Secured</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Health Records Overview Section */}
      <div className="health-records-section p-8 text-white w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Health Records Overview</h2>
          <p className="text-slate-300">Comprehensive health data at your fingertips</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-700/50 border-slate-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Vital Signs</h3>
              <p className="text-2xl font-bold text-blue-400 mb-1">Normal</p>
              <p className="text-sm text-slate-400">Last updated 2 hours ago</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/50 border-slate-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Syringe className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Vaccinations</h3>
              <p className="text-2xl font-bold text-green-400 mb-1">Up to Date</p>
              <p className="text-sm text-slate-400">COVID-19, Flu, Hepatitis</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/50 border-slate-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Medications</h3>
              <p className="text-2xl font-bold text-purple-400 mb-1">3 Active</p>
              <p className="text-sm text-slate-400">2 daily, 1 as needed</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-700/50 border-slate-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Appointments</h3>
              <p className="text-2xl font-bold text-orange-400 mb-1">2 Upcoming</p>
              <p className="text-sm text-slate-400">Next: Jan 15, 2024</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Health Activity */}
        <Card className="bg-slate-700/30 border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Health Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-600/30 rounded-lg">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Consultation with Dr. Rajesh Kumar</h4>
                <p className="text-sm text-slate-400">Cardiology Department - General Checkup</p>
                <p className="text-xs text-slate-500">January 8, 2024 at 10:30 AM</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-600/30 rounded-lg">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <TestTube className="h-5 w-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Lab Test Results</h4>
                <p className="text-sm text-slate-400">Complete Blood Count, Lipid Profile</p>
                <p className="text-xs text-slate-500">January 5, 2024 at 9:00 AM</p>
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Review Required</Badge>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-600/30 rounded-lg">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Pill className="h-5 w-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Prescription Refill</h4>
                <p className="text-sm text-slate-400">Lisinopril 10mg - 30 day supply</p>
                <p className="text-xs text-slate-500">January 3, 2024 at 2:15 PM</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Filled</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

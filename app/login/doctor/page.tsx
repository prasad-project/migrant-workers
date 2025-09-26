"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stethoscope, Mail, Lock } from "lucide-react"

export default function DoctorLogin() {
   const [doctorId, setDoctorId] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()

   const handleLogin = async (e: React.FormEvent) => {
     e.preventDefault()
     setIsLoading(true)
     setError("")

     // Check credentials
     const validDoctorIds = ["SILU1789", "Prasad9090", "DIBYA293", "Binod0978", "BRIJESH3457"]
     if (validDoctorIds.includes(doctorId) && password === "12345") {
       // Simulate API call delay
       await new Promise(resolve => setTimeout(resolve, 1000))
       router.push("/dashboard/doctor")
     } else {
       setError("Invalid Doctor ID or password")
       setIsLoading(false)
     }
   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-teal-600 p-3 rounded-lg w-fit mx-auto mb-4">
            <Stethoscope className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Doctor Login
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Migrant Worker Digital Health Portal
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="doctorId" className="text-sm font-medium">
                Doctor ID
              </Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="doctorId"
                  type="text"
                  placeholder="Enter your Doctor ID"
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Demo Credentials:</h3>
            <p className="text-xs text-blue-700">Doctor ID: SILU1789</p>
            <p className="text-xs text-blue-700">Password: 12345</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

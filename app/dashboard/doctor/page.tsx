"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import DoctorProfileSidebar from "@/components/doctor-profile-sidebar"
import workers from "@/data/workers.json"
import {
  Search,
  QrCode,
  User,
  Calendar,
  Stethoscope,
  Plus,
  Trash2,
  Upload,
  X,
  Save,
  Cloud,
  Share,
  MessageSquare,
  Phone,
  FileText,
  Video,
  Volume2,
  Clock,
  TrendingUp,
  Activity,
  Users,
  AlertCircle,
  CheckCircle,
  Bell,
  Settings,
} from "lucide-react"

type PatientData = {
  name: string
  age: string
  gender: string
  origin: string
  location: string
  lastVisit: string
  abhaId: string
  workplace: string
  avatar: string
  healthHistory: {
    vaccinations: string
    allergies: string
    chronicConditions: string
    lastCheckup: string
    medications: string
  }
}

export default function DoctorDashboard() {
  const [currentSection, setCurrentSection] = useState("patient-search")
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [searchInput, setSearchInput] = useState("")
  const [patientData, setPatientData] = useState<PatientData | null>(null)
  const [searchMessage, setSearchMessage] = useState("")
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      medicine: "Azithromycin 500mg",
      dosage: "1 Tablet",
      frequency: "Once Daily",
      duration: "5 Days",
      instructions: "After Food",
    },
    {
      id: 2,
      medicine: "Paracetamol 650mg",
      dosage: "1 Tablet",
      frequency: "Twice Daily",
      duration: "3 Days",
      instructions: "For Fever",
    },
    {
      id: 3,
      medicine: "Cough Syrup 10ml",
      dosage: "2 tsp",
      frequency: "Three Times",
      duration: "7 Days",
      instructions: "Before Sleep",
    },
  ])
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "chest_xray_report.pdf", type: "pdf" },
    { name: "blood_test_results.jpg", type: "image" },
  ])
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false)

  const handleSearch = () => {
    const worker = workers.find(w => w.healthId === searchInput.trim())
    if (worker) {
      setPatientData({
        name: worker.name,
        age: `${worker.age} Years`,
        gender: worker.gender,
        origin: worker.location,
        location: worker.location,
        lastVisit: worker.healthHistory.lastCheckup,
        abhaId: worker.healthId,
        workplace: "Not specified",
        avatar: "/indian-male-construction-worker.jpg",
        healthHistory: {
          vaccinations: worker.healthHistory.vaccinations.join(", "),
          allergies: worker.healthHistory.allergies,
          chronicConditions: worker.healthHistory.chronicConditions,
          lastCheckup: worker.healthHistory.lastCheckup,
          medications: worker.healthHistory.medications.length > 0 ? worker.healthHistory.medications.join(", ") : "None"
        }
      })
      setSearchMessage("")
    } else {
      setPatientData(null)
      setSearchMessage("No record found for this Health ID")
    }
  }

  const addPrescription = () => {
    const newId = prescriptions.length + 1
    setPrescriptions([
      ...prescriptions,
      {
        id: newId,
        medicine: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
      },
    ])
  }

  const removePrescription = (id: number) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id))
  }

  const removeFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.name !== fileName))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">Migrant Worker Digital Health</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Doctor Dashboard - Government of India</p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-xs px-2 py-1 hidden sm:flex">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified Doctor
              </Badge>
              <Button variant="outline" size="sm" className="p-2">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Settings className="h-4 w-4" />
              </Button>
              <button
                onClick={() => setIsProfileSidebarOpen(true)}
                className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-600 text-white text-sm">DR</AvatarFallback>
                </Avatar>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Dr. Ramesh Kumar</p>
                  <p className="text-xs text-gray-600">General Physician</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <DoctorProfileSidebar isOpen={isProfileSidebarOpen} onClose={() => setIsProfileSidebarOpen(false)} />

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Patient Search & QR Scan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              Patient Search & QR Scan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                placeholder="Enter Patient ID, Aadhaar, or ABHA ID..."
                className="flex-1"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div className="flex gap-2 sm:gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-6 flex-1 sm:flex-none">
                  <QrCode className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Scan QR Code</span>
                  <span className="sm:hidden">Scan</span>
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 flex-1 sm:flex-none"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Search Patient</span>
                  <span className="sm:hidden">Search</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <span>Quick Search:</span>
              <button className="text-blue-600 hover:underline">Patient ID</button>
              <button className="text-blue-600 hover:underline">Aadhaar Number</button>
              <button className="text-blue-600 hover:underline">ABHA Health ID</button>
            </div>
          </CardContent>
        </Card>

        {/* Patient Profile Card */}
        {patientData ? (
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={patientData.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{patientData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{patientData.name}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Government Verified
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Age</span>
                      <div className="font-medium">{patientData.age}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Gender</span>
                      <div className="font-medium">{patientData.gender}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Origin State</span>
                      <div className="font-medium">{patientData.origin}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Current Location</span>
                      <div className="font-medium">{patientData.location}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                    <div>
                      <span className="text-gray-500">Last Visit</span>
                      <div className="font-medium text-green-600">{patientData.lastVisit}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">ABHA ID</span>
                      <div className="font-medium text-blue-600">{patientData.abhaId}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Workplace</span>
                      <div className="font-medium text-purple-600">{patientData.workplace}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : searchMessage ? (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600">{searchMessage}</p>
            </CardContent>
          </Card>
        ) : null}

        {/* Health History Card */}
        {patientData && (
          <div className="bg-white shadow-md rounded-2xl p-5 border">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              🩺 Health History
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Vaccinations:</span> {patientData.healthHistory.vaccinations}</p>
              <p><span className="font-medium">Allergies:</span> {patientData.healthHistory.allergies}</p>
              <p><span className="font-medium">Chronic Conditions:</span> {patientData.healthHistory.chronicConditions}</p>
              <p><span className="font-medium">Last Checkup:</span> {patientData.healthHistory.lastCheckup}</p>
              <p><span className="font-medium">Medications:</span> {patientData.healthHistory.medications}</p>
            </div>
          </div>
        )}

        {/* Symptoms & Diagnosis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-red-600" />
              Symptoms & Diagnosis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="symptoms" className="text-sm font-medium mb-2 block">
                  Current Symptoms
                </Label>
                <Textarea
                  id="symptoms"
                  placeholder="Persistent cough for 3 weeks, mild fever, chest pain, fatigue"
                  className="min-h-[100px]"
                  defaultValue="Persistent cough for 3 weeks, mild fever, chest pain, fatigue"
                />
              </div>
              <div>
                <Label htmlFor="diagnosis" className="text-sm font-medium mb-2 block">
                  Diagnosis
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Primary Diagnosis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="respiratory-infection">Respiratory Infection</SelectItem>
                    <SelectItem value="tuberculosis">Tuberculosis</SelectItem>
                    <SelectItem value="pneumonia">Pneumonia</SelectItem>
                    <SelectItem value="bronchitis">Bronchitis</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Additional diagnosis notes..." className="mt-3 min-h-[60px]" />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Disease Status</Label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="status" value="resolved" className="sr-only" />
                  <div className="w-4 h-4 border-2 border-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium">Resolved</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="status" value="ongoing" className="sr-only" defaultChecked />
                  <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <Activity className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Ongoing Treatment</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="status" value="infectious" className="sr-only" />
                  <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <span className="text-red-700 font-medium">Infectious Disease</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prescription Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Prescription Management
              </CardTitle>
              <Button onClick={addPrescription} className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Medicine
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Medicine</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Dosage</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Frequency</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Duration</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Instructions</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((prescription) => (
                    <tr key={prescription.id} className="border-b">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="font-medium">{prescription.medicine}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">{prescription.dosage}</td>
                      <td className="py-3 px-2">{prescription.frequency}</td>
                      <td className="py-3 px-2">{prescription.duration}</td>
                      <td className="py-3 px-2">{prescription.instructions}</td>
                      <td className="py-3 px-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removePrescription(prescription.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Vitals & Test Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-600" />
              Vitals & Test Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Vital Signs</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-gray-600">Blood Pressure</Label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="120" className="w-16" />
                      <span className="self-center text-gray-500">/</span>
                      <Input placeholder="80" className="w-16" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Temperature (°F)</Label>
                    <Input placeholder="98.6" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Blood Sugar</Label>
                    <Input placeholder="110" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Weight (kg)</Label>
                    <Input placeholder="65" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Heart Rate (bpm)</Label>
                    <Input placeholder="72" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Oxygen Saturation</Label>
                    <Input placeholder="98" className="mt-1" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Test Results & Reports</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Lab Reports, X-rays, or Test Results</p>
                  <Button variant="outline" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                    Choose Files
                  </Button>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-red-600" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(file.name)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4">
                  <Label className="text-sm text-gray-600">Patient Progress</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select Progress Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="improving">Improving</SelectItem>
                      <SelectItem value="stable">Stable</SelectItem>
                      <SelectItem value="deteriorating">Deteriorating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Follow-up & Clinical Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Follow-up & Clinical Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Next Appointment</h4>
                <div>
                  <Label className="text-sm text-gray-600">Follow-up Date</Label>
                  <Input type="date" className="mt-1" />
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Clinical Notes</h4>
                <Textarea
                  placeholder="Patient shows signs of respiratory infection. Prescribed antibiotics and advised complete rest. Must revisit in 2 weeks or earlier if symptoms worsen. Advised to avoid crowded places and maintain isolation until..."
                  className="min-h-[120px]"
                  defaultValue="Patient shows signs of respiratory infection. Prescribed antibiotics and advised complete rest. Must revisit in 2 weeks or earlier if symptoms worsen. Advised to avoid crowded places and maintain isolation until"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Education & Patient Communication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              Health Education & Patient Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Educational Materials</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <FileText className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-medium text-sm">TB Prevention Guide</div>
                      <div className="text-xs text-gray-600">Available in Hindi, English</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Video className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">Medication Instructions</div>
                      <div className="text-xs text-gray-600">Video in local language</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Volume2 className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm">Audio Instructions</div>
                      <div className="text-xs text-gray-600">Voice message in Hindi</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Communication Preferences</h4>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm text-gray-600">Preferred Language</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Hindi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="bengali">Bengali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-2 block">Contact Method</Label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">SMS Messages</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">Voice Calls</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                    <Share className="h-4 w-4 mr-2" />
                    Send Care Instructions
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Schedule Follow-up SMS
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Notify Family/Contacts
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save & Generate Patient Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              Save & Generate Patient Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Auto-Generated Summary</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">Patient summary will be generated after saving</p>
                  <p className="text-sm text-gray-500">Available in patient's preferred language</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Distribution Options</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-sm">SMS Summary</div>
                        <div className="text-xs text-gray-600">Send prescription and instructions via SMS</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">WhatsApp Message</div>
                        <div className="text-xs text-gray-600">Send detailed summary with images via WhatsApp</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save & Sync Patient Record */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              <Save className="h-5 w-5 mr-2" />
              Save & Sync Patient Record
              <Cloud className="h-5 w-5 ml-2" />
            </Button>
            <p className="text-sm mt-3 opacity-90">
              Record will be automatically synced with the National Digital Health Mission (NDHM)
            </p>
          </CardContent>
        </Card>

        {/* Recent Patient History & Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Patient History & Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Visit History</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">December 15, 2024</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Diagnosis: Upper Respiratory Infection</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />3 Medications
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-3 w-3" />
                        Fever: 101°F
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Dr. Sharma
                      </span>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">November 28, 2024</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Follow-up
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Diagnosis: Routine Health Check</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Activity className="h-3 w-3" />
                        BP: 120/80
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-3 w-3" />
                        65 kg
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Dr. Patel
                      </span>
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">October 10, 2024</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        Emergency
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Diagnosis: Work-related Injury</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Wound Care
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-3 w-3" />
                        Tetanus Shot
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Dr. Kumar
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Health Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Total Visits</span>
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-xs text-gray-500">Last 12 months</div>
                  </Card>

                  <Card className="p-4 bg-green-50 border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Medications Prescribed</span>
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">28</div>
                    <div className="text-xs text-gray-500">Total prescriptions</div>
                  </Card>

                  <Card className="p-4 bg-orange-50 border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Missed Appointments</span>
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-orange-600">2</div>
                    <div className="text-xs text-gray-500">Last 6 months</div>
                  </Card>

                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Health Score</span>
                      <Activity className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-xs text-gray-500">Overall health rating</div>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

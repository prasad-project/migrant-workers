"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Users,
  Activity,
  Download,
  Settings,
  Bell,
  LogOut,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  User,
  Menu,
  Search,
  Filter,
  Grid,
  List,
  FileText,
  Syringe,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function HighRiskCampsPage() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <>
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {/* Status Overview */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium">High Risk: 7 camps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium">Monitor: 12 camps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Safe: 31 camps</span>
            </div>
          </div>

          {/* Critical Health Alerts */}
          <Card className="mb-6">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">Critical Health Alerts</CardTitle>
                </div>
                <span className="text-sm text-red-600 font-medium">5 Active</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Kochi Industrial Camp A</h3>
                      <Badge className="bg-red-100 text-red-800 text-xs">URGENT</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-red-500" />
                        <span>TB Outbreak: 23 cases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span>Population: 450</span>
                      </div>
                      <div className="text-xs text-red-600">Infection Rate: 5.1%</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Thrissur Construction Hub</h3>
                      <Badge className="bg-red-100 text-red-800 text-xs">URGENT</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-orange-500" />
                        <span>Dengue: 18 cases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span>Population: 320</span>
                      </div>
                      <div className="text-xs text-red-600">Infection Rate: 5.6%</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">Kollam Port Workers</h3>
                      <Badge className="bg-red-100 text-red-800 text-xs">URGENT</Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-red-500" />
                        <span>Malaria: 15 cases</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span>Population: 280</span>
                      </div>
                      <div className="text-xs text-red-600">Infection Rate: 5.4%</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Filters and Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search camps by name..." className="pl-10 w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Districts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Districts</SelectItem>
                  <SelectItem value="kochi">Kochi</SelectItem>
                  <SelectItem value="thrissur">Thrissur</SelectItem>
                  <SelectItem value="kollam">Kollam</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Risk Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="monitor">Monitor</SelectItem>
                  <SelectItem value="safe">Safe</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                More Filters
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Camps</p>
                    <p className="text-3xl font-bold text-gray-900">50</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600">2 new this month</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Population</p>
                    <p className="text-3xl font-bold text-gray-900">18,450</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600">3.2% increase</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Cases</p>
                    <p className="text-3xl font-bold text-gray-900">234</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-red-600" />
                      <span className="text-xs text-red-600">12% this week</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Vaccination Rate</p>
                    <p className="text-3xl font-bold text-gray-900">78%</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600">5% improvement</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Syringe className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Kerala Camp Distribution Map */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Kerala Camp Distribution Map</CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>High Risk</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Monitor</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Safe</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-1" />
                      Fullscreen
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Interactive visualization of camp locations and risk levels</p>
              </CardHeader>
              <CardContent>
                <div className="relative h-80 bg-yellow-100 rounded-lg overflow-hidden">
                  {/* Simplified Kerala map representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Map pins */}
                      <div className="absolute top-16 left-20 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-24 right-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-20 left-16 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-16 right-20 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-32 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>

                      {/* Camp details popup */}
                      <div className="absolute top-20 left-1/3 bg-white p-3 rounded-lg shadow-lg border text-xs w-48">
                        <h4 className="font-semibold mb-2">Kochi Industrial Camp A</h4>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Population:</span>
                            <span className="font-medium">450</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Active Cases:</span>
                            <span className="font-medium text-red-600">23</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Vaccination:</span>
                            <span className="font-medium">65%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Risk Level:</span>
                            <Badge className="bg-red-100 text-red-800 text-xs">High</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Analytics Dashboard */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Health Analytics Dashboard</CardTitle>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Last 30 Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Last 7 Days</SelectItem>
                      <SelectItem value="30">Last 30 Days</SelectItem>
                      <SelectItem value="90">Last 90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-sm text-gray-600">Comprehensive health metrics and trends across all camps</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {/* Disease Distribution */}
                  <div>
                    <h4 className="font-medium mb-3">Disease Distribution</h4>
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="w-full h-full rounded-full border-8 border-red-500 border-t-orange-500 border-r-green-500 border-b-gray-200"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-600">TB 45.0%</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>TB 45.0%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Dengue 30.0%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Malaria 20.0%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>Others 5.0%</span>
                      </div>
                    </div>
                  </div>

                  {/* Risk Level Distribution */}
                  <div>
                    <h4 className="font-medium mb-3">Risk Level Distribution</h4>
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="w-full h-full rounded-full border-8 border-gray-200">
                        <div
                          className="absolute inset-2 rounded-full border-4 border-blue-500"
                          style={{ clipPath: "polygon(0 0, 14% 0, 14% 100%, 0 100%)" }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold">14%</div>
                          <div className="text-xs text-gray-600">High Risk</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Case Trends */}
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Monthly Case Trends</h4>
                  <div className="h-24 flex items-end justify-between gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-16 bg-red-200 rounded-t"></div>
                      <span className="text-xs mt-1">Aug</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-20 bg-red-300 rounded-t"></div>
                      <span className="text-xs mt-1">Sep</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-12 bg-green-300 rounded-t"></div>
                      <span className="text-xs mt-1">Oct</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-14 bg-green-400 rounded-t"></div>
                      <span className="text-xs mt-1">Nov</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-18 bg-red-400 rounded-t"></div>
                      <span className="text-xs mt-1">Dec</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>New Cases</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Recovered</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Camp Health Status */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Camp Health Status</CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <span>Showing 50 of 50 camps</span>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by Risk Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="risk">Risk Level</SelectItem>
                      <SelectItem value="population">Population</SelectItem>
                      <SelectItem value="cases">Active Cases</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Kochi Industrial Camp A</h3>
                      <Badge className="bg-red-100 text-red-800">High Risk</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Population</span>
                        </div>
                        <span className="font-semibold">450</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-red-500" />
                          <span className="text-sm">TB Cases</span>
                        </div>
                        <span className="font-semibold text-red-600">23</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Vaccination Rate</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Thrissur Construction Hub</h3>
                      <Badge className="bg-yellow-100 text-yellow-800">Monitor</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Population</span>
                        </div>
                        <span className="font-semibold">320</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">Dengue Cases</span>
                        </div>
                        <span className="font-semibold text-orange-600">8</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Vaccination Rate</span>
                          <span>72%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Kollam Port Workers</h3>
                      <Badge className="bg-green-100 text-green-800">Safe</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Population</span>
                        </div>
                        <span className="font-semibold">280</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Active Cases</span>
                        </div>
                        <span className="font-semibold text-green-600">0</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Vaccination Rate</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
    </>
  )
}

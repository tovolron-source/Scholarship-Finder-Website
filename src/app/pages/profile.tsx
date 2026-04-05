import { useState } from 'react';
import { Camera, Save } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Navbar } from '../components/layout/navbar';
import { Footer } from '../components/layout/footer';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { mockUser } from '../lib/mock-data';
import { toast } from 'sonner';

export function ProfilePage() {
  const [userData, setUserData] = useState(mockUser);

  const handleSave = (section: string) => {
    toast.success(`${section} updated successfully!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC]">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-8 pb-24 md:pb-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative group">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={userData.profilePhoto} alt={userData.fullName} />
                    <AvatarFallback className="bg-[#1A2E5A] text-white text-2xl">
                      {userData.fullName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="h-6 w-6 text-white" />
                  </button>
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-semibold text-[#1A2E5A] mb-1">{userData.fullName}</h1>
                  <p className="text-[#64748B] mb-4">{userData.email}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748B]">Profile Completion</span>
                      <span className="text-sm font-semibold text-[#1A2E5A]">{userData.profileCompletion}%</span>
                    </div>
                    <Progress value={userData.profileCompletion} className="h-2" />
                    <p className="text-xs text-[#64748B]">
                      Complete your profile for better scholarship matches!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Sections */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="academic">Academic Info</TabsTrigger>
            <TabsTrigger value="financial">Financial Status</TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={userData.fullName}
                      onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number</Label>
                    <Input
                      id="phone"
                      value={userData.contactNumber}
                      onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave('Personal information')}
                    className="bg-[#1A2E5A] hover:bg-[#2A3E6A] text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Academic Info Tab */}
          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="school">School/University</Label>
                    <Input
                      id="school"
                      value={userData.school}
                      onChange={(e) => setUserData({ ...userData, school: e.target.value })}
                      placeholder="State University"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course/Program</Label>
                    <Input
                      id="course"
                      value={userData.course}
                      onChange={(e) => setUserData({ ...userData, course: e.target.value })}
                      placeholder="BS Computer Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearLevel">Year Level</Label>
                    <Select
                      value={userData.yearLevel}
                      onValueChange={(value) => setUserData({ ...userData, yearLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st Year">1st Year</SelectItem>
                        <SelectItem value="2nd Year">2nd Year</SelectItem>
                        <SelectItem value="3rd Year">3rd Year</SelectItem>
                        <SelectItem value="4th Year">4th Year</SelectItem>
                        <SelectItem value="Graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      type="number"
                      step="0.01"
                      min="0"
                      max="4.0"
                      value={userData.gpa}
                      onChange={(e) => setUserData({ ...userData, gpa: parseFloat(e.target.value) })}
                      placeholder="3.5"
                    />
                  </div>
                </div>

                {/* GPA Visual Indicator */}
                {userData.gpa && (
                  <div className="space-y-2 bg-[#F8F9FC] p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748B]">GPA Score</span>
                      <span className="text-sm font-semibold text-[#1A2E5A]">{userData.gpa} / 4.0</span>
                    </div>
                    <Progress value={(userData.gpa / 4.0) * 100} className="h-2" />
                    <p className="text-xs text-[#64748B]">
                      {userData.gpa >= 3.5 ? 'Excellent! You qualify for most merit scholarships.' : 
                       userData.gpa >= 3.0 ? 'Good standing. Many scholarships available.' : 
                       'Consider improving your GPA for more opportunities.'}
                    </p>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave('Academic information')}
                    className="bg-[#1A2E5A] hover:bg-[#2A3E6A] text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Status Tab */}
          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle>Financial Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="financialStatus">Financial Status</Label>
                  <Select
                    value={userData.financialStatus}
                    onValueChange={(value: any) => setUserData({ ...userData, financialStatus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select financial status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low Income">Low Income</SelectItem>
                      <SelectItem value="Middle Income">Middle Income</SelectItem>
                      <SelectItem value="High Income">High Income</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-[#64748B]">
                    This information helps us match you with need-based scholarships. 
                    Your financial data is kept confidential.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[#1A2E5A] mb-2">Why we ask this?</h4>
                  <p className="text-sm text-[#64748B]">
                    Many scholarship programs prioritize students based on financial need. 
                    Providing this information increases your chances of being matched with 
                    relevant need-based scholarships.
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={() => handleSave('Financial information')}
                    className="bg-[#1A2E5A] hover:bg-[#2A3E6A] text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}

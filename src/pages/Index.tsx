import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Heart, 
  Stethoscope, 
  Activity, 
  Bell, 
  User, 
  Clock, 
  Shield,
  TrendingUp,
  FileText,
  Users,
  Star
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [userRole, setUserRole] = useState<'patient' | 'doctor' | null>(null);

  const handleRoleSelection = (role: 'patient' | 'doctor') => {
    setUserRole(role);
  };

  if (!userRole) {
    return <LandingPage onRoleSelect={handleRoleSelection} />;
  }

  return userRole === 'patient' ? <PatientDashboard /> : <DoctorDashboard />;
};

const LandingPage = ({ onRoleSelect }: { onRoleSelect: (role: 'patient' | 'doctor') => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-medical">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">MediTrack</h1>
              <p className="text-sm text-muted-foreground">Smart Healthcare Management</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🚑 Next-Gen Healthcare Platform
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Your Health Journey,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Simplified</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Book appointments, track health metrics, manage prescriptions, and connect with healthcare providers 
            all in one intelligent platform designed for modern healthcare.
          </p>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card 
              className="group cursor-pointer hover:shadow-medical transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30"
              onClick={() => onRoleSelect('patient')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">I'm a Patient</CardTitle>
                <CardDescription className="text-base">
                  Book appointments, track health, manage prescriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Book & manage appointments
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    Track health metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-primary" />
                    Medication reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Digital health records
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="medical">
                  Enter Patient Portal
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="group cursor-pointer hover:shadow-medical transition-all duration-300 hover:scale-105 border-2 hover:border-accent/30"
              onClick={() => onRoleSelect('doctor')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-wellness rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Stethoscope className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">I'm a Doctor</CardTitle>
                <CardDescription className="text-base">
                  Manage patients, appointments, and health analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    Manage patient profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    Schedule management
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Health analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Digital prescriptions
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="wellness">
                  Enter Doctor Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Comprehensive Healthcare Features</h3>
          <p className="text-lg text-muted-foreground">Everything you need for modern healthcare management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Smart Scheduling",
              description: "AI-powered appointment booking with automatic reminders and conflict detection"
            },
            {
              icon: Shield,
              title: "Secure & Private",
              description: "HIPAA-compliant platform ensuring your health data is always protected"
            },
            {
              icon: TrendingUp,
              title: "Health Analytics",
              description: "Comprehensive insights and trends to help track your health journey"
            }
          ].map((feature, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-border/50">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 MediTrack. All rights reserved. Built for better healthcare.</p>
        </div>
      </footer>
    </div>
  );
};

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MediTrack</h1>
                <p className="text-sm text-muted-foreground">Patient Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Healthy
              </Badge>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah!</h2>
          <p className="text-muted-foreground">Here's your health overview for today</p>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Button variant="medical" size="lg" className="h-20 flex-col gap-2">
            <Calendar className="w-6 h-6" />
            Book Appointment
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex-col gap-2">
            <Activity className="w-6 h-6" />
            Log Health Data
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex-col gap-2">
            <FileText className="w-6 h-6" />
            View Reports
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex-col gap-2">
            <Bell className="w-6 h-6" />
            Medications
          </Button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { doctor: "Dr. Johnson", specialty: "Cardiology", date: "Today, 2:30 PM", type: "Check-up" },
                  { doctor: "Dr. Smith", specialty: "Dermatology", date: "Tomorrow, 10:00 AM", type: "Follow-up" },
                  { doctor: "Dr. Brown", specialty: "General", date: "Mar 15, 3:00 PM", type: "Consultation" }
                ].map((apt, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{apt.doctor}</h4>
                      <p className="text-sm text-muted-foreground">{apt.specialty} • {apt.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{apt.date}</p>
                      <Badge variant="secondary" className="text-xs">Confirmed</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Summary */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Health Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Blood Pressure</span>
                    <Badge variant="secondary" className="text-success">Normal</Badge>
                  </div>
                  <p className="text-lg font-semibold">120/80 mmHg</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Heart Rate</span>
                    <Badge variant="secondary" className="text-success">Good</Badge>
                  </div>
                  <p className="text-lg font-semibold">72 BPM</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Weight</span>
                    <Badge variant="secondary" className="text-primary">Stable</Badge>
                  </div>
                  <p className="text-lg font-semibold">68.5 kg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-wellness rounded-lg">
                <Stethoscope className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MediTrack</h1>
                <p className="text-sm text-muted-foreground">Doctor Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-2">
                <Star className="w-3 h-3 text-warning" />
                Dr. Martinez
              </Badge>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Good morning, Dr. Martinez!</h2>
          <p className="text-muted-foreground">You have 8 appointments scheduled for today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Today's Patients", value: "8", icon: Users, color: "text-primary" },
            { title: "Pending Approvals", value: "3", icon: Clock, color: "text-warning" },
            { title: "This Week", value: "45", icon: Calendar, color: "text-accent" },
            { title: "Total Patients", value: "1,234", icon: TrendingUp, color: "text-success" }
          ].map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { patient: "Sarah Johnson", time: "9:00 AM", type: "Check-up", status: "confirmed" },
                  { patient: "Michael Chen", time: "10:30 AM", type: "Follow-up", status: "confirmed" },
                  { patient: "Emma Davis", time: "2:30 PM", type: "Consultation", status: "pending" },
                  { patient: "Robert Wilson", time: "4:00 PM", type: "Treatment", status: "confirmed" }
                ].map((apt, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{apt.patient}</h4>
                        <p className="text-sm text-muted-foreground">{apt.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{apt.time}</p>
                      <Badge variant={apt.status === 'confirmed' ? 'secondary' : 'outline'} className="text-xs">
                        {apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="wellness" className="w-full justify-start gap-3">
                <Users className="w-4 h-4" />
                View All Patients
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <Calendar className="w-4 h-4" />
                Manage Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <FileText className="w-4 h-4" />
                Add Prescription
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <TrendingUp className="w-4 h-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;

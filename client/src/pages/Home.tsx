import { useEffect } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { BarChart3, Users, Zap, Clock, ArrowRight, LogOut } from "lucide-react";
import Header from "../components/Header";

export default function Home() {
  const { user } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />

      {/* Welcome Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="flex items-center justify-center space-x-4 mb-8">
                {user?.profileImageUrl && (
                  <img 
                    src={user.profileImageUrl} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-500"
                  />
                )}
                <div className="text-left">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    Welcome back, {user?.firstName || 'Agent'}!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    {user?.email}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Manage your leads, track performance, and grow your business with Prime Enroll's 
                comprehensive agent portal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href="/dashboard">
                  <Button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Quick Actions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/dashboard">
                <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-lg">Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      View your performance metrics and lead analytics
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dashboard">
                <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-lg">Manage Leads</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Track and update your lead status and notes
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Order Leads</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Purchase new lead packages for your campaigns
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    View your latest lead interactions and updates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Your Performance at a Glance
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Track your success with real-time metrics and insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">-</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Total Leads
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">-</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Enrolled
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">-%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Conversion Rate
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">-</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Active Orders
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/dashboard">
                <Button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                  View Detailed Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">PE</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Prime Enroll
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering ACA agents with real results
            </p>
            <p className="text-sm text-gray-500">
              &copy; 2024 Prime Enroll. All rights reserved. | D4MC GROUP LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

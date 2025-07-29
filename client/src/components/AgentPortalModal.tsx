import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield, Users, Zap } from "lucide-react";

interface AgentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentPortalModal({ isOpen, onClose }: AgentPortalModalProps) {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
            Agent Portal Access
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Access your dashboard to manage leads, track orders, and monitor performance
            </p>

            <div className="grid gap-4 mb-6">
              <Card className="border-primary-200 dark:border-primary-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Lead Management</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Track and manage your leads</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Real-time Updates</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Live lead delivery notifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white">CMS Compliance</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">100% compliant lead tracking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Access Agent Portal
            </Button>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Secure login powered by Replit Auth
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

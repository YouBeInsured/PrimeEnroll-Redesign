import { Zap } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-95"></div>
        <div className="relative flex items-center justify-center">
          <span className="text-white font-bold text-2xl mr-0.5">P</span>
          <Zap className="w-4 h-4 text-purple-200 ml-0.5 fill-current" strokeWidth={2} />
        </div>
      </div>
      <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Prime Enroll
      </span>
    </div>
  );
}

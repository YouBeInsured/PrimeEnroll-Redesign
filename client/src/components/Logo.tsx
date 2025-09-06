import { TrendingUp } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-blue-600 flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-600 to-blue-500 opacity-90"></div>
        <div className="relative flex items-center justify-center">
          <span className="text-white font-bold text-2xl mr-1">P</span>
          <TrendingUp className="w-4 h-4 text-blue-200 ml-1" strokeWidth={3} />
        </div>
      </div>
      <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
        Prime Enroll
      </span>
    </div>
  );
}

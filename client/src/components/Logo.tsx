import { TrendingUp } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-blue-600 flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-600 to-blue-500 opacity-90"></div>
        <div className="relative flex items-center justify-center">
          <span className="text-white font-bold text-lg mr-0.5">P</span>
          <TrendingUp className="w-3 h-3 text-blue-200 ml-0.5" strokeWidth={3} />
        </div>
      </div>
      <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
        Prime Enroll
      </span>
    </div>
  );
}

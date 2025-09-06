export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="w-9 h-9 mr-3">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <rect x="6" y="6" width="24" height="24" rx="4" fill="#1D4ED8" />
            <text x="18" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="system-ui">P</text>
          </svg>
        </div>
        <span className="text-2xl lg:text-3xl font-bold text-blue-600 tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

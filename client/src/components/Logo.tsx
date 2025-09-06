export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="w-10 h-10 mr-3">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            {/* Outer hexagon */}
            <polygon points="20,2 32,10 32,22 20,30 8,22 8,10" fill="#1D4ED8" />
            {/* Inner gradient diamond */}
            <polygon points="20,8 26,14 20,20 14,14" fill="#60A5FA" />
            {/* Central element */}
            <circle cx="20" cy="14" r="3" fill="#FFFFFF" />
            {/* Bottom accent */}
            <polygon points="16,18 20,24 24,18" fill="#059669" />
          </svg>
        </div>
        <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

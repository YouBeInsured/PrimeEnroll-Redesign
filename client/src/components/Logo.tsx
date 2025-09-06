export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="relative w-14 h-14 mr-3 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-95"></div>
          <div className="relative">
            <svg viewBox="0 0 24 24" className="w-9 h-9">
              <path
                d="M13 2L3 14h6l-2 8 10-12h-6l2-8z"
                fill="url(#lightning-gradient)"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

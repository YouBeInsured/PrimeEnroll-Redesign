export default function PrimeEnrollLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="mr-3">
          <svg viewBox="0 0 24 24" className="w-11 h-11">
            <path
              d="M13 2L3 14h6l-2 8 10-12h-6l2-8z"
              fill="url(#lightning-gradient)"
              stroke="#1D4ED8"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="30%" stopColor="#E2E8F0" />
                <stop offset="70%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

export default function Logo({ className = "", variant = "network" }: { className?: string; variant?: "network" | "growth" | "connect" | "pyramid" }) {
  const renderIcon = () => {
    switch (variant) {
      case "growth":
        return (
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <rect x="4" y="20" width="6" height="8" fill="#1D4ED8" rx="1" />
            <rect x="13" y="14" width="6" height="14" fill="#3B82F6" rx="1" />
            <rect x="22" y="8" width="6" height="20" fill="#60A5FA" rx="1" />
            <path d="M6 18 L16 12 L25 6" stroke="#059669" strokeWidth="2" fill="none" />
            <circle cx="25" cy="6" r="2" fill="#059669" />
          </svg>
        );
      case "connect":
        return (
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <circle cx="8" cy="8" r="4" fill="#1D4ED8" />
            <circle cx="24" cy="8" r="4" fill="#1D4ED8" />
            <circle cx="8" cy="24" r="4" fill="#1D4ED8" />
            <circle cx="24" cy="24" r="4" fill="#1D4ED8" />
            <circle cx="16" cy="16" r="3" fill="#059669" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="#3B82F6" strokeWidth="2" />
            <line x1="24" y1="8" x2="16" y2="16" stroke="#3B82F6" strokeWidth="2" />
            <line x1="8" y1="24" x2="16" y2="16" stroke="#3B82F6" strokeWidth="2" />
            <line x1="24" y1="24" x2="16" y2="16" stroke="#3B82F6" strokeWidth="2" />
          </svg>
        );
      case "pyramid":
        return (
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <polygon points="16,4 28,28 4,28" fill="#1D4ED8" opacity="0.8" />
            <polygon points="16,4 22,16 10,16" fill="#3B82F6" />
            <circle cx="16" cy="12" r="2" fill="#FFFFFF" />
            <text x="16" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">P</text>
          </svg>
        );
      default: // network - enhanced version
        return (
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <circle cx="8" cy="8" r="5" fill="#1D4ED8" />
            <circle cx="24" cy="8" r="5" fill="#1D4ED8" />
            <circle cx="16" cy="24" r="5" fill="#059669" />
            <line x1="8" y1="8" x2="24" y2="8" stroke="#3B82F6" strokeWidth="2" />
            <line x1="8" y1="8" x2="16" y2="24" stroke="#3B82F6" strokeWidth="2" />
            <line x1="24" y1="8" x2="16" y2="24" stroke="#3B82F6" strokeWidth="2" />
            <text x="8" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">A</text>
            <text x="24" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">B</text>
            <text x="16" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">P</text>
          </svg>
        );
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2">
          {renderIcon()}
        </div>
        <span className="text-2xl lg:text-3xl font-bold text-blue-600 tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

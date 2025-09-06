export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center">
        <div className="w-8 h-8 mr-2">
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <circle cx="8" cy="8" r="6" fill="#3B82F6" opacity="0.8" />
            <circle cx="24" cy="8" r="6" fill="#3B82F6" opacity="0.6" />
            <circle cx="16" cy="24" r="6" fill="#3B82F6" opacity="0.9" />
            <path d="M8 8 L24 8 L16 24 Z" fill="#1D4ED8" opacity="0.3" />
          </svg>
        </div>
        <span className="text-2xl lg:text-3xl font-bold text-blue-600 tracking-tight">
          PRIME ENROLL
        </span>
      </div>
    </div>
  );
}

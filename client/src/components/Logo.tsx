export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">PE</span>
      </div>
      <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
        Prime Enroll
      </span>
    </div>
  );
}

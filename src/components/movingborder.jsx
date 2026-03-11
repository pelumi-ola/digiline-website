"use client";

export const MovingBorderCard = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {children}

      {/* Moving Border SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradientBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="15" // match your card rounding
          ry="15"
          fill="none"
          stroke="url(#gradientBorder)"
          strokeWidth="2"
          strokeDasharray="314" // approximate perimeter of rounded rect (100*4)
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="314"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showTagline = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: showTagline ? 80 : 60 },
    md: { width: 180, height: showTagline ? 120 : 90 },
    lg: { width: 240, height: showTagline ? 160 : 120 },
  }

  const { width, height } = sizes[size]

  return (
    <svg
      viewBox="0 0 240 160"
      width={width}
      height={height}
      className={className}
      aria-label="60 on Kosmos - Quality Stays for Teams and Professionals"
    >
      {/* House Roof */}
      <path
        d="M60 45 L120 10 L180 45"
        fill="none"
        stroke="#1a5f5f"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chimney */}
      <rect x="165" y="20" width="12" height="25" fill="#3d4852" />
      
      {/* Number 6 */}
      <text
        x="75"
        y="95"
        fontFamily="Georgia, serif"
        fontSize="70"
        fontWeight="bold"
        fill="#1a5f5f"
      >
        6
      </text>
      
      {/* Number 0 */}
      <text
        x="120"
        y="95"
        fontFamily="Georgia, serif"
        fontSize="70"
        fontWeight="bold"
        fill="#3d4852"
      >
        0
      </text>
      
      {/* ON KOSMOS text */}
      <text
        x="120"
        y="115"
        fontFamily="system-ui, sans-serif"
        fontSize="18"
        fontWeight="500"
        fill="#3d4852"
        textAnchor="middle"
        letterSpacing="4"
      >
        ON KOSMOS
      </text>
      
      {/* Tagline with lines */}
      {showTagline && (
        <g>
          {/* Left line */}
          <line x1="20" y1="138" x2="55" y2="138" stroke="#1a5f5f" strokeWidth="1" />
          
          {/* Tagline text */}
          <text
            x="120"
            y="142"
            fontFamily="system-ui, sans-serif"
            fontSize="9"
            fill="#3d4852"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            QUALITY STAYS FOR TEAMS AND PROFESSIONALS
          </text>
          
          {/* Right line */}
          <line x1="185" y1="138" x2="220" y2="138" stroke="#1a5f5f" strokeWidth="1" />
        </g>
      )}
    </svg>
  )
}

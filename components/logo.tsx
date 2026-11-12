import Image from "next/image"

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: "sm" | "md" | "lg"
}

// Official 60 on Kosmos logo (transparent PNGs in /public/images).
// With tagline: 900x628. Without tagline: 700x447.
export function Logo({ className = "", showTagline = true, size = "md" }: LogoProps) {
  const widths = { sm: 150, md: 210, lg: 280 }
  const width = widths[size]
  const src = showTagline ? "/images/logo-60-on-kosmos.png" : "/images/logo-60-on-kosmos-name.png"
  const height = showTagline ? Math.round((width * 628) / 900) : Math.round((width * 447) / 700)

  return (
    <Image
      src={src}
      alt="60 on Kosmos - Quality Stays for Teams and Professionals"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

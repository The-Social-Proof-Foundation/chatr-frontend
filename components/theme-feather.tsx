'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ThemeFeatherProps {
  size?: number
  className?: string
  alt?: string
}

export function ThemeFeather({ size = 32, className = '', alt }: ThemeFeatherProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR/hydration
    return (
      <div 
        className={`${className}`}
        style={{ width: size, height: size }}
      />
    )
  }

  // Determine which feather to show based on theme
  const currentTheme = resolvedTheme || theme
  const isLight = currentTheme === 'light'
  
  const featherSrc = isLight 
    ? `/chatr-feather-dark.png`
    : `/chatr-feather-white.png`

  const featherAlt = alt || 'Chatr Feather'

  return (
    <Image
      src={featherSrc}
      alt={featherAlt}
      width={size}
      height={size}
      className={`object-contain transition-opacity duration-300 ${className}`}
      priority
    />
  )
}
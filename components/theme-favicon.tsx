'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function ThemeFavicon() {
  const { theme } = useTheme()

  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link')
    favicon.type = 'image/svg+xml'
    favicon.rel = 'icon'
    favicon.href = '/favicon-dark.png'
    if (theme === 'dark') {
      favicon.href = '/favicon-white.png'
    } else if (theme === 'light') {
      favicon.href = '/favicon-dark.png'
    } else {
      favicon.href = '/favicon-dark.png'
    }

    document.head.appendChild(favicon)
  }, [theme])

  return null
} 
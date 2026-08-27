'use client'

import { useEffect, useState } from 'react'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

export function ThemeToggle() {
  // Server render and first client render must agree, and neither can know the
  // stored choice. Commit to an icon only after mount.
  let [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem('theme')
    } catch {
      // localStorage throws in private browsing; fall back to the system.
    }
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      return
    }
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])

  function toggle() {
    let next: 'light' | 'dark' = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.documentElement.classList.toggle('light', next === 'light')
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Not persisting is survivable; the toggle still works this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === null
          ? 'Toggle theme'
          : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
      }
      className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {/* Fixed-size box so the header doesn't shift when the icon appears. */}
      {theme === null ? null : theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

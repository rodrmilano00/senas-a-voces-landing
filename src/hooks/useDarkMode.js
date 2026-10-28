import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sav-theme'

/**
 * Toggles the `dark` class on <html>. The initial value is whatever the
 * inline script in index.html applied (saved choice or system preference).
 */
export function useDarkMode() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [dark])

  return [dark, setDark]
}

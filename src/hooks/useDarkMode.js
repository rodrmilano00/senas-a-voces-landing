import { useEffect, useState } from 'react'

/**
 * Toggles the `dark` class on <html>, mirroring the original landing behavior.
 */
export function useDarkMode(initial = false) {
  const [dark, setDark] = useState(initial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return [dark, setDark]
}

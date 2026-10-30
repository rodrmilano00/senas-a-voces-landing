import { LOGO } from '../lib/media'

export default function Logo({ iso = false, className = 'h-10' }) {
  const [light, dark, width, height] = iso ? [LOGO.iso, LOGO.isoDark, 840, 856] : [LOGO.horizontal, LOGO.horizontalDark, 600, 242]
  return (
    <>
      <img
        src={light}
        alt="Señas a Voces Academy"
        width={width}
        height={height}
        className={`w-auto dark:hidden ${className}`}
      />
      <img
        src={dark}
        alt="Señas a Voces Academy"
        width={width}
        height={height}
        className={`hidden w-auto dark:block ${className}`}
      />
    </>
  )
}

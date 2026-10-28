import { LOGO } from '../lib/media'

export default function Logo({ className = 'h-10' }) {
  return (
    <>
      <img
        src={LOGO.horizontal}
        alt="Señas a Voces Academy"
        width="600"
        height="242"
        className={`w-auto dark:hidden ${className}`}
      />
      <img
        src={LOGO.horizontalDark}
        alt="Señas a Voces Academy"
        width="600"
        height="242"
        className={`hidden w-auto dark:block ${className}`}
      />
    </>
  )
}

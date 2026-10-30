import { LOGO } from '../lib/media'

export default function Logo({ className = 'h-10' }) {
  return <img src={LOGO.horizontal} alt="Señas a Voces Academy" width="1100" height="436" className={`w-auto ${className}`} />
}

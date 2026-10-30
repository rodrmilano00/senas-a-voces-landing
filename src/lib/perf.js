import { useSyncExternalStore } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Lite mode: slow or constrained devices get the same page with the costly
 * parts switched off (inertial scroll, scrubbed video, scroll parallax,
 * pointer springs, backdrop blur). Decided up front from device hints and
 * reduced-motion, then confirmed by measuring real frame times right after
 * load, so a phone that looks capable but stutters still falls back.
 */
const listeners = new Set()

function initialLite() {
  if (typeof window === 'undefined') return false
  const nav = window.navigator
  const saveData = nav.connection?.saveData === true
  const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2
  const fewCores = typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 2
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const forced = new URLSearchParams(window.location.search).has('lite')
  return saveData || lowMemory || fewCores || reduced || forced
}

let lite = initialLite()

function apply() {
  document.documentElement.classList.toggle('lite', lite)
  listeners.forEach((fn) => fn())
}

export function isLite() {
  return lite
}

/** Measure ~90 frames after load; a median above ~34ms (under 30fps) switches to lite. */
export function probeFrameRate() {
  if (typeof window === 'undefined') return
  apply()
  if (lite || document.visibilityState !== 'visible') return
  const times = []
  let last = performance.now()
  const step = (now) => {
    times.push(now - last)
    last = now
    if (times.length < 90) {
      requestAnimationFrame(step)
      return
    }
    const sorted = times.slice(10).sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]
    if (median > 34) {
      lite = true
      apply()
    }
  }
  requestAnimationFrame(step)
}

export function useLite() {
  return useSyncExternalStore(
    (fn) => {
      listeners.add(fn)
      return () => listeners.delete(fn)
    },
    () => lite,
    () => false,
  )
}

/** True when motion should stay still: reduced motion requested, or lite mode. */
export function useCalm() {
  const reduced = useReducedMotion()
  return useLite() || Boolean(reduced)
}

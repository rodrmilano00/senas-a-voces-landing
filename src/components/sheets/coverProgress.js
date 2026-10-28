import { createContext, useContext } from 'react'

// Progress (0 to 1) of the NEXT sheet sliding over the current one.
export const CoverProgress = createContext(null)

/** Read how far the following sheet has covered the sheet you are inside. */
export function useCoverProgress() {
  return useContext(CoverProgress)
}
